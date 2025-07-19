import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: "AI Software Intern",
    company: "Deepcoat AI",
    location: "Remote",
    period: "June 2025 - Present",
    description: "Studied and worked on Computer Vision tasks, including YOLO and Pose detection. Working on Productivity Monitoring Systems.",
    technologies: ["Computer Vision", "YOLO", "Pose Detection", "AI/ML"],
    type: "current"
  },
  {
    title: "Research Intern",
    company: "Samsung PRISM (Project)",
    location: "Remote",
    period: "Nov 2024 - Present",
    description: "Worked on Advanced Echo Cancellation using Deep Learning. Used Conformer layers and multi-task learning to achieve PESQ of 3.6+ and ERLE of 25db+ over complex noise induced audiosets.",
    technologies: ["Deep Learning", "Audio Processing", "Conformer", "Multi-task Learning"],
    type: "current"
  },
  {
    title: "Developer Intern",
    company: "Zuntra Digital",
    location: "Remote",
    period: "Aug 2024 - Dec 2024",
    description: "Worked on Frontend Website development using WordPress and HTML. Co-designed the web page for a few products. Reduced page load time by 30% and improved layout architecture.",
    technologies: ["WordPress", "HTML", "Frontend Development", "Performance Optimization"],
    type: "past"
  },
  {
    title: "Intern",
    company: "HCL Technologies",
    location: "Remote",
    period: "June 2024 - July 2024 (3pm - 8pm)",
    description: "Studied and worked on Site Reliability Engineering (SLO, SLI). Got introduced to Cyra/ace and microservice advanced service level dashboards. Revised on ReactJS via tasks.",
    technologies: ["Site Reliability Engineering", "ReactJS", "Microservices", "Cyra/ace"],
    type: "past"
  },
  {
    title: "Intern",
    company: "CoreNuts Technologies",
    location: "Remote",
    period: "June 2024 - July 2024 (8am - 2pm)",
    description: "Created Java classes with over 1500 lines of modular java code according to requirements and contributed to the Student Management Portal project. Improved system efficiency by 25% through optimized data structures.",
    technologies: ["Java", "Object-Oriented Programming", "Data Structures", "Student Management System"],
    type: "past"
  }
]

export default function Experience() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Work Experience
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My journey through various internships and roles, gaining hands-on experience 
              in AI/ML, software development, and web technologies.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-glow p-8 relative">
                {/* Timeline indicator */}
                <div className="absolute left-0 top-8 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                <div className="absolute left-[-8px] top-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                <div className="ml-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gradient-primary mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-medium text-foreground flex items-center gap-2">
                        {exp.company}
                        {exp.type === 'current' && (
                          <Badge className="bg-accent text-accent-foreground">Current</Badge>
                        )}
                      </h4>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-glow text-center p-6">
              <h3 className="text-3xl font-bold text-gradient-primary mb-2">5+</h3>
              <p className="text-muted-foreground">Companies</p>
            </Card>
            <Card className="card-glow text-center p-6">
              <h3 className="text-3xl font-bold text-gradient-accent mb-2">2+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </Card>
            <Card className="card-glow text-center p-6">
              <h3 className="text-3xl font-bold text-gradient-primary mb-2">10+</h3>
              <p className="text-muted-foreground">Technologies</p>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}