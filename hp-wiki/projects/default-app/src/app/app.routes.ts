import { Routes } from '@angular/router';
import { ListPersonsComponent } from './features/persons/components/list-persons/list-persons.component';
import { NotFoundComponent } from './shared/imotep/not-found/not-found.component';
import { EditPersonComponent } from './features/persons/components/edit-person/edit-person.component';

export const routes: Routes = [
    {
        path: 'persons/:id',
        component: EditPersonComponent
    },

    {
        path: 'persons',
        component: ListPersonsComponent,
    },

    {
        path: 'creatures',
        loadComponent: () => import('../app/features/creatures/components/list-creatures/list-creatures.component').then(item => item.ListCreaturesComponent)
    },
    
    {
        path: '**',
        component: NotFoundComponent
    }
];
