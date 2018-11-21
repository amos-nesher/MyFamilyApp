import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ChatPage } from '../chat/chat.page';
import { TasksPage } from '../tasks/tasks.page';
import { LocationPage } from '../location/location.page';
import { FamilyPage } from '../family/family.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(chat:chat)',
        pathMatch: 'full',
      },
      {
        path: 'chat',
        outlet: 'chat',
        component: ChatPage
      },
      {
        path: 'tasks',
        outlet: 'tasks',
        component: TasksPage
      },
      {
        path: 'location',
        outlet: 'location',
        component: LocationPage
      },
      {
        path: 'family',
        outlet: 'family',
        component: FamilyPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(chat:chat)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
