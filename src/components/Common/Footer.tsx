import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Logo from "../../../public/footerlogo.png"
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
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

export const Footer = async ({
  bottomLinks,
  columns,
  contactInfo,
  copyright,
  description,
  logo,
  socialLinks
}: FooterProps) => {


  const getContactIcon = (type: string) => {
    switch (type) {
      case 'location':
        return <MapPin className="h-4 w-4" />;
      case 'mobile':
        return <Phone className="h-4 w-4" />;
      case 'email':
        return <Mail className="h-4 w-4" />;
      default:
        return null;
    }
  };


  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'instagram':
        return <Instagram className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'youtube':
        return <Youtube className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#003C64] to-[#0072BA] rounded-2xl p-8 mb-12">
          <div className="text-center text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter and be the first to know about new arrivals and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground text-foreground"
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            {/* <h3 className="text-xl font-bold">Aloma Tees</h3> */}

            <Image src={logo?.asset.url || Logo} width={200} height={150} alt="Alamo Tees Logo" className="h-10 w-auto mb-4" />


            {description && <p className="text-muted-foreground">
              {description}
            </p>}
            <div className="flex gap-4">
              {socialLinks?.map((icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <Link href={icon.link?.url || '#'}>
                    {getSocialIcon(icon?.icon)}
                  </Link>
                </Button>
              ))}
            </div>
          </div>


          {columns && columns.map((item, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold">{item.title}</h4>
              <nav className="flex flex-col space-y-2">
                {item.links.map((list, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={list?.link.url || '/'}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {list?.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}





          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-3">
              {Array.isArray(contactInfo) && contactInfo.map((contact: { type: string, value: string }) => {
                try {
                  const isPhone = contact.type === 'phone';
                  const isEmail = contact.type === 'email';
                  const href = isPhone 
                    ? `tel:${contact.value.replace(/[^0-9]/g, '')}`
                    : isEmail
                      ? `mailto:${contact.value}`
                      : undefined;

                  return (
                    <div key={contact.value} className="flex items-center gap-3 text-muted-foreground">
                      {getContactIcon(contact.type)}
                      {href ? (
                        <a href={href} className="text-sm hover:text-foreground transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-sm">{contact.value}</span>
                      )}
                    </div>
                  );
                } catch (error) {
                  console.error('Error rendering contact info:', error);
                  return null;
                }
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 relative">
          {copyright && <p className="text-sm text-muted-foreground lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            {copyright}
          </p>}
          <div className="flex gap-6">
            {bottomLinks && bottomLinks.map((item, index) => (
              <Link
                key={index}
                href={item?.url || '/'}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item?.label}
              </Link>
            ))}


          </div>
        </div>
      </div>
    </footer>
  );
};