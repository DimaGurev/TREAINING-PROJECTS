export interface InputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  changeStatus: () => void;
}
export interface TimerProps {
  isCountdownFinished: boolean;
  name: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  changeStatus: () => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}
