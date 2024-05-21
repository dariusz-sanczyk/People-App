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
    this.startTimer();
  }

  public getRandomPerson(): void {
    this.peopleService.getPersonNameAndPic().subscribe((data) => {
      this.personData = data.results[0];
      this.timeCounter = 0;
    });
  }

  public startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeCounter === 4) {
        this.getRandomPerson();
      } else {
        this.timeCounter++;
      }
    }, 1000);
  }

  public pauseTimer(): void {
    clearInterval(this.interval);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
