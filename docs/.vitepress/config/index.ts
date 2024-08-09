import { defineConfig } from "vitepress";
import { sharedConfig } from "./shared";
import { enConfig } from "./en";
import { zhConfig } from "./zh";

export default defineConfig({
  ...sharedConfig,
  locales: {
    root: { label: "English", lang: "en-US", link: "/", ...enConfig },
    zh: { label: "简体中文", lang: "zh-CN", link: "/zh/", ...zhConfig },
  },
});
