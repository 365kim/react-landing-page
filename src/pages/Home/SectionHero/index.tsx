import { useEffect } from 'react';

import { Section, StickyCanvas } from '../../../components';
import { Heading, MainMessage } from './styles';
import { animateSection } from './animateSection';
import { StickySectionProps } from '..';

export const SectionHero = ({ sectionScrollY, sectionHeight, heightRatio, isCurrentSection }: StickySectionProps) => {
  const customTransform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;

  useEffect(() => {
    if (isCurrentSection) {
      animateSection({ sectionScrollY, sectionHeight });
    }
  });

  return (
    <Section
      id="scroll-section-0"
      sectionHeight={sectionHeight}
      customTransform={customTransform}
      className="scroll-section"
    >
      <Heading>AirMug Pro</Heading>

      <StickyCanvas isVisible={isCurrentSection} className="sticky-elem sticky-elem-canvas">
        <canvas id="video-canvas-0" width="1920" height="1080"></canvas>
      </StickyCanvas>

      <MainMessage isVisible={isCurrentSection} className="a">
        <p>
          온전히 빠져들게 하는
          <br />
          최고급 세라믹
        </p>
      </MainMessage>

      <MainMessage isVisible={isCurrentSection} className="b">
        <p>
          주변 맛을 느끼게 해주는
          <br />
          주변 맛 허용 모드
        </p>
      </MainMessage>

      <MainMessage isVisible={isCurrentSection} className="c">
        <p>
          온종일 편안한
          <br />
          맞춤형 손잡이
        </p>
      </MainMessage>

      <MainMessage isVisible={isCurrentSection} className="d">
        <p>
          새롭게 입가를
          <br />
          찾아온 매혹
        </p>
      </MainMessage>
    </Section>
  );
};
