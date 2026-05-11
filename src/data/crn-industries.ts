export type IndustryBullet = {
  title: string;
  description: string;
};

export type IndustryCta = {
  label?: string;
  href?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type IndustrySeo = {
  title?: string;
  description?: string;
  keywords?: string[];
};

export type Industry = {
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  category: string;
  order: number;
  subtitle: string;
  excerpt: string;
  marketFit: string[];
  primaryBuyers: string[];
  challenges: IndustryBullet[];
  crnFocus: IndustryBullet[];
  solutions: string[];
  outcomes: string[];
  content: string;
  seo?: IndustrySeo;
  cta?: IndustryCta;
};

const parseJsonl = <T>(content: string) =>
  content
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line) as T);

const raw = import.meta.glob("./*.jsonl", {
  query: "?raw",
  import: "default",
  eager: true,
});

const preferredDataPath = Object.keys(raw).find((path) =>
  path.endsWith("/crn-industries.jsonl"),
);
const fallbackPath = Object.keys(raw).sort()[0];
const content = raw[preferredDataPath || fallbackPath || ""];

export const crnIndustries: Industry[] =
  typeof content === "string" ? parseJsonl<Industry>(content) : [];

export const crnIndustryBySlug = Object.fromEntries(
  crnIndustries.map((industry) => [industry.slug, industry]),
) as Record<string, Industry>;
