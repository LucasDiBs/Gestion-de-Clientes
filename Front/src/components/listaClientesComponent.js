import React, { useEffect, useState } from 'react'
import clienteService from '../services/clienteService';
import { Link } from 'react-router-dom';

export const listaClientesComponent = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    listarClientes();
  }, [])

  const deleteCliente = (clienteId)=>{
    clienteService.deleteCliente(clienteId).then((response) => {
      listarClientes();
    }).catch(error=> {
      console.log(error); 

  })
}

const listarClientes =() => {
  clienteService.getAllClientes().then(response => {

    setClientes(response.data);
    console.log(response.data);
  }).catch(error => {

    console.log(error)
  })
}

return (
  <div className='container'>
    <h2 className='text-center'>Lista de Clientes</h2>

    <table className="table table-dark table-striped table-hover">

      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">DNI</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col"></th>
          <th scope="col"></th>


        </tr>
      </thead>
      <tbody>
        {
          clientes.map(

            cliente =>
              <tr key={cliente.id}>
                <td >{cliente.id}</td>
                <td>{cliente.dni}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.email}</td>
                <td>
                  <Link className='btn btn-info' to={`/edit-cliente/${cliente.id}`}> Editar </Link>
                  <button style={{ marginleft: "10px" }} className='btn btn-danger' onClick={() => deleteCliente(cliente.id)}>Borrar</button>
                </td>
              </tr>
          )

        }
      </tbody>
    </table>

  </div>
)
}

export default listaClientesComponent;