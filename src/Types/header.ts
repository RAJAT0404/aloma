import type { PortableTextBlock } from '@portabletext/types';

interface Link {
  _type: string;
  slug: string;
  internalLink?: {
    slug: string;
    _type: string;
  };
  featureFlagColor?: string;
  fragmentAndQueryString?: string | null;
  isEmptyContent?: boolean;
  isExternal?: boolean;
  isFeatureTag?: boolean;
  isTargetBlank?: boolean;
  subtext?: string | null;
  _key?: string | null;
  label?: string;
}

interface MegaMenuItem {
  title: string;
  link: Link;
}

interface MegaMenuCategory {
  categoryGroup: {
    heading?: string;
    items: MegaMenuItem[];
  };
}

interface SubMenuItem {
  title: string;
  link: Link;
}

interface NavLink {
  title: string;
  link?: Link;
  isMegaMenu?: boolean | null;
  megaMenu?: MegaMenuCategory[] | null;
  SubMenu?: SubMenuItem[] | null;
}

interface ContactLink {
  label: string;
  type: 'phone' | 'email' | 'other';
  value: string;
}

interface UtilityLink {
  icon: string;
  label: string;
  link: Link;
}

export default interface HeaderProps {
  ctaButton?: {
    label: string;
    link: Link;
  };

  logo?: {
    asset?: {
      _id: string;
      metadata: object;
      url: string;
    };
    alt: string | null;
  };

  navLinks?: NavLink[];
  topBar?: {
    message?: PortableTextBlock[];
    contactLinks?: ContactLink[];
  };
  utilityLinks?: UtilityLink[];
}
