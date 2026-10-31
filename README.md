# AMPERE AUTOMATION — Angular + Bootstrap website

A responsive six-page company website built with Angular standalone components and Bootstrap 5.

## Pages

- Home
- About Us
- Services
- Products
- Projects
- Contact

## 1. Run locally

Install Node.js 22 LTS (or a compatible supported Node.js version), then:

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## 2. Important: confirm company details before publishing

The initial content uses the company details supplied in the conversation. Please verify these with AMPERE AUTOMATION before the site goes public:

- Business address: `1/171, 1st Main Road, Nehru Nagar, Kottivakkam, Chennai – 600041`
- Phone: `+91 95977 47853`
- Exact services and product categories
- Business email address
- Working hours
- Real project photographs and completed-project claims

The services, product categories and application areas are draft website copy, not independently verified claims. The Projects page intentionally labels its examples as application areas and does not claim they are completed customer projects.

## 3. Set the enquiry email address

Open `src/app/pages/contact.component.ts` and replace:

```ts
REPLACE-WITH-CONFIRMED-EMAIL@example.com
```

with the company's confirmed email address. The contact form currently prepares an email in the visitor's email application; it does not save form submissions to a database or send them to a server.

## 4. Publish free on GitHub Pages

1. Create a GitHub repository named `ampere-automation` (or use your preferred repository name).
2. Upload/push all files in this project to the repository's `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. The included workflow at `.github/workflows/deploy.yml` will build and publish the site after each push to `main`.
6. Your website URL will be `https://YOUR-USERNAME.github.io/ampere-automation/`.

If the repository is your account's root site (`YOUR-USERNAME.github.io`), change the workflow build command to:

```yaml
run: npm run build -- --base-href "/"
```

## 5. Update content and images

- Navigation and footer: `src/app/app.component.ts`
- Home page: `src/app/pages/home.component.ts`
- About: `src/app/pages/about.component.ts`
- Services: `src/app/pages/services.component.ts`
- Products: `src/app/pages/products.component.ts`
- Projects: `src/app/pages/projects.component.ts`
- Contact: `src/app/pages/contact.component.ts`
- Colors, layout and responsive styling: `src/styles.scss`

Images currently use remote Unsplash image URLs. Replace them with company-owned photographs for the final production website. Add local images under `src/assets/` and update the CSS background URLs.

## 6. Notes

- Hosting is free on GitHub Pages for a public repository.
- A custom domain is optional and normally has a separate registration cost.
- This project is a static frontend. No backend, CMS, analytics, enquiry database or email delivery service is included.
