import { HTMLAttributes } from 'react';

import { SectionHero } from './SectionHero';
import { SectionPlain } from './SectionPlain';
import { SectionDescription } from './SectionDescription';
import { SectionLast } from './SectionLast';
import { useResize, useScroll } from '../../hooks';

enum INDEX {
  HERO = 0,
  PLAIN,
  DESCRIPTION,
  LAST,
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  isCurrentSection: boolean;
  sectionHeight: number;
  heightRatio: number;
}

export interface StickyProps {
  sectionScrollY: number;
  sectionHeight: number;
}

export type StickySectionProps = SectionProps & StickyProps;

export const Home = () => {
  const { sectionHeights, accSectionHeights, heightRatio } = useResize();
  const { scrollY, sectionScrollY, sectionIndex } = useScroll(accSectionHeights);

  return (
    <>
      <SectionHero
        isCurrentSection={sectionIndex === INDEX.HERO}
        sectionHeight={sectionHeights[INDEX.HERO]}
        heightRatio={heightRatio}
        sectionScrollY={sectionScrollY}
      />
      <SectionPlain
        isCurrentSection={sectionIndex === INDEX.PLAIN}
        sectionHeight={sectionHeights[INDEX.PLAIN]}
        heightRatio={heightRatio}
      />
      <SectionDescription
        isCurrentSection={sectionIndex === INDEX.DESCRIPTION}
        sectionHeight={sectionHeights[INDEX.DESCRIPTION]}
        heightRatio={heightRatio}
        sectionScrollY={sectionScrollY}
      />
      <SectionLast
        isCurrentSection={sectionIndex === INDEX.LAST}
        sectionHeight={sectionHeights[INDEX.LAST]}
        heightRatio={heightRatio}
        sectionScrollY={sectionScrollY}
      />
    </>
  );
};
