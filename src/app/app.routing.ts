import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { CellnurComponent } from './cellnur/cellnur.component';
import { DobComponent } from './dob/dob.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'address', component: AddressComponent },
    { path: 'cellno', component: CellnurComponent },
    { path: 'dob', component: DobComponent },
    { path: 'email', component: EmailComponent },
    { path: 'password', component: PasswordComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
