package com.example.spring.repository;

import com.example.spring.Model.Productos;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface productosRepository extends MongoRepository<Productos,String> {
}
