import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "零散的笔记",
  themeConfig: {
    outlineTitle: "本页内容",
    nav: [
      { text: "知识", link: "/zh/knowledge/javascript/" },
      { text: "问题", link: "/zh/questions/actual-combat/refresh-jwt" },
      { text: "示范", link: "/zh/markdown-examples" },
    ],

    sidebar: {
      "/zh/knowledge/": [
        {
          text: "JavaScript",
          items: [{ text: "描述", link: "/zh/knowledge/javascript/index" }],
        },
      ],
      "/zh/questions/": [
        {
          text: "实战",
          items: [
            { text: "刷新token", link: "/zh/questions/actual-combat/index" },
          ],
        },
      ],
      "/zh/markdown-examples": [
        {
          text: "示例",
          items: [
            { text: "Markdown 示例", link: "/zh/markdown-examples" },
            { text: "API 示例", link: "/zh/api-examples" },
          ],
        },
      ],
    },
  },
};
