export const truncate = (fullStr, strLen, fontLen?, backLen?) => {
  if (fullStr.length <= strLen) return fullStr;

  const separator = '...';

  const sepLen = separator.length;
  const charsToShow = strLen - sepLen;
  const frontChars = fontLen || Math.ceil(charsToShow / 2);
  const backChars = backLen || Math.floor(charsToShow / 2);

  return (
    fullStr.substr(0, frontChars) +
    separator +
    fullStr.substr(fullStr.length - backChars)
  );
};
