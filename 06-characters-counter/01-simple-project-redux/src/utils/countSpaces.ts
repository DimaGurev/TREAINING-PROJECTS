export default function countSpaces(str: string) {
  const spacesArray = str.match(/ /g);
  return spacesArray ? spacesArray.length : 0;
}
