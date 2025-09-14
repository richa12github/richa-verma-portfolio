import { useState, useEffect } from 'react';
import { Code, Database, BarChart3, Brain, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleBars(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-500",
      skills: [
        { name: "Python", level: 85, description: "Data analysis, ML, automation" },
        { name: "SQL", level: 80, description: "Database queries, data manipulation" },
        { name: "JavaScript", level: 70, description: "Web development, scripting" }
      ]
    },
    {
      title: "Data Analysis & Visualization",
      icon: BarChart3,
      color: "text-green-500",
      skills: [
        { name: "Power BI", level: 85, description: "Dashboard creation, reporting" },
        { name: "Excel", level: 90, description: "Advanced formulas, pivot tables" },
        { name: "Pandas", level: 80, description: "Data manipulation, cleaning" },
        { name: "NumPy", level: 75, description: "Numerical computing" },
        { name: "Matplotlib", level: 70, description: "Data visualization" }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "text-purple-500",
      skills: [
        { name: "Scikit-Learn", level: 75, description: "ML algorithms, model training" },
        { name: "Statistical Analysis", level: 80, description: "Hypothesis testing, inference" },
        { name: "LLMs", level: 70, description: "Language models, AI tools" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      color: "text-orange-500",
      skills: [
        { name: "MySQL", level: 75, description: "Database management" },
        { name: "JIRA", level: 70, description: "Project management" },
        { name: "FIGMA", level: 65, description: "UI/UX design" },
        { name: "PowerPoint", level: 85, description: "Presentations, reporting" }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Critical Thinking", icon: Brain },
    { name: "Teamwork", icon: Users },
    { name: "Communication", icon: Users },
    { name: "Project Management", icon: BarChart3 },
    { name: "Analytical Thinking", icon: Brain }
  ];

  const concepts = [
    "Data Cleaning", "EDA (Exploratory Data Analysis)", "Statistical Analysis", 
    "Scrum Methodology", "SWOT Analysis", "Business Intelligence",
    "Data Mining", "Predictive Analytics", "Machine Learning Workflows"
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning data analytics, machine learning, and business intelligence.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="bg-gradient-card hover-lift border-border/50 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <category.icon className={`${category.color}`} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar h-2">
                        <div 
                          className="skill-progress h-full rounded-full"
                          style={{ 
                            width: visibleBars ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card hover-lift border-border/50 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <skill.icon className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-sm font-medium">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Concepts & Methodologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Concepts & Methodologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {concepts.map((concept, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm py-2 px-4 hover:bg-primary/10 hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {concept}
              </Badge>
            ))}
          </div>
        </div>

        {/* AI Tools Note */}
        <div className="mt-12 text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-md mx-auto">
            <CardContent className="p-6">
              <Brain className="mx-auto mb-3 text-primary" size={32} />
              <h4 className="font-semibold mb-2">AI-Powered Workflow</h4>
              <p className="text-sm text-muted-foreground">
                Proficient in leveraging AI tools like ChatGPT for enhanced productivity and problem-solving
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;