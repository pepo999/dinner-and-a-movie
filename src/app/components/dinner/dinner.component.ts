import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent implements OnInit {
  @Input() dinnerList?: any[];

  randomDinner?: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.fetchDinner();
  }

  fetchDinner() {
    this.dataService.getDinnersAndMovies().subscribe(
      (response) => {
        this.dinnerList = response.filter((item) => item.dinner.title);
      },
      (error) => {
        console.error('Error fetching dinners:', error);
      }
    );
  }

  getRandomDinner() {
    const randomIndex = Math.floor(Math.random() * this.dinnerList!.length);
    this.randomDinner = this.dinnerList![randomIndex];
  }

  deleteDinner(dinner: any) {
    this.dataService.delete(dinner).subscribe(
      () => {
        this.fetchDinner();
      },
      (error) => {
        console.error('Error deleting dinner:', error);
      }
    );
  }
}
