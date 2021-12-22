import { useState } from 'react';

import { SectionDescription, SectionHero, SectionLast, SectionPlain } from './sections';
import { SECTION } from './constants';

function App() {
  const [currentSection, setCurrentSection] = useState<number>(-1);

  return (
    <>
      <SectionHero section={SECTION.HERO} />
      <SectionPlain section={SECTION.PLAIN} />
      <SectionDescription section={SECTION.DESCRIPTION} />
      <SectionLast section={SECTION.LAST} />
      <footer className="footer">2020, 1분코딩</footer>
    </>
  );
}

export default App;
