import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration using Stripe.",
      image: "/projects/ecommerce.jpg", // Replace with your image
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/projects/taskmanager.jpg",
      category: "Full Stack",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "Socket.io",
        "Tailwind",
      ],
      github: "https://github.com/yourusername/taskmanager",
      live: "https://taskmanager-demo.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and weather alerts using OpenWeather API.",
      image: "/projects/weather.jpg",
      category: "Frontend",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      github: "https://github.com/yourusername/weather",
      live: "https://weather-demo.com",
      featured: false,
    },
    {
      id: 4,
      title: "Blog CMS",
      description:
        "Content management system for bloggers with markdown support, SEO optimization, and analytics dashboard.",
      image: "/projects/blog.jpg",
      category: "Full Stack",
      technologies: ["Next.js", "MongoDB", "NextAuth", "TailwindCSS"],
      github: "https://github.com/yourusername/blog-cms",
      live: "https://blog-demo.com",
      featured: false,
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization and automated reporting features.",
      image: "/projects/social.jpg",
      category: "Frontend",
      technologies: ["React", "Redux", "REST API"],
      github: "https://github.com/yourusername/social-dashboard",
      live: "https://social-demo.com",
      featured: true,
    },
    {
      id: 6,
      title: "RESTful API Service",
      description:
        "Scalable REST API with authentication, rate limiting, and comprehensive documentation using Swagger.",
      image: "/projects/api.jpg",
      category: "Backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
      github: "https://github.com/yourusername/rest-api",
      live: null,
      featured: false,
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}

          <div className="grid md:grid-cols-2 items-center gap-5">
            <div className="text-left mb-16 relative">
              <div className="pl-5">
                <h2 className="btn_download text-sm relative header_title bg-background shadow w-fit text-muted-foreground px-6 py-2 rounded-full font-bold mb-2">
                  Featured Projects
                </h2>
                <p className="text-sm text-muted-foreground max-w-xl ">
                  A collection of projects showcasing my skills and experience
                </p>
              </div>
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-foreground rounded-full"></div>
            </div>
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-secondary border border-gray-300 dark:border-secondary text-muted-foreground font-medium px-4 py-1 rounded-full text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className=" transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col border border-secondary rounded-lg"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                          <div class="text-6xl">💻</div>
                        </div>
                      `;
                    }}
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary">
                      Featured
                    </div>
                  )}
                </div>

                <div className="">
                  {/* Project Content */}
                  <div className=" px-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 my-3">
                        {project.title}
                      </h3>
                      <div
                        variant="secondary"
                        className="shrink-0 text-xs border border-secondary px-4 py-1 rounded-full"
                      >
                        {project.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow px-4">
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, index) => (
                        <div
                          key={index}
                          variant="outline"
                          className="text-[10px] hover:bg-primary hover:text-primary-foreground transition-colors duration-300 border border-secondary px-4 py-1 rounded-full"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 py-4 border-t px-4 ">
                    <button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground border border-secondary py-1 rounded-full"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm"
                      >
                        <FiGithub className="group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </button>
                    {project.live && (
                      <button size="sm" className="flex-1 group/btn" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-sm"
                        >
                          <FiExternalLink className="group-hover/btn:scale-110 transition-transform" />
                          Live Demo
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Section */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform duration-300"
              asChild
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FiGithub />
                View All Projects on GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
