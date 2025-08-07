import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Plane, Satellite, Users, Clock, Target } from "lucide-react";

interface AssessmentIntroProps {
  onStartAssessment: () => void;
}

export const AssessmentIntro = ({ onStartAssessment }: AssessmentIntroProps) => {
  const careers = [
    { title: "Aerospace Engineer", icon: Rocket },
    { title: "Avionics Engineer", icon: Satellite },
    { title: "Flight Systems Analyst", icon: Plane },
    { title: "Propulsion Engineer", icon: Target },
    { title: "UAV/Drone Engineer", icon: Satellite },
    { title: "R&D Engineer", icon: Users },
  ];

  const traits = [
    "Precision and attention to detail",
    "High-level analytical thinking", 
    "Passion for flight, space, and technology",
    "Problem-solving under constraints",
    "Team collaboration and communication",
    "Working with simulations and models"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <Rocket className="h-12 w-12 text-primary animate-float" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Am I Ready for Aerospace Engineering?
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive holistic career & learning readiness assessment to determine your psychological, 
            cognitive, and technical fit for pursuing aerospace engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* What is Aerospace Engineering */}
          <Card className="aerospace-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Plane className="h-6 w-6" />
                What is Aerospace Engineering?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Aerospace Engineering is the primary field of engineering concerned with the development 
                of aircraft and spacecraft. It includes two major and overlapping branches: 
                <span className="text-primary font-semibold"> aeronautical engineering</span> (aircraft) and 
                <span className="text-secondary font-semibold"> astronautical engineering</span> (spacecraft).
              </p>
            </CardContent>
          </Card>

          {/* Assessment Details */}
          <Card className="aerospace-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Clock className="h-6 w-6" />
                Assessment Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Duration:</span>
                <Badge variant="secondary">25-30 minutes</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Sections:</span>
                <Badge variant="outline">3 main areas</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Questions:</span>
                <Badge variant="outline">~40 questions</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Paths */}
        <Card className="aerospace-card mb-12">
          <CardHeader>
            <CardTitle className="text-primary">Typical Career Paths</CardTitle>
            <CardDescription>
              Aerospace engineering opens doors to diverse and exciting career opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {careers.map((career, index) => (
                <div 
                  key={career.title}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <career.icon className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">{career.title}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Success Traits */}
        <Card className="aerospace-card mb-12">
          <CardHeader>
            <CardTitle className="text-primary">Traits That Lead to Success</CardTitle>
            <CardDescription>
              Key characteristics that help aerospace engineers excel in their field
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {traits.map((trait, index) => (
                <div 
                  key={trait}
                  className="flex items-start gap-2 text-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Start Assessment */}
        <div className="text-center">
          <Card className="aerospace-card max-w-md mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Ready to Begin?</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Discover your fit for aerospace engineering and get personalized recommendations for your journey.
              </p>
              <Button 
                onClick={onStartAssessment}
                size="lg"
                className="w-full aerospace-button text-lg py-6"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Assessment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};