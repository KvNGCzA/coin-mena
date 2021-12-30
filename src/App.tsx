import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home} from './views/Home';
import './App.scss';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path="/:section" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
