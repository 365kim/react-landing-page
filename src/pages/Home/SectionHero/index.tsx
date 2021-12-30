import { Heading } from './styles';
import { Section, StickyCanvas, StickyMessage } from '../../../components';
import { getMid, toFixed } from '../../../utils';
import { StickySectionProps } from '..';
import { messagesChildren } from './messages';
import { CANVAS_HEIGHT, CANVAS_WIDTH, SECTION_HERO } from '../../../constants';

const { VIDEO_CONFIG, MESSAGES_CONFIG } = SECTION_HERO;
const VIDEO_IMAGE_COUNT = 300;

const nthImagePath = (i: number) => `./src/assets/heroImages/IMG_${6726 + i}.JPG`;
const imageElements = Array(VIDEO_IMAGE_COUNT).map((_, i) => {
  const $image = new Image();

  $image.src = nthImagePath(i);
  return $image;
});

const draw = (context: CanvasRenderingContext2D, imageIndex = 0, dx = 0, dy = 0) => {
  context.drawImage(imageElements[imageIndex], dx, dy);
};

export const SectionHero = ({ isCurrentSection, sectionHeight, sectionScrollY, heightRatio }: StickySectionProps) => {
  const scrollRatio = toFixed(sectionScrollY / sectionHeight);

  return (
    <Section sectionHeight={sectionHeight} className="scroll-section">
      <Heading>AirMug Pro</Heading>

      <StickyCanvas
        isVisible={isCurrentSection}
        opacity={getMid(VIDEO_CONFIG!.FADE_IN.OPACITY, scrollRatio)}
        scale={heightRatio}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        draw={draw}
      ></StickyCanvas>

      <>
        {messagesChildren.map((children, i) => {
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
