import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home} from './views/Home';

const App = (): JSX.Element =>
  <div className="App">
    <Routes>
      <Route path=":section" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </div>;

export default App;
