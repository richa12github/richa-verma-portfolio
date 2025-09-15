import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import richaProfile from '@/assets/richa-profile-new.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-6 pt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Richa Verma
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
              Business Analyst | Data Analyst | AI & ML Enthusiast
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Passionate fresher graduate in Computer Science with hands-on experience in 
            data analytics, visualization, and AI/ML. Certified by Deloitte and TATA, 
            ready to drive data-driven insights and innovation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio">
              <Button size="lg" className="hover-lift">
                Explore My Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="hover-lift">
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex gap-4 pt-4">
            <a 
              href="mailto:richavermaddn12@gmail.com" 
              className="p-3 bg-card rounded-full hover-lift border border-border hover:border-primary transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919454034944" 
              className="p-3 bg-card rounded-full hover-lift border border-border hover:border-primary transition-colors"
            >
              <Phone size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/richa-verma-59159b317" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full hover-lift border border-border hover:border-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/richa12github" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full hover-lift border border-border hover:border-primary transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center animate-slide-up">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
              <img 
                src={richaProfile} 
                alt="Richa Verma - Business Analyst and Data Analyst"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-card rounded-full flex items-center justify-center animate-glow">
              <span className="text-2xl">👋</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;