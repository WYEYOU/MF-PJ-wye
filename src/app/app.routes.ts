import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {path: '' , component:HeaderComponent},
    {path: 'login' , component:LoginComponent}
];
