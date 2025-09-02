// * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
const sidebars = {

  tutorialSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'V1',
      items: [
        {
          type: 'category',
          label: 'Users',
          items: [
            'v1/users/getting-started',
            'v1/users/connecting-wallet',
            'v1/users/trading-terms',
            'v1/users/trading-guide',
            'v1/users/risk-management',
          ],
        },
        {
          type: 'category',
          label: 'Developers',
          items: [
            'v1/developers/overview',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'V2',
      items: [
        'v2/overview',
      ],
    },
  ],
};

export default sidebars;
