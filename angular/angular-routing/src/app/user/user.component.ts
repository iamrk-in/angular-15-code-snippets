import { User } from './user.model';

users: User[];
userName: String;

constructor() {
    this.users = [
        new User('jack', 46, new Date('2022-06-23')), 
        new User('jack', 46, new Date('2022-06-23')), 
        new User('jack', 46, new Date('2022-06-23'))
    ]
}