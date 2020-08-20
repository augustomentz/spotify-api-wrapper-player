const albumTracks = document.getElementById('album-tracks');
let audio = null;

const playlistTrigger = () => {
  albumTracks.addEventListener('click', (e) => {
    const target = e.target.parentNode;

    if (audio) {
      audio.pause();
    }

    audio = new Audio(target.getAttribute('data-track-preview'));
    audio.play();
  });
};

export default playlistTrigger;
