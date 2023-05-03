package com.trabajo.proyectoApi.Resource;

import com.trabajo.proyectoApi.Model.Proyecto;
import com.trabajo.proyectoApi.Repository.ProyectoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class ProjectController {
    @Autowired
    private ProyectoRepository proyectReposirory;

    /*
    los metodos que se le puede agregar son los siguientes
    @PostMapping
    @GetMapping
    @DeleteMapping

     */
    @PostMapping("/addProyect")
    public String addProyect(@RequestBody Proyecto proyecto){
        proyectReposirory.save(proyecto);
        return proyecto.getName();

    }
    @GetMapping("/getProjects")
    public List<Proyecto> getProyects(){
        return proyectReposirory.findAll();
    }
    @DeleteMapping("/deleteProject")
    public String borrarProyect(@RequestBody String id){
        proyectReposirory.deleteById(id);
        return id;
    }
    //creo por el momento para hacer pruebas es sufu¿iciente con esto faltaria hacer las modificaciones para los updates
}
