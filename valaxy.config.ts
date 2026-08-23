import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',

  // 站点地图（SiteGalaxy 组件 + config/sites.ts）
  'i-ri-planet-line',          // 主站中央图标（静态，其实可加可不加）
  'i-ri-article-line',         // 博客
  'i-ri-sticky-note-line',     // 笔记
  'i-ri-book-open-line',       // 文档
  'i-ri-code-box-line',        // 项目
  'i-ri-flask-line',           // 实验
  'i-ri-tools-line',           // 工具与服务
  'i-ri-share-line',           // 社交
  'i-ri-arrow-right-up-line',  // 组件里 tooltip 的外部链接箭头
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  siteConfig: {
    comment: {
      enable: true,   // ← 开启评论
    },
  },

  addons: [
    addonWaline({
      serverURL: 'https://waline.yranky.cn',  // ← 你的 Waline 服务端地址
      // 常用可选配置：
      // pageview: true,       // 文章浏览量统计
      // comment: true,        // 评论功能（默认开）
      // emoji: ['https://unpkg.com/@waline/emojis@1.2.0/weibo'],
    }),
  ],

  themeConfig: {
    banner: {
      enable: true,
      title: '花小孩的小站',
    },

    nav: [
      { text: 'menu.posts', link: '/posts/', icon: 'i-ri-article-line' },
      { text: '项目列表', link: '/projects', icon: 'i-ri-gallery-view' },
      { text: '站点地图', link: '/sites/', icon: 'i-ri-planet-line' },
      { text: '友情链接', link: '/links/', icon: 'i-ri-link' },
    ],

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
