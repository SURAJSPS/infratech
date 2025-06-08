export default function CivilServicesSection() {
  const services = [
    {
      title: 'Building Construction',
      description: 'Complete building construction services including residential, commercial, and industrial projects.',
      icon: '🏗️'
    },
    {
      title: 'Electrical Systems',
      description: 'Comprehensive electrical system design, installation, and maintenance for all types of buildings.',
      icon: '⚡'
    },
    {
      title: 'Mechanical Systems',
      description: 'HVAC, plumbing, and mechanical system solutions for optimal building performance.',
      icon: '🔧'
    },
    {
      title: 'Fire Safety',
      description: 'Fire detection, prevention, and safety systems installation and maintenance.',
      icon: '🚒'
    },
    {
      title: 'Irrigation Systems',
      description: 'Advanced irrigation system design and implementation for efficient water management.',
      icon: '💧'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Civil Engineering Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 