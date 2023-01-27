package com.example.japonia.service;

import com.example.japonia.entity.Client;

import java.util.List;

public interface ClientService {
    Client addClient(Client client);
    List<Client> getClients();
    Client removeClient(Integer id);
}
