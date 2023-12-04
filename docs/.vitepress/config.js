import defaultNavMenu from '../config/navMenu'
import defaultSideBar from '../config/sideBar'
import defaultSocialLinks from '../config/socialLinks'
import Common from '../config/common'

const { footer, docFooter } = Common 

export default {
  lang: "zh-CN",
  title: "张杰的个人博客",
  base: "/myBlogs/",
  description: "Vite & Vue powered static site generator.",
  themeConfig: {
    nav: defaultNavMenu,
    sidebar: {
      "/home/": defaultSideBar
    },
    socialLinks: defaultSocialLinks,
    footer,
    docFooter,
  }
};
