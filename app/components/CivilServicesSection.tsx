'use client';

import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Building Construction',
    description: 'Complete building construction services including residential, commercial, and industrial projects with modern architectural designs.',
    icon: '🏗️'
  },
  {
    title: 'Electrical Systems',
    description: 'Comprehensive electrical system design, installation, and maintenance for all types of buildings with safety compliance.',
    icon: '⚡'
  },
  {
    title: 'Mechanical Systems',
    description: 'HVAC, plumbing, and mechanical system solutions for optimal building performance and energy efficiency.',
    icon: '🔧'
  },
  {
    title: 'Fire Safety',
    description: 'Advanced fire detection, prevention, and safety systems installation and maintenance for complete building protection.',
    icon: '🚒'
  },
  {
    title: 'Irrigation Systems',
    description: 'Smart irrigation system design and implementation for efficient water management and sustainable landscaping.',
    icon: '💧'
  },
  {
    title: 'Structural Engineering',
    description: 'Expert structural analysis, design, and consulting services for safe and durable construction projects.',
    icon: '🏢'
  }
];

export default function CivilServicesSection() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive civil engineering and construction solutions for modern infrastructure
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service, index: number) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 