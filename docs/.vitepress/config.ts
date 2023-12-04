import defaultNavMenu from '../config/navMenu'
import defaultSideBar from '../config/sideBar'
import defaultSocialLinks from '../config/socialLinks'
import Common from '../config/common'

const { footer, docFooter } = Common 

export default {
  lang: "zh-CN",
  title: "张杰的个人博客",
  base: "/myBlogs/",
  description: "随便写着玩玩.",
  srcDir: './src',
  assetsDir: 'static',
  themeConfig: {
    nav: defaultNavMenu,
    sidebar: defaultSideBar,
    socialLinks: defaultSocialLinks,
    footer,
    docFooter,
  }
};
