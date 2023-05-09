package com.trabajo.proyectoApi.Resource;

import com.trabajo.proyectoApi.Model.Proyecto;
import com.trabajo.proyectoApi.Repository.ProyectoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class ProjectController {
    @Autowired
    private ProyectoRepository proyectReposirory;
    /*
    los metodos que se le puede agregar son los siguientes
    @PostMapping
    @GetMapping
    @DeleteMapping
     */
    @PostMapping("/addProject")
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
