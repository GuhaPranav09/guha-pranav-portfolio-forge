
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Scene3D } from '@/components/three/Scene3D'
import { Mail, Phone, MapPin, Linkedin, Github, Send, ExternalLink, Code, Award} from 'lucide-react'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success('Message sent!');
      formRef.current?.reset();
    } catch (error) {
      toast.error('Failed to send message');
      console.error(error);
    } finally {
      setSending(false);
    }
  };
  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, 
              or just having a conversation about technology and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8">
              <Card className="card-glow p-6 lg:p-8">
                <h2 className="text-xl lg:text-2xl font-bold text-gradient-primary mb-6">
                  Let's Connect
                </h2>
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Mail className="w-5 lg:w-6 h-5 lg:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground text-sm lg:text-base break-all">yg.pranav@gmail.com | guhapranav2k5@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                      <Phone className="w-5 lg:w-6 h-5 lg:h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground text-sm lg:text-base">+91 9686953131</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                      <MapPin className="w-5 lg:w-6 h-5 lg:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground text-sm lg:text-base">Kanchepuram/Chennai</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="card-glow p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-gradient-accent mb-6">
                  Find Me Online
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://linkedin.com/in/y-guha-pranav-5a90b4260" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">LinkedIn</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                  
                  <a 
                    href="https://github.com/GuhaPranav09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">GitHub</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                  
                  <a 
                    href="https://leetcode.com/u/GuhaPranav/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    <Code className="w-5 h-5" />
                    <span className="font-medium">LeetCode</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                  
                  <a 
                    href="https://www.hackerrank.com/profile/yg_pranav" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    <Code className="w-5 h-5" />
                    <span className="font-medium">HackerRank</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>

                  <a 
                    href="https://www.credly.com/users/guha-pranav-yelchuru.5338eb0b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    <Award className="w-5 h-5" />
                    <span className="font-medium">Credly</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>

                </div>
              </Card>

              {/* 3D Scene */}
              <div className="h-48 lg:h-64 rounded-xl overflow-hidden">
                <Scene3D className="w-full h-full" />
              </div>
            </div>

            {/* Contact Form */}
            <Card className="card-glow p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gradient-primary mb-6">
                Send Me a Message
              </h2>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      name="first_name"
                      placeholder="John" 
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      name="last_name"
                      placeholder="Doe" 
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    name="user_email"
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    name="subject"
                    placeholder="Let's discuss a project" 
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Hi Pranav, I'd like to discuss..."
                    rows={6}
                    className="bg-muted border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button className="btn-hero w-full">
                  <Send className="w-5 h-5 mr-2" />
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}