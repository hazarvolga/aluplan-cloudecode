// Content model — DEMO CONTRACT v2 (not an approved production model).
// Persistent identities: Product, Package (edition), Release (annual), Market. Scope = package × release × market × capability.
// Themes never change any field below.

export type Id = string;
export type Availability = 'included' | 'excluded' | 'optional' | 'unknown';
/** placeholder = not confirmed; unknown = no information. Never default to 'current'. */
export type ReleaseStatus = 'current' | 'previous' | 'placeholder' | 'unknown';
export type Verification = 'unverified' | 'verified' | 'approved';

export interface NavItem { id: Id; label: string; href: string }
export interface Cta { id: Id; kind: 'quote' | 'trial'; label: string; href: string; external: boolean }
export interface Role { id: Id; label: string; icon?: string; description?: string }
export interface Market { id: Id; label: string }

export interface Product { id: Id; name: string; vendor: string; summary: string; roles: Id[]; isDemo: boolean }

export interface Release {
  id: Id; productId: Id;
  /** Display label. Never invent future versions. */
  version: string;
  /** Ordering within a product; higher = newer. */
  sequence: number;
  status: ReleaseStatus;
  isSynthetic?: boolean;
  sourceNote?: string;
  items: { id: Id; category: string; title: string; body?: string }[];
}

/** Persistent package / edition identity. Its scope is NOT stored here (it varies by release and market). */
export interface Package { id: Id; productId: Id; name: string }
export interface CapabilityGroup { id: Id; label: string; capabilities: { id: Id; name: string }[] }

export interface ScopeSource {
  kind: 'demo' | 'official-document' | 'vendor-confirmation' | 'internal';
  /** URL or document reference; required for non-demo sources. */
  ref?: string;
  retrievedAt?: string;
}

/** One fact: package P, in release R, in market M, has availability A for capability C. */
export interface ScopeRecord {
  id: Id; packageId: Id; releaseId: Id; marketId: Id; capabilityId: Id;
  availability: Availability; note?: string;
  source: ScopeSource;
  verification: Verification;
  verifiedBy?: string; verifiedAt?: string;
}

export interface Resource { id: Id; productId: Id; kind: 'pdf' | 'video'; title: string; description?: string; href: string | null; fileSize?: string; duration?: string; language?: string }
export interface SupportEntry { id: Id; icon: string; title: string; description: string; actions: { id?: Id; label: string; href: string; external?: boolean }[] }

export interface DemoContent {
  $meta: { status: 'demo' | 'approved'; contract: string; notice: string; locale: string };
  site: { nav: NavItem[]; footer: { id: Id; heading: string; links: (NavItem & { external?: boolean })[] }[]; legal: string };
  ctas: Cta[]; roles: Role[]; markets: Market[];
  products: Product[]; releases: Release[]; packages: Package[];
  capabilityGroups: CapabilityGroup[]; scopeRecords: ScopeRecord[];
  resources: Resource[]; support: SupportEntry[];
  /** Editorial page copy. Presentation components receive it as props. */
  pages: Record<string, unknown>;
}

/** Output of selectScopeView(content, { productId, releaseId, marketId }) in data/select-content.js. */
export interface ScopeView {
  release: Release | null; market: Market | null;
  packages: Package[]; groups: CapabilityGroup[];
  /** key `${packageId}:${capabilityId}`; missing key renders as 'unknown', never 'excluded'. */
  cells: Record<string, { availability: Availability; note?: string; verification: Verification; source: ScopeSource }>;
  duplicates: string[];
  counts: { records: number; unverified: number; sources: string[] };
}
