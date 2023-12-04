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

const defaultSideBar: Sidebar ={
  "/2023-12-03/": [
    {
      text: "2023-12-03",
      collapsible: true,
      items: [
        { text: "githubPage链接", link: "/2023-12-03/2023-12-03-0001.md" },
        { text: "vitepress基础配置", link: "/2023-12-03/2023-12-03-0002.md" }
      ],
    }
  ]
}
  

export default defaultSideBar;
