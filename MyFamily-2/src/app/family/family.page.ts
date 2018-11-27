import { Component, OnInit, OnDestroy } from '@angular/core';
import { FamilyMemebersService, FamilyMember } from '../services/family-memebers.service';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
})
export class FamilyPage implements OnInit, OnDestroy {
  public familyMembers: Array<FamilyMember> = [];
  private unsubscribe: Unsubscribable;

  constructor(familyMemeberService: FamilyMemebersService) { 
    this.unsubscribe = familyMemeberService.getFamilyMemebersSubject().subscribe((familyMemebers) => {
      this.familyMembers = familyMemebers;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

}
