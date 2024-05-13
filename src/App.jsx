import React from 'react';
import './GlobalStyle.scss'; // Importe o arquivo de estilos globais Sass
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className='body'>
      <HomePage />
    </div>
  );
}

export default App;
