import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: "Anas BOUKHLIJA",
      description: "Hello there! I'm Anas BOUKHLIJA, a passionate and innovative Full Stack Developer with expertise in a range of technologies. I specialize in Java JEE, Spring Framework, Express.js, Nest.js, Angular, Next.js and more... crafting dynamic and efficient web and mobile applications that deliver a seamless user experience."
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
