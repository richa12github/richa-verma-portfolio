import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "richavermaddn12@gmail.com",
      href: "mailto:richavermaddn12@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9454034944",
      href: "tel:+919454034944",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dehradun, Uttarakhand",
      href: "#",
      color: "text-orange-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "richa-verma-59159b317",
      href: "https://linkedin.com/in/richa-verma-59159b317",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "richa12github",
      href: "https://github.com/richa12github",
      color: "text-purple-500"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Let's Connect
            <Heart className="w-4 h-4" />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss opportunities in data analytics, business intelligence, or AI/ML projects. 
            Let's connect and explore how I can contribute to your team's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information - Enhanced */}
          <div className="lg:col-span-2 space-y-8 animate-slide-up">
            <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/30 hover-lift">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Let's Connect</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm actively seeking opportunities as a Business Analyst, Data Analyst, or in AI/ML roles. 
                  Whether you have a project idea, job opportunity, or just want to connect, I'd love to hear from you.
                </p>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group bg-gradient-to-r from-card/60 to-card/30 backdrop-blur-sm hover-lift border-border/30 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-5">
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 group/link"
                    >
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover/link:scale-110 transition-transform duration-300">
                        <info.icon className={`${info.color} group-hover/link:scale-110 transition-transform`} size={22} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1 group-hover/link:text-primary transition-colors">{info.label}</p>
                        <p className="text-sm text-muted-foreground group-hover/link:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Quick Stats */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover-lift">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <CheckCircle className="mr-2 text-primary" size={22} />
                  Quick Facts
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: '🎓', text: 'Fresh Computer Science Graduate (2025)' },
                    { icon: '🏆', text: 'Certified by Deloitte & TATA in Analytics' },
                    { icon: '💼', text: '2+ Internships in Development & ML' },
                    { icon: '⚡', text: 'Available for immediate opportunities' }
                  ].map((fact, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <span className="text-lg">{fact.icon}</span>
                      <p className="text-sm text-muted-foreground font-medium">{fact.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/30 hover-lift">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Send className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                </div>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-background/70 border-border/50 focus:border-primary/50 focus:bg-background transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/70 border-border/50 focus:border-primary/50 focus:bg-background transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity, project, or how we can collaborate..."
                      required
                      rows={6}
                      className="bg-background/70 border-border/50 focus:border-primary/50 focus:bg-background resize-none transition-all"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full hover-lift group/submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin mr-3 h-5 w-5 border-2 border-background border-t-transparent rounded-full" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 group-hover/submit:translate-x-1 transition-transform" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-border/30 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Typically respond within 24 hours. Looking forward to connecting!</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;