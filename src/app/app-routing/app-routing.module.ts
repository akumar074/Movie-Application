// Importing Liberaries, Modules and Components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { MovielistComponent } from 'app/movielist/movielist.component';
// Routes Object with app Route properties
const routes: Routes = [
  { path: '', redirectTo: 'list/godfather', pathMatch: 'full' },
  { path: 'list/:moviename', component: MovielistComponent }
];
// NgModule Metadata
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
// Exporting AppRouting Module class
export class AppRoutingModule { }
