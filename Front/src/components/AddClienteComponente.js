import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import clienteService from '../services/clienteService';

export const AddClienteComponente = () => {
  
  const [nombre,setNombre] = useState('');
  const [apellido,setApellido] = useState('');
  const [email,setEmail] = useState('');
  const [dni,setDni] = useState(0);
  const navigate =useNavigate();
  const {id} =useParams();

  const saveOrUpdateCliente = (e) => {
    e.preventDefault();
    const cliente ={dni,nombre, apellido, email};

    if(id){
    clienteService.updateCliente(id,cliente).then((response) => {
      console.log(response.data);
      navigate('/clientes');
    })
.catch(error=> {
  console.log(error); 
  })}else{

  clienteService.saveCliente(cliente).then((response) => {
    console.log(response.data);
    navigate('/clientes');
  })
.catch(error=> {
console.log(error); 
})  
}
}

useEffect(()=> {

  clienteService.getClienteById(id).then((response) => {
    setDni(response.data.dni);
    setNombre(response.data.nombre);
    setApellido(response.data.apellido);
    setEmail(response.data.email);

  }).catch(error=> {
    console.log(error); 
    })  

},[])

  const title = () => {

    if(id !=null){

     return <h2 className='text-center'>Actualizar Cliente</h2>

    }else{

      return <h2 className='text-center'>Agregar Cliente</h2>
      
    }


  }

  return (
    
    <div> 
       <br />
       <br />     
      
        <div className='container'>

       <div className='row'>

        <div className='card col-md-6 offset-md-3 offset-md-3'>

        <div className='text-center'>
          {title()}
          </div>

        <div className='card-body'>
        <form>
        <input className="form-control text-center" type="number" placeholder="Dni" value={dni} onChange={(e) => setDni(e.target.value)} ></input>
       
          <div className='form-group mb2'>
      <br />
      <input className="form-control form-control-lg text-center"  type="text" placeholder="Nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} aria-label=".form-control-lg example"></input>
     
      <br />
      <input className="form-control form-control-lg text-center" type="text"  placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} aria-label=".form-control-lg example"></input>
      
      <br />
      <input className="form-control form-control-lg text-center"  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label=".form-control-lg example"></input>   
      </div>
      <br />
      <button className="btn btn-outline-success me-2 center" onClick={(e) => saveOrUpdateCliente(e)} type="button">Guardar</button>
      </form>
      </div>

        </div>
       </div>
        <br />
      
     </div>
    
    </div>
  )
}

export default AddClienteComponente;

