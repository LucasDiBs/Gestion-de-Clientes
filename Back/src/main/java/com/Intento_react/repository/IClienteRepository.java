package com.Intento_react.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Intento_react.model.Cliente;

public interface IClienteRepository extends JpaRepository<Cliente, Integer> {

}
