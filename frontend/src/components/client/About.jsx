import React from "react";
import { FiCode, FiAward, FiBookOpen, FiBriefcase } from "react-icons/fi";

const About = () => {
  const academicTimeline = [
    {
      year: "2025 - Continue",
      title: "Bachelor's Degree",
      subtitle: "Computing and Information Technology",
      institution: "Philips University, Cyprus",
      description: "Focus on software engineering and full-stack development",
      icon: <FiBookOpen className="text-xl" />,
    },
    {
      year: "2016-2020",
      title: "Diploma in Engineering",
      subtitle: "Electronics Technology",
      institution: "Shariatpur Polytechnic Institute",
      description: "Graduated with honors in mathematics and computer science",
      icon: <FiAward className="text-xl" />,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16 relative">
            <div className="pl-5">
              <h2 className="btn_download text-sm relative header_title bg-card dark:bg-card shadow w-fit text-muted-foreground px-6 py-2 rounded-full font-bold mb-2">
                About Me
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                A passionate full-stack developer with 3.5 years of experience
                building modern web applications
              </p>
            </div>
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-foreground rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: Bio */}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-xl font-semibold pl-5">My Story</h3>
                <div className="absolute top-1/2 left-0 w-1 h-1 bg-accent-foreground rounded-full -translate-y-1/2"></div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Computing and Information Technology student with a deep
                  passion for creating elegant solutions to complex problems.
                  With 3.5 years of hands-on experience in web development, I've
                  grown from building simple websites to architecting full-stack
                  applications.
                </p>
                <p>
                  My journey in tech started with curiosity and has evolved into
                  a career I'm truly passionate about. I specialize in building
                  responsive, user-friendly applications using modern
                  technologies and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Right: Academic Timeline */}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-xl font-semibold pl-5">
                  Academic Excellence
                </h3>
                <div className="absolute top-1/2 left-0 w-1 h-1 bg-accent-foreground rounded-full -translate-y-1/2"></div>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

                <div className="space-y-8">
                  {academicTimeline.map((item, index) => (
                    <div key={index} className="relative pl-16">
                      <div className="absolute left-0 w-12 h-12 rounded-full bg-background dark:bg-background flex items-center justify-center text-primary border-4 border-background dark:border-secondary z-10">
                        {item.icon}
                      </div>

                      <div className="space-y-1  bg-card p-6 dark:bg-card rounded-xl border border-secondary dark:border-secondary">
                        <div className="text-sm text-muted-foreground font-medium">
                          {item.year}
                        </div>
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-sm font-medium text-primary">
                          {item.subtitle}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.institution}
                        </p>
                        <p className="text-sm text-muted-foreground pt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
