package com.example.japonia.controller;

import com.example.japonia.entity.Client;
import com.example.japonia.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ClientController {
    @Autowired
    private ClientService clientService;

    @PostMapping("/client")
    public Client addClient(@RequestBody Client client) {
        return clientService.addClient(client);
    }
    @GetMapping("/client")
    public List<Client> getClients() {
        return clientService.getClients();
    }
    @DeleteMapping("/client/{id}")
    public Client removeClient(@PathVariable Integer id) {
        return clientService.removeClient(id);
    }
}
