// src/utils/shuffle.ts

/**
 * Перемешивает буквы в слове случайным образом.
 * @param word - Слово, буквы которого нужно перемешать.
 * @returns Новое слово с перемешанными буквами.
 */
export function shuffleWord(word: string): string {
  const array = word.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}
