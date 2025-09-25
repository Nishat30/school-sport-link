import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Clock, MessageCircle, Phone, Mail, Users, Trophy, Search, Award } from "lucide-react";

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "Coach Sarah Williams",
      specialization: "Swimming & Water Sports",
      experience: "15 years",
      rating: 4.9,
      location: "Sports Academy, Delhi",
      availability: "Available",
      price: "₹1,500/session",
      achievements: ["Olympic Trainer", "National Coach"],
      languages: ["English", "Hindi"],
      description: "Former Olympic swimmer with extensive coaching experience. Specialized in competitive swimming and water safety.",
      image: "https://images.unsplash.com/photo-1594736797933-d0c9b5b7cfce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      students: 45,
      successRate: "95%"
    },
    {
      id: 2,
      name: "Coach Rajesh Kumar",
      specialization: "Football & Fitness",
      experience: "12 years",
      rating: 4.8,
      location: "Elite Sports Complex, Mumbai",
      availability: "Busy",
      price: "₹1,200/session",
      achievements: ["State Champion", "FIFA Certified"],
      languages: ["Hindi", "English", "Marathi"],
      description: "Professional football coach with FIFA certification. Expert in youth development and tactical training.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      students: 67,
      successRate: "92%"
    },
    {
      id: 3,
      name: "Coach Priya Sharma",
      specialization: "Basketball & Athletics",
      experience: "10 years",
      rating: 4.7,
      location: "University Sports Center, Bangalore",
      availability: "Available",
      price: "₹1,000/session",
      achievements: ["National Player", "Youth Development"],
      languages: ["English", "Hindi", "Kannada"],
      description: "Former national basketball player specializing in youth training and athletic development programs.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      students: 38,
      successRate: "89%"
    },
    {
      id: 4,
      name: "Coach Michael Thompson",
      specialization: "Cricket & Strategy",
      experience: "18 years",
      rating: 4.9,
      location: "Cricket Academy, Chennai",
      availability: "Available",
      price: "₹2,000/session",
      achievements: ["Ranji Trophy", "International Coach"],
      languages: ["English", "Tamil"],
      description: "International cricket coach with Ranji Trophy experience. Expert in batting techniques and game strategy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      students: 52,
      successRate: "96%"
    },
    {
      id: 5,
      name: "Coach Anjali Mehta",
      specialization: "Badminton & Tennis",
      experience: "8 years",
      rating: 4.6,
      location: "Racquet Sports Club, Pune",
      availability: "Available",
      price: "₹800/session",
      achievements: ["State Medallist", "Certified Trainer"],
      languages: ["Hindi", "English", "Gujarati"],
      description: "Professional badminton and tennis coach with focus on technique refinement and competitive preparation.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      students: 29,
      successRate: "87%"
    },
    {
      id: 6,
      name: "Coach David Lee",
      specialization: "Volleyball & Team Sports",
      experience: "14 years",
      rating: 4.8,
      location: "Indoor Sports Complex, Hyderabad",
      availability: "Available",
      price: "₹1,300/session",
      achievements: ["Professional Player", "Team Building Expert"],
      languages: ["English", "Telugu"],
      description: "Former professional volleyball player with expertise in team dynamics and competitive volleyball training.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      students: 41,
      successRate: "91%"
    }
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability.toLowerCase()) {
      case "available": return "bg-success text-success-foreground";
      case "busy": return "bg-warning text-warning-foreground";
      case "unavailable": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Expert Mentors
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn from the Best
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with experienced coaches and mentors to take your sports performance to the next level.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="p-6 mb-8 bg-gradient-card border-0 shadow-card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search mentors by name or specialization..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="swimming">Swimming</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="badminton">Badminton</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10-15">10-15 years</SelectItem>
                  <SelectItem value="15+">15+ years</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="busy">Busy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 overflow-hidden">
              {/* Mentor Profile */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{mentor.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{mentor.specialization}</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-warning fill-current mr-1" />
                        <span className="text-sm font-medium">{mentor.rating}</span>
                      </div>
                      <Badge className={`${getAvailabilityColor(mentor.availability)} text-xs`}>
                        {mentor.availability}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Experience and Location */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {mentor.experience} experience
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {mentor.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    {mentor.students} students • {mentor.successRate} success rate
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {mentor.achievements.map((achievement, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {mentor.description}
                </p>

                {/* Languages */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {mentor.languages.map((language, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary">
                    {mentor.price}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="hero" size="sm">
                      Book Session
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Mentors
          </Button>
        </div>

        {/* CTA Section */}
        <Card className="mt-16 p-8 bg-gradient-hero border-0 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Want to Become a Mentor?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Join our platform as a mentor and help shape the future of sports by training the next generation of athletes.
          </p>
          <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Apply as Mentor
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Mentors;