import logo from './logo.svg';
import './App.css';
import Item from './component/Item';
import Cart from './component/Cart';

function App() {
  return (
    <div className="App">
      <Item name="mackbook" price = {10000}/>
      <Item name="prndrive" price = {100}/>
      <Item name="earphone" price = {1000}/>
      <Cart/>
    </div>
  );
}

export default App;
