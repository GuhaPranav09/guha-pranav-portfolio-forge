import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Award, ExternalLink, Star, Code, Brain, Database, Shield } from 'lucide-react'
import { useState } from 'react'

const certifications = [
  {
    title: "IBM AI Engineering",
    issuer: "IBM",
    date: "2024",
    description: "Professional certificate covering machine learning, deep learning, and AI engineering practices.",
    skills: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch"],
    icon: Brain,
    color: "primary",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
  },
  {
    title: "Postman Student Developer",
    issuer: "Postman",
    date: "2024",
    description: "API development and testing certification with hands-on experience in API design.",
    skills: ["API Development", "REST APIs", "Testing", "Documentation"],
    icon: Code,
    color: "secondary",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
  },
  {
    title: "IBM Docker Essentials",
    issuer: "IBM",
    date: "2024",
    description: "Containerization and Docker fundamentals for modern application deployment.",
    skills: ["Docker", "Containerization", "DevOps", "Deployment"],
    icon: Shield,
    color: "accent",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
  },
  {
    title: "Oracle GenAI",
    issuer: "Oracle",
    date: "2024",
    description: "Generative AI and large language model implementation and optimization.",
    skills: ["Generative AI", "LLMs", "Oracle Cloud", "AI Ethics"],
    icon: Brain,
    color: "primary",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
  }
]

const awards = [
  {
    title: "Academic Meritorious Award",
    description: "Three consecutive years at VIT Chennai",
    year: "2022-2025",
    icon: Award
  },
  {
    title: "Semi-Finalist in YIP 2019",
    description: "Young Innovator Program by TTK Bangalore",
    year: "2019",
    icon: Star
  }
]

const skills = {
  "Technical Skills": [
    "Python", "C++", "Java", "HTML/CSS/JS", "ReactJS", "SQL", "UI/UX", "Flask", 
    "Database", "DSA", "Artificial Intelligence", "Machine Learning", "Deep Learning", 
    "PyTorch", "TensorFlow", "OpenCV", "YOLO", "Computer Vision", "NLP", "Gymnasium", 
    "Programming", "Cloud services"
  ],
  "Frameworks": [
    "ReactJS", "NodeJS", "Express", "Flask", "Django", "TensorFlow", "PyTorch", 
    "OpenCV", "Gymnasium"
  ],
  "Languages": [
    "English", "Hindi", "Telugu", "Tamil", "Intermediate Indonesian", "Currently German"
  ],
  "Volunteering": [
    "Part of management and MC teams for College fests", 
    "Completed a crowdfunding internship",
    "Currently part of the Lata Agarwal Foundation NGO"
  ]
}

export default function Certifications() {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Certifications & Skills
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional certifications, technical skills, and achievements that showcase 
              my commitment to continuous learning and excellence.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gradient-primary mb-8 text-center">
              Professional Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon
                return (
                  <Card key={index} className="card-glow p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="cursor-pointer">
                            <img 
                              src={cert.thumbnail} 
                              alt={`${cert.title} certificate`}
                              className="w-20 h-15 object-cover rounded-lg hover:opacity-80 transition-opacity"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <img 
                            src={cert.thumbnail} 
                            alt={`${cert.title} certificate full size`}
                            className="w-full h-auto rounded-lg"
                          />
                        </DialogContent>
                      </Dialog>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg ${
                            cert.color === 'primary' ? 'bg-primary/10' :
                            cert.color === 'secondary' ? 'bg-secondary/10' : 
                            'bg-accent/10'
                          }`}>
                            <IconComponent className={`w-5 h-5 ${
                              cert.color === 'primary' ? 'text-primary' :
                              cert.color === 'secondary' ? 'text-secondary' : 
                              'text-accent'
                            }`} />
                          </div>
                          <h3 className="text-xl font-semibold text-gradient-primary">
                            {cert.title}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-foreground font-medium">{cert.issuer}</span>
                          <Badge variant="secondary">{cert.date}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          className="bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Awards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gradient-accent mb-8 text-center">
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => {
                const IconComponent = award.icon
                return (
                  <Card key={index} className="card-glow p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gradient-accent mb-1">
                          {award.title}
                        </h3>
                        <p className="text-muted-foreground mb-1">{award.description}</p>
                        <Badge variant="outline">{award.year}</Badge>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-3xl font-bold text-gradient-primary mb-8 text-center">
              Technical Skills & Expertise
            </h2>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={index} className="card-glow p-6">
                  <h3 className="text-xl font-semibold text-gradient-accent mb-4 flex items-center gap-2">
                    {category === "Technical Skills" && <Code className="w-5 h-5" />}
                    {category === "Frameworks" && <Database className="w-5 h-5" />}
                    {category === "Languages" && <Star className="w-5 h-5" />}
                    {category === "Volunteering" && <Award className="w-5 h-5" />}
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        className="bg-muted hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}