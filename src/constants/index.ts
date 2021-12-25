interface AnimateProps {
  SCROLL: [number, number];
  OPACITY: [number, number];
}

interface MessageAnimateProps extends AnimateProps {
  TRANSLATE: [number, number];
}

type MessageProps = {
  THRESHOLD: number;
  FADE_IN: MessageAnimateProps;
  FADE_OUT: MessageAnimateProps;
  TEXTS: string[];
};

interface StickySectionInfo {
  TYPE: 'sticky';
  SCREEN_HEIGHT_COUNT: number; // 스크롤을 화면 높이의 몇 배로 설정할지
  VIDEO?: AnimateProps;
  MESSAGES?: MessageProps[];
}

interface NormalSectionInfo {
  TYPE: 'normal';
  CONTENT_SELECTOR: string;
}

interface Section {
  HERO: StickySectionInfo;
  PLAIN: NormalSectionInfo;
  DESCRIPTION: StickySectionInfo;
  LAST: StickySectionInfo;
}

export type SectionKey = keyof Section;
export type SectionInfo = NormalSectionInfo | StickySectionInfo;

export const SECTION_HERO: StickySectionInfo = {
  TYPE: 'sticky',
  SCREEN_HEIGHT_COUNT: 5,
  VIDEO: { SCROLL: [0.9, 1], OPACITY: [1, 0] },
  MESSAGES: [
    {
      THRESHOLD: 0.22,
      FADE_IN: { SCROLL: [0.1, 0.2], OPACITY: [0, 1], TRANSLATE: [20, 0] },
      FADE_OUT: { SCROLL: [0.25, 0.3], OPACITY: [1, 0], TRANSLATE: [0, -20] },
      TEXTS: ['온전히 빠져들게 하는', '최고급 세라믹'],
    },
    {
      THRESHOLD: 0.42,
      FADE_IN: { SCROLL: [0.3, 0.4], OPACITY: [0, 1], TRANSLATE: [20, 0] },
      FADE_OUT: { SCROLL: [0.45, 0.5], OPACITY: [1, 0], TRANSLATE: [0, -20] },
      TEXTS: ['주변 맛을 느끼게 해주는', '주변 맛 허용 모드'],
    },
    {
      THRESHOLD: 0.62,
      FADE_IN: { SCROLL: [0.5, 0.6], OPACITY: [0, 1], TRANSLATE: [20, 0] },
      FADE_OUT: { SCROLL: [0.65, 0.7], OPACITY: [1, 0], TRANSLATE: [0, -20] },
      TEXTS: ['온종일 편안한', '맞춤형 손잡이'],
    },
    {
      THRESHOLD: 0.82,
      FADE_IN: { SCROLL: [0.7, 0.8], OPACITY: [0, 1], TRANSLATE: [20, 0] },
      FADE_OUT: { SCROLL: [0.85, 0.9], OPACITY: [1, 0], TRANSLATE: [0, -20] },
      TEXTS: ['새롭게 입가를', '찾아온 매혹'],
    },
  ],
};

export const SECTION_PLAIN: NormalSectionInfo = {
  TYPE: 'normal',
  CONTENT_SELECTOR: '#scroll-section-1 .description',
};

export const SECTION_DESCRIPTION: StickySectionInfo = {
  TYPE: 'sticky',
  SCREEN_HEIGHT_COUNT: 5,
};

export const SECTION_LAST: StickySectionInfo = {
  TYPE: 'sticky',
  SCREEN_HEIGHT_COUNT: 5,
};
