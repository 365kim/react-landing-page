import { useEffect, useState } from 'react';

import { throttle } from '../utils';

const THROTTLE_TIME_MS = 30;

export const useScroll = (accSectionHeights: number[]) => {
  const [scrollY, setScrollY] = useState(window.scrollY | window.pageYOffset);
  const sectionIndex = getSectionIndex(scrollY, accSectionHeights);
  const sectionScrollY = scrollY - (accSectionHeights[sectionIndex - 1] || 0);

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY | window.pageYOffset);
    const updateScrollYThrottled = throttle(updateScrollY, THROTTLE_TIME_MS);

    window.addEventListener('scroll', updateScrollYThrottled);
    return () => window.removeEventListener('scroll', updateScrollYThrottled);
  }, []);

  return {
    scrollY,
    sectionScrollY,
    sectionIndex,
  };
};

function getSectionIndex(scrollY: number, accSectionHeights: number[]) {
  for (let index = 0; index < accSectionHeights.length; index++) {
    if (scrollY < accSectionHeights[index]) {
      return index;
    }
  }
  return accSectionHeights.length - 1;
}
