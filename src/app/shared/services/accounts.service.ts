import { Injectable } from '@angular/core';
import { Account } from '../interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  accounts: Account[] = [
    {
      email: "mariosoto1551@gmail.com",
      password: "123456789"
    },
    {
      email: "mariosoto1651@gmail.com",
      password: "123456789"
    },
    {
      email: "mariosoto1751@gmail.com",
      password: "123456789"
    },
    {
      email: "mariosoto1851@gmail.com",
      password: "123456789"
    },
    {
      email: "mariosoto1951@gmail.com",
      password: "123456789"
    }
  ];

  

}
