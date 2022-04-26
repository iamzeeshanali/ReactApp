import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer'
import Todos from './MyComponents/Todos'

function App() {
  return (
    <>
    
    <Header title={"Todos List"} about={"ABOUT"}/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;
