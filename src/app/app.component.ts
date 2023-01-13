import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hover: boolean = false;
  caption?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  coutry?: string;

  @ViewChild('myForm') form: NgForm;

  onSubmit() {
    this.city = this.form.value.requiredFields.city;
    this.firstName = this.form.value.requiredFields.firstName;
    this.lastName = this.form.value.requiredFields.lastName;
    this.city = this.form.value.city;
    this.state = this.form.value.state;
    console.log(this.form.value);

    this.form.reset();
  }
}
