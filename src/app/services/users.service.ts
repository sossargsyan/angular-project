import { User } from '../models/user.model';

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

    getUsers() {
        return this.users.slice();
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

}
