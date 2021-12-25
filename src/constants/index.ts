interface AnimateUnit {
  SCROLL: [number, number];
  OPACITY: [number, number];
  TRANSLATE?: [number, number];
}

type VideoProps = {
  THRESHOLD: number;
  FADE_IN: AnimateUnit;
  FADE_OUT?: AnimateUnit;
};

type MessagesProps = {
  THRESHOLD: number;
  FADE_IN: AnimateUnit;
  FADE_OUT: AnimateUnit;
};

interface StickySectionInfo {
  TYPE: 'sticky';
  SCREEN_HEIGHT_COUNT: number; // 스크롤을 화면 높이의 몇 배로 설정할지
}

interface StickyMessageSectionInfo extends StickySectionInfo {
  VIDEO_CONFIG: VideoProps;
  MESSAGES_CONFIG: MessagesProps[];
}

interface PlainSectionInfo {
  TYPE: 'plain';
  CONTENT_SELECTOR: string;
}

export type SectionInfo = PlainSectionInfo | StickySectionInfo | StickyMessageSectionInfo;

export const SECTION_PLAIN: PlainSectionInfo = {
  TYPE: 'plain',
  CONTENT_SELECTOR: 'section-plain',
};

export const SECTION_LAST: StickySectionInfo = {
  TYPE: 'sticky',
  SCREEN_HEIGHT_COUNT: 5,
};

export const SECTION_HERO: StickyMessageSectionInfo = {
  TYPE: 'sticky',
  SCREEN_HEIGHT_COUNT: 5,
  VIDEO_CONFIG: {
    THRESHOLD: 1,
    FADE_IN: { SCROLL: [0.9, 1], OPACITY: [1, 0] },
  },
  MESSAGES_CONFIG: [
    {
      THRESHOLD: 0.22,
      FADE_IN: { SCROLL: [0.1, 0.2], OPACITY: [0, 1], TRANSLATE: [20, 0] },
      FADE_OUT: { SCROLL: [0.25, 0.3], OPACITY: [1, 0], TRANSLATE: [0, -20] },
    },
    {
      THRESHOLD: 0.42,
      FADE_IN: { SCROLL: [0.3, 0.4], OPACITY: [0, 1], TRANSLATE: [20, 0] },
      FADE_OUT: { SCROLL: [0.45, 0.5], OPACITY: [1, 0], TRANSLATE: [0, -20] },
    },
    {
      THRESHOLD: 0.62,
      FADE_IN: { SCROLL: [0.5, 0.6], OPACITY: [0, 1], TRANSLATE: [20, 0] },
      FADE_OUT: { SCROLL: [0.65, 0.7], OPACITY: [1, 0], TRANSLATE: [0, -20] },
    },
    {
      THRESHOLD: 0.82,
      FADE_IN: { SCROLL: [0.7, 0.8], OPACITY: [0, 1], TRANSLATE: [20, 0] },
      FADE_OUT: { SCROLL: [0.85, 0.9], OPACITY: [1, 0], TRANSLATE: [0, -20] },
    },
  ],
};

export const SECTION_DESCRIPTION: StickyMessageSectionInfo = {
  TYPE: 'sticky',
  SCREEN_HEIGHT_COUNT: 5,
  VIDEO_CONFIG: {
    THRESHOLD: 0.5,
    FADE_IN: { SCROLL: [0, 0.1], OPACITY: [0, 1] },
    FADE_OUT: { SCROLL: [0.95, 1], OPACITY: [1, 0] },
  },
  MESSAGES_CONFIG: [
    {
      THRESHOLD: 0.25,
      FADE_IN: { SCROLL: [0.15, 0.2], OPACITY: [0, 1], TRANSLATE: [20, 0] },
      FADE_OUT: { SCROLL: [0.3, 0.35], OPACITY: [1, 0], TRANSLATE: [0, -20] },
    },
    {
      THRESHOLD: 0.57,
      FADE_IN: { SCROLL: [0.5, 0.55], OPACITY: [0, 1], TRANSLATE: [30, 0] },
      FADE_OUT: { SCROLL: [0.58, 0.63], OPACITY: [1, 0], TRANSLATE: [0, -20] },
    },
    {
      THRESHOLD: 0.83,
      FADE_IN: { SCROLL: [0.72, 0.77], OPACITY: [0, 1], TRANSLATE: [30, 0] },
      FADE_OUT: { SCROLL: [0.85, 0.9], OPACITY: [1, 0], TRANSLATE: [0, -20] },
    },
  ],
};

export const CANVAS_WIDTH = 1920;
export const CANVAS_HEIGHT = 1080;
