const audioCtx = new (window.AudioContext || window.AudioContext)();

const playBeep = () => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
  oscillator.start();

  gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 1);

  oscillator.stop(audioCtx.currentTime + 1);
};

export default playBeep;
