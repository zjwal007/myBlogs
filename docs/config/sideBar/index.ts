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

import { resolve } from "node:path";
import fs from "node:fs";

const WHITE_LIST = ['index.md'];
const dirPath = resolve(resolve(__dirname, "../../src/"), "");
const directoryList:string[] = fs.readdirSync(dirPath).filter(item => !WHITE_LIST.includes(item))
// 判断是否是文件夹
const isDirectory = (path: string) => fs.lstatSync(path).isDirectory();

// 获取src目录里的文件夹
 function getSideBar(directoryList: string[]): Sidebar {
  let defaultSideBar: Sidebar = {};
  directoryList.forEach(item => {
    const dirPath = resolve(resolve(__dirname, "../../src/"), item)
    const files = fs.readdirSync(dirPath)
    defaultSideBar[`/${item}/`] = getSideBarList(files, item);
  })
  return defaultSideBar
}

function getSideBarList(files, pathName) {
  console.log(files)
  const res: SidebarGroup[]  = [{
    text: pathName,
    collapsed: true,
    items: []
  }];
  files.forEach(item => {
    const name = item.split(".")[0];
      res[0].items.push({
        text: name,
        link: `/${pathName}/${name}.md`,
      })
  })
  return res;
}
const defaultSideBar:Sidebar = getSideBar(directoryList)
console.log(defaultSideBar)
// export default defaultSideBar;

// const defaultSideBar = {
//   "/如何使用chatGPT/": [
//     {
//       text: "如何使用chatGPT",
//       items: [{ text: "如何使用chatGPT", link: "/如何使用chatGPT/0001.md" }],
//     },
//   ],
// };

export default defaultSideBar;
