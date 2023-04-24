import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{' '}
      <Route path="/tweets" element={<Tweets />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
