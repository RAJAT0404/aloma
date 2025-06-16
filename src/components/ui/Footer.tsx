import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
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
            <h3 className="text-xl font-bold">Aloma Tees</h3>
            <p className="text-muted-foreground">
              Premium quality apparel and accessories for the modern lifestyle. 
              Express yourself with our curated collection.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Shop
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Sale
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold">Customer Service</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Shipping Info
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Returns & Exchanges
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Size Guide
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Fashion Street, Style City, SC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@stylehub.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Aloma Tees. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};