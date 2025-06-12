import { Search, ShoppingCart, Menu, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Header = () => {
  const navItems = [
    { 
      name: "Home", 
      href: "/",
      submenu: []
    },
    { 
      name: "Products", 
      href: "/product",
      submenu: [
        { name: "New Arrivals", href: "/product" },
        { name: "Best Sellers", href:  "/product" },
        { name: "Sale Items", href:  "/product" },
        { name: "Gift Cards", href: "/product" }
      ]
    },
    { 
      name: "Categories", 
      href: "/",
      submenu: [
        { name: "T-Shirts", href: "#" },
        { name: "Hoodies & Sweatshirts", href: "#" },
        { name: "Hats & Caps", href: "#" },
        { name: "Promotional Products", href: "#" },
        { name: "Accessories", href: "#" }
      ]
    },
    { 
      name: "Contact", 
      href: "#",
      submenu: []
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary"></div>
            <span className="text-xl font-bold">Aloma Tees</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.submenu.length > 0 ? (
                <HoverCard key={item.name} openDelay={100} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" className="text-sm font-medium hover:text-primary flex items-center space-x-1 transition-colors  group">
                      {item.name}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-56 p-0 bg-background border shadow-lg">
                    <div className="flex flex-col">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ) : item.submenu.length > 0 ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary group">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-background border shadow-lg">
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <a
                          href={subItem.href}
                          className="w-full cursor-pointer hover:bg-accent hover:text-accent-foreground"
                        >
                          {subItem.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-sm mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Search button for mobile */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-primary block py-2"
                      >
                        {item.name}
                      </a>
                      {item.submenu.length > 0 && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="text-sm text-muted-foreground hover:text-primary block py-1"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;