import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  base: "/scattered-records/",
  title: "notes",
  description: "scattered notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.ico",
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/wgh-code/scattered-records.git",
      },
    ],
    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present wgh-code",
    },
  },
  head: [["link", { rel: "icon", href: "/scattered-records/favicon.ico" }]],
});
