import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import './App.css';
import data from './components/Products/data';


function App() {
  
const [cart, setCart] = useState([])
const [items, setItems] = useState(null)
const [itemList, setItemList] = useState([])
const [totalItems, setTotalItems] = useState(null)
const [cartNames, setCartNames] = useState([]);
// console.log(cart)

// code runs when list with noOfItems changes
useEffect(() => {
  var totalItems = itemList.reduce((partialsum, a) => partialsum + a, 0)
  // console.log(totalItems)
  setTotalItems(totalItems)
}, [JSON.stringify(itemList)]);

useEffect(() => {
  setTotalItems(totalItems)
}, [totalItems])
return (
    <div className="wrapper">
      <Navbar cart={cart} setCart={setCart} totalItems={totalItems} setTotalItems={setTotalItems}
      itemList={itemList} setItemList={setItemList}
      cartNames={cartNames}
      />

      <Products products={data} cart={cart} setCart={setCart}
      setItems={setItems} itemList={itemList} setItemList={setItemList}
      setCartNames={setCartNames} cartNames={cartNames}
      />
    </div>
  );
}

export default App;
