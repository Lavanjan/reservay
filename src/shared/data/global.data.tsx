import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from "@tabler/icons-react";
import { AnnouncementProps, FooterProps, HeaderProps } from "../types";

// Announcement data
export const announcementData: AnnouncementProps = {
  title: "NEW",
  callToAction: {
    text: "This template is made with Next.js 14 using the new App Router »",
    href: "https://nextjs.org/blog/next-14",
  },
  callToAction2: {
    text: "Follow @onWidget on Twitter",
    href: "https://twitter.com/intent/user?screen_name=onwidget",
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: "Pricing",
      href: "/pricing",
    },
    // {
    //   label: 'About us',
    //   href: '/about',
    // },
    // {
    //   label: 'Pages',
    //   icon: IconChevronDown,
    //   links: [
    //     {
    //       label: 'FAQs',
    //       href: '/faqs',
    //     },
    //     {
    //       label: 'Terms & Conditions',
    //       href: '/terms',
    //     },
    //     {
    //       label: 'Privacy Policy',
    //       href: '/privacy',
    //     },
    //   ],
    // },

    {
      label: "Contact",
      href: "/contact",
    },
  ],
  // actions: [
  //   {
  //     text: 'Download',
  //     href: 'https://github.com/onwidget/hms',
  //     targetBlank: true,
  //   },
  // ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: "right",
};

// Footer data
export const footerData: FooterProps = {
  title: "Reservay",
  links: [
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
  ],
  columns: [
    {
      title: "Product",
      links: [
        {
          label: "Features",
          href: "/",
        },
        {
          label: "Security",
          href: "/",
        },
        {
          label: "Team",
          href: "/",
        },
        {
          label: "Enterprise",
          href: "/",
        },
        {
          label: "Customer stories",
          href: "/",
        },
        {
          label: "Pricing",
          href: "/pricing",
        },
        {
          label: "Resources",
          href: "/",
        },
      ],
    },
    {
      title: "Platform",
      links: [
        {
          label: "Developer API",
          href: "/",
        },
        {
          label: "Partners",
          href: "/",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          label: "Docs",
          href: "/",
        },
        {
          label: "Community Forum",
          href: "/",
        },
        {
          label: "Professional Services",
          href: "/",
        },
        {
          label: "Skills",
          href: "/",
        },
        {
          label: "Status",
          href: "/",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "About",
          href: "/",
        },
        // {
        //   label: 'Blog',
        //   href: '/blog',
        // },
        {
          label: "Careers",
          href: "/",
        },
        {
          label: "Press",
          href: "/",
        },
        {
          label: "Inclusion",
          href: "/",
        },
        {
          label: "Social Impact",
          href: "/",
        },
        {
          label: "Shop",
          href: "/",
        },
      ],
    },
  ],
  socials: [
    { label: "Twitter", icon: IconBrandTwitter, href: "#" },
    { label: "Instagram", icon: IconBrandInstagram, href: "#" },
    { label: "Facebook", icon: IconBrandFacebook, href: "#" },
    { label: "RSS", icon: IconRss, href: "#" },
    {
      label: "Github",
      icon: IconBrandGithub,
      href: "https://github.com/onwidget/hms",
    },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{" "}
      <a
        className="text-blue-600 hover:underline dark:text-gray-200"
        href="https://onwidget.com/"
      >
        {" "}
        Invicta Innovations
      </a>{" "}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
  ],
  columns: [
    // {
    //   title: 'Address',
    //   texts: ['No.72, Palali Rd,', ' Jaffna.'],
    // },
    {
      title: "Phone",
      texts: ["Office: +94 21 221 4205"],
    },
    {
      title: "Email",
      texts: ["info@invictainnovations.com"],
    },
  ],
  socials: [
    { label: "Twitter", icon: IconBrandTwitter, href: "#" },
    { label: "Instagram", icon: IconBrandInstagram, href: "#" },
    { label: "Facebook", icon: IconBrandFacebook, href: "#" },
    { label: "RSS", icon: IconRss, href: "#" },
    // { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/hms' },
  ],
  footNote: (
    <div className=" text-sm">
      <span className=" h-5 w-5 rounded-sm bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{" "}
      <a
        className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
        href="http://www.invictainnovations.com/"
      >
        {" "}
        Invicta Innovations
      </a>{" "}
      · All rights reserved.
    </div>
  ),
};

export const appLinks = {
  adminPortal: "http://192.168.1.75:3000/product/user-registration",
};
