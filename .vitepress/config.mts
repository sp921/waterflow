import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Water Flow",
  description: "A VitePress Site",
  // 添加CDN配置，使用国内可访问的CDN
  head: [
    // 使用字节跳动静态资源库替代Google Fonts
    ['link', { rel: 'preconnect', href: 'https://cdn.bytedance.com' }],
    // 预连接到可能的CDN域名
    ['link', { rel: 'preconnect', href: 'https://unpkg.com' }]
  ],
  // 配置Vue和VitePress使用国内CDN
  vite: {
    optimizeDeps: {
      include: ['vue', 'vitepress']
    },
    // 使用国内可访问的CDN
    resolve: {
      alias: {
        // 可以添加一些资源别名
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
