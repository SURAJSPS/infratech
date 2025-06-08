'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}

const team: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    image: '/team/sarah-chen.jpg',
    bio: 'Former Google Cloud architect with 15 years of experience scaling enterprise infrastructure. Sarah founded the company to revolutionize how businesses approach digital transformation.',
    linkedin: '#',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO',
    image: '/team/marcus-rodriguez.jpg',
    bio: 'Ex-Netflix engineering lead specializing in distributed systems and cloud architecture. Marcus drives our technical innovation and ensures cutting-edge solutions.',
    linkedin: '#',
  },
  {
    name: 'Dr. Priya Patel',
    role: 'VP of Engineering',
    image: '/team/priya-patel.jpg',
    bio: 'PhD in Computer Science from MIT with expertise in AI/ML infrastructure. Priya leads our engineering teams and spearheads our AI initiatives.',
    linkedin: '#',
  },
  {
    name: 'David Kim',
    role: 'Head of DevOps',
    image: '/team/david-kim.jpg',
    bio: 'Kubernetes expert and former AWS solutions architect. David ensures our infrastructure is scalable, secure, and operates at peak performance.',
    linkedin: '#',
  },
  {
    name: 'Emma Thompson',
    role: 'Head of Security',
    image: '/team/emma-thompson.jpg',
    bio: 'Cybersecurity specialist with 12 years protecting Fortune 500 companies. Emma leads our security initiatives and compliance efforts.',
    linkedin: '#',
  },
  {
    name: 'Alex Rivera',
    role: 'Product Manager',
    image: '/team/alex-rivera.jpg',
    bio: 'Former Stripe product lead with a passion for user experience. Alex bridges the gap between technical capabilities and customer needs.',
    linkedin: '#',
  },
  {
    name: 'Zara Okafor',
    role: 'Head of Sales',
    image: '/team/zara-okafor.jpg',
    bio: 'Enterprise sales veteran with expertise in B2B SaaS solutions. Zara builds lasting partnerships and drives our go-to-market strategy.',
    linkedin: '#',
  },
  {
    name: 'James Wu',
    role: 'Lead Data Scientist',
    image: '/team/james-wu.jpg',
    bio: 'Former Tesla ML engineer with expertise in predictive analytics. James transforms data into actionable insights for our clients.',
    linkedin: '#',
  },
  {
    name: 'Lisa Anderson',
    role: 'Head of Customer Success',
    image: '/team/lisa-anderson.jpg',
    bio: 'Customer advocacy expert with 10+ years ensuring client satisfaction. Lisa ensures every customer achieves their infrastructure goals.',
    linkedin: '#',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4"
          >
            Our Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Meet the experts behind our success
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="relative w-20 h-20 mb-4">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full border-4 border-blue-100 dark:border-blue-900"
                  />
                ) : (
                  <svg className="w-20 h-20 text-gray-400 rounded-full bg-gray-200 dark:bg-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors mt-auto"
                aria-label={`LinkedIn profile of ${member.name}`}
              >
               
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 