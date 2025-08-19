// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Riverr',
  tagline: 'Trade Crypto Derivatives With Zero Slippage. Instantly.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.riverr.finance', 
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // Update these if you're using GitHub pages
  organizationName: 'RiverrFinance', // Your GitHub org/user name
  projectName: 'riverr-interface', // Your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          editUrl: 'https://github.com/RiverrFinance/riverr-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/RiverrFinance/riverr-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  navbar: {
    title: 'Riverr',
    logo: {
      alt: 'Riverr Logo',
      src: 'img/logo.png',
    },
    hideOnScroll: false, // Keep navbar visible
    items: [
      {to: '/', label: 'Home', position: 'left'},
      {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Docs',
      },
      {to: '/blog', label: 'Protocol', position: 'left'},
      {
        href: '#',
        label: 'Launch App',
        position: 'right',
        className: 'navbar-launch-app',
      },
    ],
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
  // Add color mode config for dark/light theme toggle
  colorMode: {
    defaultMode: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  metadata: [
    {name: 'keywords', content: 'crypto, derivatives, defi, trading, zero slippage, internet computer'},
    {name: 'x:site', content: '@riverrFinance'},
  ],
}
}
export default config;