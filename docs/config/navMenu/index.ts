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
  { text: "Guide", link: "/guide" },
  {
    text: "Dropdown Menu",
    items: [
      { text: "Item A", link: "/item-1" },
      { text: "Item B", link: "/item-2" },
      { text: "Item C", link: "/item-3" },
    ],
  },
];

export default defaultNavMenu;
