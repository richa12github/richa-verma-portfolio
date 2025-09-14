import { useState, useEffect } from 'react';
import { Code, Database, BarChart3, Brain, Users, Lightbulb, Zap, Star, Target } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
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
    <section className="py-20 px-6 relative overflow-hidden" id="skills">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/3 via-transparent to-accent/3" />
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Technical Arsenal
            <Star className="w-4 h-4" />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning data science, machine learning, and business intelligence 
            technologies, backed by real-world project experience.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover-lift border-border/30 hover:border-primary/30 transition-all duration-500 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <category.icon className={`${category.color} w-7 h-7`} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
              </CardHeader>

              <CardContent className="relative pt-0">
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-primary">{skill.level}%</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-3 h-3 ${i < Math.floor(skill.level / 20) ? 'text-primary fill-current' : 'text-muted-foreground/30'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="skill-bar h-3 bg-muted/30 rounded-full overflow-hidden">
                          <div 
                            className="skill-progress h-full bg-gradient-to-r from-primary to-accent rounded-full relative overflow-hidden"
                            style={{ 
                              width: visibleBars ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Core Competencies</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential soft skills that complement technical expertise and drive collaborative success.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softSkills.map((skill, index) => (
              <Card 
                key={index} 
                className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover-lift border-border/30 hover:border-accent/30 text-center transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <skill.icon className="text-accent" size={24} />
                  </div>
                  <p className="font-semibold text-sm group-hover:text-accent transition-colors">
                    {skill.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Concepts & Methodologies */}
        <div className="text-center mb-16">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-4">Concepts & Methodologies</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced concepts and industry-standard methodologies mastered through academic study and practical application.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {concepts.map((concept, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="group text-sm py-3 px-5 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-fade-in cursor-default"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Target className="w-3 h-3 mr-2 group-hover:text-primary transition-colors" />
                {concept}
              </Badge>
            ))}
          </div>
        </div>

        {/* AI Tools Highlight */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 max-w-xl mx-auto hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Brain className="text-primary" size={32} />
                <Zap className="text-accent" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">AI-Enhanced Productivity</h4>
              <p className="text-muted-foreground leading-relaxed">
                Leveraging cutting-edge AI tools like ChatGPT and advanced language models to accelerate 
                development, enhance problem-solving capabilities, and optimize workflow efficiency.
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary">
                  ChatGPT Expert
                </Badge>
                <Badge variant="outline" className="bg-accent/10 border-accent/30 text-accent">
                  AI Integration
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;