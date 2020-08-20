import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

const makeRequest = (albumId) => {
  spotify.album.getAlbum(albumId)
    .then((data) => renderAlbumInfo(data, albumInfo))
    .then((data) => renderAlbumTracks(data.tracks.items, albumTracks));
};

const selectAlbumTrigger = () => {
  listAlbums.addEventListener('click', (e) => {
    const { target } = e;

    makeRequest(target.getAttribute('data-album-id'));
  });
};

export default selectAlbumTrigger;
