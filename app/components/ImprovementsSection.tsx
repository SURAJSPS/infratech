'use client';

import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  ClockIcon, 
  UserGroupIcon, 
  BuildingOfficeIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

interface Improvement {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const improvements: Improvement[] = [
  {
    title: 'Project Success Rate',
    value: '99.2%',
    description: 'On-time completion rate across all projects',
    icon: ChartBarIcon,
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    title: 'Response Time',
    value: '< 24h',
    description: 'Average response time to client inquiries',
    icon: ClockIcon,
    color: 'text-green-600 dark:text-green-400'
  },
  {
    title: 'Client Satisfaction',
    value: '98%',
    description: 'Client satisfaction rate based on feedback',
    icon: UserGroupIcon,
    color: 'text-purple-600 dark:text-purple-400'
  },
  {
    title: 'Projects Completed',
    value: '500+',
    description: 'Successfully delivered projects',
    icon: BuildingOfficeIcon,
    color: 'text-orange-600 dark:text-orange-400'
  },
  {
    title: 'Security Compliance',
    value: '100%',
    description: 'Compliance with industry security standards',
    icon: ShieldCheckIcon,
    color: 'text-red-600 dark:text-red-400'
  },
  {
    title: 'Cost Savings',
    value: '40%',
    description: 'Average cost reduction for clients',
    icon: CurrencyDollarIcon,
    color: 'text-emerald-600 dark:text-emerald-400'
  }
];

export default function ImprovementsSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4"
          >
            Our Impact & Achievements
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Quantifying our commitment to excellence and client success
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {improvements.map((improvement, index) => (
            <motion.div
              key={improvement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 ${improvement.color}`}>
                  <improvement.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {improvement.title}
                </h3>
              </div>
              <div className="mb-2">
                <span className={`text-3xl font-bold ${improvement.color}`}>
                  {improvement.value}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {improvement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These metrics reflect our commitment to delivering exceptional value and maintaining the highest standards of service quality. We continuously monitor and improve these KPIs to ensure we exceed client expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 