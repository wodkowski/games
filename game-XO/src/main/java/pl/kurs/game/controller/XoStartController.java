package pl.kurs.game.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.PostConstruct;


@Controller
@RequestMapping("/xo")
public class XoStartController {


    @RequestMapping("/")
    public String start(){
        return "index";
    }
}
