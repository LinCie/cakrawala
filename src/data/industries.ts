export type IndustryEntry = {
  index: string;
  name: string;
  slug: string;
  framing: string;
};

export type SectorCluster = {
  label: string;
  title: string;
  summary: string;
  tone: "default" | "tint";
  sectors: IndustryEntry[];
};

export const industries: IndustryEntry[] = [
  {
    index: "01",
    name: "Banking & Financial Services",
    slug: "banking",
    framing:
      "OJK governance expectations, AI risk controls, and data-residency obligations demand structured compliance before scale.",
  },
  {
    index: "02",
    name: "SOEs & Public Sector",
    slug: "soes",
    framing:
      "Multi-mandate accountability, audit-grade controls, and governance modernization for state-owned enterprises.",
  },
  {
    index: "03",
    name: "Telecommunications",
    slug: "telecommunications",
    framing:
      "Infrastructure-scale data governance and regulatory alignment for nationally critical networks.",
  },
  {
    index: "04",
    name: "Manufacturing",
    slug: "manufacturing",
    framing:
      "Operational data integration, plant-level automation, and predictive maintenance under governance guardrails.",
  },
  {
    index: "05",
    name: "Logistics & Supply Chain",
    slug: "logistics",
    framing:
      "Exception visibility, predictive operations, and data-driven dispatch across fragmented environments.",
  },
  {
    index: "06",
    name: "Energy & Utilities",
    slug: "energy",
    framing:
      "Critical-infrastructure cyber resilience, continuity planning, and regulatory reporting for essential services.",
  },
  {
    index: "07",
    name: "Healthcare",
    slug: "healthcare",
    framing:
      "Patient-data governance, PDP compliance, and consent-driven access controls for clinical workflows.",
  },
  {
    index: "08",
    name: "Conglomerates",
    slug: "conglomerates",
    framing:
      "Cross-sector risk integration, shared-service governance, and unified compliance across diversified holdings.",
  },
];

export const sectorClusters: SectorCluster[] = [
  {
    label: "Regulated accountabilities",
    title: "Banking and public-sector oversight",
    summary:
      "The buying trigger here is not transformation theater. It is the need to show policy discipline, auditability, and decisions that stand up under scrutiny.",
    tone: "default",
    sectors: [industries[0], industries[1]],
  },
  {
    label: "Critical infrastructure",
    title: "Networks that cannot afford interruption",
    summary:
      "These sectors need continuity, control, and residency-aware governance before scale. The section makes that pressure visible at a glance.",
    tone: "tint",
    sectors: [industries[2], industries[5], industries[6]],
  },
  {
    label: "Operating complexity",
    title: "Distributed enterprises and portfolio governance",
    summary:
      "Manufacturing, logistics, and conglomerates share the same pattern: fragmented execution, shared services, and a need for consistent control across entities.",
    tone: "default",
    sectors: [industries[3], industries[4], industries[7]],
  },
];

export const industryBySlug = Object.fromEntries(
  industries.map((industry) => [industry.slug, industry]),
) as Record<string, IndustryEntry>;

export const sectorClusterBySlug = Object.fromEntries(
  sectorClusters.flatMap((cluster) =>
    cluster.sectors.map((industry) => [industry.slug, cluster] as const),
  ),
) as Record<string, SectorCluster>;
