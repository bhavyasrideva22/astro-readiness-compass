import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Brain, Wrench, Target } from "lucide-react";

interface Question {
  id: string;
  text: string;
  type: 'psychometric' | 'technical' | 'wiscar';
  options: { value: string; label: string }[];
  category?: string;
}

interface AssessmentFlowProps {
  onComplete: (results: Record<string, string>) => void;
  onBack: () => void;
}

const questions: Question[] = [
  // Psychometric Questions (Interest Scale)
  {
    id: "interest_1",
    type: "psychometric",
    category: "Interest Scale",
    text: "I enjoy figuring out how mechanical things work.",
    options: [
      { value: "5", label: "Strongly Agree" },
      { value: "4", label: "Agree" },
      { value: "3", label: "Neutral" },
      { value: "2", label: "Disagree" },
      { value: "1", label: "Strongly Disagree" }
    ]
  },
  {
    id: "interest_2", 
    type: "psychometric",
    category: "Interest Scale",
    text: "I am fascinated by space exploration and aviation technology.",
    options: [
      { value: "5", label: "Strongly Agree" },
      { value: "4", label: "Agree" },
      { value: "3", label: "Neutral" },
      { value: "2", label: "Disagree" },
      { value: "1", label: "Strongly Disagree" }
    ]
  },
  {
    id: "personality_1",
    type: "psychometric", 
    category: "Personality",
    text: "I like working in a highly structured environment with clear procedures.",
    options: [
      { value: "5", label: "Strongly Agree" },
      { value: "4", label: "Agree" },
      { value: "3", label: "Neutral" },
      { value: "2", label: "Disagree" },
      { value: "1", label: "Strongly Disagree" }
    ]
  },
  {
    id: "motivation_1",
    type: "psychometric",
    category: "Motivation",
    text: "Even when projects become difficult, I stick with them until completion.",
    options: [
      { value: "5", label: "Strongly Agree" },
      { value: "4", label: "Agree" },
      { value: "3", label: "Neutral" },
      { value: "2", label: "Disagree" },
      { value: "1", label: "Strongly Disagree" }
    ]
  },
  
  // Technical Questions
  {
    id: "tech_1",
    type: "technical",
    category: "General Aptitude",
    text: "A car travels 120 km in 2 hours. What is its average speed?",
    options: [
      { value: "60 km/h", label: "60 km/h" },
      { value: "240 km/h", label: "240 km/h" },
      { value: "122 km/h", label: "122 km/h" },
      { value: "58 km/h", label: "58 km/h" }
    ]
  },
  {
    id: "tech_2",
    type: "technical",
    category: "Physics Knowledge",
    text: "Which force acts opposite to the direction of thrust in aircraft flight?",
    options: [
      { value: "Drag", label: "Drag" },
      { value: "Lift", label: "Lift" },
      { value: "Weight", label: "Weight" },
      { value: "Pressure", label: "Pressure" }
    ]
  },
  {
    id: "tech_3", 
    type: "technical",
    category: "Domain Knowledge",
    text: "In aerodynamics, what does the term 'angle of attack' refer to?",
    options: [
      { value: "angle_wing_airflow", label: "Angle between wing and relative airflow" },
      { value: "angle_fuselage_ground", label: "Angle between fuselage and ground" },
      { value: "angle_thrust_weight", label: "Angle between thrust and weight vectors" },
      { value: "angle_lift_drag", label: "Angle between lift and drag forces" }
    ]
  },

  // WISCAR Framework Questions  
  {
    id: "wiscar_will",
    type: "wiscar",
    category: "Will",
    text: "I am willing to spend several years studying complex mathematics and physics to master aerospace engineering.",
    options: [
      { value: "5", label: "Strongly Agree" },
      { value: "4", label: "Agree" },
      { value: "3", label: "Neutral" },
      { value: "2", label: "Disagree" },
      { value: "1", label: "Strongly Disagree" }
    ]
  },
  {
    id: "wiscar_cognitive",
    type: "wiscar", 
    category: "Cognitive Readiness",
    text: "I enjoy solving complex problems that require breaking them down into smaller parts.",
    options: [
      { value: "5", label: "Strongly Agree" },
      { value: "4", label: "Agree" },
      { value: "3", label: "Neutral" },
      { value: "2", label: "Disagree" },
      { value: "1", label: "Strongly Disagree" }
    ]
  },
  {
    id: "wiscar_learning",
    type: "wiscar",
    category: "Ability to Learn", 
    text: "I actively seek feedback and use it to improve my performance.",
    options: [
      { value: "5", label: "Strongly Agree" },
      { value: "4", label: "Agree" },
      { value: "3", label: "Neutral" },
      { value: "2", label: "Disagree" },
      { value: "1", label: "Strongly Disagree" }
    ]
  }
];

export const AssessmentFlow = ({ onComplete, onBack }: AssessmentFlowProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else {
      onBack();
    }
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'psychometric': return Brain;
      case 'technical': return Wrench;
      case 'wiscar': return Target;
      default: return Brain;
    }
  };

  const IconComponent = getIconForType(question.type);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8 animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="capitalize">
              {question.type} Assessment
            </Badge>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2 aerospace-progress" />
        </div>

        {/* Question Card */}
        <Card className="aerospace-card mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <IconComponent className="h-6 w-6 text-primary" />
              <CardDescription className="text-sm font-medium">
                {question.category}
              </CardDescription>
            </div>
            <CardTitle className="text-xl leading-relaxed">
              {question.text}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[question.id] || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {question.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <RadioGroupItem 
                    value={option.value} 
                    id={option.value}
                    className="text-primary border-primary"
                  />
                  <Label 
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer text-sm leading-relaxed"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            {currentQuestion === 0 ? "Back to Intro" : "Previous"}
          </Button>

          <Button
            onClick={handleNext}
            disabled={!answers[question.id]}
            className="aerospace-button flex items-center gap-2"
          >
            {currentQuestion === questions.length - 1 ? "Complete Assessment" : "Next"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};