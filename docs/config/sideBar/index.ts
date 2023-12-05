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
  "/如何使用chatGPT/": [
    {
      text: "如何使用chatGPT",
      collapsible: true,
      items: [
        { text: "如何使用chatGPT", link: "/如何使用chatGPT/0001.md" }
      ],
    }
  ]
}
  

export default defaultSideBar;
