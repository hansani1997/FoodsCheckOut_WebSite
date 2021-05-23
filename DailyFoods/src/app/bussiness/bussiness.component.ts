import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
export interface ExampleTab {
  label: string;
  img1: string;
  img2: string;
  img3:string;
  h1,h2,h3,p1,p2,p3:string;
}
@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Employee',img1: 'assets/p7.PNG',img2:'assets/p8.PNG',img3:'assets/p9.PNG',h1:'Provide meals where they work',h2:'Place a group order',h3:'Offer food for virtual meetings',
          p1:'For many businesses, home is the new office. Create a meal program and let your people get local favorites delivered right to their doorstep. Learn more here.',
          p2:'Invite your co-workers to join a shared cart for a group order.',
          p3:'Team syncs. Workshops. Holiday celebrations. Whatever the virtual occasion, provide a voucher for Uber Eats and cover the cost of meals for your team.'
        },
        {label: 'customer',img1: 'assets/p10.PNG',img2:'assets/p11.PNG',img3:'assets/p12.PNG',h1:'Improve customer satisfaction',h2:'Drive virtual event attendance',h3:'Buy lunch for sales prospects',
          p1:'Show your appreciation for their business with a voucher or an Uber Eats gift card they can use to get tasty treats delivered right to them.',
          p2:'Engage customers during virtual conferences and meetings. Distribute vouchers to let them choose from local restaurants while you pick up the bill.',
          p3:'Cover the cost of lunch by sending vouchers to your top sales prospects. Food always helps to get the conversation started.'
        }
          
        ]);
      }, 1000);
    });
  }

  

}
