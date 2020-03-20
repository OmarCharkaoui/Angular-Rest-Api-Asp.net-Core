import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service';
import { Persone } from '../persone/Persone.Data';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-persone',
  templateUrl: './create-persone.component.html',
  styleUrls: ['./create-persone.component.css']
})
export class CreatePersoneComponent implements OnInit {

  persone:Persone = new Persone();

  constructor(private restService:RestServiceService,private router: Router) { }

  ngOnInit() {
  }
  addPersone(myform:NgForm){
    this.persone.name = myform.form.controls['name'].value;
    this.persone.phone=myform.form.controls['phone'].value;

    this.restService.AddPersone(this.persone).subscribe(()=>{this.router.navigate(['/persone-list'])});

   
  }
}
