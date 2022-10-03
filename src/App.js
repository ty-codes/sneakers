import React, {useState} from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import './App.css';
import data from './components/Products/data';


function App() {
  const [corn,setCorn] = useState('corn');

  // console.log(corn)
  return (
    <div className="wrapper">
      <Navbar corn/>
      <Products products={data} />
    </div>
  );
}

export default App;
