import useScrollAnimation from '../hooks/useScrollAnimation';
import ExperienceCard from './ExperienceCard';
import experiencesData from '../data/experience.json';

const Experience = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });

  const experiences = experiencesData;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 animate-on-scroll ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Timeline line - more visible */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
