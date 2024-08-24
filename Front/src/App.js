import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ListaClientesComponent from './components/listaClientesComponent';
import AddClienteComponente from './components/AddClienteComponente';
import { BrowserRouter } from 'react-router-dom'


function App() {


  return (

  <div>

    <BrowserRouter>    
    <HeaderComponent/> 
      <div className='container'>
        <Routes>
        <Route exact path='/' element={<ListaClientesComponent/>}></Route>
        <Route path ='/clientes' element={<ListaClientesComponent/>}></Route> 
        <Route path ='/add-cliente' element={<AddClienteComponente/>}></Route> 
        <Route path ='/edit-cliente/:id' element={<AddClienteComponente/>}></Route> 
      
        </Routes>
      </div>
    </BrowserRouter>    
  </div>
   
  
);


 
}

export default App;
