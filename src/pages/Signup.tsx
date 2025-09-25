import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Trophy, Mail, Lock, User, School, ArrowRight, Users } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    school: "",
    schoolType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, redirect to dashboard
    window.location.href = "/dashboard";
  };

  const roles = [
    { value: "student", label: "Student", icon: Users },
    { value: "coach", label: "Coach", icon: Trophy },
    { value: "admin", label: "School Admin", icon: Users },
    { value: "mentor", label: "Mentor", icon: Trophy }
  ];

  const schoolTypes = [
    { value: "cbse", label: "CBSE" },
    { value: "icse", label: "ICSE" },
    { value: "state", label: "State Board" },
    { value: "private", label: "Private" },
    { value: "government", label: "Government" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-card/95 backdrop-blur-sm border-0 shadow-competitive">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Join SportHub</h1>
            <p className="text-muted-foreground">Create your account to get started</p>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-3 block">Select Your Role</Label>
            <div className="grid grid-cols-2 gap-2">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <button
                    key={role.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, role: role.value })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.role === role.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Icon className="w-4 h-4 mx-auto mb-1" />
                    <div className="text-xs font-medium">{role.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-10"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="pl-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm"
                    className="pl-10"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="school">School Name</Label>
              <div className="relative">
                <School className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  id="school"
                  type="text"
                  placeholder="Enter your school name"
                  className="pl-10"
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="schoolType">School Type</Label>
              <Select value={formData.schoolType} onValueChange={(value) => setFormData({ ...formData, schoolType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select school type" />
                </SelectTrigger>
                <SelectContent>
                  {schoolTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full" variant="hero">
              Create Account
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </Button>
          </div>

          {/* Sign in link */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Signup;