import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public num1 : number=0;
  public num2 : number=0;
  public res : number=0;
  constructor() { }
    
     public sumar():number{
      return this.res=this.num1+this.num2;
     
     }

     public restar():number{
      return this.res=this.num1-this.num2;
     
     }

     public multiplicar():number{
      return this.res=this.num1*this.num2;
     
     }

     public dividir():number{
      return this.res=this.num1/this.num2;
     
     }

  ngOnInit() {
    
  }

}
