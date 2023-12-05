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
  "/2023-12-05/": [
    {
      text: "2023-12-05",
      collapsible: true,
      items: [
        { text: "如何使用chatGPT", link: "/2023-12-05/0001.md" }
      ],
    }
  ]
}
  

export default defaultSideBar;
