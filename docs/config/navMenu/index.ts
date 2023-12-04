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
  { text: "主页", link: "/2023-12-03/2023-12-03-0001", activeMatch: '/2023-12-03/' },
];

export default defaultNavMenu;
