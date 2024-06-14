export function convertSecondsToDHMS(seconds: number): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const days: number = Math.floor(seconds / (3600 * 24));
  const hours: number = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes: number = Math.floor((seconds % 3600) / 60);
  const remainingSeconds: number = Math.floor(seconds % 60);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: remainingSeconds,
  };
}