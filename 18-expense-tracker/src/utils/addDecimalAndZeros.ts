export const addDecimalAndZeros = (number: number | string): string => {
  // Преобразуем входное значение в число
  const numericValue = typeof number === "number" ? number : parseFloat(number);

  // Проверяем, что преобразование прошло успешно
  if (isNaN(numericValue)) {
    throw new Error(
      "Входное значение должно быть числом или строкой, представляющей число"
    );
  }

  // Возвращаем число в формате с двумя десятичными знаками
  return numericValue.toFixed(2);
};
