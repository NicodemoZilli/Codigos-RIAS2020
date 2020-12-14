import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Materia} from '../materia'; 

@Component({
  selector: 'app-dashboardm',
  templateUrl: './dashboardm.component.html',
  styleUrls: ['./dashboardm.component.css']
})
export class DashboardmComponent implements OnInit {
  materias: Materia[]=[];
  selectedMateria: Materia = { cve:0, snombre:'', scredi:0};
  constructor(private apiService: ApiService) { }
  
  ngOnInit() {
  this.readMateria();
  }
  readMateria()
  {
  this.apiService.readMateria().subscribe((materias: Materia[])=>{
  this.materias = materias;
  console.log(this.materias); 
  })
  }
  createOrUpdateMaterias(form: { value: Materia; }){

    if( this.selectedMateria && this.selectedMateria.cve) {
        this.apiService.createMateria(form.value).subscribe((materias: Materia)=>{
            this.readMateria();
            console.log("Materia creada, ", materias);
        });
        form.value.cve = this.selectedMateria.cve;
        console.log(this.selectedMateria.cve);
        this.apiService.updateMateria(form.value).subscribe((materias: Materia)=>{
            this.readMateria();
            console.log(form.value.cve);
            console.log("Materia actualizada" , materias);
        });
    }
    
    }
  selectMateria(materias: Materia){ 
  this.selectedMateria = materias; 
  }
  
  deleteMateria(cve: number){
  this.apiService.deleteMateria(cve).subscribe((materias: Materia)=>{
      this.readMateria();
      console.log("Materia eliminada, ", materias);
  });
  this.readMateria();
  }
  } 
