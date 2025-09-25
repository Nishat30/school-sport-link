import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trophy, Users, Calendar, Target, ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-background/5"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/20 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header Badge */}
          <Badge variant="secondary" className="mb-6 animate-fade-in-up">
            <Star className="w-4 h-4 mr-2" />
            Sports Competition Management Platform
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Compete.
            <br />
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Connect.
            </span>
            <br />
            Conquer.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            The ultimate platform for managing interschool sports competitions, 
            from local matches to national championships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/signup">
              <Button variant="hero" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                Explore Events
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {[
              {
                icon: Trophy,
                title: "Competition Management",
                description: "Organize tournaments from school to national level"
              },
              {
                icon: Users,
                title: "Multi-Role Support",
                description: "Students, coaches, admins, and mentors in one platform"
              },
              {
                icon: Target,
                title: "Real-time Tracking",
                description: "Live scores, rankings, and performance analytics"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 bg-card/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-card/20 transition-all duration-300 hover:scale-105 hover:shadow-primary"
                >
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;