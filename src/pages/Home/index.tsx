import { HTMLAttributes } from 'react';

import { SectionHero } from './SectionHero';
import { SectionPlain } from './SectionPlain';
import { SectionDescription } from './SectionDescription';
import { SectionLast } from './SectionLast';
import { useResize, useScroll } from '../../hooks';
import { SECTION_HERO, SECTION_PLAIN, SECTION_DESCRIPTION, SECTION_LAST } from '../../constants';

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
        id="scroll-section-0"
        isCurrentSection={sectionIndex === SECTION_HERO.INDEX}
        sectionHeight={sectionHeights[SECTION_HERO.INDEX]}
        heightRatio={heightRatio}
        sectionScrollY={sectionScrollY}
      />
      <SectionPlain
        id="scroll-section-1"
        isCurrentSection={sectionIndex === SECTION_PLAIN.INDEX}
        sectionHeight={sectionHeights[SECTION_HERO.INDEX]}
        heightRatio={heightRatio}
      />
      <SectionDescription
        id="scroll-section-2"
        isCurrentSection={sectionIndex === SECTION_DESCRIPTION.INDEX}
        sectionHeight={sectionHeights[SECTION_DESCRIPTION.INDEX]}
        heightRatio={heightRatio}
        sectionScrollY={sectionScrollY}
      />
      <SectionLast
        id="scroll-section-3"
        isCurrentSection={sectionIndex === SECTION_LAST.INDEX}
        sectionHeight={sectionHeights[SECTION_LAST.INDEX]}
        heightRatio={heightRatio}
        sectionScrollY={sectionScrollY}
      />
    </>
  );
};
