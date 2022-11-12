import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';

const routes: Routes = [
  {path: 'recipes', component: RecipesComponent},
  {path: 'saved-recipes', component: SavedRecipesComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
