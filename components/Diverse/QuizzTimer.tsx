"use client";

import React, { useEffect, useRef, useState } from "react";

interface TimerProps {
  timerOn: boolean;
}

const QuizzTimer = ({ timerOn }: TimerProps) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerOn) {
      timerRef.current = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timerOn]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="z-50 w-20 h-9 bg-white text-lg rounded-md flex items-center justify-center">
      {formatTime(timeElapsed)}
    </div>
  );
};

export default QuizzTimer;
