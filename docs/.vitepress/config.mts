import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hippodamia Doc",
  description: "Document for hippodamia and hippodamia/bot",
  base: "/doc/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },
    nav: [
      {
        text: '部署', items: [
          { text: '快速开始', link: '/deploy/' },
          { text: '群组配置', link: '/deploy/groups/' }
        ]
      },
      { text: '内容', link: '/contents/' },
      { text: '创意工坊', link: '' }
    ],

    sidebar: {
      '/deploy/': [
        {
          text: '快速开始',
          link: '/deploy/',
          items: [
            {
              text: '依赖与环境安装',
              link: '/deploy/environment'
            },
            {
              text: '发行版',
              link: '/deploy/release'

            },
            {
              text: '运行配置',
              link: '/deploy/settings'
            }
          ]
        }, {
          text: '群组配置',
          link: '/deploy/groups/',
          items: [
            {
              text: '分群游戏模式',
            },
            {
              text: '在线配置工具',
            }
          ]
        },
        {
          text: '语言文件',
          link: '/deploy/language'
        }
      ],
      '/contents/': [
        {
          text: '基础',
          items: [
            {
              text: '组件',
              link: '/contents/component'
            },
            {
              text: '内容包',
              link: '/contents/package'
            }
          ]
        },
        {
          text: '为已有组件编写内容',
          items: [
            {
              text: '效果',
              link: '/contents/buff'
            },
            {
              text: '随机事件',
              link: '/contents/random-events'
            }
          ]
        },
        {
          text: '高级',
          items: [
            {
              text: '使用编辑器',
              link: '/contents/editor'
            },
          ],
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hippodamia' }
    ]
  }
})
