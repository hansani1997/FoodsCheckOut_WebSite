import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public list=[];
  constructor(private DataService:DataService) { }

  ngOnInit(): void {
    this.DataService.getdata().subscribe((r)=>{
      this.list=r;
    })
  }

}
