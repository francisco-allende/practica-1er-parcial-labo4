import { Injectable } from '@angular/core';
const STORAGE_KEY = "current-user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userData: {user: string, password: string}) {
    const userDataString = JSON.stringify(userData);
    localStorage.setItem(STORAGE_KEY , userDataString);
  }

  getUser() {
    const userData = localStorage.getItem(STORAGE_KEY);
    return userData ? JSON.parse(userData) : null;
  }
}
