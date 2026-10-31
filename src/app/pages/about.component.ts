import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero about-hero"><div class="container"><div class="eyebrow light"><span></span> ABOUT AMPERE AUTOMATION</div><h1>Engineering with<br><em>purpose and precision.</em></h1><p>Practical electrical and automation solutions for modern operations.</p></div></section>
    <section class="section-pad"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-6"><div class="eyebrow"><span></span> WHO WE ARE</div><h2 class="section-title">Focused on dependable<br><em>electrical solutions.</em></h2><p class="body-copy">AMPERE AUTOMATION is an electrical automation company based in Chennai, Tamil Nadu. We focus on electrical control panels, distribution solutions and customized automation requirements for industrial and commercial applications.</p><p class="body-copy">Our goal is to understand each customer's application and work towards a solution that is practical, reliable and suited to the project scope.</p><a routerLink="/contact" class="btn btn-blue mt-3">Connect with us <i class="bi bi-arrow-up-right ms-2"></i></a></div><div class="col-lg-6"><div class="about-photo"></div></div></div></div></section>
    <section class="soft-section section-pad"><div class="container"><div class="text-center mb-5"><div class="eyebrow justify-content-center"><span></span> OUR PRINCIPLES</div><h2 class="section-title">What guides <em>our work.</em></h2></div><div class="row g-4"><div class="col-md-4"><div class="principle-card"><i class="bi bi-bullseye"></i><h4>Purpose</h4><p>Understand the requirement before recommending a solution.</p></div></div><div class="col-md-4"><div class="principle-card"><i class="bi bi-shield-check"></i><h4>Quality</h4><p>Keep workmanship, component selection and project details in focus.</p></div></div><div class="col-md-4"><div class="principle-card"><i class="bi bi-people"></i><h4>Partnership</h4><p>Build long-term customer relationships through clear communication.</p></div></div></div></div></section>
    <section class="cta-section"><div class="container d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3"><h2>Have an electrical or<br><em>automation requirement?</em></h2><a routerLink="/contact" class="btn btn-orange btn-lg">Contact us <i class="bi bi-arrow-right ms-2"></i></a></div></section>
  `
})
export class AboutComponent {}
