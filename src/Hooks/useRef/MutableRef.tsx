import { useRef, useEffect, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <h2>Mutable Ref</h2>
      Hook Timer - {timer} - <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
