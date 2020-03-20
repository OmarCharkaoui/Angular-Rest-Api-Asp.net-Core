import { Component, OnInit  } from '@angular/core';
import { RestServiceService } from '../rest-service.service';
import { Persone } from '../persone/Persone.Data';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Contact } from '../persone/Contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private restService:RestServiceService,
    private router: Router,
    private routeActive: ActivatedRoute
    ) { }
persone:Persone;
personeId:number;
check:boolean;
  ngOnInit() {
    this.personeId =  this.routeActive.snapshot.params["id"];
    this.getContactsByPersoneId(this.personeId);
    
    
  }
  getlengthofdata()
  {
    this.check = (this.persone.contacts.length > 0) ? true : false; 
   return this.check;
  }
  getContactsByPersoneId(personeId){

    this.restService.FetchedContactsByPersoneId(personeId).subscribe((x:Persone)=>this.persone=x);
  }
  deleteContact(id:number){
    this.restService.DeleteContact(id,this.personeId).subscribe(()=>this.getContactsByPersoneId(this.personeId));
     this.router.navigate(["/contacts/"+this.personeId]);
  }

}
