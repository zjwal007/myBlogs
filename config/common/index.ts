interface Footer {
  message?: string;
  copyright?: string;
}

interface EditLink {
  pattern: string;
  text?: string;
}

interface CarbonAds {
  code: string;
  placement: string;
}

interface DocFooter {
  prev?: string;
  next?: string;
}

const footer: Footer = {
  message: "Released under the MIT License.",
  copyright: "Copyright © 2019-present Evan You",
};

const editLink: EditLink = {
  pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
  text: "Edit this page on GitHub",
};

const carbonAds: CarbonAds = {
  code: "your-carbon-code",
  placement: "your-carbon-placement",
};

const docFooter: DocFooter = {
  prev: "Pagina prior",
  next: "Proxima pagina",
};

export default {
  footer,
  editLink,
  carbonAds,
  docFooter,
};
