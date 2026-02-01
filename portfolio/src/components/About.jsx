import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [para1Ref, para1Visible] = useScrollAnimation({ threshold: 0.2 });
  const [para2Ref, para2Visible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 animate-on-scroll ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p 
              ref={para1Ref}
              className={`animate-on-scroll ${para1Visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '0.1s' }}
            >
              I&apos;m a graduate student at the University of Illinois, Urbana-Champaign, specializing in 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> data analytics</span>, 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> machine learning</span>, 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> large language models</span>, and 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> business intelligence</span>. 
              With hands-on experience at industry leaders like Amazon, Eaton, and Accelirate, I&apos;ve developed 
              a strong foundation in building intelligent automation systems and deploying production-ready ML solutions.
            </p>

            {/* <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              My passion lies in transforming raw data into strategic insights through 
              <span className="font-semibold text-accent-600 dark:text-accent-400"> predictive modeling</span>, 
              <span className="font-semibold text-accent-600 dark:text-accent-400"> artificial intelligence</span>, and 
              <span className="font-semibold text-accent-600 dark:text-accent-400"> retrieval-augmented generation (RAG)</span> systems. 
              Whether it&apos;s extracting entities from financial documents with 95%+ accuracy, building graph-based knowledge 
              systems for personalized learning, or developing computer vision pipelines for sports analytics, I thrive on 
              solving complex problems at the intersection of data science and real-world applications.
            </p> */}

            <p 
              ref={para2Ref}
              className={`animate-on-scroll ${para2Visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              Currently, I&apos;m working as a <span className="font-semibold">Research Assistant</span> at 
              the ScienceNLP lab, developing knowledge graph integration and RAG-based QA systems for NIH-funded biomedical 
              research. I also serve as <span className="font-semibold">Co-Founder and Vice President</span> of StatCom, 
              a graduate student consulting organization I helped establish, where I manage over 50 students across 6 consulting 
              projects with local businesses, schools, and nonprofits.
            </p>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">1.5+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">10+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">2</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Research Publications</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
