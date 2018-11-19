import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { TasksPageModule } from '../tasks/tasks.module';
import { ChatPageModule } from '../chat/chat.module';
import { LocationPageModule } from '../location/location.module';
import { FamilyPageModule } from '../family/family.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ChatPageModule,
    TasksPageModule,
    LocationPageModule,
    FamilyPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
