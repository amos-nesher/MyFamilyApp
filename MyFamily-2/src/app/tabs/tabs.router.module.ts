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
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: '../chat/chat.module#ChatPageModule'
          }
        ]
      },
      {
        path: 'tasks',
        children: [
          {
            path: '',
            loadChildren: '../tasks/tasks.module#TasksPageModule'
          }
        ]
      },
      {
        path: 'location',
        children: [
          {
            path: '',
            loadChildren: '../location/location.module#LocationPageModule'
          }
        ]
      },
      {
        path: 'family',
        children: [
          {
            path: '',
            loadChildren: '../family/family.module#FamilyPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/chat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
