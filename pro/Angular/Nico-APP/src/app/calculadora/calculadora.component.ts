import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public num1 : number;
  public num2 : number;
  public res : number;
  constructor() { }
    
     public sumar():number{
      return this.res=this.num1+this.num2;
     
     }

  ngOnInit() {
    
  }

}
