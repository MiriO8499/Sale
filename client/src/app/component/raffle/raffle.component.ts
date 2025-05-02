import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Gift } from 'src/app/domain/Gifts';
import { User } from 'src/app/domain/user';
import { winner } from 'src/app/domain/winner';
import { RaffleService } from 'src/app/services/raffleService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.css'],
  providers: [ConfirmationService, MessageService, RaffleService]
})
export class RaffleComponent {
  winnerReport: any[] = [];
  visible: boolean;
  items: any[];
  activeItem: any;
  constructor(private RaffleService: RaffleService, private http: HttpClient) {

  }
  ngOnInit() {
    this.items = [
      { label: 'donors ', icon: 'pi pi-id-card', routerLink: '/donors' },
      { label: 'raffle ', icon: 'pi pi-question-circle', routerLink: '/raffle' },
      { label: 'showgift ', icon: 'pi pi-gift', routerLink: '/showgift' }
    ];
    this.activeItem = this.items[0];
  }
  onActiveItemChange(event) {
    this.activeItem = event.item;
  }
  raffle(): void {
    this.RaffleService.isRaffling = false;
    console.log(this.RaffleService.rafflling);

    this.RaffleService.rafflling().subscribe(result => {
      if (result) {
        console.log('Lottery performed successfully!');
        Swal.fire({
          text: 'The lottery was successfully completed! For the results, click on the winners button!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } else {
        console.log('Lottery failed!');
      }
    });
  }

  showDialog() {
    this.visible = true;
  }
  getWinnerReport(): void {
    this.showDialog()
    this.RaffleService.getWinnerReport().subscribe(data => {
      this.winnerReport = data
      console.log(this.winnerReport);

    }

    );
  }
}
