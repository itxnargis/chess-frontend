import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import store from './store/store';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./components/Home'));
const SignUp = lazy(() => import('./components/Auth/SignUp'));
const Login = lazy(() => import('./components/Auth/Login'));
const Profile = lazy(() => import('./components/Profile'));
const GameModeSelector = lazy(() => import('./components/GameModeSelector'));
const GameOverModal = lazy(() => import('./components/GameOverModal'));

const RandomPlay = lazy(() => import('./components/Modes/RandomPlay'));
const LocalMultiplayer = lazy(() => import('./components/Modes/LocalMultiplayer'));
const GlobalMultiplayer = lazy(() => import('./components/Modes/GlobalMultiplayer'));
const AgainstStockfish = lazy(() => import('./components/Modes/AgainstStockfish'));
const Puzzles = lazy(() => import('./components/Modes/Puzzles'));

const Puzzle1 = lazy(() => import('./components/Puzzles/Puzzle1'));
const Puzzle2 = lazy(() => import('./components/Puzzles/Puzzle2'));
const Puzzle3 = lazy(() => import('./components/Puzzles/Puzzle3'));
const Puzzle4 = lazy(() => import('./components/Puzzles/Puzzle4'));
const Puzzle5 = lazy(() => import('./components/Puzzles/Puzzle5'));
const Puzzle6 = lazy(() => import('./components/Puzzles/Puzzle6'));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Suspense fallback={<div className="text-white text-center py-8">Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/modeselector' element={<GameModeSelector />} />
            <Route path='/gameovermodal' element={<GameOverModal />} />
            <Route path='/profile' element={<Profile />} />

            <Route path='/random-play' element={<RandomPlay />} />
            <Route path='/local-multiplayer' element={<LocalMultiplayer />} />
            <Route path='/global-multiplayer' element={<GlobalMultiplayer />} />
            <Route path='/puzzle' element={<Puzzles />} />
            <Route path='/against-stockfish' element={<AgainstStockfish />} />

            <Route path='/puzzle1' element={<Puzzle1 />} />
            <Route path='/puzzle2' element={<Puzzle2 />} />
            <Route path='/puzzle3' element={<Puzzle3 />} />
            <Route path='/puzzle4' element={<Puzzle4 />} />
            <Route path='/puzzle5' element={<Puzzle5 />} />
            <Route path='/puzzle6' element={<Puzzle6 />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
