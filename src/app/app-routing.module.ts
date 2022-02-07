import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './Alunos/Alunos.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { PerfilComponent } from './Perfil/Perfil.component';
import { ProfessoresComponent } from './Professores/Professores.component';

const routes: Routes = [
  {path: "Dashboard", component: DashboardComponent}, //Primeiro criar no appcomponent.html e linkar o componente aqui.
  {path: '', redirectTo: 'Dashboard', pathMatch:'full'}, // Aqui diz que quando não colocar nada, ele vai redirecionar "redirectTO" para dashboard 
  {path: 'Professores', component: ProfessoresComponent},
  {path: 'Alunos', component: AlunosComponent},
  {path: "Perfil", component: PerfilComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
