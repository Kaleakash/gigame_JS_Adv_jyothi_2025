import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import Increment from './Increment';
import { useSelector } from 'react-redux';
import Decrement from './Decrement';
import Product from './Product';

function App() {
  let n = useSelector(gs=>gs.n)
  return (
    <div className="App">
     
      <h2>REact with Redux concept </h2>

      <p>Global State variable in app component{n}</p>
      <hr/>
            <Product></Product>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <Increment></Increment>
      <Decrement></Decrement>
    </div>
  );
}

export default App;
