import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs/internal/Observable';
import { Gift } from '../domain/Gifts';
import { User } from '../domain/user';
import { winner } from '../domain/winner';


@Injectable({
  providedIn: 'root'
})
export class RaffleService {
  winner: winner[];
  Users: User[];

 //isRaffling: boolean = false;
isRaffling: boolean = false;


  constructor(private http: HttpClient, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }
  rafflling(): Observable<boolean> {
    let url = 'https://localhost:7035/api/Winner/Raffle';
    console.log("ghghgj");

    return this.http.get<boolean>(url);
  }
  getWinnerReport(): Observable<any> {
    let url = 'https://localhost:7035/api/Winner/GetWinners'
    return this.http.get<any>(url)
  }

}
