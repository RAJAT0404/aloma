export default interface FooterProps {
    bottomLinks: Array<{
      label: string;
      url: string;
    }>;
    columns: Array<{
      title: string;
      links: Array<{
        label: string;
        url: string;
        link: {
          url: string;
        }
      }>;
    }>;
    contactInfo: {
      email?: string;
      phone?: string;
      address?: string;
    };
    copyright: string;
    description: string;
    logo?: {
      asset: {
        url?: string;
        link?: {
          url?: string;
        };
      };
    };
    socialLinks: {
      link?: {
        url?: string;
      };
      icon: 'facebook' | 'instagram' | 'twitter' | 'youtube';
    }[];
  }