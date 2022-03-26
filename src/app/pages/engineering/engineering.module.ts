import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormulationComponent } from 'src/app/components/formulation/formulation.component';

const routes: Routes = [
    {
        path: 'formulation',
        component: FormulationComponent,
    },
    {
        path: 'density-adjustment',
    },
    {
        path: 'default-formulation',
    },
    {
        path: 'height= adjustment',
    },
    {
        path: 'formulatoin-guide',
    },
    {
        path: 'faq',
    },
    {
        path: 'tests',
    },
    {
        path: '',
        redirectTo: 'formulation',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EngineeringModule {}
