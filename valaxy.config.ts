import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '花小孩的小站',
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },

      {
        name: '项目橱窗',
        url: '/projects/',
        icon: 'i-ri-gift-line',
        color: 'wheat',
      },

      {
        name: '站点地图',
        url: '/sitemap.xml',
        icon: 'i-ri-map-line',
        color: 'gray',
      },

      {
        name: '友情链接',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },


    ],

    footer: {
      since: 2016,
      beian: {
        enable: false,
        icp: '',
        police: '',
      },
    },
  },

  unocss: { safelist },
})
