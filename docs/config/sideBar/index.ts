interface SidebarItem {
  text: string;
  link: string;
}

interface SidebarGroup {
  text: string;
  items: SidebarItem[];
  collapsible?: boolean;
  collapsed?: boolean;
}

interface SidebarMulti {
  [path: string]: SidebarGroup[];
}

type Sidebar = SidebarGroup[] | SidebarMulti;

const defaultSideBar: Sidebar = [
  {
    text: "homePage",
    collapsible: true,
    items: [
      { text: "homePage", link: "/home/homePage.md" },
      { text: "introduction", link: "/home/introduction.md" }
    ],
  }
]
  

export default defaultSideBar;
