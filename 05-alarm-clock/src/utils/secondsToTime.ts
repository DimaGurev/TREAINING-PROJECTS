interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

// export function secondsToTime(seconds: number): Time {
//   const hours: number = Math.floor(seconds / 3600);
//   const minutes: number = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds: number = seconds % 60;

//   return {
//     hours: hours,
//     minutes: minutes,
//     seconds: remainingSeconds,
//   };
// }
export const secondsToTime = (seconds: number): Time => {
  const hours: number = Math.floor(seconds / 3600 / 360);
  const minutes: number = Math.floor((seconds % 3600) / 60);
  const remainingSeconds: number = seconds % 60;

  return {
    hours: hours,
    minutes: minutes,
    seconds: remainingSeconds,
  };
};
