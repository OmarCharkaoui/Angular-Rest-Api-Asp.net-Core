import { Component, OnInit } from '@angular/core';
import { Contact } from '../persone/Contact';
import { RestServiceService } from '../rest-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  personeId:any;
  contact:Contact = new Contact();
  constructor(private restService:RestServiceService,
    private router: Router,
    private routeActive: ActivatedRoute) { }

  ngOnInit() {
    
    this.personeId =  this.routeActive.snapshot.params["id"];
  }

  addContact(){
    this.restService.AddContactToaPersone(this.personeId,this.contact)
    .subscribe(()=> this.router.navigate(["/contacts/"+this.personeId]));
   
  }

}
