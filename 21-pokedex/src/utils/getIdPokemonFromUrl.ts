export const getIdPokemonFromUrl = (url: string) => {
  const match = url.match(/\/pokemon\/(\d+)\//);

  if (match && match[1]) {
    const number = parseInt(match[1], 10);
    return number.toString();
  } else {
    return "0"; // Возвращаем '000', если цифры не найдены
  }
};
