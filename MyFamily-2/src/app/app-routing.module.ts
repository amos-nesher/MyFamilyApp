import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'family', loadChildren: './family/family.module#FamilyPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
