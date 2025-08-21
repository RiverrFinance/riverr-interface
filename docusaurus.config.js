import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Riverr',
  tagline: 'Decentralized Trading Platform Documentation',
  favicon: 'img/Logo.svg',
  future: {
    v4: true, 
  },

  // Set the production url of your site here
  url: 'https://joljv-6aaaa-aaaah-qqbmq-cai.icp0.io/',
  baseUrl: '/',
  organizationName: 'Riverr', // Usually your GitHub org/user name.
  projectName: 'riverr-interface', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',          
          editUrl:'hhttps://github.com/RiverrFinance/clearing_house',
        }, 
        blog: false,
        // {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/riverr-social-card.jpg',
      navbar: {
        title: 'RIVERR',
        logo: {
          alt: 'Riverr Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   href: 'https://joljv-6aaaa-aaaah-qqbmq-cai.icp0.io/dashboard',
          //   label: 'Launch App',
          //   position: 'right',
          //   className: 'header-launch-app-link',
          // },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/RiverrFinance/clearing_house',
            label: 'GitHub',
            position: 'right',
          },
        ],          
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/v1/users/getting-started',
              },
              {
                label: 'Trading Guide',
                to: '/v1/users/trading-guide'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Discord',
              //   href: 'https://discord.gg/riverr',
              // },
              {
                label: 'Twitter',
                href: 'https://x.com/riverrFinance',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Launch App',
                href: 'https://joljv-6aaaa-aaaah-qqbmq-cai.icp0.io/dashboard',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/RiverrFinance/clearing_house',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Riverr. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
  markdown: {
    mermaid: true,
  },
  // themes: ['@docusaurus/theme-mermaid'],
};

export default config;