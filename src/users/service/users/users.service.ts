import { Injectable } from '@nestjs/common';
import { SerializeUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'ndth4ng',
      password: '123456',
    },
    {
      id: 2,
      username: 'thang1',
      password: 'thang1',
    },
    {
      id: 3,
      username: 'thang2',
      password: 'thang2',
    },
  ];

  getUsers() {
    // filter password
    return this.users.map((user) => new SerializeUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
