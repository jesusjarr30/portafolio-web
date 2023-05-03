package com.trabajo.proyectoApi.Model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import net.bytebuddy.utility.dispatcher.JavaDispatcher;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Setter
@Getter
@ToString

@Document(collection="Skills")
public class Skills {
    @Id
    private String id;

    private String description;


}
