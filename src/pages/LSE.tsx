import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Users, Award, Calendar, MapPin } from 'lucide-react';

const LSE = () => {
  const journeyItems = [
    {
      id: 'lsr-bachelors',
      title: 'Bachelor\'s in Economics (with Honours) @ Lady Shri Ram College, University of Delhi',
      date: 'Bachelor\'s Degree',
      description: 'Majored in Economics at one of India\'s most prestigious institutions. Focused on core economic theory and interdisciplinary training through electives in sociology.',
      icon: Book,
      color: 'pastel-peach',
      iconColor: 'primary-700',
      side: 'left',
      details: [
        'Microeconomics',
        'Macroeconomics', 
        'Econometrics',
        'Development Economics',
        'Public Economics',
        'Money & Financial Markets',
        'How do chemical properties of wine affect sommeliers\' ratings? (A novice Econometrics Project)',
        'How do socioeconomic indicators affect crimes against women in India? (Indian Economics Project)',
        'Economic Growth & Carbon Emission in High VS Lower-Middle Income Countries (Data Analysis Project)',
        'A Marxist Analysis of the K-Pop Industry (Political Economy Project)'
      ]
    },
    {
      id: 'arrival',
      title: 'MSc International Health Policy - Health Economics @ LSE',
      date: 'MSc @ LSE',
      icon: MapPin,
      color: 'pastel-mint',
      iconColor: 'primary-700',
      side: 'left',
      image: "https://media.licdn.com/dms/image/v2/D4E16AQFvnYS_nctcDg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1701184054417?e=1758758400&v=beta&t=loyQOU6anAimSmh3dc3h8fHZ0lVzjuZLeYRoHail2b4"
    },
    {
      id: 'studies',
      title: 'Academics',
      date: 'Theoretical Work',
      description: 'At LSE, I learned methods for undertaking rigorous analyses, and built a practical understanding of markets, regulation, policies and practices.',
      icon: GraduationCap,
      color: 'pastel-lavender',
      iconColor: 'accent-700',
      side: 'right',
      details: ['Advanced Health Economics', 'Economic Evaluations', 'Applied Econometrics', 'Pharmaceutical Economics', 'Global Access to Medicines', 'Randomised Evaluations', 'Financing Healthcare', 'Sexual & Reproductive Health Policy']
    },
    {
      id: 'modules',
      title: 'Key Projects',
      date: 'Practical Work',
      description: 'The projects I did at LSE trained me to ask sharper questions, build and test evidence with the right tools, and translate complex findings into frameworks/solutions that decision-makers can actually use.',
      icon: Book,
      color: 'pastel-yellow',
      iconColor: 'primary-700',
      side: 'left',
      details: ['Cost-effectiveness Analysis (using Decision Trees)', 'Reimbursement of Medicines using a Netflix Model', 'Relationship between Unemployment & Health (using IV)', 'RCT Protocol for Safe Syringe Use for Recreational Drugs']
    },
    {
      id: 'community',
      title: 'Community',
      date: 'It\'s about the People',
      description: 'It was an honour to be taught by some of the best minds in this field, and to be in a classroom with such promising future leaders. I was a part of the LSE Health Society, where we went as a delegation to the European Commission to discuss the EU\'s health policy. I was also lucky be a part of the Care Policy & Evaluation Centre!',
      icon: Users,
      color: 'pastel-pink',
      iconColor: 'accent-700',
      side: 'right',
      details: ['LSE Health Society', 'Care Policy & Evaluation Centre']
    },
    {
      id: 'achievements',
      title: 'Growth',
      date: 'Milestones',
      description: 'Graduated with a Distinction, obtained a research assistantship under Dr Bo Hu at LSE CPEC, and built a community of like-minded people.',
      icon: Award,
      color: 'pastel-blue',
      iconColor: 'primary-700',
      side: 'left',
      details: ['Disctinction', 'Research Assistant']
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-display font-bold mb-4">
            My Journey @ LSE
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The London School of Economics and Policial Science
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-300 via-accent-300 to-primary-300 rounded-full"></div>
          
          {/* Journey Items */}
          <div className="space-y-16">
            {journeyItems.map((item, index) => {
              const IconComponent = item.icon;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ 
                    x: item.side === 'left' ? -100 : 100, 
                    opacity: 0 
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: index * 0.3, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`relative flex ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                    <div className={`w-6 h-6 bg-${item.iconColor.split('-')[0]}-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full max-w-md ${item.side === 'left' ? 'mr-8' : 'ml-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`bg-white rounded-xl shadow-lg p-6 border-l-4 border-${item.iconColor.split('-')[0]}-500`}
                    >
                      {/* Date Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500 font-medium">{item.date}</span>
                      </div>
                      
                      {/* Icon and Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 bg-${item.color}/40 rounded-full flex-shrink-0`}>
                          <IconComponent className={`h-6 w-6 text-${item.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-semibold text-gray-800 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Image for first item */}
                      {item.image && (
                        <div className="mb-4">
                          <img
                            src={item.image}
                            alt="LSE Campus"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      
                      {/* Details List */}
                      {item.details && (
                        <div className="mt-4">
                          <div className="grid grid-cols-2 gap-2">
                            {item.details.map((detail, detailIndex) => (
                              <motion.div
                                key={detail}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: (index * 0.3) + (detailIndex * 0.1) + 0.4,
                                  duration: 0.3
                                }}
                                className="flex items-center gap-2 text-sm text-blue-600"
                                className="flex items-center gap-2 text-sm text-purple-600"
                              >
                                <div className={`w-2 h-2 bg-${item.iconColor.split('-')[0]}-400 rounded-full`}></div>
                                <span>{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Journey Continues Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: journeyItems.length * 0.3 + 0.5, duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 z-10">
                <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
                <h3 className="text-lg font-display font-semibold text-gray-800 mb-2">
                  
                </h3>
                <p className="text-gray-600 text-sm">
                  More exciting work ahead as I carry my learnings from LSE with me.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LSE;