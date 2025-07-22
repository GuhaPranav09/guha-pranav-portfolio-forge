import { Layout } from '@/components/layout/Layout'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react'

export default function Education() {
  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Education & Courses
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My academic journey and continuous learning path in computer science and technology.
            </p>
          </div>

          {/* Main Education */}
          <div className="mb-12">
            <Card className="card-glow p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gradient-primary mb-2">
                    Bachelor of Technology, Computer Science Engineering
                  </h3>
                  <h4 className="text-xl text-foreground mb-3">
                    Vellore Institute of Technology, Chennai
                  </h4>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <Badge className="bg-accent text-accent-foreground">
                      Sep 2022 - Present
                    </Badge>
                    <Badge className="bg-primary text-primary-foreground">
                      CGPA: 9.47
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Currently in my pre-final year, specializing in Computer Science Engineering 
                    with a focus on AI/ML, software development, and web technologies. 
                    Maintaining an excellent academic record while actively participating in 
                    various student organizations and projects.
                  </p>
                  
                  <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      Member of Student Council and Program Representative
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      Cultural Head of Department Telugu Literary Association
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-accent" />
                      Active participation in various technical and cultural events
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Secondary Education */}
          <div className="mb-12">
            <Card className="card-glow p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-secondary/10 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gradient-accent mb-2">
                    Senior Secondary School
                  </h3>
                  <h4 className="text-xl text-foreground mb-3">
                    DPS Whitefield, Bangalore
                  </h4>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <Badge variant="secondary">
                      April 2020 - June 2022
                    </Badge>
                    <Badge className="bg-primary text-primary-foreground">
                      CBSE Board: 96%
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Completed senior secondary education with outstanding performance, 
                    laying a strong foundation in mathematics, physics, and computer science 
                    that prepared me for advanced studies in engineering.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Courses & Certifications Preview */}
          <div>
            <h2 className="text-3xl font-bold text-gradient-primary mb-8 text-center">
              Domain Knowledge
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="card-glow p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Data Structures & Algorithms</h3>
                <p className="text-sm text-muted-foreground">Advanced problem-solving and optimization techniques (Java, Python, C++)</p>
              </Card>

              <Card className="card-glow p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">Deep learning, neural networks, Computer Vision and AI algorithms</p>
              </Card>

              <Card className="card-glow p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Web Development</h3>
                <p className="text-sm text-muted-foreground">Full-stack development with modern frameworks, Cloud deployment, AWS</p>
              </Card>

              <Card className="card-glow p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Database Management</h3>
                <p className="text-sm text-muted-foreground">SQL, MongoDB, and database optimization</p>
              </Card>

              <Card className="card-glow p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Software Engineering</h3>
                <p className="text-sm text-muted-foreground">Project management and development methodologies</p>
              </Card>

              <Card className="card-glow p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">OS / Networks</h3>
                <p className="text-sm text-muted-foreground">Operating Systems, Architectures, Scheduling, Network protocols, security, and distributed systems</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}