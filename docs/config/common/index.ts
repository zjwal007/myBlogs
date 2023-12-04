interface Footer {
  message?: string;
  copyright?: string;
}

interface DocFooter {
  prev?: string;
  next?: string;
}

const footer: Footer = {
  message: "张杰的个人博客",
  copyright: "Copyright © 2023-12-03 张杰",
};

const docFooter: DocFooter = {
  prev: "上一页",
  next: "下一页",
};

export default {
  footer,
  docFooter
};
