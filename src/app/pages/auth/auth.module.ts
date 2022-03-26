import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { AppModule } from 'src/app/app.module';

const routes: Routes = [
    {
        path: 'signin',
        pathMatch: 'full',
        component: LoginComponent,
    },
    {
        path: 'signup',
        pathMatch: 'full',
        component: LoginComponent,
    },
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
