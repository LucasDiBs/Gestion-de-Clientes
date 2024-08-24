package com.Intento_react.model;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter 
@Setter
@ToString
@NoArgsConstructor
public class Cliente {


	@Id
	@GeneratedValue
	private int id;
	
	@Column(name= "nombre")
	private String nombre;
	

	@Column(name= "apllido")
	private String apellido;
	

	@Column(name= "email")
	private String email;
	

	@Column(name= "DNI")
	private int DNI;


	public Cliente(String nombre, String apellido, String email, int dNI) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		DNI = dNI;
	}



}
