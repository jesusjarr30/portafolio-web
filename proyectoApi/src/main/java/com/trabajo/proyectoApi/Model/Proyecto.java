package com.trabajo.proyectoApi.Model;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@ToString

@Document(collection = "proyecto")
public class Proyecto {
    @Id
    private String id;

    private String name;
    private String Description;
    private String dateRelase;
    private String language;
    private String link;

}
