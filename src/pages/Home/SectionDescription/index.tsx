import { Section, StickyCanvas, StickyMessage } from '../../../components';
import { StickySectionProps as Props } from '..';
import { getMid, toFixed } from '../../../utils';
import { messagesChildren } from './messages';
import { CANVAS_HEIGHT, CANVAS_WIDTH, SECTION_DESCRIPTION } from '../../../constants';

const { VIDEO_CONFIG, MESSAGES_CONFIG } = SECTION_DESCRIPTION;
const VIDEO_IMAGE_COUNT = 960;

const nthImagePath = (i: number) => `./video/001/IMG_${7027 + i}.JPG`;
const imageElements = Array(VIDEO_IMAGE_COUNT).map((_, i) => {
  const $image = new Image();

  $image.src = nthImagePath(i);
  return $image;
});

const draw = (context: CanvasRenderingContext2D, imageIndex = 0, dx = 0, dy = 0) => {
  context.drawImage(imageElements[imageIndex], dx, dy);
};

export const SectionDescription = ({ isCurrentSection, sectionHeight, sectionScrollY, heightRatio }: Props) => {
  const scrollRatio = toFixed(sectionScrollY / sectionHeight);

  return (
    <Section sectionHeight={sectionHeight} className="scroll-section" id="scroll-section-2">
      <StickyCanvas
        isVisible={isCurrentSection}
        opacity={getMid(VIDEO_CONFIG!.FADE_IN.OPACITY, scrollRatio)}
        scale={heightRatio}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        draw={draw}
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
