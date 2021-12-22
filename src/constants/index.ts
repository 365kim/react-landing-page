interface NormalSectionInfo {
  INDEX: number;
  TYPE: 'normal';
  CONTENT_SELECTOR: string;
}

interface StickySectionInfo {
  INDEX: number;
  TYPE: 'sticky';
  SCREEN_HEIGHT_COUNT: number; // 스크롤을 화면 높이의 몇 배로 설정할지
}

interface Section {
  HERO: StickySectionInfo;
  PLAIN: NormalSectionInfo;
  DESCRIPTION: StickySectionInfo;
  LAST: StickySectionInfo;
}

export type SectionKey = keyof Section;
export type SectionInfo = NormalSectionInfo | StickySectionInfo;

export const SECTION: Section = {
  HERO: {
    INDEX: 0,
    TYPE: 'sticky',
    SCREEN_HEIGHT_COUNT: 5,
  },
  PLAIN: {
    INDEX: 1,
    TYPE: 'normal',
    CONTENT_SELECTOR: '#scroll-section-1 .description',
  },
  DESCRIPTION: {
    INDEX: 2,
    TYPE: 'sticky',
    SCREEN_HEIGHT_COUNT: 5,
  },
  LAST: {
    INDEX: 3,
    TYPE: 'sticky',
    SCREEN_HEIGHT_COUNT: 5,
  },
};
