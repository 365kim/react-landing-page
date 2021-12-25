import { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { GlobalFooter, GlobalNavBar, LocalNavBar } from './components';
import { Home } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="">
        <header>
          <GlobalNavBar />
          <LocalNavBar />
        </header>
        <main>
          <Routes>
            <Route path={'/'} element={<Home />}></Route>
          </Routes>
        </main>
        <GlobalFooter />
      </Suspense>
    </BrowserRouter>
  );
};
