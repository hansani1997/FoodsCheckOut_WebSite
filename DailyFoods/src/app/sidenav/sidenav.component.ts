import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  openNav()  {
    document.getElementById("mySidenav").style.width = "300px";
    
      //document.body.style.height = '100vh';
      //document.body.style.overflowY = 'hidden';
      
    
    
    
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.body.style.height = '';
    //document.body.style.overflowY = '';
    
  }


}
