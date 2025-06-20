'use client';

import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';

interface Project {
  title: string;
  description: string;
  location: string;
  status: 'ongoing' | 'completed';
  images: string[];
  type: 'IT' | 'Civil';
}

const projects: Project[] = [
  // IT Projects
  {
    title: 'Enterprise Software Solution',
    description: 'Custom enterprise software development for a leading manufacturing company, including ERP and CRM integration.',
    location: 'Tech City, TC',
    status: 'ongoing',
    images: [
      '/projects/it/enterprise-1.jpg',
      '/projects/it/enterprise-2.jpg',
      '/projects/it/enterprise-3.jpg'
    ],
    type: 'IT'
  },
  {
    title: 'Cloud Migration Project',
    description: 'Large-scale cloud infrastructure migration and optimization for a financial services company.',
    location: 'Financial District, FD',
    status: 'ongoing',
    images: [
      '/projects/it/cloud-1.jpg',
      '/projects/it/cloud-2.jpg',
      '/projects/it/cloud-3.jpg'
    ],
    type: 'IT'
  },
  {
    title: 'Disha App',
    description: "DISHA is a self-help app designed to help visitors and taxpayers quickly find sections and offices across the CGST & Customs Pune Zone. It ensures easy navigation and access to essential departmental information at your fingertips.",
    location: 'Pune, Maharashtra',
    status: 'completed',
    images: [
      '/projects/it/disha-1.jpg',
      '/projects/it/disha-2.jpg',
      '/projects/it/disha-3.jpg'
    ],
    type: 'IT'
  },
  {
    title: 'VIDHAN App',
    description: "VIDHAAN is a self-help portal that guides taxpayers through the appeal process for GST, Service Tax, Central Excise, and Customs. It offers quick, accurate, and accessible information with easy-to-follow guidelines—empowering users to resolve queries without in-person visits or delays.",
    location: 'Pune, Maharashtra',
    status: 'completed',
    images: [
      '/projects/it/vidhan-1.jpg',
      '/projects/it/vidhan-2.jpg',
      '/projects/it/vidhan-3.jpg'
    ],
    type: 'IT'
  },
  // Civil Projects
  {
    title: 'Smart City Infrastructure',
    description: 'Comprehensive urban development project including smart lighting, traffic management, and public utilities.',
    location: 'Tech City, TC',
    status: 'ongoing',
    images: [
      '/projects/civil/smart-city-1.jpg',
      '/projects/civil/smart-city-2.jpg',
      '/projects/civil/smart-city-3.jpg'
    ],
    type: 'Civil'
  },
  {
    title: 'Commercial Complex at Gomti Nagar Railway Station',
    description: "At the Gomti Nagar Railway Station Commercial Complex, we delivered a robust fire safety solution featuring modern fire detection and suppression systems. Our installation ensures the complex meets all safety regulations, offering reliable protection against fire hazards.",
    location: 'Lucknow, Uttar Pradesh',
    status: 'ongoing',
    images: [
      '/projects/civil/gomti-1.webp',
      '/projects/civil/gomti-1.jpeg',
      '/projects/civil/gomti-2.jpeg',
      '/projects/civil/gomti-3.jpeg',
      '/projects/civil/gomti-4.jpeg',
      '/projects/civil/gomti-5.jpeg',
      '/projects/civil/gomti-6.jpeg',
      '/projects/civil/gomti-7.jpeg',
    ],
    type: 'Civil'
  },
  {
    title: 'Residential Tower',
    description: 'Luxury residential project with state-of-the-art amenities and smart home integration.',
    location: 'Downtown, DT',
    status: 'completed',
    images: [
      '/projects/civil/residential-1.jpg',
      '/projects/civil/residential-2.jpg',
      '/projects/civil/residential-3.jpg'
    ],
    type: 'Civil'
  },
  {
    title: 'Industrial Park',
    description: 'Large-scale industrial facility with advanced infrastructure and automation systems.',
    location: 'Industrial Zone, IZ',
    status: 'completed',
    images: [
      '/projects/civil/industrial-1.jpg',
      '/projects/civil/industrial-2.jpg',
      '/projects/civil/industrial-3.jpg'
    ],
    type: 'Civil'
  },{
    title: 'Police Modern School',
    description: "Construction of a boundary wall and tile work at Police Modern School, 20th Battalion PAC, Azamgarh, Uttar Pradesh. Enhancing campus security and improving school infrastructure. Executed with high-quality materials and skilled workmanship.",
    location: 'Azamgarh, Uttar Pradesh',
    status: 'completed',
    images: [
      '/projects/civil/azamgarh-1.jpg',
      '/projects/civil/azamgarh-2.jpg',
      '/projects/civil/azamgarh-3.jpg'
    ],
    type: 'Civil'
  }
];

interface ProjectsSectionProps {
  serviceType: 'IT' | 'Civil';
}

export default function ProjectsSection({ serviceType }: ProjectsSectionProps) {
  const filteredProjects = projects.filter(project => project.type === serviceType);
  const ongoingProjects = filteredProjects.filter(project => project.status === 'ongoing');
  const completedProjects = filteredProjects.filter(project => project.status === 'completed');

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4"
          >
            Our Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {serviceType === 'IT' 
              ? 'Showcasing our expertise in digital transformation and technology solutions'
              : 'Showcasing our expertise in civil engineering and construction projects'}
          </motion.p>
        </div>

        {/* Ongoing Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Ongoing Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <ImageCarousel images={project.images} title={project.title} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h4>
                    <span className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full">
                      Ongoing
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location: {project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Completed Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <ImageCarousel images={project.images} title={project.title} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h4>
                    <span className="px-3 py-1 text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900 rounded-full">
                      Completed
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location: {project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 