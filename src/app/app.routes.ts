import { Routes } from '@angular/router';
import {ClientComponent} from "./client/client.component";
import {DirectivaComponent} from "./directiva/directiva.component";

export const routes: Routes = [
  {path:'',redirectTo:'/clients', pathMatch:'full'},
  {path:'clientes',component:ClientComponent},
  {path:'directivas',component:DirectivaComponent},
];
