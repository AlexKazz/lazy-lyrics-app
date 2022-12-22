import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LyricObject {
  artist: string;
  id: string;
  prompt: string;
  snippet: string;
  song: string;
}

export interface LyricsArray extends Array<LyricObject> {}

const notify = (lyrics: LyricsArray) => {
  lyrics.length
    ? toast.success('Lyrics Copied!')
    : toast.warn('Nothing to Copy!');
};

export const copyLyrics = (lyrics: LyricsArray) => {
  const array = lyrics.map((lyric) => lyric.snippet + '\n');
  const string = array.toString();
  const finalString = string.replaceAll(',', '');
  navigator.clipboard.writeText(finalString);
  notify(lyrics);
};

export const fixer = (str: string) => {
  const punctuation = ['.', ',', '!', '?', ':', ';', '('];
  for (const el of punctuation)
    if (str.includes(el)) {
      return str.substring(0, str.indexOf(el));
    }
  return str;
};
