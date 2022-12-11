import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (lyrics) => {
  lyrics.length
    ? toast.success('Lyrics Copied!')
    : toast.warn('Nothing to Copy!');
};

export const copyLyrics = (lyrics) => {
  const array = lyrics.map((lyric) => lyric.snippet + '\n');
  const string = array.toString();
  const finalString = string.replaceAll(',', '');
  navigator.clipboard.writeText(finalString);
  notify(lyrics);
};

export const fixer = (str) => {
  const punctuation = ['.', ',', '!', '?', ':', ';', '('];
  for (const el of punctuation)
    if (str.includes(el)) {
      return str.substring(0, str.indexOf(el));
    }
  return str;
};
