import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="top-strip">
      <div class="container d-flex justify-content-between align-items-center flex-wrap gap-2">
        <span><i class="bi bi-geo-alt me-2"></i>Chennai, Tamil Nadu</span>
        <span class="top-contact"><i class="bi bi-telephone me-2"></i><a href="tel:+919597747853">+91 95977 47853</a></span>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark site-nav sticky-top">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" routerLink="/">
          <span class="brand-mark"><i class="bi bi-lightning-charge-fill"></i></span>
          <span class="brand-copy"><strong>AMPERE</strong><small>AUTOMATION</small></span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <div class="navbar-nav ms-auto align-items-lg-center">
            <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
            <a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
            <a class="nav-link" routerLink="/services" routerLinkActive="active">Services</a>
            <a class="nav-link" routerLink="/products" routerLinkActive="active">Products</a>
            <a class="nav-link" routerLink="/projects" routerLinkActive="active">Projects</a>
            <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact</a>
            <a class="btn btn-orange nav-cta ms-lg-3" routerLink="/contact">Get a Quote <i class="bi bi-arrow-up-right ms-1"></i></a>
          </div>
        </div>
      </div>
    </nav>

    <main><router-outlet /></main>

    <footer class="site-footer">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4">
            <a class="navbar-brand d-inline-flex align-items-center gap-2 mb-3" routerLink="/">
              <span class="brand-mark"><i class="bi bi-lightning-charge-fill"></i></span>
              <span class="brand-copy"><strong>AMPERE</strong><small>AUTOMATION</small></span>
            </a>
            <p class="footer-muted">Practical electrical and automation solutions for industrial and commercial applications.</p>
          </div>
          <div class="col-6 col-lg-2">
            <h6>Explore</h6>
            <a routerLink="/about">About us</a><a routerLink="/services">Services</a><a routerLink="/products">Products</a><a routerLink="/projects">Projects</a>
          </div>
          <div class="col-6 col-lg-3">
            <h6>Contact</h6>
            <p><i class="bi bi-geo-alt me-2"></i>1/171, 1st Main Road, Nehru Nagar, Kottivakkam, Chennai – 600041</p>
            <p><i class="bi bi-telephone me-2"></i><a href="tel:+919597747853">+91 95977 47853</a></p>
          </div>
          <div class="col-lg-3">
            <h6>Let’s discuss your project</h6>
            <p class="footer-muted">Tell us what you need. Our team can help you discuss the right solution.</p>
            <a class="btn btn-orange" routerLink="/contact">Contact our team <i class="bi bi-arrow-right ms-1"></i></a>
          </div>
        </div>
        <div class="footer-bottom d-flex justify-content-between flex-wrap gap-2 mt-5 pt-4">
          <span>© {{ year }} AMPERE AUTOMATION. All rights reserved.</span>
          <span>Electrical • Controls • Automation</span>
        </div>
      </div>
    </footer>
  `
})
export class AppComponent {
  year = new Date().getFullYear();
}
