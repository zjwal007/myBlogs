type SocialLinkIcon =
  | "discord"
  | "facebook"
  | "github"
  | "instagram"
  | "linkedin"
  | "slack"
  | "twitter"
  | "youtube";

interface SocialLink {
  icon: SocialLinkIcon;
  link: string;
}

const defaultSocialLinks: Array<SocialLink> = [
  { icon: "github", link: "https://github.com/vuejs/vitepress" }
];

export default defaultSocialLinks;
