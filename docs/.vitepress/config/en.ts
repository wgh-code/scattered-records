import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "scattered notes",
  themeConfig: {
    nav: [
      { text: "Knowledge", link: "/knowledge/javascript/" },
      { text: "Questions", link: "/questions/actual-combat/refresh-jwt" },
      { text: "Demo", link: "/markdown-examples" },
    ],

    sidebar: {
      "/knowledge/": [
        {
          text: "JavaScript",
          items: [{ text: "Description", link: "/knowledge/javascript/index" }],
        },
      ],
      "/questions/": [
        {
          text: "Actual combat",
          items: [
            { text: "Refresh jwt", link: "/questions/actual-combat/refresh-jwt" },
          ],
        },
      ],
      "/markdown-examples": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],
    },
  },
};
