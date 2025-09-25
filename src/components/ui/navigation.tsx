import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Trophy, Users, Calendar, MapPin, MessageCircle, User } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Trophy },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/grounds", label: "Grounds", icon: MapPin },
    { href: "/news", label: "News", icon: MessageCircle },
    { href: "/mentors", label: "Mentors", icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">SportHub</span>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              Beta
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.href} to={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "flex items-center space-x-2",
                      isActive && "bg-primary text-primary-foreground"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-md">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link key={item.href} to={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "flex flex-col items-center space-y-1 h-auto py-2 px-3",
                    isActive && "text-primary"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;