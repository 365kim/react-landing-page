import { useEffect, useState } from 'react';

import { throttle } from '../utils';

const THROTTLE_TIME_MS = 50;

export const useScroll = (accSectionHeights: number[]) => {
  const [currentSection, setCurrentSection] = useState<number>(-1);
  console.log({ currentSection });

  useEffect(() => {
    const updateCurrentSection = () => {
      const scrollY = window.scrollY | window.pageYOffset;

      for (let index = 0; index < accSectionHeights.length; index++) {
        if (scrollY < accSectionHeights[index]) {
          setCurrentSection(index);
          return;
        }
      }
      const lastIndex = accSectionHeights.length - 1;

      setCurrentSection(lastIndex);
    };

    const updateCurrentSectionThrottled = throttle(updateCurrentSection, THROTTLE_TIME_MS);

    window.addEventListener('scroll', updateCurrentSectionThrottled);
    return () => window.removeEventListener('scroll', updateCurrentSectionThrottled);
  }, []);

  return {
    currentSection,
    setCurrentSection,
  };
};
