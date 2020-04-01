import { Component, OnInit, Input, Output } from '@angular/core';
import { Person } from './../../_model/person';
import { PersonService } from './../../_service/person.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() searchValue;
  @Input() ddClicked;
  users: Person[];
  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.users = this.personService.getAll();
  }


  onSearchClicked(itemId: number) {
    this.ddClicked = false;
    this.router.navigate(['others', itemId]);
  }
}
