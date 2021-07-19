import React from 'react';
import '../assets/stylesheets/application.scss';

import Header from './components/header';
import MemeGenerator from './components/memeGenerator';

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
