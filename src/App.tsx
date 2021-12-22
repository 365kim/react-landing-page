import { SectionDescription, SectionHero, SectionLast, SectionPlain } from './sections';
import { SECTION } from './constants';
import { GlobalNavBar, LocalNavBar } from './navs';
import { useResize, useScroll } from './hooks';

export const App = () => {
  const { sectionHeights, accSectionHeights, heightRatio } = useResize();
  const { currentSection, isNavSticky } = useScroll(accSectionHeights);
  const { HERO, PLAIN, DESCRIPTION, LAST } = SECTION;

  return (
    <>
      <header>
        <GlobalNavBar />
        <LocalNavBar isSticky={isNavSticky} />
      </header>
      <main>
        <SectionHero
          id="scroll-section-0"
          sectionInfo={HERO}
          isCurrentSection={currentSection === HERO.INDEX}
          customHeight={sectionHeights[HERO.INDEX]}
          heightRatio={heightRatio}
        />
        <SectionPlain
          id="scroll-section-1"
          sectionInfo={PLAIN}
          isCurrentSection={currentSection === PLAIN.INDEX}
          customHeight={sectionHeights[HERO.INDEX]}
        />
        <SectionDescription
          id="scroll-section-2"
          sectionInfo={DESCRIPTION}
          isCurrentSection={currentSection === DESCRIPTION.INDEX}
          customHeight={sectionHeights[DESCRIPTION.INDEX]}
          heightRatio={heightRatio}
        />
        <SectionLast
          id="scroll-section-3"
          sectionInfo={LAST}
          isCurrentSection={currentSection === LAST.INDEX}
          customHeight={sectionHeights[LAST.INDEX]}
        />
      </main>
      <footer className="footer">2020, 1분코딩</footer>
    </>
  );
};
