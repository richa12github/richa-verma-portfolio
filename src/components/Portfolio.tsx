import { ExternalLink, Github, TrendingUp, Users, BarChart3, Database, Zap, Star, Award, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: "Blinkit Analysis Dashboard",
      description: "Comprehensive analysis of 8.5K+ rows of delivery data to optimize business operations and improve delivery efficiency.",
      longDescription: "Built an end-to-end analytics solution for Blinkit delivery data, focusing on sales performance, customer satisfaction, and operational efficiency. The project involved extensive data cleaning, statistical analysis, and interactive dashboard creation.",
      technologies: ["Excel", "SQL", "Power BI", "Data Analysis"],
      achievements: [
        "Cleaned & processed 8.5K+ rows of delivery data",
        "Created comprehensive KPIs for sales, average rating, and delivery metrics",
        "Improved report accuracy by 20% through advanced data validation",
        "Optimized delivery routes, reducing delays by 15%",
        "Generated actionable insights for business strategy optimization"
      ],
      metrics: {
        dataProcessed: "8.5K+ rows",
        accuracyImprovement: "20%",
        deliveryOptimization: "15% reduction in delays"
      },
      category: "Business Intelligence",
      icon: TrendingUp,
      color: "bg-green-500/10 border-green-500/20",
      github: "https://github.com/richa12github",
      demo: "#"
    },
    {
      title: "HR Analytics Platform",
      description: "Advanced HR data analysis system for employee attrition prediction and performance optimization using statistical modeling.",
      longDescription: "Developed a comprehensive HR analytics platform that analyzes employee data to identify attrition patterns, predict high-risk employees, and provide actionable insights for HR decision-making.",
      technologies: ["Power BI", "Excel", "SQL", "Statistical Analysis"],
      achievements: [
        "Analyzed comprehensive HR dataset for attrition & performance patterns",
        "Improved identification of high-attrition departments by 25%",
        "Reduced employee churn by 15% through data-driven insights",
        "Created predictive models for employee retention",
        "Developed automated reporting system for HR teams"
      ],
      metrics: {
        departmentAccuracy: "25% improvement",
        churnReduction: "15%",
        retentionPrediction: "85% accuracy"
      },
      category: "People Analytics",
      icon: Users,
      color: "bg-blue-500/10 border-blue-500/20",
      github: "https://github.com/richa12github",
      demo: "#"
    }
  ];

  const skills = ["Python", "SQL", "Power BI", "Excel", "Data Visualization", "Statistical Analysis", "Machine Learning", "Business Intelligence"];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="portfolio">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-16 right-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-16 left-16 w-28 h-28 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Featured Work
            <Award className="w-4 h-4" />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Portfolio Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world data analytics projects showcasing expertise in business intelligence, 
            statistical analysis, and actionable insights generation that drive measurable results.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover-lift border-border/30 hover:border-primary/30 transition-all duration-500 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="p-0 relative">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Project Info - Main Content */}
                  <div className="lg:col-span-3 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <project.icon className="text-primary w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary font-medium">
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                      {project.longDescription}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        <h4 className="text-lg font-semibold">Key Achievements</h4>
                      </div>
                      <div className="grid gap-3">
                        {project.achievements.slice(0, 3).map((achievement, idx) => (
                          <div key={idx} className="group/item flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover/item:scale-150 transition-transform flex-shrink-0" />
                            <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Database className="w-5 h-5 text-accent" />
                        <h4 className="text-lg font-semibold">Technologies Used</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="hover:bg-accent/10 hover:border-accent/30 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button className="flex-1 hover-lift group/btn" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 group-hover/btn:scale-110 transition-transform" size={18} />
                          View Code
                        </a>
                      </Button>
                      <Button variant="outline" className="flex-1 hover-lift group/btn" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 group-hover/btn:scale-110 transition-transform" size={18} />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Enhanced Metrics Panel */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-card/60 to-card/20 border-l border-border/30">
                    <div className="p-8 h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-8">
                        <Star className="w-5 h-5 text-primary" />
                        <h4 className="text-lg font-semibold">Project Impact</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6 flex-1">
                        {Object.entries(project.metrics).map(([key, value], idx) => (
                          <Card key={idx} className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20 hover-lift">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize font-medium">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* Additional Results */}
                      <div className="mt-8 pt-6 border-t border-border/30">
                        <h5 className="font-semibold mb-4 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-accent" />
                          Additional Results
                        </h5>
                        <div className="space-y-3">
                          {project.achievements.slice(3).map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 max-w-4xl mx-auto hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Technical Stack</h3>
                <Star className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm py-2 px-4 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Each project demonstrates comprehensive data science capabilities, from initial data collection 
                and cleaning through advanced statistical analysis to business insight generation and strategic 
                decision support.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;