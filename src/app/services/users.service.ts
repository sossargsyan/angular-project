import { User } from '../models/user.model';

export class UsersService {
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

    getUsers() {
        return this.users.slice();
    }

    addUser(id:number, name: string, surname: string, email: string) {
        this.users.push({id:id, name: name, surname: surname, email: email });        
    }

    getUserByID(id: number) {
        let user: User;
        this.users.forEach((element)=> { 
            if ( element.id == id)
                user = element;
        });
        return user;
    }

    getBiggestID() {
        let id: number = 0;        
        this.users.forEach((element)=> { 
            if ( element.id > id)
                id = element.id;
        });
        return id;
    }

}