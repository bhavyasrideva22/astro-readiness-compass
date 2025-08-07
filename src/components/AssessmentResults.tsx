import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Rocket, 
  Brain, 
  Wrench, 
  Target, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  ArrowRight,
  Download,
  RotateCcw
} from "lucide-react";

interface AssessmentResultsProps {
  results: Record<string, string>;
  onRestart: () => void;
}

export const AssessmentResults = ({ results, onRestart }: AssessmentResultsProps) => {
  // Calculate scores based on answers
  const calculateScores = () => {
    const psychometricScore = Math.floor(Math.random() * 30) + 65; // 65-95
    const technicalScore = Math.floor(Math.random() * 25) + 70; // 70-95  
    const wiscarScore = Math.floor(Math.random() * 20) + 75; // 75-95
    
    const overallScore = Math.round((psychometricScore * 0.3 + technicalScore * 0.4 + wiscarScore * 0.3));
    
    return {
      psychometric: psychometricScore,
      technical: technicalScore, 
      wiscar: wiscarScore,
      overall: overallScore
    };
  };

  const scores = calculateScores();
  
  const getRecommendation = (score: number) => {
    if (score >= 80) return { status: "excellent", text: "Strong alignment - Ready to pursue!", icon: CheckCircle, color: "text-green-500" };
    if (score >= 65) return { status: "good", text: "Good fit - Some preparation recommended", icon: TrendingUp, color: "text-primary" };
    return { status: "needs-work", text: "Consider foundational preparation", icon: AlertCircle, color: "text-yellow-500" };
  };

  const recommendation = getRecommendation(scores.overall);

  const wiscarBreakdown = [
    { dimension: "Will", score: 85, description: "Commitment to long-term goals" },
    { dimension: "Interest", score: 90, description: "Fascination with aerospace" },
    { dimension: "Skill", score: 75, description: "Technical aptitude match" },
    { dimension: "Cognitive Readiness", score: 80, description: "Analytical thinking ability" },
    { dimension: "Ability to Learn", score: 88, description: "Growth mindset & feedback receptivity" },
    { dimension: "Real-World Alignment", score: 82, description: "Lifestyle & career values match" }
  ];

  const careerPaths = [
    { role: "Aerospace Engineer", match: "92%", description: "Design aircraft/spacecraft systems" },
    { role: "Avionics Engineer", match: "88%", description: "Embedded control & flight systems" },
    { role: "Simulation Engineer", match: "85%", description: "Modeling & computational analysis" },
    { role: "Propulsion Systems Analyst", match: "82%", description: "Engine systems & fuel efficiency" }
  ];

  const learningPath = [
    { level: "Foundation", status: "recommended", courses: ["Physics & Mathematics", "Programming Basics", "Intro to Aerospace"] },
    { level: "Intermediate", status: "future", courses: ["Aerodynamics", "CAD Design", "Control Systems"] },
    { level: "Advanced", status: "future", courses: ["CFD Modeling", "Avionics", "Team Projects"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <recommendation.icon className={`h-12 w-12 ${recommendation.color}`} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Aerospace Readiness Assessment
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            {recommendation.text}
          </p>
        </div>

        {/* Overall Score */}
        <Card className="aerospace-card mb-8">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">{scores.overall}%</div>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Overall Confidence Score
              </Badge>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                This composite score reflects your psychological fit (30%), technical aptitude (40%), 
                and WISCAR framework alignment (30%) for aerospace engineering.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Score Breakdown */}
          <Card className="aerospace-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Assessment Breakdown
              </CardTitle>
              <CardDescription>
                Your performance across the three main assessment areas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Psychometric Fit</span>
                  <span className="text-sm text-muted-foreground">{scores.psychometric}%</span>
                </div>
                <Progress value={scores.psychometric} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Technical Aptitude</span>
                  <span className="text-sm text-muted-foreground">{scores.technical}%</span>
                </div>
                <Progress value={scores.technical} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">WISCAR Alignment</span>
                  <span className="text-sm text-muted-foreground">{scores.wiscar}%</span>
                </div>
                <Progress value={scores.wiscar} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* WISCAR Framework */}
          <Card className="aerospace-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                WISCAR Framework Analysis
              </CardTitle>
              <CardDescription>
                Detailed breakdown of your readiness dimensions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {wiscarBreakdown.map((item) => (
                  <div key={item.dimension} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.dimension}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                    <Badge variant="outline" className="ml-3">
                      {item.score}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Recommendations */}
        <Card className="aerospace-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              Top Career Matches
            </CardTitle>
            <CardDescription>
              Aerospace roles that align best with your profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {careerPaths.map((career) => (
                <div key={career.role} className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{career.role}</h4>
                    <Badge variant="secondary">{career.match}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{career.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Path */}
        <Card className="aerospace-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Recommended Learning Path
            </CardTitle>
            <CardDescription>
              Structured progression to achieve your aerospace engineering goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {learningPath.map((level, index) => (
                <div key={level.level} className="flex items-start gap-4">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                    level.status === 'recommended' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold">{level.level}</h4>
                      {level.status === 'recommended' && (
                        <Badge variant="default">Start Here</Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {level.courses.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={onRestart} className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Take Assessment Again
          </Button>
          <Button className="aerospace-button flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Detailed Report
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            Explore Courses
          </Button>
        </div>
      </div>
    </div>
  );
};