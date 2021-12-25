import { Heading } from './styles';
import { Section, StickyCanvas, StickyMessage } from '../../../components';
import { getMid, toFixed } from '../../../utils';
import { StickySectionProps } from '..';
import { messagesChildren } from './messages';
import { SECTION_HERO } from '../../../constants';

const { VIDEO_CONFIG, MESSAGES_CONFIG } = SECTION_HERO;

export const SectionHero = ({ isCurrentSection, sectionHeight, sectionScrollY, heightRatio }: StickySectionProps) => {
  const scrollRatio = toFixed(sectionScrollY / sectionHeight);

  return (
    <Section sectionHeight={sectionHeight} className="scroll-section">
      <Heading>AirMug Pro</Heading>

      <StickyCanvas
        isVisible={isCurrentSection}
        opacity={getMid(VIDEO_CONFIG!.FADE_IN.OPACITY, scrollRatio)}
        scale={heightRatio}
        width={1920}
        height={1080}
      ></StickyCanvas>

      <>
        {messagesChildren!.map((children, i) => {
          const { THRESHOLD, FADE_IN, FADE_OUT } = MESSAGES_CONFIG[i];
          const FADE = scrollRatio < THRESHOLD ? FADE_IN : FADE_OUT;

          const [START, END] = FADE.SCROLL;
          const messageScrollRatio = toFixed(
            (sectionScrollY - sectionHeight * START) / ((END - START) * sectionHeight)
          );

          const opacity = getMid(FADE.OPACITY, messageScrollRatio);
          const translateY = getMid(FADE.TRANSLATE!, messageScrollRatio);

          return (
            <StickyMessage key={i} isVisible={isCurrentSection} opacity={opacity} translateY={translateY}>
              {children}
            </StickyMessage>
          );
        })}
      </>
    </Section>
  );
};
