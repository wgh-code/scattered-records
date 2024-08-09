import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export const sharedConfig = defineConfig({
  lang: "zh",
  base: "/scattered-records/",
  appearance: "dark",
  title: "scattered records",

  head: [["link", { rel: "icon", href: "/scattered-records/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.ico",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/wgh-code/scattered-records.git",
      },
    ],
    footer: {
      copyright: "Copyright © 2024-present wgh-code",
      message: "Released under the MIT License.",
    },
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
  },
});
