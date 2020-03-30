<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from './../../_service/person.service';
import { Person } from 'src/app/_model/person';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
>>>>>>> 27acdf65f964c5cb552e8cb1e69da26438671747

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() person: Person = {};

<<<<<<< HEAD
  
  private routeSub: Subscription;
  constructor(
    public personService: PersonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
   

=======
  constructor(private route: ActivatedRoute) { }
  id: number;
  validPerson = false;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.validPerson = params['id'] != null;
        console.log(this.validPerson);

      }
    )
  }
>>>>>>> 27acdf65f964c5cb552e8cb1e69da26438671747

    if (Object.keys(this.person).length === 0) {
      this.person = this.personService.getById(2);
    }
  }
}
