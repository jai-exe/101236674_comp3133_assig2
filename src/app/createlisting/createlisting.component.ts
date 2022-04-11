import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createlisting',
  templateUrl: './createlisting.component.html',
  styleUrls: ['./createlisting.component.css']
})
export class CreatelistingComponent implements OnInit {

  listingForm: any;
  username: any = null;
  type: any = null;
  

  constructor(private router: Router) { 
    this.username = localStorage.getItem('username');
    this.type = localStorage.getItem('type');

    if(this.type === 'customer'){
      alert('Not Allowed! Only Admins Have Access To This Page!');
      this.router.navigate(['/']);
    }

    this.listingForm = new FormGroup({
      listing_id: new FormControl("", Validators.required),
      listing_title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      street: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      postal_code: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      username: new FormControl(this.username)
    })
  }

  ngOnInit(): void {
  }

}
