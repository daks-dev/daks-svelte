import Nav, { type NavSite } from '$lib/shared/navigate';

const config: NavSite = {
  navbar: {
    links: [
      {
        href: '/components',
        label: 'Components',
        links: [
          {
            href: '/carousel',
            label: 'Carousel'
          },
          {
            href: '/lightbox',
            label: 'Lightbox'
          },
          {
            href: '/gallery',
            label: 'Gallery'
          },
          {
            href: '/dropdown',
            label: 'Dropdown'
          },
          {
            href: '/select',
            label: 'Selet'
          },
          {
            href: '/yandex',
            label: 'Yandex'
          }
        ]
      }
]
  },
  footer: {
    /*
    copylink: {
      href: '//daks.dev',
      target: '_blank',
      label: 'DAKS&nbsp;DEV'
    },
    */
    links: [
      {
        href: '/debug',
        label: 'ic:round-check-box',
        disallow: true
      },
      {
        href: '/admin',
        label: 'ic:outline-settings',
        disallow: true
      }
    ]
  }
};

export const map = [
  ...Nav.map(config.navbar.links),
  ...Nav.map(config.footer.links || []),
  ...(config.allow ?? [])
].filter((el, idx, arr) => arr.indexOf(el) === idx);

export default config;
