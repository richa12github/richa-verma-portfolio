import { Briefcase, Calendar, MapPin, ChevronRight, Code2, Brain, Trophy, Target } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Internships = () => {
  const internships = [
    {
      title: "Full Stack Development Intern",
      company: "Brillica Service",
      duration: "June - July 2022",
      location: "Remote",
      type: "Internship",
      skills: ["JavaScript", "React", "Node.js", "Database Design", "API Development"],
      achievements: [
        "Learned complete process of application software development (front-end + back-end)",
        "Acquired practical knowledge of development tools and workflows",
        "Worked on simulated real-world projects under guided mentorship",
        "Gained experience in full-stack web development lifecycle"
      ],
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Machine Learning Trainee",
      company: "Internshala Training",
      duration: "June - July 2023", 
      location: "Remote",
      type: "Training Program",
      skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Data Visualization", "ML Algorithms"],
      achievements: [
        "Covered supervised & unsupervised learning, model evaluation, and real-world ML applications",
        "Gained hands-on experience with Python, NumPy, Pandas, Scikit-Learn, and Data Visualization",
        "Built and trained ML models on practical datasets",
        "Implemented end-to-end machine learning projects from data preprocessing to model deployment"
      ],
      color: "bg-green-500/10 border-green-500/20"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="internships">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Trophy className="w-4 h-4" />
            Professional Journey
            <Target className="w-4 h-4" />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Experience & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategic internships and training programs that shaped my expertise in full-stack development 
            and cutting-edge machine learning technologies.
          </p>
        </div>

        <div className="space-y-12">
          {internships.map((internship, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover-lift border-border/30 hover:border-primary/30 transition-all duration-500 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {index === 0 ? (
                      <Code2 className="text-primary w-8 h-8" />
                    ) : (
                      <Brain className="text-accent w-8 h-8" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {internship.title}
                    </h3>
                    <p className="text-xl text-primary font-semibold mb-3">{internship.company}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{internship.location}</span>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary font-medium">
                        {internship.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative pt-0">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Achievements */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                      <Trophy className="w-5 h-5 text-primary" />
                      <h4 className="text-lg font-semibold">Key Achievements & Learning</h4>
                    </div>
                    <div className="grid gap-4">
                      {internship.achievements.map((achievement, idx) => (
                        <div key={idx} className="group/item flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                          <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Panel */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-card/50 to-card/20 border border-border/30 rounded-lg p-6 h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <Code2 className="w-5 h-5 text-accent" />
                        <h4 className="font-semibold">Tech Stack</h4>
                      </div>
                      <div className="space-y-2">
                        {internship.skills.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="block text-center py-2 hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-200"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 max-w-2xl mx-auto hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Ready for the Next Challenge</h3>
                <Target className="w-6 h-6 text-accent" />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Equipped with hands-on experience in development and machine learning, 
                I'm ready to bring fresh perspectives and proven learning ability to your team.
              </p>
              <div className="inline-flex items-center gap-2 text-primary font-semibold group cursor-pointer">
                <span className="group-hover:text-accent transition-colors">Open to new opportunities</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Internships;