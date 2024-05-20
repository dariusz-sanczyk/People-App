import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
})
export class PeopleComponent implements OnInit, OnDestroy {
  constructor(private peopleService: PeopleService) {}

  timeCounter: number = 0;
  interval: any;
  personData: Person = {
    name: {
      title: '',
      first: '',
      last: '',
    },
    picture: {
      large: '',
      medium: '',
      thumbnail: '',
    },
  };

  ngOnInit(): void {
    this.getRandomPerson();
    this.startCounter();
  }

  public getRandomPerson() {
    this.peopleService.getPersonNameAndPic().subscribe((data) => {
      this.personData = data.results[0];
      this.timeCounter = 0;
    });
  }

  public startCounter() {
    this.interval = setInterval(() => {
      console.log(this.timeCounter);
      if (this.timeCounter === 4) {
        this.getRandomPerson();
      } else {
        this.timeCounter++;
      }
    }, 1000);
  }

  public pauseTimer() {
    clearInterval(this.interval);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
