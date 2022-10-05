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
// console.log(cart)

useEffect(() => {
  // console.log(itemList)
  var totalItems = itemList.reduce((partialsum, a) => partialsum + a, 0)
  // console.log(totalItems)
  setTotalItems(totalItems)
}, [itemList])
return (
    <div className="wrapper">
      <Navbar cart={cart} setCart={setCart} noOfItems={totalItems}
      itemList={itemList} setItemList={setItemList}/>

      <Products products={data} cart={cart} setCart={setCart}
      setItems={setItems} itemList={itemList} setItemList={setItemList} />
    </div>
  );
}

export default App;
