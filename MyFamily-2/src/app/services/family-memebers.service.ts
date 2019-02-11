import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { familyMockData } from './family-memebers.mock';

export interface Position {
  lat: number;
  lng: number;
}

export interface FamilyMember {
  id: string;
  name: string;
  phone: string;
  location?: Position;
  locationEnable: boolean;
}



@Injectable({
  providedIn: 'root'
})
export class FamilyMemebersService {

  private familyMemebersSubject = new BehaviorSubject<Array<FamilyMember>>([]);
  private userId: string;

  constructor() { 
    this.familyMemebersSubject.next(familyMockData);
    this.userId = 'id-1';
  }

  public getFamilyMemebersSubject() {
    return this.familyMemebersSubject;
  }

  public getFamilyMember(id: string): FamilyMember {
    return familyMockData.filter(m => m.id === id)[0];
  }

  public isUser(id: string): boolean {
    return this.userId === id;
  }

  public getUser(): FamilyMember {
    return this.getFamilyMember(this.userId);
  }
}
