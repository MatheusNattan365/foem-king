import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { CoreModule } from 'src/app/core.module';
import { AngularFireAuth } from '@angular/fire/compat/auth';

const routes: Routes = [
    {
        path: 'sign-in',
        pathMatch: 'full',
        component: LoginComponent,
    },
    {
        path: 'sign-up',
        pathMatch: 'full',
        component: LoginComponent,
    },
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [LoginComponent],
    imports: [RouterModule.forChild(routes), CoreModule],
})
export class AuthModule {}
