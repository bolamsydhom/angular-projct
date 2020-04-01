import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showDropDown = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDropDown() {
    this.showDropDown = this.showDropDown === true ? false : true;
    // console.log(this.showDropDown);
  }
  ngOnChanges(){
    console.log(this.showDropDown)
  }
}
