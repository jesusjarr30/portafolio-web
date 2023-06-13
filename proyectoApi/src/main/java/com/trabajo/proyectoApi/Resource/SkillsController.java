package com.trabajo.proyectoApi.Resource;

import com.trabajo.proyectoApi.Model.Skills;
import com.trabajo.proyectoApi.Repository.SkillsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3000/")
@RestController
public class SkillsController {
    @Autowired
    private SkillsRepository skillsRepository;
    @PostMapping("/addskill")
    private String addSkill(@RequestBody Skills skill){
        skillsRepository.save((skill));
        return skill.getId();
    }
    @GetMapping("/getSkills")
    private List<Skills> getSkills(){
        return skillsRepository.findAll();
    }
    @DeleteMapping("/deletingSkill")
    private String deleteSkill(@RequestBody String id){
        skillsRepository.deleteById(id);
        return id;
    }
}