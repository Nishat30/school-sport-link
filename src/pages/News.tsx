import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, User, MessageCircle, Share2, Search, Trophy, TrendingUp, Calendar } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "National Swimming Championship Announces Record Prize Pool",
      excerpt: "The upcoming National Swimming Championship will feature the largest prize pool in the event's history, with ₹5 lakhs for winners.",
      category: "Swimming",
      author: "Sports Reporter",
      publishedAt: "2 hours ago",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      trending: true
    },
    {
      id: 2,
      title: "Local School Wins District Football Championship After 10 Years",
      excerpt: "St. Mary's High School defeats defending champions in a thrilling final match that went into penalty shootouts.",
      category: "Football",
      author: "Local Correspondent",
      publishedAt: "5 hours ago",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      trending: false
    },
    {
      id: 3,
      title: "New Sports Policy Announced for Enhanced Student Participation",
      excerpt: "Government introduces comprehensive policy changes to increase sports participation in schools across the state.",
      category: "Policy",
      author: "Education Desk",
      publishedAt: "1 day ago",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      trending: true
    },
    {
      id: 4,
      title: "Basketball Academy Launches Scholarship Program",
      excerpt: "Elite Basketball Academy announces full scholarships for talented students from underprivileged backgrounds.",
      category: "Basketball",
      author: "Sports Editor",
      publishedAt: "2 days ago",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      trending: false
    },
    {
      id: 5,
      title: "Cricket World Cup Inspires Youth Participation",
      excerpt: "Recent World Cup victory leads to 300% increase in cricket registrations among school students nationwide.",
      category: "Cricket",
      author: "Youth Sports",
      publishedAt: "3 days ago",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      trending: true
    },
    {
      id: 6,
      title: "Digital Sports Management Platform Revolutionizes School Sports",
      excerpt: "New technology platform simplifies sports event management for schools and colleges across the country.",
      category: "Technology",
      author: "Tech Reporter",
      publishedAt: "1 week ago",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      trending: false
    }
  ];

  const featuredNews = newsArticles.slice(0, 3);
  const regularNews = newsArticles.slice(3);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "football": return "bg-success text-success-foreground";
      case "basketball": return "bg-warning text-warning-foreground";
      case "cricket": return "bg-primary text-primary-foreground";
      case "swimming": return "bg-secondary text-secondary-foreground";
      case "policy": return "bg-accent text-accent-foreground";
      case "technology": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Sports News
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Sports Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, events, and achievements in the world of interschool sports.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="p-6 mb-8 bg-gradient-card border-0 shadow-card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search news articles..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="swimming">Swimming</SelectItem>
                  <SelectItem value="policy">Policy</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Featured News */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-2xl font-bold">Trending News</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredNews.map((article, index) => (
              <Card key={article.id} className={`bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 overflow-hidden ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className={`${index === 0 ? 'h-64' : 'h-48'} bg-cover bg-center relative`} style={{ backgroundImage: `url(${article.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    {article.trending && (
                      <Badge className="bg-gradient-competitive text-primary-foreground">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className={`${index === 0 ? 'text-2xl' : 'text-lg'} font-bold text-white mb-2 line-clamp-2`}>
                      {article.title}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-white/80 text-xs">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.publishedAt}
                        </div>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular News */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Calendar className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-2xl font-bold">Recent Updates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article) => (
              <Card key={article.id} className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${article.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.publishedAt}
                      </div>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;