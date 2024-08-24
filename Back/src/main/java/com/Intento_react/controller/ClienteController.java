package com.Intento_react.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Intento_react.exception.ResourceNotFoundException;
import com.Intento_react.model.Cliente;
import com.Intento_react.repository.IClienteRepository;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ClienteController {

	@Autowired
	private IClienteRepository cRepositorio;


	@GetMapping("/clientes")
	public List<Cliente> listarClientes(){

		return cRepositorio.findAll();

	}


	@PostMapping("/clientes")
	public Cliente guardarCliente(@RequestBody Cliente c){

		return cRepositorio.save(c);

	}
	

	@GetMapping("/clientes/{id}")
	public ResponseEntity <Cliente> listarClientesPorId(@PathVariable int id){
			Cliente cliente = cRepositorio.findById(id)					
					.orElseThrow(()-> new ResourceNotFoundException("El cliente no existe "+id));			
		return ResponseEntity.ok(cliente);

	}
	
	
	@PutMapping("/clientes/{id}")
	public ResponseEntity <Cliente> editarCliente(@PathVariable int id, @RequestBody Cliente c){		
		Cliente cliente = cRepositorio.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("El cliente no existe "+id));		
		
		cliente.setNombre(c.getNombre());
		cliente.setApellido(c.getApellido());
		cliente.setEmail(c.getEmail());
		cliente.setDNI(c.getDNI());
	
		
		Cliente clienteActualizado =  cRepositorio.save(cliente);

		return ResponseEntity.ok(clienteActualizado);
	}
	
	@DeleteMapping("/clientes/{id}")
	public ResponseEntity <Map<String, Boolean>> eliminarCliente(@PathVariable int id){
		Cliente cliente = cRepositorio.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("El cliente no existe "+id));
		
		cRepositorio.delete(cliente);
		
		Map<String, Boolean> response = new HashMap<>();
		
		response.put("deleted",Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
	
	
	
	
}
