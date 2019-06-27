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

    deleteUser(userID) {
        const headers = new HttpHeaders();
        return this.http.delete('http://localhost:3000/api/users/' + userID, { headers });
    }

    addUser(user: User) {
        // this.users.push({ id, name, surname, email});
        const headers = new HttpHeaders();
        return this.http.post('http://localhost:3000/api/user/', user, { headers });
    }

    updateUser(user) {
      const headers = new HttpHeaders();
      return this.http.put('http://localhost:3000/api/update-user/' + user.id, user, { headers });
    }

    getUserByID(id: number) {
        return this.users.find(item => item.id === id);
    }

    getBiggestID() {
        return this.bigestID;
    }


}
