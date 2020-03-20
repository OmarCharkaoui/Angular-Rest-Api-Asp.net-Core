import { Component, OnInit } from '@angular/core';
import { Persone } from '../persone/Persone.Data';
import { RestServiceService } from '../rest-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-persone',
  templateUrl: './edit-persone.component.html',
  styleUrls: ['./edit-persone.component.css']
})
export class EditPersoneComponent implements OnInit {

  personeId:any;
  persone:Persone;
  constructor(private restService:RestServiceService,
    private router: Router,
    private routeActive: ActivatedRoute) { }

  ngOnInit() {
    this.personeId =  this.routeActive.snapshot.params["id"];
    this.getPersoneById();
 
  }

  getPersoneById(){
    this.restService.GetPersoneById(this.personeId).subscribe(x=>this.persone = x);
  }

  editPersone(){

    this.restService.EditPersone(+this.persone.id,this.persone)
    .subscribe(()=>this.router.navigate(["/persone-list"]));
    
    


  }

}
