package com.example.spring.resource;

import com.example.spring.Model.Productos;
import com.example.spring.repository.productosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class ProductoController {
    // the porpuse of this class is show in the web side the producto to donlowas that can include
    //different version of the software it depens of the version.
    //For now just we need to add a single version

    @Autowired
    private productosRepository productos;
    @PostMapping("/addProducto")
    public String add(@RequestBody Productos cosa){
    productos.save(cosa);
    return cosa.getTitle();
    }
    @GetMapping("/getProductos")
    public List<Productos> getProductos(){
        return productos.findAll();
    }
    @DeleteMapping
    public String deleteProducto(String id){
        productos.deleteById(id);
        return id;
    }



}
