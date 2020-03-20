import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersoneComponent } from './persone/persone.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CreatePersoneComponent } from './create-persone/create-persone.component';
import { EditPersoneComponent } from './edit-persone/edit-persone.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'persone-list' },
   { path: 'persone-list', component: PersoneComponent },
   { path:'contacts/:id', component: ContactsComponent  },
   { path:'create-persone', component: CreatePersoneComponent},
   { path:'edit-persone/:id', component: EditPersoneComponent},
   { path:'create-contact/:id',component:CreateContactComponent},
   { path:'edit-contact/:id/:personeId',component:EditContactComponent}

 ];
//
//RouterModule

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
