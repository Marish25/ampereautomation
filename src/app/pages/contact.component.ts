import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="page-hero contact-hero"><div class="container"><div class="eyebrow light"><span></span> CONTACT US</div><h1>Let’s talk about<br><em>your next project.</em></h1><p>Send us your requirement. We’ll be glad to hear from you.</p></div></section>
    <section class="section-pad"><div class="container"><div class="row g-5">
      <div class="col-lg-5"><div class="eyebrow"><span></span> GET IN TOUCH</div><h2 class="section-title">We’re ready to<br><em>hear from you.</em></h2><p class="section-intro">For product enquiries, panel requirements or automation projects, contact us using the details below.</p>
        <div class="contact-detail"><i class="bi bi-telephone"></i><div><small>PHONE</small><a href="tel:+919597747853">+91 95977 47853</a></div></div>
        <div class="contact-detail"><i class="bi bi-geo-alt"></i><div><small>ADDRESS</small><p>1/171, 1st Main Road, Nehru Nagar,<br>Kottivakkam, Chennai – 600041,<br>Tamil Nadu, India</p></div></div>
        <div class="contact-detail"><i class="bi bi-clock"></i><div><small>BUSINESS HOURS</small><p>Please call to confirm current working hours.</p></div></div>
        <a class="btn btn-blue mt-3" href="https://maps.app.goo.gl/yCn9moVQGpR9Mkeq8" target="_blank" rel="noopener">Get directions <i class="bi bi-arrow-up-right ms-2"></i></a>
      </div>
      <div class="col-lg-7"><div class="contact-form-wrap"><h3>Send an enquiry</h3><p class="text-secondary">Fill in your details. Your email app will open with the enquiry prepared.</p>
        <form (ngSubmit)="sendEnquiry()" #enquiryForm="ngForm">
          <div class="row g-3">
            <div class="col-md-6"><label class="form-label">Your name *</label><input class="form-control" name="name" [(ngModel)]="form.name" required placeholder="Enter your name"></div>
            <div class="col-md-6"><label class="form-label">Phone number *</label><input class="form-control" name="phone" [(ngModel)]="form.phone" required placeholder="Enter phone number"></div>
            <div class="col-12"><label class="form-label">Email address</label><input class="form-control" type="email" name="email" [(ngModel)]="form.email" placeholder="you@example.com"></div>
            <div class="col-12"><label class="form-label">Requirement *</label><select class="form-select" name="service" [(ngModel)]="form.service" required><option value="" disabled>Select a service</option><option>Electrical control panel</option><option>Industrial automation</option><option>Power distribution board</option><option>Machine control</option><option>Other enquiry</option></select></div>
            <div class="col-12"><label class="form-label">Message *</label><textarea class="form-control" rows="4" name="message" [(ngModel)]="form.message" required placeholder="Tell us briefly about your requirement"></textarea></div>
            <div class="col-12"><button class="btn btn-orange btn-lg w-100" type="submit" [disabled]="!enquiryForm.form.valid">Prepare enquiry <i class="bi bi-send ms-2"></i></button></div>
          </div>
        </form>
        <div class="form-note mt-3"><i class="bi bi-shield-check me-2"></i>This demo form opens your email application. It does not store or transmit form data on this website.</div>
      </div></div>
    </div></div></section>
  `
})
export class ContactComponent {
  form = { name: '', phone: '', email: '', service: '', message: '' };

  sendEnquiry(): void {
    const subject = encodeURIComponent(`Website enquiry - ${this.form.service}`);
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nPhone: ${this.form.phone}\nEmail: ${this.form.email || 'Not provided'}\nRequirement: ${this.form.service}\n\nMessage:\n${this.form.message}`
    );
    // Replace this placeholder with the company's confirmed business email address.
    window.location.href = `mailto:REPLACE-WITH-CONFIRMED-EMAIL@example.com?subject=${subject}&body=${body}`;
  }
}
