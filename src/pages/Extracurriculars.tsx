import { Layout } from '@/components/layout/Layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Trophy, Users, BookOpen, PenTool, Activity, Heart, ExternalLink, Volleyball } from 'lucide-react'
import book1Thumbnail from '@/assets/book1.jpg'
import book2Thumbnail from '@/assets/book2.jpg'
export default function Extracurriculars() {
  const books = [
    {
      title: "Bound of Bricks: The City's Origin - The History",
      thumbnail: book1Thumbnail,
      link: "https://www.google.co.in/books/edition/Bound_of_Bricks/JxdHDwAAQBAJ?hl=en&gbpv=0"
    },
    {
      title: "Bound of Bricks: The Myth of the Pegasus",
      thumbnail: book2Thumbnail,
      link: "https://www.google.co.in/books/edition/Bound_of_Bricks/ySCBDwAAQBAJ?hl=en&gbpv=0"
    }
  ]

  const hobbies = [
    { name: "Badminton", icon: Activity },
    { name: "Table Tennis", icon: Volleyball },
    { name: "Volleyball", icon: Volleyball },
    { name: "Writing", icon: PenTool },
    { name: "Reading", icon: BookOpen },
    { name: "Temple Visiting", icon: Heart }
  ]

  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Extracurriculars
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond academics - my leadership roles, creative pursuits, and personal interests.
            </p>
          </div>

          {/* Leadership Roles */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gradient-primary mb-8 text-center">
              Leadership Roles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-glow p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Student Council</h3>
                    <p className="text-sm text-muted-foreground">Leadership Role</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Actively participating in student governance and representing student interests 
                  in various institutional matters.
                </p>
              </Card>

              <Card className="card-glow p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Programme Representative</h3>
                    <p className="text-sm text-muted-foreground">Academic Leadership</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Serving as a bridge between students and faculty, ensuring effective 
                  communication and academic coordination.
                </p>
              </Card>

              <Card className="card-glow p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <PenTool className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Head of Cultural Department</h3>
                    <p className="text-sm text-muted-foreground">Telugu Literary Club</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Leading cultural initiatives and organizing literary events to promote 
                  Telugu language and culture within the institution.
                </p>
              </Card>

              <Card className="card-glow p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Senior Management</h3>
                    <p className="text-sm text-muted-foreground">Robotics Club</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Managing robotics projects and workshops, fostering innovation and 
                  technical excellence among club members.
                </p>
              </Card>
            </div>
          </div>

          {/* Hackathons */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gradient-primary mb-8 text-center">
              Hackathons & Competitions
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-glow p-6 text-center">
                <div className="p-4 bg-primary/10 rounded-xl mx-auto mb-4 w-fit">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Hack the Horizon</h3>
                <Badge className="bg-primary text-primary-foreground mb-3">Finalist</Badge>
                <p className="text-sm text-muted-foreground">
                  UI/UX revamp of Starbucks.in website, Technical and Business pitch for E-learning Platform - Vidyapaath
                </p>
              </Card>

              <Card className="card-glow p-6 text-center">
                <div className="p-4 bg-secondary/10 rounded-xl mx-auto mb-4 w-fit">
                  <Trophy className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Mission Data Impossible</h3>
                <Badge className="bg-primary text-primary-foreground mb-3">Finalist</Badge>
                <p className="text-sm text-muted-foreground">
                  Technical CTF followed by Classification problem solution using Custom Model in Kaggle
                </p>
              </Card>

              <Card className="card-glow p-6 text-center">
                <div className="p-4 bg-accent/10 rounded-xl mx-auto mb-4 w-fit">
                  <Trophy className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">YIP 2019</h3>
                <div className="mb-3">
                  <Badge className="bg-secondary text-secondary-foreground mb-1">Semi-Finalist</Badge>
                  <p className="text-xs text-muted-foreground">IIT Kharagpur</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Semi-finalist in Young Innovators Program by IIT Kharagpur. Theme: Water conservation (Optimal Soak Pit, Overflow regulator)
                </p>
              </Card>
            </div>
          </div>

          {/* Hobbies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gradient-primary mb-8 text-center">
              Hobbies & Interests
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {hobbies.map((hobby, index) => (
                <Card key={index} className="card-glow p-4 text-center hover-scale">
                  <hobby.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium text-foreground">{hobby.name}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gradient-primary mb-8 text-center">
              Creative Works & Publications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <Card key={index} className="card-glow overflow-hidden">
                  <div className="w-full">
                    <img 
                      src={book.thumbnail} 
                      alt={book.title}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground mb-2">{book.title}</h3>
                    <Button asChild className="w-full" size="sm">
                      <a href={book.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Book
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="card-glow p-6 flex flex-col justify-center">
                <div className="p-4 bg-primary/10 rounded-xl mx-auto mb-4 w-fit">
                  <PenTool className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-center">Poetry Blog (Group of Friends)</h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Expressing thoughts and emotions through poetry and creative writing.
                </p>
                <Button asChild size="sm">
                  <a href="https://creativityassociation.wordpress.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Blog
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}