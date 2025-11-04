import useScrollAnimation from '../hooks/useScrollAnimation';

const SkillCategory = ({ category, index }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div
      ref={cardRef}
      className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 animate-on-scroll-scale ${cardVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-lg text-${category.color}-600 dark:text-${category.color}-400 mr-3`}>
          {category.icon}
        </div>
        <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className={`px-3 py-1 bg-${category.color}-50 dark:bg-${category.color}-900/20 text-${category.color}-700 dark:text-${category.color}-300 rounded-full text-sm font-medium hover:scale-105 transition-transform`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      skills: ["Python", "R", "SQL", "C++", "Java", "JavaScript", "HTML", "CSS", "HiveQL"],
      color: "primary"
    },
    {
      title: "Machine Learning & AI",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 7H7v6h6V7z" />
          <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
        </svg>
      ),
      skills: ["PyTorch", "Transformers", "LLMs", "RAG Systems", "YOLO", "Tesseract OCR", "Computer Vision", "NLP", "Deep Learning", "Supervised/Unsupervised Learning"],
      color: "accent"
    },
    {
      title: "Tools & Technologies",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      skills: ["Power BI", "Streamlit", "Tableau", "Apache Hadoop", "OpenCV", "UiPath", "Git", "Docker"],
      color: "primary"
    },
    {
      title: "Cloud & Databases",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      ),
      skills: ["AWS Bedrock", "AWS S3", "AWS Lambda", "LocalStack", "Neo4j", "PostgreSQL", "MySQL", "Oracle"],
      color: "accent"
    },
    {
      title: "Specializations",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      skills: ["Knowledge Graphs", "Information Retrieval", "Robotic Process Automation", "Prompt Engineering", "Data Visualization", "Predictive Modeling"],
      color: "primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 animate-on-scroll ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent data-driven solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 rounded-xl p-8 animate-fade-in">
          <div className="text-center">
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
              Core Competencies
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Specialized in building end-to-end ML pipelines, from data ingestion and feature engineering to 
              model deployment and monitoring. Expert in designing RAG systems, implementing computer vision 
              solutions, and developing intelligent automation workflows. Proficient in cloud-native architectures 
              and creating scalable, production-ready AI applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
