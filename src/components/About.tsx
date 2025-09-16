import { GraduationCap, Award, Calendar, MapPin, Star, Trophy, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const education = [
    {
      degree: "B-Tech, Computer Science & Engineering",
      institution: "Uttaranchal University, Dehradun",
      duration: "2021-2025",
      grade: "CGPA 8.51",
      icon: GraduationCap,
    },
    {
      degree: "12th Grade",
      institution: "Gyan Kunj Academy",
      duration: "2019-2021",
      grade: "81.8%",
      icon: GraduationCap,
    },
    {
      degree: "10th Grade", 
      institution: "Gyan Kunj Academy",
      duration: "2017-2019",
      grade: "81.2%",
      icon: GraduationCap,
    },
  ];

  const certifications = [
    {
      name: "Data Analytics Certification",
      issuer: "Deloitte",
      icon: Award,
    },
    {
      name: "Analytics Certification",
      issuer: "TATA",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Fresh Graduate • Ready to Excel
            <Star className="w-4 h-4" />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science graduate in data analytics, machine learning, 
            and business intelligence. Ready to transform raw data into strategic business insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Personal Story */}
          <div className="lg:col-span-2 space-y-8 animate-slide-up">
            <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">My Journey</h3>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-base">
                    As a fresh Computer Science graduate from Uttaranchal University, I've cultivated 
                    a deep passion for transforming raw data into meaningful insights that drive 
                    strategic business decisions.
                  </p>
                  <p className="text-base">
                    My academic journey, complemented by prestigious certifications from Deloitte 
                    and TATA, has equipped me with a solid foundation in statistical analysis, 
                    data visualization, and advanced machine learning techniques.
                  </p>
                  <p className="text-base">
                    I thrive on solving complex analytical challenges and am particularly drawn to the 
                    intersection of business intelligence and artificial intelligence, where data 
                    meets innovation to create transformative solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">Professional Certifications</h4>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="group relative">
                      <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <cert.icon className="text-primary group-hover:scale-110 transition-transform" size={18} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-foreground">{cert.name}</h5>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          Certified
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/50 hover-lift h-fit sticky top-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Education Timeline</h3>
                </div>
                
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
                  
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="relative pl-14 group">
                        {/* Timeline Node */}
                        <div className="absolute left-4 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background group-hover:scale-125 transition-transform" />
                        
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300">
                          <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                          <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="mr-1" size={12} />
                              {edu.duration}
                            </span>
                            {edu.grade && (
                              <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20 text-primary">
                                {edu.grade}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover-lift text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">8.51</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover-lift text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">2</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border/20 hover-lift text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/10 to-primary/5 border-primary/20 hover-lift text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">2025</div>
              <div className="text-sm text-muted-foreground">Graduation</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;