import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

export interface FamilyMember {
  name: string;
  phone: string;
}

const mockData: Array<FamilyMember> = [
  {
    name: 'Amos',
    phone: '0546372704'
  },
  {
    name: 'Wife',
    phone: '0541112222'
  },
  {
    name: 'Boy',
    phone: '0542223333'
  },
  {
    name: 'Girl',
    phone: '0544445555'
  }
]

@Injectable({
  providedIn: 'root'
})
export class FamilyMemebersService {

  private familyMemebersSubject = new BehaviorSubject<Array<FamilyMember>>([]);

  constructor() { 
    this.familyMemebersSubject.next(mockData);
  }

  public getFamilyMemebersSubject() {
    return this.familyMemebersSubject;
  }
}
