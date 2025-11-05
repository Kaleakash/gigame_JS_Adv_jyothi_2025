import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import IncrementComponent from './IncrementComponent';
import ListProducts from './ListProducts';
import AddProduct from './AddProducts';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <IncrementComponent></IncrementComponent>
      <hr/>
      <AddProduct></AddProduct>
      <ListProducts></ListProducts>
    </div>
  );
}

export default App;
