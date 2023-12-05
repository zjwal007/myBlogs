type NavItemWithLink = {
  text: string;
  link: string;
  activeMatch?: string;
};

interface NavItemWithChildren {
  text?: string;
  items: NavItemWithLink[];
  activeMatch?: string;
}

type NavItem = NavItemWithLink | NavItemWithChildren;

const defaultNavMenu: Array<NavItem> = [
  { text: "主页", link: "/如何使用chatGPT/0001", activeMatch: '/如何使用chatGPT/' },
];

export default defaultNavMenu;
