import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Riverr',
  tagline: 'Decentralized Trading Platform Documentation',
  favicon: 'img/favicon.svg',
  future: {
    v4: true, 
  },


  url: 'https://joljv-6aaaa-aaaah-qqbmq-cai.icp0.io/',
  baseUrl: '/',
  organizationName: 'Riverr',
  projectName: 'riverr-interface',

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
          editUrl:'https://github.com/RiverrFinance/clearing_house',
        }, 
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: 'img/riverr-social-card.jpg',
      metadata: [
        {name: 'msapplication-TileColor', content: '#000000'},
        {name: 'theme-color', content: '#000000'},
      ],
      navbar: {
        title: 'RIVERR',
        logo: {
          alt: 'Riverr Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Docs',
          },
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
                to: '/docs/',
              },
              {
                label: 'Trading Guide',
                to: '/docs/v1/users/trading-guide'
              }
            ],
          },
          {
            title: 'Community',
            items: [
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
};

export default config;
