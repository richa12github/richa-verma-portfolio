import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
    <section className="py-20 px-6" id="internships">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience gained through strategic internships in development and machine learning.
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card hover-lift border-border/50 animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Header */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase className="text-primary" size={20} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{internship.title}</h3>
                            <p className="text-lg text-primary font-medium">{internship.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="mr-1" size={14} />
                            {internship.duration}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="mr-1" size={14} />
                            {internship.location}
                          </span>
                          <Badge variant="secondary">{internship.type}</Badge>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center">
                        Key Achievements & Learning
                        <ChevronRight className="ml-1" size={16} />
                      </h4>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="hover:bg-primary/10 hover:border-primary transition-colors">
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
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Ready to bring fresh perspectives and proven learning ability to your team.
          </p>
          <div className="inline-flex items-center text-primary font-medium">
            <span>Open to new opportunities</span>
            <ChevronRight className="ml-1" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;