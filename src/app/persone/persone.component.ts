import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service';
import { Persone } from './Persone.Data';
import { HttpResponse } from '@angular/common/http';
import { pagination } from './Pagination.Data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css']
})
export class PersoneComponent implements OnInit {

  pageNumber:string = "1";
  pageSize:string = "6" ;

  persone:Persone[];
  pagination:pagination;

  constructor(private restService:RestServiceService,private router: Router) { }
  ngOnInit() {
    this.getPersoneWithPagintion();
  }

getPersoneWithPagintion(pageNumber: string = this.pageNumber, pageSize: string = this.pageSize){
  this.restService.FetchedAll(pageNumber,pageSize).subscribe((data:HttpResponse<Persone[]>)=>
    {
     this.pagination = JSON.parse( data.headers.get("X-Pagination"));
     this.persone = data.body ;
    });
}
deletePersone(id:number){
  this.restService.DeletePersone(id)
  .subscribe(()=>this.getPersoneWithPagintion());
 
  
//  this.router.navigate(['/persone-list']);

}



}
