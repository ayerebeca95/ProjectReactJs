import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <NavBar titulo="Vamos que se puede" comision= "41590" color="red"> </NavBar>
      <ItemListContainer greeting="Hola Coders!">
        <h2>Este es el item list container</h2>
      </ItemListContainer>
      <ItemCount/>
      
     
      </header>
    </div>
  );
}

export default App;


