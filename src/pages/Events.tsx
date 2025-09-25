import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Trophy, Search, Filter, Plus, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Inter-School Football Championship",
      level: "District",
      date: "March 15-20, 2024",
      location: "Central Sports Complex",
      participants: 24,
      status: "registering",
      sport: "Football",
      prize: "₹50,000"
    },
    {
      id: 2,
      title: "State Basketball Tournament",
      level: "State",
      date: "April 2-8, 2024",
      location: "State Indoor Stadium",
      participants: 32,
      status: "upcoming",
      sport: "Basketball",
      prize: "₹1,00,000"
    },
    {
      id: 3,
      title: "National Swimming Championship",
      level: "National",
      date: "May 10-15, 2024",
      location: "Aquatic Center Delhi",
      participants: 48,
      status: "upcoming",
      sport: "Swimming",
      prize: "₹2,50,000"
    },
    {
      id: 4,
      title: "Intra-School Cricket Cup",
      level: "School",
      date: "February 20-25, 2024",
      location: "School Ground",
      participants: 16,
      status: "ongoing",
      sport: "Cricket",
      prize: "₹10,000"
    },
    {
      id: 5,
      title: "Regional Athletics Meet",
      level: "Regional",
      date: "June 5-10, 2024",
      location: "Athletic Stadium",
      participants: 40,
      status: "registering",
      sport: "Athletics",
      prize: "₹75,000"
    },
    {
      id: 6,
      title: "Inter-College Badminton Championship",
      level: "District",
      date: "March 28-30, 2024",
      location: "Indoor Sports Complex",
      participants: 20,
      status: "registering",
      sport: "Badminton",
      prize: "₹30,000"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "registering": return "bg-warning text-warning-foreground";
      case "upcoming": return "bg-primary text-primary-foreground";
      case "ongoing": return "bg-success text-success-foreground";
      case "completed": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "National": return "bg-gradient-competitive text-primary-foreground";
      case "State": return "bg-gradient-primary text-primary-foreground";
      case "District": return "bg-gradient-secondary text-secondary-foreground";
      case "Regional": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Trophy className="w-4 h-4 mr-2" />
            Sports Events
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Sports Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From school competitions to national championships, find and participate in events that match your skill level.
          </p>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 mb-8 bg-gradient-card border-0 shadow-card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search events by name or sport..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="school">School</SelectItem>
                  <SelectItem value="district">District</SelectItem>
                  <SelectItem value="state">State</SelectItem>
                  <SelectItem value="national">National</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="athletics">Athletics</SelectItem>
                  <SelectItem value="swimming">Swimming</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="registering">Registering</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                </SelectContent>
              </Select>
              <Link to="/events/create">
                <Button variant="hero" className="w-full sm:w-auto">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="p-6">
                {/* Event Header */}
                <div className="flex justify-between items-start mb-4">
                  <Badge className={getLevelColor(event.level)}>
                    {event.level}
                  </Badge>
                  <Badge className={getStatusColor(event.status)}>
                    {event.status}
                  </Badge>
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    {event.participants} teams participating
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Trophy className="w-4 h-4 mr-2" />
                    Prize Pool: {event.prize}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant={event.status === "registering" ? "hero" : "outline"} 
                    size="sm" 
                    className="flex-1"
                  >
                    {event.status === "registering" ? "Register" : "View Details"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;