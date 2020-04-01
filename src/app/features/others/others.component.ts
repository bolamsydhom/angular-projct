import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/_model/person';
import { Subscription } from 'rxjs';
import { PersonService } from 'src/app/_service/person.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {

  @Input() person: Person = {};


  private routeSub: Subscription;


  constructor(public personService: PersonService, private route: ActivatedRoute) { }
  id: number;
  validPerson = false;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.validPerson = params.id != null;
        console.log(this.validPerson);

      }
    );
  }

}
