import logo from './logo.svg';
import './App.css';
import ViewProducts from './components/ViewProducts';
import AddProduct from './components/AddProducts';

function App() {
  return (
    <div className="App">
      <AddProduct></AddProduct>
      <ViewProducts></ViewProducts>
    </div>
  );
}

export default App;
