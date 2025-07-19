import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Database, Brain, MessageSquare, Activity } from 'lucide-react'

const projects = [
  {
    title: "ERP Software",
    description: "A comprehensive web-based ERP system using HTML, CSS, JavaScript, PHP, and MySQL to manage activities, including sports competitions, event coordination, and dashboard management with a CRUD system for athletes, winners, and statistics database.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "CRUD Operations"],
    icon: Database,
    type: "Web Application",
    status: "Completed",
    link: "#",
    github: "#"
  },
  {
    title: "Lunar Rover Lander",
    description: "Implemented a Deep Q-Network (DQN) agent using PyTorch and Gymnasium to autonomously land a spacecraft in a simulated environment with >80% episode success rate. Advanced reinforcement learning project demonstrating AI decision-making capabilities.",
    technologies: ["PyTorch", "Gymnasium", "Deep Q-Network", "Reinforcement Learning", "Python"],
    icon: Brain,
    type: "AI/ML Project",
    status: "Completed",
    link: "#",
    github: "#"
  },
  {
    title: "AI Healthcare Chatbot",
    description: "AI-powered chatbot using Python, NLTK, Flask, and TensorFlow to assist users with basic healthcare queries. Features HuggingFace LLM fine-tuned with LLAMA format healthcare data. Includes world-word response generation and real-time interaction.",
    technologies: ["Python", "NLTK", "Flask", "TensorFlow", "HuggingFace", "LLAMA"],
    icon: MessageSquare,
    type: "AI/ML Project",
    status: "Completed",
    link: "#",
    github: "#"
  },
  {
    title: "Basketball Game Tracking",
    description: "Real-time basketball analysis system using YOLOv8, OpenCV, DeepSORT, and Python (ultralytics). Includes player detection, tracking, movement heatmaps, team classification, and distance-based performance analysis from video footage.",
    technologies: ["YOLOv8", "OpenCV", "DeepSORT", "Python", "Computer Vision", "Ultralytics"],
    icon: Activity,
    type: "Computer Vision",
    status: "Completed",
    link: "#",
    github: "#"
  }
]

const projectStats = [
  { label: "Projects Completed", value: "4+", color: "primary" },
  { label: "Technologies Used", value: "15+", color: "secondary" },
  { label: "AI/ML Projects", value: "3", color: "accent" },
  { label: "Success Rate", value: "100%", color: "primary" }
]

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Projects Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my technical projects spanning AI/ML, web development, 
              computer vision, and software engineering.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {projectStats.map((stat, index) => (
              <Card key={index} className="card-glow text-center p-6">
                <h3 className={`text-2xl font-bold mb-2 ${
                  stat.color === 'primary' ? 'text-gradient-primary' :
                  stat.color === 'secondary' ? 'text-gradient-accent' :
                  'text-gradient-primary'
                }`}>
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card key={index} className="card-glow p-8 hover:scale-[1.02] transition-all duration-300">
                  <div className="grid lg:grid-cols-12 gap-6 items-start">
                    {/* Project Icon & Meta */}
                    <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                      <div className="p-4 bg-primary/10 rounded-xl mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <Badge className="mb-2 bg-secondary text-secondary-foreground">
                        {project.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>

                    {/* Project Content */}
                    <div className="lg:col-span-7 space-y-4">
                      <h3 className="text-2xl font-bold text-gradient-primary">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            className="bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Actions */}
                    <div className="lg:col-span-3 flex flex-col gap-3">
                      <Button className="btn-hero w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="card-glow p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Interested in My Work?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always working on new projects and exploring cutting-edge technologies. 
                Check out my GitHub for the latest updates and contributions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects
                </Button>
                <Button variant="outline">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}