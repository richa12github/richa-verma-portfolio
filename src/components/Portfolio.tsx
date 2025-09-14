import { ExternalLink, Github, TrendingUp, Users, BarChart3, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
    <section className="py-20 px-6" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world data analytics projects demonstrating expertise in business intelligence, 
            statistical analysis, and actionable insights generation.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card hover-lift border-border/50 overflow-hidden animate-slide-up ${project.color}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Project Info */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <project.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
                          <Badge variant="outline" className="mb-3">{project.category}</Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <BarChart3 className="mr-2 text-primary" size={18} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Database className="mr-2 text-primary" size={18} />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button variant="default" size="sm" className="hover-lift" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2" size={16} />
                          View Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="hover-lift" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2" size={16} />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Metrics Panel */}
                  <div className="bg-card/50 p-8 border-l border-border/50">
                    <h4 className="font-semibold mb-6 text-gradient">Project Impact</h4>
                    <div className="space-y-6">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Additional Achievements */}
                    <div className="mt-8">
                      <h5 className="font-medium mb-3 text-sm">Additional Results</h5>
                      <ul className="space-y-2">
                        {project.achievements.slice(3).map((achievement, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6">Project Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm py-2 px-4 hover:bg-primary/10 hover:border-primary transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Each project demonstrates end-to-end data analysis capabilities, from data collection 
            and cleaning to advanced analytics and business insight generation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;