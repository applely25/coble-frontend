'use client';

import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  typingPauseTime?: number;
  deletingPauseTime?: number;
}

const useTypingAnimation = ({
  text,
  speed = 300,
  deleteSpeed = 100,
  typingPauseTime = 1500,
  deletingPauseTime = 100,
}: TypingAnimationProps) => {
  const [word, setWord] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);
  const [blinking, setBlinking] = useState<boolean>(true);
  const [pause, setPause] = useState<boolean>(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (pause) return;

    const typingInterval = setInterval(
      () => {
        setWord((prevWord) => {
          if (!deleting) {
            const nextChar = text[count];
            if (nextChar) {
              setCount(count + 1);
              return prevWord + nextChar;
            } else {
              setPause(true);
              setTimeout(() => {
                setDeleting(true);
                setPause(false);
              }, typingPauseTime);
              return prevWord;
            }
          } else {
            if (prevWord.length > 0) {
              setCount(prevWord.length - 1);
              return prevWord.slice(0, -1);
            } else {
              setPause(true);
              setTimeout(() => {
                setDeleting(false);
                setCount(0);
                setPause(false);
              }, deletingPauseTime);
              return '';
            }
          }
        });
      },
      deleting ? deleteSpeed : speed,
    );

    return () => clearInterval(typingInterval);
  }, [
    count,
    deleting,
    pause,
    speed,
    deleteSpeed,
    text,
    typingPauseTime,
    deletingPauseTime,
  ]);
  if (word === text) return word;
  return word + '\u00A0' + (blinking ? '|' : '');
};

export default useTypingAnimation;
