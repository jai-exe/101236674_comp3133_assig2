import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listings: any;
  session = localStorage.getItem('session');

  constructor(private apollo: Apollo) { }

  getListings(uname?: NgForm):void{
    let username;
    if (!uname) {
      username = '';
    } else {
      username = uname.form.controls['query'].value;
    }

    
    this.apollo
    .watchQuery({
      query: gql`
        {
          query getListings($username: String!) {
          getBookings(username: $username) {
            listing_id
            listing_title
            description
            street
            city
            postal_code
            email
            username
          }
        }
            
        }
      `,
      variables: { uname: uname },
    })
    .valueChanges.subscribe((result: any) => {
      this.listings = result?.data?.getListings;
    });

  }

  ngOnInit(): void {
    if (!this.session) {
      return;
    }
  }
  

}
