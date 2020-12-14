import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Usuario} from '../usuario';
@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    usuarios: Usuario[] = [];

    selectedUsuario: Usuario = { cve:'', snombre:'', sapepat: ''};

    constructor(private apiService: ApiService) { }

ngOnInit() {
this.readUsuario();
}
readUsuario()
{
this.apiService.readUsuario().subscribe((usuarios: Usuario[])=>{
this.usuarios = usuarios;
console.log(this.usuarios);
})
}

createOrUpdateUsuario(form: { value: Usuario; }){

if( this.selectedUsuario && this.selectedUsuario.cve) {


    this.apiService.createUsuario(form.value).subscribe((usuarios: Usuario)=>{
        this.readUsuario();
        console.log("Usuario creado, ", usuarios);
    });
    
    form.value.cve = this.selectedUsuario.cve;
    console.log(this.selectedUsuario.cve);
    this.apiService.updateUsuario(form.value).subscribe((usuarios: Usuario)=>{
        this.readUsuario();
        console.log(form.value.cve);
        console.log("Usuario actualizado" , usuarios);
    });
}

}

selectUsuario(usuarios: Usuario){
this.selectedUsuario = usuarios;
}

deleteUsuario(cve: string){
this.apiService.deleteUsuario(cve).subscribe((usuarios: Usuario)=>{
    this.readUsuario();
    console.log("usuario eliminado, ", usuarios);
});
this.readUsuario();
}
}