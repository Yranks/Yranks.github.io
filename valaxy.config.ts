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

    //  新增背景图配置
    bg_image: {
      enable: true,
      url: '/images/background.png',          // 浅色模式背景图（放 public/ 下）
      dark: '/images/background-dark.png',    // 深色模式背景图（可选）
      opacity: 0.6,            // 背景透明度 0~1，默认 1
    },


    pages: [

      {
        name: '项目橱窗',
        url: '/projects/',
        icon: 'i-ri-gift-line',
        color: 'wheat',
      },


      {
        name: '站点地图',
        url: '/sites/',
        icon: 'i-ri-map-line',
        color: 'gray',
      },

      {
        name: '友情链接',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      // {
      //   name: '老婆列表',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },

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
