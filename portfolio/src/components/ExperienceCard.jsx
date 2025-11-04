import useScrollAnimation from '../hooks/useScrollAnimation';

const ExperienceCard = ({ exp, index }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.2 });
  
  const typeColors = {
    'Internship': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Full-time': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Research': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  };

  // Extract year from duration
  const year = exp.duration.match(/\d{4}/)?.[0] || '';
  
  // Determine animation direction based on index
  const animationClass = index % 2 === 0 ? 'animate-on-scroll-left' : 'animate-on-scroll-right';
  
  return (
    <div
      ref={cardRef}
      className={`relative ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex flex-col md:flex md:items-center`}
    >
      {/* Timeline dot at center with year label */}
      <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10">
        {/* Solid filled circle */}
        <div className={`w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-2 border-white dark:border-gray-900 shadow-lg transition-all duration-500 ${cardVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
        {/* Year label */}
        <div className={`mt-2 px-2 py-1 bg-white dark:bg-gray-800 rounded-md shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-500 delay-100 ${cardVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
            {year}
          </span>
        </div>
      </div>

      {/* Content card */}
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} relative z-20`}>
        <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-l-4 border-primary-500 ${animationClass} ${cardVisible ? 'is-visible' : ''}`}>
          <div className="flex items-start gap-4 mb-3">
            {/* Logo */}
            {exp.logo && (
              <div className="flex-shrink-0 w-18 h-18 flex items-center justify-center">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${typeColors[exp.type]}`}>
                  {exp.type}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {exp.duration}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {exp.location}
            </span>
          </div>

          <ul className="space-y-2 mb-4">
            {exp.achievements.map((achievement, achIndex) => (
              <li key={achIndex} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                <svg className="w-5 h-5 mr-2 text-accent-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="3" />
                </svg>
                {achievement}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
