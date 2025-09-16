import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: "The Menopause MATTERs Study - University of Cambridge",
      description: "Most patients with autoimmune diseases are women, and there is a lack of research on how hormone changes due to menopause affect their condition. I'm coordinating with a renowned team of researchers, clinicians and patients to undertake the first such international study.",
      tags: ["Mixed-Methods Research", "Study Co-ordination", "Data Analysis", "Science Communication"],
      image: "https://images.pexels.com/photos/33851677/pexels-photo-33851677.jpeg",
      link: "https://www.phpc.cam.ac.uk/staff/ms-kaira-kuhu-naidu"
    },
    {
      title: "Consulting & Policy",
      description: "I’ve worked across health, environment, and economic development, with governments, consulting firms, and global think tanks. I've helped in advising policymakers and building strategy for clients.",
      tags: ["The Marwood Group (Europe)", "LSE CPEC", "Indian School of Business", "PwC India", "Government of India", "World Resources Institute"],
      image: "https://images.pexels.com/photos/33864293/pexels-photo-33864293.jpeg",
      link: "#",
      github: "#"
    },
    {
      title: "Dan Lavoie Fellow, George Mason University",
      description: "Dan Lavoie Fellow in 2024 & 2025: a competitive international programme for early-career economists, where we learn concepts in governance and markets.",
      tags: ["Fellowship", "Economics", "Governance", "George Mason University"],
      image: "https://images.pexels.com/photos/32125442/pexels-photo-32125442.jpeg",
      link: "#",
      github: "#"
    },
    {
      title: "Mentorship",
      description: "I believe in giving back the privilege of what I've been able to learn by mentoring others, especially women of colour from developing countries. The more I mentor, the more I learn and grow. At the University of Cambridge, I mentor medical students with their research component thesis. I've guided girls in entrepreneurship, taught research methodology to 900+ students, and given basic Python lessons to 300+ girls around the world!",
      tags: ["Technovation Challenge", "GirlsCodeIt", "Mentoring"],
      image: "https://images.pexels.com/photos/33609134/pexels-photo-33609134.jpeg",
      link: "#",
      github: "#"
    },
    {
      title: "Supervised Research Projects",
      description: "I spent my Bachelors and Masters' degrees undertaking multiple research projects/proposals with my classmate, Hansa Mukherjee, on sustainability and health equity. We've recieved supervision from professors at LSR (University of Delhi), Cornell University and Penn State University.",
      tags: ["Experimental Economics", "Sustainability", "Women's Health"],
      image: "https://images.pexels.com/photos/31328360/pexels-photo-31328360.jpeg",
      link: "#",
      github: "#"
    },
    {
      title: "My Novice (Award-Winning) Highschool App: H2O",
      description: "Odd thing to mention in this website, but this experience from high school was formative in shaping the way I think and approach problems. As a part of the Technovation Challenge (an international entrepreneurship & app development challenge) I created an app called H2O: Healing Tomorrow's Oases, with my team (Sapna Shandilya, Muskan Rathi, Vrinda Sharma, Bhavya Gaur). It aimed at reducing plastic waste and water-borne diseases. With support from our friends (thanks Aaditya), teachers and mentors from Adobe, H2O won as the #1 app in all of Asia and got us scholarships!",
      tags: ["Entreprenurship", "Market Research", 'Scholarship'],
      image: "https://images.pexels.com/photos/32125432/pexels-photo-32125432.jpeg",
      link: "https://technovationchallenge.org/",
      github: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 sm:py-16"
    >
      <div className="page-container">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-display font-bold mb-4">
            My Work
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Problem-solving + Impact + Collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-end space-x-3">
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-800" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-pastel-blue/30 text-primary-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;