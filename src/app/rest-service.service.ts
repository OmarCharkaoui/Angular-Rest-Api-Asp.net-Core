import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persone } from './persone/Persone.Data';
import { Contact } from './persone/Contact';

const Urlapi = "http://localhost:5000/api/Persone/";

//PageNumber,PageSize
@Injectable({
  providedIn: 'root'
})
export class RestServiceService {


  constructor(private http :HttpClient) { }

  FetchedAll(pageNumber: string, pageSize: string){

    let httpParams = new HttpParams()
            .set("PageNumber",pageNumber)
            .set("pageSize",pageSize);
          
    let result = this.http.get(Urlapi,{params: httpParams,observe:'response'});
    return result;
  }

FetchedContactsByPersoneId(personeId:number){

  let result = this.http.get(Urlapi + personeId + '/Contact');
  return result;
}
 
AddPersone(persone:Persone){
  let httpHeaders = new HttpHeaders({
		'Content-Type': 'application/json'
	});
let result = this.http.post<Persone>(Urlapi,persone,{headers: httpHeaders});
//console.log(result);
return result;
}

GetPersoneById(id:string){
  return this.http.get<Persone>(Urlapi + id);
}

EditPersone(id:number,persone:Persone){
  let httpHeaders = new HttpHeaders({
		'Content-Type': 'application/json'
	});
return this.http.put<Persone>(Urlapi + id,persone,{headers: httpHeaders});

}
DeletePersone(id:number){
  return this.http.delete<Persone>(Urlapi+id);
}

AddContactToaPersone(personeId:number,contact:Contact){
  let httpHeaders = new HttpHeaders({
		'Content-Type': 'application/json'
	});
return this.http.post(Urlapi +personeId+ "/Contact",contact,{headers: httpHeaders});
}

DeleteContact(Contactid:number,personeId:number){
return this.http.delete(Urlapi + personeId + "/Contact/" +Contactid );
}
GetContactById(peronseId:number,contactId:number){
  return this.http.get(Urlapi + peronseId + "/Contact/" + contactId);
}

EditContact(personeId:Number,contactId:number,contact:Contact){
  let httpHeaders = new HttpHeaders({
		'Content-Type': 'application/json'
	});
  return this.http.put(Urlapi + personeId + "/Contact/" + contactId,contact,{headers: httpHeaders});
}

}
