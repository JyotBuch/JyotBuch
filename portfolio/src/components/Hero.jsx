const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                Hello, I&apos;m
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
                Jyot Buch
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
              Data Scientist | Machine Learning Engineer | Statistics Graduate Student
            </h2>
            
            <div className="space-y-2 text-lg text-gray-600 dark:text-gray-400">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                MSc Statistics @ UIUC
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Incoming Research Assistant @ ScienceNLP (Spring 2026)
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Champaign, Illinois
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View Resume
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                See Projects
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {/* Professional headshot */}
                  <img 
                    src="/JyotBuch/assets/images/jyot.png" 
                    alt="Jyot Buch" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-accent-300 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
