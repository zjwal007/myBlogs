import defaultNavMenu from '../config/navMenu'
import defaultSideBar from '../config/sideBar'
import defaultSocialLinks from '../config/socialLinks'
import Common from '../config/common'

const { footer, editLink, carbonAds, docFooter } = Common

export default {
  lang: "en-US",
  title: "VitePress",
  base: "/myBlogs/",
  description: "Vite & Vue powered static site generator.",
  themeConfig: {
    logo: '',
    siteTitle: '',
    lastUpdatedText: 'Updated Date',
    nav: defaultNavMenu,
    sideBar: defaultSideBar,
    socialLinks: defaultSocialLinks,
    footer,
    editLink,
    carbonAds,
    docFooter,
  }
};
