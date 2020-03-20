import { Component, OnInit } from '@angular/core';
import { Contact } from '../persone/Contact';
import { RestServiceService } from '../rest-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Persone } from '../persone/Persone.Data';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact:Contact;
  contactId:number;
  personeId:number;

  constructor(private restService:RestServiceService,
    private router: Router,
    private routeActive: ActivatedRoute) { }

  ngOnInit() {
    this.contactId =  this.routeActive.snapshot.params["id"];
    this.personeId = this.routeActive.snapshot.params["personeId"];
    this.getcontactId();
  }
  getcontactId(){
   this.restService.GetContactById(this.personeId,this.contactId)
   .subscribe((x:Persone)=> this.contact = x.contacts[0]  );
  }
  EditContact(){
this.restService.EditContact(this.personeId,this.contactId,this.contact)
.subscribe(()=>this.router.navigate(["/contacts",this.personeId]));
  }
}
