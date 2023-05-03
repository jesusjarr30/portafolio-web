package com.trabajo.proyectoApi.Repository;

import com.trabajo.proyectoApi.Model.Skills;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SkillsRepository extends MongoRepository<Skills,String> {

}
