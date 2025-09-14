import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate fresher with a strong foundation in computer science and 
            hands-on experience in data analytics and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gradient">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a fresh Computer Science graduate from Uttaranchal University, I've cultivated 
                  a deep passion for transforming raw data into meaningful insights that drive 
                  business decisions.
                </p>
                <p>
                  My academic journey, complemented by prestigious certifications from Deloitte 
                  and TATA, has equipped me with a solid foundation in statistical analysis, 
                  data visualization, and machine learning techniques.
                </p>
                <p>
                  I thrive on solving complex problems and am particularly drawn to the intersection 
                  of business intelligence and artificial intelligence. My goal is to leverage 
                  data-driven approaches to create innovative solutions that make a real impact.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="mr-2 text-primary" size={24} />
                Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-gradient-card hover-lift border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <cert.icon className="text-primary" size={20} />
                        <div>
                          <h5 className="font-medium">{cert.name}</h5>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-gradient flex items-center">
              <GraduationCap className="mr-2" size={28} />
              Educational Timeline
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gradient-card hover-lift border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <edu.icon className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="mr-1" size={14} />
                            {edu.duration}
                          </span>
                          {edu.grade && (
                            <span className="font-medium text-primary">{edu.grade}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;