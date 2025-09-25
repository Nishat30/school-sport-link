import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Users, Calendar, TrendingUp, Star, Clock, Target, Award, MessageCircle, Bell } from "lucide-react";

const Dashboard = () => {
  // This would typically come from user context/authentication
  const userRole = "student"; // student, coach, admin, mentor

  const stats = [
    {
      label: "Events Participated",
      value: "12",
      change: "+3",
      icon: Trophy,
      color: "text-primary"
    },
    {
      label: "Current Ranking",
      value: "#8",
      change: "+2",
      icon: Star,
      color: "text-warning"
    },
    {
      label: "Training Hours",
      value: "45h",
      change: "+12h",
      icon: Clock,
      color: "text-success"
    },
    {
      label: "Achievements",
      value: "5",
      change: "+1",
      icon: Award,
      color: "text-accent"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "District Basketball Championship",
      date: "March 15, 2024",
      time: "10:00 AM",
      location: "Sports Complex A",
      status: "registered"
    },
    {
      id: 2,
      title: "Swimming Practice Session",
      date: "March 18, 2024",
      time: "6:00 PM",
      location: "Aquatic Center",
      status: "scheduled"
    },
    {
      id: 3,
      title: "Inter-School Football Match",
      date: "March 22, 2024",
      time: "4:00 PM",
      location: "Main Stadium",
      status: "upcoming"
    }
  ];

  const recentAchievements = [
    {
      title: "Gold Medal - Regional Swimming",
      date: "Feb 28, 2024",
      level: "Regional"
    },
    {
      title: "Best Player - School Basketball",
      date: "Feb 15, 2024",
      level: "School"
    },
    {
      title: "Participation Certificate - Athletics",
      date: "Feb 10, 2024",
      level: "District"
    }
  ];

  const trainingProgress = [
    { skill: "Swimming Technique", progress: 85 },
    { skill: "Basketball Shooting", progress: 72 },
    { skill: "Football Dribbling", progress: 68 },
    { skill: "Athletic Endurance", progress: 90 }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, Alex! 👋
              </h1>
              <p className="text-muted-foreground">
                Here's what's happening with your sports journey today.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications (3)
              </Button>
              <Button variant="hero" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Coach
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <div className="flex items-baseline space-x-2">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-primary-foreground`} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Events */}
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Upcoming Events
                </h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{event.date}</span>
                        <span>{event.time}</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Badge 
                      variant={event.status === "registered" ? "default" : "secondary"}
                      className="ml-4"
                    >
                      {event.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Training Progress */}
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Training Progress
                </h2>
                <Button variant="outline" size="sm">
                  Update Goals
                </Button>
              </div>
              <div className="space-y-6">
                {trainingProgress.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-sm text-muted-foreground">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="w-4 h-4 mr-2" />
                  Register for Event
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Find Training Partner
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Ground
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message Coach
                </Button>
              </div>
            </Card>

            {/* Recent Achievements */}
            <Card className="p-6 bg-gradient-card border-0 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Recent Achievements
                </h2>
              </div>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{achievement.title}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                        <Badge variant="outline" className="text-xs">
                          {achievement.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Performance Summary */}
            <Card className="p-6 bg-gradient-hero border-0 text-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">
                Great Progress!
              </h3>
              <p className="text-primary-foreground/90 text-sm mb-4">
                You've improved by 15% this month. Keep up the excellent work!
              </p>
              <Button variant="hero" size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                View Detailed Report
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;