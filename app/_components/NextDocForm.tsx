import Link from "next/link";
import React from "react";

const sections = [
  {
    title: "1. What is Next.js?",
    content: [
      "Next.js is a React framework developed by Vercel.",
      "Supports Server-Side Rendering (SSR).",
      "Supports Static Site Generation (SSG).",
      "Supports Client-Side Rendering (CSR).",
      "Provides File-Based Routing.",
      "Supports API Routes and Server Actions.",
      "Built-in Image Optimization and SEO.",
    ],
  },
  {
    title: "2. Create a Next.js Application",
    code: `npx create-next-app@latest contact-manager

Options:
✔ TypeScript
✔ ESLint
✔ Tailwind CSS
✔ App Router
✔ Turbopack
✔ Import Alias (@/*)

Run Project:
npm run dev`,
  },
  {
    title: "3. Folder Structure",
    code: `app/
components/
public/
actions/
_types/
middleware.ts
next.config.ts
package.json`,
  },
  {
    title: "4. File-Based Routing",
    content: [
      "Each folder inside app/ automatically becomes a route.",
      "page.tsx represents a page.",
      "layout.tsx represents a shared layout.",
    ],
    code: `app/
 ├── page.tsx             => /
 ├── about/page.tsx       => /about
 ├── contact/page.tsx     => /contact
 ├── contact/new/page.tsx => /contact/new
 ├── contact/[id]/page.tsx=> /contact/1`,
  },
  {
    title: "5. Special Files",
    content: [
      "page.tsx - Page Component",
      "layout.tsx - Shared Layout",
      "loading.tsx - Loading UI",
      "error.tsx - Error Page",
      "not-found.tsx - 404 Page",
      "template.tsx - Re-render Layout",
      "route.ts - API Endpoint",
    ],
  },
  {
    title: "6. Rendering Types",
    content: [
      "CSR - Client Side Rendering",
      "SSR - Server Side Rendering",
      "SSG - Static Site Generation",
      "ISR - Incremental Static Regeneration",
    ],
  },
  {
    title: "7. Client Component",
    code: `"use client"

Supports:
• useState
• useEffect
• useRouter
• Browser APIs`,
  },
  {
    title: "8. Server Component",
    content: [
      "Default in App Router.",
      "Runs on the server.",
      "Better SEO.",
      "Smaller JavaScript bundle.",
      "Can access databases and APIs directly.",
    ],
  },
  {
    title: "9. Server Actions",
    code: `"use server"

export async function saveContact(formData: FormData) {
   // Save Data
}

<form action={saveContact}>`,
  },
  {
    title: "10. Navigation",
    code: `import Link from "next/link"

<Link href="/contact">Contacts</Link>

const router = useRouter();
router.push("/contact");

redirect("/contact");`,
  },
  {
    title: "11. Dynamic Routes",
    code: `app/contact/[id]/page.tsx

URL:
/contact/1
/contact/2`,
  },
  {
    title: "12. Image Optimization",
    code: `import Image from "next/image";

<Image
  src="/contact.png"
  width={300}
  height={300}
  alt="Contact"
/>`,
  },
  {
    title: "13. Data Fetching",
    content: [
      "Server Components use fetch().",
      "Client Components use useEffect().",
      "Can also use TanStack Query or SWR.",
    ],
  },
  {
    title: "14. Caching",
    code: `fetch(url,{
 cache:"no-store"
})

fetch(url,{
 next:{
   revalidate:60
 }
})`,
  },
  {
    title: "15. Environment Variables",
    code: `.env.local

DATABASE_URL=
JWT_SECRET=
NEXT_PUBLIC_API_URL=`,
  },
  {
    title: "16. Authentication",
    content: ["JWT", "Cookies", "NextAuth", "Sessions"],
  },
  {
    title: "17. Styling",
    content: ["Tailwind CSS", "CSS Modules", "SCSS", "Styled Components"],
  },
  {
    title: "18. Deployment",
    content: ["Vercel", "Azure", "AWS", "Docker", "Netlify"],
  },
  {
    title: "19. Frequently Asked Interview Questions",
    content: [
      "What is Next.js?",
      "Why Next.js instead of React?",
      "What is File-Based Routing?",
      "Difference between App Router and Page Router?",
      "Difference between Client and Server Components?",
      "What are Server Actions?",
      "What is Hydration?",
      "What is Middleware?",
      "What is ISR?",
      "What is Image Optimization?",
    ],
  },
];

const NextDocForm = () => {
  return (
    <div className="mx-auto max-w-6xl p-8 bg-gray-100 min-h-screen">
      <div className="rounded-xl bg-white shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-3">
          Next.js Complete Documentation
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Beginner to Advanced | App Router | Interview Preparation | Best
          Practices
        </p>

        {sections.map((section, index) => (
          <div
            key={index}
            className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              {section.title}
            </h2>

            {section.content && (
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.code && (
              <pre className="mt-5 rounded-lg bg-gray-900 text-green-400 p-4 overflow-auto text-sm">
                <code>{section.code}</code>
              </pre>
            )}
          </div>
        ))}

        <div className="mt-10 rounded-lg bg-blue-600 p-6 text-center text-white shadow-md">
          <h2 className="text-2xl font-bold">🚀 Happy Learning Next.js</h2>

          <p className="mt-2">
            Master Next.js step by step and build production-ready applications
            using App Router, Server Components, Server Actions, Authentication,
            and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextDocForm;
