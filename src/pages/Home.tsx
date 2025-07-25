import { Layout } from '@/components/layout/Layout'
import { Scene3D } from '@/components/three/Scene3D'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AnimatedPicture } from '@/components/ui/animated-picture'
import { Github, Linkedin, ExternalLink, Download, Code, Brain, Globe, FolderOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import profilePhoto from '@/assets/profile-photo.jpg'
import profilePhoto2 from '@/assets/profile-photo2.jpg'



export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background 3D Scene */}
        <div className="absolute inset-0 opacity-30">
          <Scene3D className="w-full h-full" />
        </div>
      
        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center justify-center gap-12 py-8">
          {/* Hero Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
            {/* Left: Hero Content */}
            <div className="text-center lg:text-left flex-1 max-w-xl space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm 
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient-primary">Guha Pranav</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
                  AI/ML Engineer & Full Stack Developer
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Computer Science student at VIT Chennai with a passion for artificial intelligence, 
                  machine learning, and web development. Building innovative solutions with cutting-edge technology.
                </p>
              </div>
      
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/projects">
                  <Button className="btn-hero w-full sm:w-auto">
                    <FolderOpen className="w-5 h-5 mr-2" />
                    View Projects
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="btn-secondary w-full sm:w-auto">
                    Contact Me
                  </Button>
                </Link>
              </div>
      
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://linkedin.com/in/y-guha-pranav-5a90b4260" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                </a>
                <a 
                  href="https://github.com/GuhaPranav09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6 text-primary" />
                </a>
                <a href="/resume.pdf" download>
                  <Button variant="outline" size="sm" className="p-3">
                    <Download className="w-6 h-6" />
                    Resume
                  </Button>
                </a>
              </div>
            </div>
      
            {/* Right: Profile Picture */}
            <div className="flex-1 flex justify-center">
              <AnimatedPicture 
                src={profilePhoto}
                src2={profilePhoto2}
                alt="Guha Pranav - AI/ML Engineer"
                className="w-48 h-64 md:w-54 md:h-72 lg:w-60 lg:h-80 shadow-elegant rounded-xl object-cover"
              />
            </div>
          </div>
      
          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl w-full justify-center items-center">
            <Card className="card-glow text-center p-4 lg:p-6 hover:scale-105 transition-all duration-300">
              <Code className="w-8 lg:w-10 h-8 lg:h-10 text-primary mx-auto mb-2 lg:mb-3" />
              <h3 className="text-lg lg:text-xl font-bold text-gradient-primary">10K+</h3>
              <p className="text-xs lg:text-sm text-muted-foreground">Lines of Code</p>
            </Card>
      
            <Card className="card-glow text-center p-4 lg:p-6 hover:scale-105 transition-all duration-300">
              <Brain className="w-8 lg:w-10 h-8 lg:h-10 text-secondary mx-auto mb-2 lg:mb-3" />
              <h3 className="text-lg lg:text-xl font-bold text-gradient-accent">AI/ML</h3>
              <p className="text-xs lg:text-sm text-muted-foreground">Specialist</p>
            </Card>
      
            <Card className="card-glow text-center p-4 lg:p-6 hover:scale-105 transition-all duration-300">
              <Globe className="w-8 lg:w-10 h-8 lg:h-10 text-accent mx-auto mb-2 lg:mb-3" />
              <h3 className="text-lg lg:text-xl font-bold text-gradient-primary">Web</h3>
              <p className="text-xs lg:text-sm text-muted-foreground">Developer</p>
            </Card>
      
            <Card className="card-glow text-center p-4 lg:p-6 hover:scale-105 transition-all duration-300">
              <ExternalLink className="w-8 lg:w-10 h-8 lg:h-10 text-primary mx-auto mb-2 lg:mb-3" />
              <h3 className="text-lg lg:text-xl font-bold text-gradient-accent">9.47</h3>
              <p className="text-xs lg:text-sm text-muted-foreground">CGPA</p>
            </Card>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a motivated Computer Science student with expertise in AI/ML, web development, 
              and software engineering. Currently pursuing my Bachelor's at VIT Chennai with a 9.47 CGPA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="card-glow p-6 lg:p-8">
              <h3 className="text-lg lg:text-xl font-semibold text-gradient-primary mb-4">🎓 Education</h3>
              <p className="text-muted-foreground mb-4 text-sm lg:text-base">
                Currently in my pre-final year at VIT University, Chennai, specializing in Computer Science Engineering.
              </p>
              <Link to="/education">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </Card>

            <Card className="card-glow p-6 lg:p-8">
              <h3 className="text-lg lg:text-xl font-semibold text-gradient-accent mb-4">💼 Experience</h3>
              <p className="text-muted-foreground mb-4 text-sm lg:text-base">
                Internships at various companies including Samsung Prism and Deepcept AI.
              </p>
              <Link to="/experience">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  View Experience
                </Button>
              </Link>
            </Card>

            <Card className="card-glow p-6 lg:p-8 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg lg:text-xl font-semibold text-gradient-primary mb-4">🚀 Projects</h3>
              <p className="text-muted-foreground mb-4 text-sm lg:text-base">
                Built innovative solutions including ERP systems, AI chatbots, and deep learning models.
              </p>
              <Link to="/projects">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  See Projects
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}
