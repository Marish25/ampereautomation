import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero services-hero"><div class="container"><div class="eyebrow light"><span></span> OUR SERVICES</div><h1>Solutions for your<br><em>electrical systems.</em></h1><p>Discuss your application with our team to identify the right project scope.</p></div></section>
    <section class="section-pad"><div class="container"><div class="row g-4">
      <div class="col-md-6" *ngFor="let service of services"><article class="detail-card h-100"><div class="detail-icon"><i class="bi" [class]="service.icon"></i></div><div><span class="card-number">{{ service.no }}</span><h3>{{ service.title }}</h3><p>{{ service.text }}</p><ul><li *ngFor="let point of service.points">{{ point }}</li></ul></div></article></div>
    </div></div></section>
    <section class="soft-section section-pad"><div class="container"><div class="row align-items-center g-4"><div class="col-lg-8"><div class="eyebrow"><span></span> START WITH A CONVERSATION</div><h2 class="section-title">Every project begins<br><em>with your requirement.</em></h2><p class="section-intro">Share your application, technical requirements and expected timeline. We can discuss the next steps with you.</p></div><div class="col-lg-4 text-lg-end"><a routerLink="/contact" class="btn btn-orange btn-lg">Request an enquiry <i class="bi bi-arrow-up-right ms-2"></i></a></div></div></div></section>
  `,
  styles: [':host { display:block; }']
})
export class ServicesComponent {
  services = [
    { no:'01', icon:'bi-cpu', title:'Electrical Control Panels', text:'Control panel solutions for industrial and commercial applications, based on the operating requirements of your equipment.', points:['Application and requirement discussion','Panel layout and component planning','Control wiring and panel assembly scope'] },
    { no:'02', icon:'bi-diagram-3', title:'Industrial Automation', text:'Automation and control solutions to support equipment operation and industrial processes.', points:['PLC-based control requirements','Control logic and process discussions','Machine and process automation'] },
    { no:'03', icon:'bi-lightning-charge', title:'Power Distribution', text:'Electrical distribution solutions planned around installation requirements and connected loads.', points:['Distribution board requirements','Electrical protection planning','Power distribution arrangement'] },
    { no:'04', icon:'bi-gear-wide-connected', title:'Machine Control Solutions', text:'Control solutions for machinery and material-handling applications.', points:['Machine control requirements','Conveyor and equipment control concepts','System integration discussions'] }
  ];
}
