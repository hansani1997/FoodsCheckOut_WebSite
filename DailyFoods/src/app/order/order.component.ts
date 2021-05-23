import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  idn:number;

  b1:Record <string, any>= {"chicken RS:" : 200,"Egg RS":200,"Cheese RS":250,"vege Burger RS":300,"ham with and cheese Burger RS":400 };
  r1 :Record <string, any>={"chicken rise" :300,"Egg rise":200,"vege Rise":300,"mix Rise":400,"Buriyani":200,"Nasiguran":200};
  k1 :Record <string, any>={"chicken kottu":300,"Egg kottu":150,"vege kottu":200,"mix kottu":600,"cheese kottu":500,"beef kottu":700};
  d1 :Record <string, any>={"watalappan":250,"pudding":150,"ice cream":50,"lochi special":200};
 
  nb1 :string[]=["chicken","Egg","Cheese","vege Burger","ham with and cheese Burger"];
  nr1 :string[]=["ch_rise","Egg rise","vege Rise","mix Rise","Buriyani","Nasiguran"];
  nk1 :string[]=["ch_kottu","Egg kottu","vege kottu","mix kottu","cheese kottu","beef kottu"];
  nd1 :string[]=["watalappan","pudding","ice cream","lochi special"];

  item:Record <string, any>;

  sub:any[]=[0,0,0,0,0];
  bsub:any[]=[0,0,0,0,0];
  rsub:any[]=[0,0,0,0,0];
  ksub:any[]=[0,0,0,0,0];
  dsub:any[]=[0,0,0,0,0];
  
  burgertotal:number;
  risetotal:number;
  kottutotal:number;
  deserttotal:number;

  myCollection={
    itemName:"",
    quentity:"",
  };
  public list:string[];
  num:any[];
  nid:number=0;
  total=0;

  ischeckout=false;

  constructor() { }
 
  burger(){
    this.idn=0;
    this.num=this.nb1;
    this.item=this.b1;
    this.sub =this.bsub;
    
   console.log(this.item); 
  }
  rise(){
    this.idn=1;
    this.num=this.nr1;
    this.item=this.r1;
    //console.log(this.sub)
    this.sub=this.rsub;
   //console.log(this.item); 
  }
  kottu(){
    this.idn=2;
    this.num=this.nk1;
    this.item=this.k1;
    this.sub=this.ksub;
   //console.log(this.item); 
  }
  desert(){
    this.idn=3;
    this.num=this.nd1;
    this.item=this.d1;
    this.sub=this.dsub;
   //console.log(this.item); 
  }
  indexTracker(index: number, item: any):any {
    //console.log(index);
    return index;
  }
  ngOnInit(): void {

  }
  
  onValue(i:any,x:any,j:any){
    //  console.log(i);
    //  console.log(j); 
    // console.log(x); 
    this.sub[x]=this.num[x]*j;
    this.myCollection.itemName=i;
    this.myCollection.quentity=x;
    console.log(this.sub);

    
  }
  setTotal(){

     this.sub = this.bsub.map((a, i) => a + this.rsub[i]);
     this.sub = this.sub.map((a, i) => a + this.ksub[i]);
     this.sub = this.sub.map((a, i) => a + this.dsub[i]);
    this.total=this.sub.reduce((a, b) => a + b, 0)
    
    this.burgertotal=this.bsub.reduce((a, b) => a + b, 0);
    this.risetotal=this.rsub.reduce((a, b) => a + b, 0);
    this.kottutotal=this.ksub.reduce((a, b) => a + b, 0);
    this.deserttotal=this.dsub.reduce((a, b) => a + b, 0);
    if(this.total==0){
      alert("Can you plz order Somthing....");
    }
    console.log(this.sub);
  }
  clear(){

    this.total=0;
    this.burgertotal=0;
    this.risetotal=0;
    this.kottutotal=0;
    this.deserttotal=0;
    
  }

}
