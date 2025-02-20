import { Routes } from '@angular/router';
import { LoginComponent } from './ui/auth/login/login.component';
import { HotelListComponent } from './ui/admin/hotel-list/hotel-list.component';

export const routes: Routes = [
 { path: 'login', component: LoginComponent},
 { path: 'hotel-list', component: HotelListComponent },
 { path: 'create-hotel', component: HotelListComponent }
];
