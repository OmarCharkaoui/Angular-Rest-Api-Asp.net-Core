import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PersoneComponent } from './persone/persone.component';
import { HttpClientModule } from '@angular/common/http';
import { RestServiceService } from './rest-service.service';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactsComponent } from './contacts/contacts.component';
import { CreatePersoneComponent } from './create-persone/create-persone.component';
import { EditPersoneComponent } from './edit-persone/edit-persone.component';
import { UpdatePersoneComponent } from './update-persone/update-persone.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PersoneComponent,
    ContactsComponent,
    CreatePersoneComponent,
    EditPersoneComponent,
    UpdatePersoneComponent,
    CreateContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule

  ],
  providers: [RestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
