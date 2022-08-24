import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
//import ItemCount from "./components/ItemCount";
//import canasto1 from './assets/canasto1.jpg'


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      <NavBar />
      <>
     {/* <img src={canasto1} alt="" width= "50%"/>*/}
      </>
      <ItemListContainer  />
      </header>
    </div>
    </>
  );
}

export default App;


