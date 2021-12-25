import { Section, StickyCanvas, StickyMessage } from '../../../components';
import { StickySectionProps as Props } from '..';
import { getMid, toFixed } from '../../../utils';
import { messagesChildren } from './messages';
import { SECTION_DESCRIPTION } from '../../../constants';

const { VIDEO_CONFIG, MESSAGES_CONFIG } = SECTION_DESCRIPTION;

export const SectionDescription = ({ isCurrentSection, sectionHeight, sectionScrollY, heightRatio }: Props) => {
  const scrollRatio = toFixed(sectionScrollY / sectionHeight);

  return (
    <Section sectionHeight={sectionHeight} className="scroll-section" id="scroll-section-2">
      <StickyCanvas
        isVisible={isCurrentSection}
        opacity={getMid(VIDEO_CONFIG!.FADE_IN.OPACITY, scrollRatio)}
        scale={heightRatio}
        width={1920}
        height={1080}
      ></StickyCanvas>
      <>
        {messagesChildren.map((children, index) => {
          const { THRESHOLD, FADE_IN, FADE_OUT } = MESSAGES_CONFIG![index];
          const FADE = scrollRatio < THRESHOLD ? FADE_IN : FADE_OUT;

          const [START, END] = FADE.SCROLL;
          const messageScrollRatio = toFixed(
            (sectionScrollY - sectionHeight * START) / ((END - START) * sectionHeight)
          );

          const opacity = getMid(FADE.OPACITY, messageScrollRatio);
          const translateY = getMid(FADE.TRANSLATE!, messageScrollRatio);

          return (
            <StickyMessage key={index} isVisible={isCurrentSection} opacity={opacity} translateY={translateY}>
              {children}
            </StickyMessage>
          );
        })}
      </>
    </Section>
  );
};
