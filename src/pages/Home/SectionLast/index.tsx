import { StickySectionProps } from '..';
import { Section, StickyCanvas } from '../../../components';
import { CanvasParagraph } from './styles';

const imagesPaths = ['./images/blend-image-1.jpg', './images/blend-image-2.jpg'];
const imageElements: HTMLImageElement[] = [];

const draw = (context: CanvasRenderingContext2D) => {
  for (let i = 0; i < imagesPaths.length; i++) {
    const $image = new Image();

    $image.src = imagesPaths[i];
    imageElements.push($image);
  }

  context.drawImage(imageElements[0], 0, 0);
};

export const SectionLast = ({ sectionHeight }: StickySectionProps) => {
  return (
    <Section sectionHeight={sectionHeight} className="scroll-section" id="scroll-section-3">
      <p className="mid-message">
        <strong>Retina 머그</strong>
        <br />
        아이디어를 광활하게 펼칠
        <br />
        아름답고 부드러운 음료 공간.
      </p>

      <StickyCanvas isVisible={true} className="blend-canvas" width={1920} height={1080} draw={draw}></StickyCanvas>

      <CanvasParagraph className="canvas-caption">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at fuga quae perspiciatis veniam impedit et,
        ratione est optio porro. Incidunt aperiam nemo voluptas odit quisquam harum in mollitia. Incidunt minima iusto
        in corporis, dolores velit. Autem, sit dolorum inventore a rerum distinctio vero illo magni possimus temporibus
        dolores neque adipisci, repudiandae repellat. Ducimus accusamus similique quas earum laborum. Autem tempora
        repellendus asperiores illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente rerum neque error
        deleniti quis, et, quibusdam, est autem voluptate rem voluptas. Ratione soluta similique harum nihil vel. Quas
        inventore perferendis iusto explicabo animi eos ratione obcaecati.
      </CanvasParagraph>
    </Section>
  );
};
