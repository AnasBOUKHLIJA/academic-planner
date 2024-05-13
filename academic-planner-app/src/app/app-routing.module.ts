import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UniversityManagementComponent } from './university-management/university-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { SchedulesManagementComponent } from './schedules-management/schedules-management.component';
import { AbsencesManagementComponent } from './absences-management/absences-management.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: "Tableau de bord",
      description: "Bienvenue sur le tableau de bord du planificateur académique. Obtenez un aperçu de vos activités académiques et gérez vos tâches efficacement."
    }
  },
  {
    path: 'login', component: LoginComponent,
    data: {
      title: "",
      description: "" 
    }
  },
  {
    path: 'university-management', component: UniversityManagementComponent,
    data: {
      title: "Gestion de l'Université",
      description: "Gérez efficacement les programmes académiques, les cours, le corps professoral et les étudiants de votre université avec le module de gestion de l'université du planificateur académique."
    }
  },
  {
    path: 'users-management', component: UsersManagementComponent,
    data: {
      title: "Gestion des Utilisateurs",
      description: "Gérez efficacement les utilisateurs, y compris les étudiants, le corps professoral et le personnel administratif, avec le module de gestion des utilisateurs du planificateur académique."
    }
  },
  {
    path: 'schedules-management', component: SchedulesManagementComponent,
    data: {
      title: "Gestion des Emplois du Temps",
      description: "Gérez les emplois du temps des cours, des examens et d'autres activités académiques avec efficacité à l'aide du module de gestion des emplois du temps du planificateur académique."
    }
  },
  {
    path: 'absences-management', component: AbsencesManagementComponent,
    data: {
      title: "Gestion des Absences",
      description: "Gérez les absences des étudiants et du personnel académique de manière organisée et efficace grâce au module de gestion des absences du planificateur académique."
    }
  },
];


@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })

    [RouterModule.forRoot([], { useHash: false })],
    //RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
