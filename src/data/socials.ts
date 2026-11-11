export type Social = {
  id: string;
  name: string;
  url: string;
  icon: "github" | "instagram" | "youtube" | "linkedin" | "twitter";
};

export const socials: Social[] = [
  { id: "github", name: "GitHub", url: "https://github.com/Elisfliess", icon: "github" },
  { id: "instagram", name: "Instagram", url: "https://www.instagram.com/lisefliess_/", icon: "instagram" },
  { id: "youtube", name: "YouTube", url: "https://www.youtube.com/", icon: "youtube" },
  { id: "linkedin", name: "LinkedIn", url: "https://br.linkedin.com/in/lisefliess", icon: "linkedin" },
  { id: "twitter", name: "Twitter", url: "https://twitter.com", icon: "twitter" },
];