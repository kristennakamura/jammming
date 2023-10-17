import { useState } from "react";

interface UseSpotifyApi {
    data: [],
    isQuerying: boolean,
    getAccessToken: () => string | void,
    search: (term: string) => Promise<void>,
    savePlaylist: (name: string, trackUris: string[]) => Promise<Response> | undefined,
}

interface Track {
    id: string,
    name: string,
    artists: {
        name: string
    }[],
    album: {
        name: string,
    },
    uri: string
}

export default function useSpotifyApi(): UseSpotifyApi {
    const clientId = ''; // Insert client ID here.
    const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.

    const [accessToken, setAccessToken] = useState<string>('');
    const [data, setData] = useState<[]>([]);
    const [isQuerying, setIsQuerying] = useState<boolean>(false);

    const getAccessToken = () => {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            setAccessToken(accessTokenMatch[1]);
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => setAccessToken(''), expiresIn * 1000);
            window.history.pushState('Access Token', 'null', '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            const win: Window = window;
            win.location = accessUrl;
        }
    }

    const search = async (term: string)=> {
        setIsQuerying(true);
        getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                setData([])
                setIsQuerying(false);
                return;
            }
            setData(
                jsonResponse.tracks.items.map((track: Track) => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }))
            );
            setIsQuerying(false);
        });
    }

    const savePlaylist = (name: string, trackUris: string[]) => {
        if (!name || !trackUris.length) {
            // TODO: add error messaging
            return;
        }

        const accessToken = getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userId: string;

        return fetch('https://api.spotify.com/v1/me', {headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: name})
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playlistId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: trackUris})
                });
            });
        });
    };


    return {data, isQuerying, getAccessToken, search, savePlaylist};
}