import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero products-hero"><div class="container"><div class="eyebrow light"><span></span> PRODUCTS & SOLUTIONS</div><h1>Made for the way<br><em>your facility works.</em></h1><p>Explore common product categories. Final specifications are confirmed against each project requirement.</p></div></section>
    <section class="section-pad"><div class="container"><div class="row g-4">
      <div class="col-md-6 col-lg-4" *ngFor="let product of products"><article class="product-card h-100"><div class="product-art"><i class="bi" [class]="product.icon"></i><span>{{ product.code }}</span></div><div class="product-info"><h4>{{ product.title }}</h4><p>{{ product.text }}</p><a routerLink="/contact" class="text-link">Enquire about this <i class="bi bi-arrow-up-right"></i></a></div></article></div>
    </div><p class="small text-secondary mt-4">Product categories shown are indicative. Please contact AMPERE AUTOMATION to confirm current product availability, specifications and customization options.</p></div></section>
    <section class="cta-section"><div class="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3"><h2>Need a customized<br><em>panel or control solution?</em></h2><a routerLink="/contact" class="btn btn-orange btn-lg">Send your requirement <i class="bi bi-arrow-right ms-2"></i></a></div></section>
  `
})
export class ProductsComponent {
  products = [
    { code:'AA / 01', icon:'bi-cpu', title:'Electrical Control Panels', text:'Control panels configured to suit machinery, equipment and process requirements.' },
    { code:'AA / 02', icon:'bi-grid-3x3-gap', title:'Power Distribution Boards', text:'Distribution board solutions for electrical power management.' },
    { code:'AA / 03', icon:'bi-toggles', title:'PLC Control Panels', text:'Programmable control panel concepts for automated applications.' },
    { code:'AA / 04', icon:'bi-sliders', title:'MCC Panels', text:'Motor control centre requirements for industrial equipment and systems.' },
    { code:'AA / 05', icon:'bi-arrow-left-right', title:'VFD Control Panels', text:'Variable frequency drive control solutions for suitable motor applications.' },
    { code:'AA / 06', icon:'bi-box-seam', title:'Custom Panel Assemblies', text:'Panel assembly discussions based on customer drawings and specifications.' }
  ];
}
