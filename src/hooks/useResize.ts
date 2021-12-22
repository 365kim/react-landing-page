import { useEffect, useState } from 'react';
import { SECTION, SectionInfo } from '../constants';
import { throttle } from '../utils';

const DEFAULT_SECTION_HEIGHT = 1000;
const THROTTLE_TIME_MS = 300;
const throttleForResize = throttle(THROTTLE_TIME_MS);

const getSectionHeight = (SECTION_INFO: SectionInfo, deviceHeight: number) => {
  if (SECTION_INFO.TYPE === 'sticky') {
    return deviceHeight * SECTION_INFO.SCREEN_HEIGHT_COUNT;
  }
  if (SECTION_INFO.TYPE === 'normal') {
    const $content = document.querySelector<HTMLElement>(SECTION_INFO.CONTENT_SELECTOR)!;

    if ($content === null) {
      return DEFAULT_SECTION_HEIGHT;
    }
    return deviceHeight * 0.5 + $content.offsetHeight;
  }
  throw new Error('SECTION_INFO의 TYPE이 유효하지 않은 값입니다.');
};

const sections = Object.values(SECTION).sort((v) => v.INDEX);

export const useResize = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [deviceHeight, setDeviceHeight] = useState(window.innerHeight);
  const sectionHeights = sections.map((v) => getSectionHeight(v, deviceHeight));

  const heightRatio = deviceHeight / 1080;
  const accSectionHeights: number[] = [];
  sectionHeights.reduce((acc, cur) => accSectionHeights.push((acc += cur)), 0);

  useEffect(() => {
    const updateSize = () => {
      setDeviceWidth(window.innerWidth);
      setDeviceHeight(window.innerHeight);
    };
    const updateSizeThrottled = () => throttleForResize(updateSize);

    window.addEventListener('resize', updateSizeThrottled);
    return () => window.removeEventListener('resize', updateSizeThrottled);
  }, []);

  return {
    deviceWidth,
    deviceHeight,
    heightRatio,

    sectionHeights,
    accSectionHeights,
  };
};
