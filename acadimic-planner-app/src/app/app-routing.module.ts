import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationWorkExperienceComponent } from './education-work-experience/education-work-experience.component';
import { BlogsArticlesComponent } from './blogs-articles/blogs-articles.component';
import { ArticleComponent } from './blogs-articles/article/article.component';
import { ExperienceComponent } from './education-work-experience/experience/experience.component';
import { ProjectComponent } from './portfolio/project/project.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: "Anas BOUKHLIJA",
      description: "Hello there! I'm Anas BOUKHLIJA, a passionate and innovative Full Stack Developer with expertise in a range of technologies. I specialize in Java JEE, Spring Framework, Express.js, Nest.js, Angular, Next.js and more... crafting dynamic and efficient web and mobile applications that deliver a seamless user experience."
    }
  },
  {
    path: 'portfolio', component: PortfolioComponent,
    data: {
      title: "Portfolio - Anas BOUKHLIJA",
      description: "Welcome to my project playground! 🎨✨ Peek into a world of creative sparks and digital wonders. Let the projects do the talking – a snapshot of passion and innovation awaits your curiosity. Let's dive in together! 🚀🔍"
    }
  },

  { path: 'portfolio/:code', component: ProjectComponent },
  {
    path: 'skills', component: SkillsComponent,
    data: {
      title: "Skills - Anas BOUKHLIJA",
      description: "Welcome to my Skills hub! 🛠️💡 Explore the essentials – coding, design, data, and more. Each skill is a key to unlocking unique project potential. Ready to see how these skills translate into impactful results? Let's dive in! 💻🚀"
    }
  },
  {
    path: 'education-work-experience', component: EducationWorkExperienceComponent,
    data: {
      title: "Education and Work Experience - Anas BOUKHLIJA",
      description: "Explore my academic and professional voyage! 🎓💼 Dive into the chapters of my education and work experience—a concise showcase of the milestones that have shaped my skills. Ready for a brief yet insightful journey? Let's get started! 🚀📚"
    }
  },
  { path: 'education-work-experience/:code', component: ExperienceComponent },
  {
    path: 'blogs-articles', component: BlogsArticlesComponent,
    data: {
      title: "Blogs/Articles - Anas BOUKHLIJA",
      description: "Explore my collection of blogs and articles! 📝📚 Discover insightful content on various topics—an enriching journey into my thoughts and experiences. Dive into the words that encapsulate my ideas and perspectives. Enjoy the read! 🚀"
    }
  },
  { path: 'blogs-articles/:code', component: ArticleComponent }
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


// { 
//   path: '',                             
//   loadChildren: () => import('./home/home.component').then( m => m.HomeComponent)
// },

// { 
//   path: 'portfolio',                    
//   loadChildren: () => import('./portfolio/portfolio.component').then( m => m.PortfolioComponent)
// },

// { 
//   path: 'skills',                       
//   loadChildren: () => import('./skills/skills.component').then( m => m.SkillsComponent)
// },

// { 
//   path: 'education-work-experience',    
//   loadChildren: () => import('./education-work-experience/education-work-experience.component').then( m => m.EducationWorkExperienceComponent)
// },

// { 
//   path: 'blogs-articles',               
//   loadChildren: () => import('./blogs-articles/blogs-articles.component').then( m => m.BlogsArticlesComponent)
// }