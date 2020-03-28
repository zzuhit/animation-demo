import React from 'react';
import Silder from './component/slider'
import './App.css';

const DIV_COLOR = ['#CD9B1D', '#CD8C95', '#CD7054',
  '#CD661D', '#CD5B45', '#CD3333', '#CD1076', '#CAFF70', '#C71585', '#C4C4C4', '#C1CDC1']

const array = DIV_COLOR.map((value, index) => ({id: index, color: value}))

const INIT = 3

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Silder data={array} init={INIT} />
      </header>
    </div>
  );
}

export default App;
