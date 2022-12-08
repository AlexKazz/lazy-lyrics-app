export const copyLyrics = (lyrics) => {
  const array = lyrics.map((lyric) => lyric.snippet + '\n');
  const string = array.toString();
  const finalString = string.replaceAll(',', '');
  navigator.clipboard.writeText(finalString);
};

export const fixer = (str) => {
  const punctuation = ['.', ',', '!', '?', ':', ';', '('];
  for (const el of punctuation)
    if (str.includes(el)) {
      return str.substring(0, str.indexOf(el));
    }
  return str;
};
