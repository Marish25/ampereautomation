import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="eyebrow light"><span></span> ELECTRICAL & INDUSTRIAL AUTOMATION</div>
        <h1>Engineering control.<br><em>Powering progress.</em></h1>
        <p class="hero-lead">Reliable electrical panel and automation solutions designed around the needs of your operation.</p>
        <div class="d-flex flex-wrap gap-3 mt-4">
          <a class="btn btn-orange btn-lg" routerLink="/contact">Discuss your project <i class="bi bi-arrow-up-right ms-2"></i></a>
          <a class="btn btn-outline-light btn-lg" routerLink="/services">Explore services</a>
        </div>
        <div class="hero-note"><i class="bi bi-check-circle-fill"></i> Chennai-based electrical & automation company</div>
      </div>
      <div class="hero-side-label">DESIGN · BUILD · SUPPORT</div>
    </section>

    <section class="trust-band">
      <div class="container">
        <div class="row g-3 align-items-center">
          <div class="col-md-4"><span class="trust-kicker">OUR FOCUS</span><strong>Dependable engineering solutions</strong></div>
          <div class="col-md-4"><span class="trust-kicker">OUR APPROACH</span><strong>Practical. Precise. Customer-led.</strong></div>
          <div class="col-md-4"><span class="trust-kicker">OUR LOCATION</span><strong>Chennai, Tamil Nadu, India</strong></div>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="row align-items-end mb-5">
          <div class="col-lg-7">
            <div class="eyebrow"><span></span> WHAT WE DO</div>
            <h2 class="section-title">Smart solutions for<br><em>working industries.</em></h2>
          </div>
          <div class="col-lg-5"><p class="section-intro">From electrical control panels to industrial automation, we help businesses plan and implement solutions that support safe, consistent operations.</p></div>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3" *ngFor="let item of services">
            <article class="service-card h-100">
              <div class="service-icon"><i class="bi" [class]="item.icon"></i></div>
              <h5>{{ item.title }}</h5><p>{{ item.text }}</p>
              <a routerLink="/services" class="text-link">Explore service <i class="bi bi-arrow-up-right"></i></a>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="split-feature">
      <div class="feature-image"></div>
      <div class="feature-copy">
        <div class="eyebrow light"><span></span> BUILT AROUND YOUR NEEDS</div>
        <h2>Engineering that works as hard as you do.</h2>
        <p>Every facility has its own requirements. We take a practical approach to understanding the application, discussing specifications and identifying a suitable electrical or automation solution.</p>
        <a class="btn btn-outline-light mt-3" routerLink="/about">Know more about us <i class="bi bi-arrow-right ms-2"></i></a>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5">
            <div class="eyebrow"><span></span> WHY AMPERE AUTOMATION</div>
            <h2 class="section-title">A clear approach.<br><em>A dependable result.</em></h2>
            <p class="section-intro">We value clear communication, thoughtful planning and quality-focused execution at every stage of a project.</p>
            <a routerLink="/contact" class="btn btn-blue mt-3">Start a conversation <i class="bi bi-arrow-up-right ms-2"></i></a>
          </div>
          <div class="col-lg-7">
            <div class="value-list">
              <div><b>01</b><span><strong>Application-focused</strong><small>Solutions considered around your equipment and operating requirements.</small></span></div>
              <div><b>02</b><span><strong>Quality-minded</strong><small>Attention to workmanship, components and project details.</small></span></div>
              <div><b>03</b><span><strong>Customer communication</strong><small>Clear discussions from initial enquiry through project delivery.</small></span></div>
              <div><b>04</b><span><strong>Support-oriented</strong><small>A responsive approach to questions and service enquiries.</small></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4">
        <div><div class="eyebrow light"><span></span> HAVE A REQUIREMENT?</div><h2>Let’s build a solution<br><em>for your next project.</em></h2></div>
        <a routerLink="/contact" class="btn btn-orange btn-lg">Talk to our team <i class="bi bi-arrow-up-right ms-2"></i></a>
      </div>
    </section>
  `
})
export class HomeComponent {
  services = [
    { icon: 'bi-cpu', title: 'Control Panels', text: 'Electrical control panel solutions planned around your application.' },
    { icon: 'bi-diagram-3', title: 'Industrial Automation', text: 'Control and automation concepts for industrial processes.' },
    { icon: 'bi-distribute-horizontal', title: 'Distribution Boards', text: 'Power distribution solutions for electrical installations.' },
    { icon: 'bi-gear-wide-connected', title: 'Machine Controls', text: 'Control solutions for equipment and machinery requirements.' }
  ];
}
