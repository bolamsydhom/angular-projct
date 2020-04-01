import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from './../../_service/person.service';
import { Person } from 'src/app/_model/person';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() person: Person = {};
  id: number;
  validPerson = false;
  showEditTab = false;
  showEditTabAbout = false;

  private routeSub: Subscription;
  constructor(
    public personService: PersonService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.validPerson = params['id'] != null;
    });
    if (Object.keys(this.person).length === 0) {
      this.person = this.personService.getById(this.id);
    }
  }

  showOrHiddenEdit() {
    this.showEditTab ? (this.showEditTab = false) : (this.showEditTab = true);
  }
  showOrHiddenEditAbout() {
    this.showEditTabAbout
      ? (this.showEditTabAbout = false)
      : (this.showEditTabAbout = true);
  }

  onsubmit(myForm: NgForm) {
    var personID = this.route.snapshot.params.id;
    var name = myForm.value.txtName;
    var jobTitle = myForm.value.jobTitle;
    var jobDesc = myForm.value.currentPostion;
    var country = myForm.value.country;
    this.personService.update(personID, name, jobTitle, jobDesc, country);
  }
  onsubmitAbout(myFormAbout: NgForm) {
    var personID = this.route.snapshot.params.id;
    var about = myFormAbout.value.about;
    console.log(about);
    this.personService.updateAbout(personID, about);
  }
}
