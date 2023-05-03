package com.trabajo.proyectoApi.Repository;

import com.trabajo.proyectoApi.Model.Proyecto;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProyectoRepository extends MongoRepository<Proyecto,String>{

}

