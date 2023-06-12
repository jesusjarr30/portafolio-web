package com.trabajo.proyectoApi.Resource;

import com.trabajo.proyectoApi.Model.Proyecto;
import com.trabajo.proyectoApi.Repository.ProyectoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
//aqui va la linea de falta parea que el ree controller enable the cors
@CrossOrigin("http://localhost:3000/")
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
    public String addProyect(@RequestBody Proyecto proyecto) throws Exception {

        if(proyecto.getName()==null || proyecto.getName()=="") throw new Exception("Can't add null or empty values1");
        if(proyecto.getLink()==null || proyecto.getLink()=="")throw new Exception("Can't add null or empty values2");
        if(proyecto.getLanguage()==null || proyecto.getLanguage()=="") throw new Exception("Can't add null or empty values3");
        if(proyecto.getDescription()==null || proyecto.getDescription()=="")throw new Exception("Can't add null or empty values4");
        if(proyecto.getDateRelase()==null || proyecto.getDateRelase()=="") throw new Exception("Can't add null or empty values5");
        //validate the entry

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
    //need to ad the edit method in both cases
}
