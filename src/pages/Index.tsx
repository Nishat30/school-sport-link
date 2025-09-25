import HeroSection from "@/components/hero-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, MapPin, MessageCircle, Star, ArrowRight, Target, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Comprehensive Platform
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Sports Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From student registration to national championships, manage every aspect of interschool sports competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Event Management",
                description: "Create and manage competitions at all levels - intra-school to national championships.",
                features: ["Tournament Scheduling", "Fixture Management", "Live Score Updates"]
              },
              {
                icon: Users,
                title: "Multi-Role Support",
                description: "Dedicated dashboards for students, coaches, admins, and mentors with role-specific features.",
                features: ["Student Progress Tracking", "Coach Management Tools", "Admin Oversight"]
              },
              {
                icon: Target,
                title: "Performance Analytics",
                description: "Real-time tracking of performance metrics, rankings, and progress visualization.",
                features: ["Live Leaderboards", "Progress Charts", "Performance Insights"]
              },
              {
                icon: MapPin,
                title: "Ground Management",
                description: "Find and book nearby sports facilities with integrated mapping and availability.",
                features: ["Interactive Maps", "Availability Tracking", "Booking System"]
              },
              {
                icon: MessageCircle,
                title: "AI Assistant",
                description: "Multilingual chatbot for instant help and guidance for all users.",
                features: ["24/7 Support", "Voice & Text Input", "Multi-language Support"]
              },
              {
                icon: Shield,
                title: "Secure Platform",
                description: "Enterprise-grade security with role-based access and data protection.",
                features: ["OAuth Integration", "Data Encryption", "Role-based Access"]
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Zap className="w-4 h-4 text-success mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Sports Management?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of schools already using SportHub to manage their competitions effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
