"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "GoalAxis (Job Portal)",
    description:
      "A full-stack platform where recruiters can post jobs and candidates can search and apply seamlessly.",
    image: "/goalaxis.webp",
    tags: ["React.js", "Redux", "Node.js", "Express.js", "JWT", "Tailwind CSS", "MongoDB"],
    demoUrl: "https://goalaxis.vercel.app/",
    githubUrl: "https://github.com/nitesh-kumar813/Goalaxis/",
    features: [
      "Secure authentication and authorization using JWT for recruiters and applicants.",
      "Admin dashboard with dynamic job filters for efficient job management and user experience.",
    ],
  },
  {
    title: "HealthCare system",
    description:
      "A web app that allows patients to book and manage doctor appointments seamlessly.",
    image: "/healthcare.webp",
    tags: ["Next.js", "Appwrite", "TypeScript", "Tailwind CSS", "Twilio"],
    demoUrl: "https://nik-healthcare.vercel.app/",
    githubUrl: "https://github.com/nitesh-kumar813/nik_healthcare",
    features: [
      "Integrated Appwrite for secure data and file management.",
      "Implemented Twilio SMS notifications for appointment updates and reminders.",
    ],
  },
  {
    title: "Video Conferencing Tool",
    description:
      "A Zoom-like platform for hosting, recording, and managing real-time video meetings.",
    image: "/video.webp",
    tags: ["Next.js", "TypeScript", "Clerk", "getstream", "shadcn", "Tailwind CSS"],
    demoUrl: "https://zoom-clone-nu-three.vercel.app/",
    githubUrl: "https://github.com/nitesh-kumar813/zoom-clone/",
    features: [
      "Implemented secure authentication with Clerk, supporting both social and email logins.",
      "Built real-time meeting features like recording, screen sharing, and participant management.",
    ],
  },
  {
    title: "Movix",
    description:
      "A dynamic web app for discovering and streaming movies with personalized recommendations and detailed movie info.",
    image: "/movix.webp",
    tags: ["React.js", "Redux", "TMDB API", "Axios", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://github.com/nitesh-kumar813/Movie-app",
    githubUrl: "",
    features: [
      "Integrated TMDB API for real-time movie data and personalized recommendations.",
      "Built a responsive, intuitive UI for seamless browsing and streaming experience.",
      
    ]
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}