package com.example.japonia.service;


import com.example.japonia.entity.Client;
import com.example.japonia.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService{
    @Autowired
    private ClientRepository clientRepository;


    @Override
    public Client addClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public List<Client> getClients() {
        return (List<Client>) clientRepository.findAll();
    }

    @Override
    public Client removeClient(Integer id) {
        Client client = clientRepository.findById(id).orElse(null);
        if(client != null) {
            clientRepository.delete(client);
        }
        return client;
    }
}
