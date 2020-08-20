import { expect } from 'chai';
import { describe, it } from 'mocha';
import spotify from '../src/Spotify';

describe('Spotify', () => {
  it('Should be an object', () => {
    expect(spotify).to.be.an.instanceOf(Object);
  });

  it('Should have {search} methods', () => {
    expect(spotify.search).to.exist;
  });

  it('Should have {album} methods', () => {
    expect(spotify.album).to.exist;
  });

  it('Should have {artist} methods', () => {
    expect(spotify.artist).to.exist;
  });

  it('Should have {track} methods', () => {
    expect(spotify.track).to.exist;
  });

  it('Should have {playlist} methods', () => {
    expect(spotify.playlist).to.exist;
  });
});
