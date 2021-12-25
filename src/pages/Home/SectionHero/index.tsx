import { Heading } from './styles';
import { Section, StickyCanvas, StickyMessage } from '../../../components';
import { getMid, toFixed } from '../../../utils';
import { SECTION_HERO } from '../../../constants';
import { StickySectionProps } from '..';

const { VIDEO, MESSAGES } = SECTION_HERO;

export const SectionHero = ({ sectionScrollY, sectionHeight, heightRatio, isCurrentSection }: StickySectionProps) => {
  const scrollRatio = toFixed(sectionScrollY / sectionHeight);

  return (
    <Section sectionHeight={sectionHeight} className="scroll-section">
      <Heading>AirMug Pro</Heading>

      <StickyCanvas
        className="sticky-elem sticky-elem-canvas"
        isVisible={isCurrentSection}
        opacity={getMid(VIDEO!.OPACITY, scrollRatio)}
        scale={heightRatio}
        width={1920}
        height={1080}
      ></StickyCanvas>

      <>
        {MESSAGES!.map((MESSAGE, i) => {
          const { THRESHOLD, FADE_IN, FADE_OUT, TEXTS } = MESSAGE;
          const [firstText, secondText] = TEXTS;
          const FADE = scrollRatio < THRESHOLD ? FADE_IN : FADE_OUT;

          const [START, END] = FADE.SCROLL;
          const messageScrollRatio = toFixed(
            (sectionScrollY - sectionHeight * START) / ((END - START) * sectionHeight)
          );

          const opacity = getMid(FADE.OPACITY, messageScrollRatio);
          const translateY = getMid(FADE.TRANSLATE, messageScrollRatio);

          return (
            <StickyMessage key={i} isVisible={isCurrentSection} opacity={opacity} translateY={translateY}>
              <p>
                {firstText}
                <br />
                {secondText}
              </p>
            </StickyMessage>
          );
        })}
      </>
    </Section>
  );
};
