import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero projects-hero"><div class="container"><div class="eyebrow light"><span></span> PROJECT EXPERIENCE</div><h1>Built around real<br><em>operational needs.</em></h1><p>A look at the kinds of applications our electrical and automation capabilities are designed to support.</p></div></section>
    <section class="section-pad"><div class="container"><div class="row g-4">
      <div class="col-md-6 col-lg-4" *ngFor="let item of applications"><article class="application-card h-100"><div class="application-icon"><i class="bi" [class]="item.icon"></i></div><div class="application-body"><span>{{ item.category }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div></article></div>
    </div><div class="notice-panel mt-5"><i class="bi bi-info-circle"></i><p><strong>Project gallery coming soon.</strong><br>We are preparing verified project photographs and case studies. The examples above describe application areas, not completed or customer-specific project claims.</p></div></div></section>
    <section class="cta-section"><div class="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3"><h2>Have a project in mind?<br><em>Let’s discuss it.</em></h2><a routerLink="/contact" class="btn btn-orange btn-lg">Talk to our team <i class="bi bi-arrow-up-right ms-2"></i></a></div></section>
  `
})
export class ProjectsComponent {
  applications = [
    { icon:'bi-boxes', category:'MATERIAL HANDLING', title:'Conveyor Systems', text:'Control requirements for conveyor operations and material movement.' },
    { icon:'bi-building-gear', category:'INDUSTRIAL FACILITIES', title:'Factory Automation', text:'Electrical control and automation needs across production environments.' },
    { icon:'bi-gear-wide-connected', category:'MACHINERY', title:'Machine Control', text:'Control panel and operating requirements for industrial machinery.' },
    { icon:'bi-lightning', category:'POWER SYSTEMS', title:'Power Distribution', text:'Distribution and protection requirements for electrical installations.' },
    { icon:'bi-cpu', category:'PROCESS CONTROL', title:'PLC Applications', text:'Programmable control concepts for equipment and process applications.' },
    { icon:'bi-sliders2', category:'CUSTOM SOLUTIONS', title:'Panel Integration', text:'Panel integration discussions based on drawings and technical scope.' }
  ];
}
