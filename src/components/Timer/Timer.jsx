import { useEffect, useState } from "react";
import "./Timer.scss";

const Timer = ({ duration, onFinish, storageKey }) => {
  const [time, setTime] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? Number(saved) : duration;
  });

  useEffect(() => {
    if (time <= 0) {
      onFinish();
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => {
        localStorage.setItem(storageKey, prev - 1);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const min = String(Math.floor(time / 60)).padStart(2, "0");
  const sec = String(time % 60).padStart(2, "0");

  return <div className="timer">{min}:{sec}</div>;
};

export default Timer;
