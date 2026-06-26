import { Conf } from "../globals/globals";
import { File } from "../classes/Post";
import Volume from "./Volume";
import $ from "../platform/$";

const Sound = {
  /** Add event listeners for videos with audio from a third party */
  setupSync(video: HTMLVideoElement, audio: HTMLAudioElement) {
    const syncTime = () => {
      video.currentTime = audio.currentTime % video.duration;
    };

    $.on(audio, 'playing play', () => {
      syncTime();
      video.play();
    });

    $.on(audio, 'seeked waiting', syncTime);

    $.on(audio, 'pause', () => {
      video.pause();
    });

    $.on(audio, 'ratechange', () => {
      video.currentTime = audio.currentTime;
      video.playbackRate = audio.playbackRate;
    });

    $.on(audio, 'waiting', () => {
      video.pause();
    });

    $.one(audio, 'canplay', () => {
      if (audio.currentTime < .1) video.currentTime = 0;
    });
  },

  setupSoundpost(el: HTMLElement, file: File) {
    const soundUrlMatch = file.name.match(/\[sound=([^\]]+)]/i);
    if (!soundUrlMatch) return;

    let src = decodeURIComponent(soundUrlMatch[1]);
    if (!src.startsWith('http')) {
      src = `https://${src}`;
    }

    const audioEl = new Audio(src);
    Volume.setup(audioEl);
    if (el instanceof HTMLVideoElement) {
      Sound.setupSync(el, audioEl);
      el.controls = false;
    }
    audioEl.loop = true;
    audioEl.controls = Conf['Show Controls'];
    audioEl.autoplay = Conf.Autoplay;

    el.after(audioEl);
    file.audio = audioEl;
  }
};

export default Sound;
