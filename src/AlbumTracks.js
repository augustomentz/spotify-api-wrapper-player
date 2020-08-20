const createMarkup = (data) => {
  return data.map((track) => `
    <div class="music active">
      <p class="music-number">${track.track_number}</p>
      <p class="music-title">${track.name}</p>
      <p class="music-duration">${track.duration_ms}</p>
    </div>`).join('');
};

const renderAlbumTracks = (data, element) => {
  const markup = createMarkup(data);

  element.innerHTML = markup;
};

export default renderAlbumTracks;
