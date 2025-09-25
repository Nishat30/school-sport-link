import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, Star, Search, Filter, Phone, Calendar, Users, Wifi, Car, Trophy } from "lucide-react";

const Grounds = () => {
  const grounds = [
    {
      id: 1,
      name: "Central Sports Complex",
      type: "Multi-Sport",
      location: "Downtown Area, 2.5 km away",
      rating: 4.8,
      price: "₹500/hour",
      available: true,
      sports: ["Football", "Basketball", "Tennis"],
      amenities: ["Parking", "WiFi", "Changing Rooms", "Cafeteria"],
      phone: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      name: "Elite Cricket Academy",
      type: "Cricket",
      location: "Sports City, 4.2 km away",
      rating: 4.9,
      price: "₹800/hour",
      available: true,
      sports: ["Cricket"],
      amenities: ["Professional Pitch", "Nets", "Equipment", "Coaching"],
      phone: "+91 98765 43211",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      name: "Aquatic Center",
      type: "Swimming",
      location: "North Zone, 3.8 km away",
      rating: 4.7,
      price: "₹300/hour",
      available: false,
      sports: ["Swimming", "Water Polo"],
      amenities: ["Olympic Pool", "Kid's Pool", "Lockers", "Trainer"],
      phone: "+91 98765 43212",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      name: "Indoor Sports Arena",
      type: "Indoor",
      location: "West Side, 1.8 km away",
      rating: 4.6,
      price: "₹600/hour",
      available: true,
      sports: ["Badminton", "Table Tennis", "Volleyball"],
      amenities: ["AC", "Sound System", "Scoreboard", "Seating"],
      phone: "+91 98765 43213",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      name: "Athletics Track & Field",
      type: "Athletics",
      location: "Stadium Road, 5.1 km away",
      rating: 4.5,
      price: "₹400/hour",
      available: true,
      sports: ["Running", "Long Jump", "Shot Put", "Javelin"],
      amenities: ["400m Track", "Field Events", "Timer", "Equipment"],
      phone: "+91 98765 43214",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 6,
      name: "Football Training Ground",
      type: "Football",
      location: "Sports Complex, 3.3 km away",
      rating: 4.4,
      price: "₹450/hour",
      available: true,
      sports: ["Football"],
      amenities: ["Natural Turf", "Floodlights", "Goals", "Seating"],
      phone: "+91 98765 43215",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'parking': return Car;
      case 'wifi': return Wifi;
      case 'ac': return Clock;
      default: return Trophy;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Sports Grounds
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Perfect Sports Grounds
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and book the best sports facilities near you for practice, training, and competitions.
          </p>
        </div>

        {/* Map Placeholder */}
        <Card className="p-6 mb-8 bg-gradient-card border-0 shadow-card">
          <div className="bg-muted/50 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Interactive Map View</h3>
              <p className="text-muted-foreground">Map integration coming soon with real-time availability</p>
            </div>
          </div>
        </Card>

        {/* Filters and Search */}
        <Card className="p-6 mb-8 bg-gradient-card border-0 shadow-card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by location or ground name..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Sport Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="swimming">Swimming</SelectItem>
                  <SelectItem value="athletics">Athletics</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Distance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1km">Within 1km</SelectItem>
                  <SelectItem value="5km">Within 5km</SelectItem>
                  <SelectItem value="10km">Within 10km</SelectItem>
                  <SelectItem value="20km">Within 20km</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="available">Available Now</SelectItem>
                  <SelectItem value="today">Available Today</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Grounds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grounds.map((ground) => (
            <Card key={ground.id} className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 overflow-hidden">
              {/* Ground Image */}
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${ground.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={ground.available ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"}>
                    {ground.available ? "Available" : "Booked"}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-card/90">
                    {ground.type}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {ground.name}
                  </h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {ground.location}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Rating and Price */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-warning fill-current mr-1" />
                    <span className="font-medium">{ground.rating}</span>
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {ground.price}
                  </div>
                </div>

                {/* Sports */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {ground.sports.map((sport, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {sport}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {ground.amenities.slice(0, 4).map((amenity, index) => {
                      const Icon = getAmenityIcon(amenity);
                      return (
                        <div key={index} className="flex items-center text-xs text-muted-foreground">
                          <Icon className="w-3 h-3 mr-1" />
                          {amenity}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant={ground.available ? "hero" : "outline"} 
                    size="sm" 
                    className="flex-1"
                    disabled={!ground.available}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {ground.available ? "Book Now" : "Unavailable"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Grounds
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Grounds;