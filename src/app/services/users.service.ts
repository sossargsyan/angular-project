import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UsersService {

    private bigestID = 3;
    users: User[] = [
        {
            id: 1,
            name: 'Aram',
            surname: 'Aramyan',
            email: 'aramaramyan@example.com'
        },
        {
            id: 2,
            name: 'Sanasar',
            surname: 'Baghdasaryan',
            email: 'sanasarbaghdasaryan@example.com'
        },
        {
            id: 3,
            name: 'Sanasar',
            surname: 'Baghdasaryan',
            email: 'sanasarbaghdasaryan@example.com'
        },
    ];

    constructor(private http: HttpClient) { }

    getUsers() {       
        const headers = new HttpHeaders();
        return this.http.get('http://localhost:3000/api/users', { headers });
    }

    addUser(id: number, name: string, surname: string, email: string) {
        this.bigestID = id;
        this.users.push({ id, name, surname, email});
    }

    getUserByID(id: number) {
        return this.users.find(item => item.id === id);
    }

    getBiggestID() {
        return this.bigestID;
    }

    updateUser(newUser) {
        const index = this.users.findIndex(item => item.id === newUser.id);
        this.users[index] = newUser;
    }

}
