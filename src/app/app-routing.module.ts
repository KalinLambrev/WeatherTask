import { ErrorComponent } from './error.component';
import { ForecatsComponentComponent } from './forecats-component/forecats-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponentComponent,
  },
  {
    path: 'forecast',
    component: ForecatsComponentComponent,
  },
{
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
},
{
    path: 'error',
    component: ErrorComponent
},
{
    path: '**', component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
