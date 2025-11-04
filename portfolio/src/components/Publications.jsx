import useScrollAnimation from '../hooks/useScrollAnimation';

const PublicationCard = ({ pub, index }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-l-4 ${
        pub.type === 'Journal Article' ? 'border-primary-500' : 'border-accent-500'
      } animate-on-scroll ${cardVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          pub.type === 'Journal Article'
            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
            : 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300'
        }`}>
          {pub.type}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{pub.date}</span>
      </div>

      <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">
        {pub.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
        <span className="font-semibold">Authors:</span> {pub.authors}
      </p>

      {pub.journal && (
        <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
          {pub.journal}
        </p>
      )}

      {pub.conference && (
        <p className="text-accent-600 dark:text-accent-400 font-semibold mb-3">
          {pub.conference}
        </p>
      )}

      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
        {pub.abstract}
      </p>

      {pub.link && (
        <a
          href={pub.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Read Paper
        </a>
      )}
    </div>
  );
};

const Publications = () => {
  const [pubTitleRef, pubTitleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [certTitleRef, certTitleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [honorsTitleRef, honorsTitleVisible] = useScrollAnimation({ threshold: 0.2 });
  
  const publications = [
    {
      title: "Drinking water potability prediction using machine learning approaches: a case study of Indian rivers",
      journal: "Water Practice & Technology",
      date: "Dec 2023",
      authors: "Jyot Buch et al.",
      link: "https://doi.org/10.2166/wpt.2023.202", // Placeholder - Update with actual DOI or link
      abstract: "Research on predicting water potability using ML techniques for Indian rivers.",
      type: "Journal Article"
    },
    {
      title: "Applications of Machine Learning and Artificial Intelligence in Metal Die Casting",
      conference: "ALUCAST, India",
      date: "Jan 2022",
      authors: "Jyot Buch",
      // link: "#", // Placeholder
      abstract: "Presented research on AI/ML applications in manufacturing processes.",
      type: "Conference Paper"
    }
  ];

  const certifications = [
    { name: "UiPath Robotic Process Automation", issuer: "UiPath", date: "Dec 2023" },
    { name: "Deep Learning A-Z: Hands-On Artificial Neural Networks", issuer: "Udemy", date: "Feb 2022" },
    { name: "Tableau 2020 A-Z", issuer: "Udemy", date: "Feb 2022" },
    { name: "Power BI A-Z", issuer: "Udemy", date: "Jan 2022" },
    { name: "Python", issuer: "Kaggle", date: "Apr 2021" },
    { name: "SQL (Basics)", issuer: "HackerRank", date: "Apr 2021" },
    { name: "Java Gold Badge", issuer: "HackerRank", date: "Dec 2020" },
    { name: "Streamlit & Python ML Web App", issuer: "Coursera", date: "Sep 2020" },
    { name: "Machine Learning for Data Analysis", issuer: "Coursera", date: "Jul 2020" },
    { name: "Data Science 2022: Complete Data Science & ML", issuer: "Udemy", date: "Nov 2019" }
  ];

  const honors = [
    {
      title: "WeCU Scholar",
      organization: "UIUC",
      date: "Apr 2025",
      description: "Recognized for community childcare analysis support"
    },
    {
      title: "Intellectual Property Recognition",
      organization: "Eaton",
      date: "Oct 2022",
      description: "Trade secret development for Drawing-to-Data (D2D) tool"
    },
    {
      title: "CI Global Aerospace Level Project Winner",
      organization: "Eaton",
      date: "2022",
      description: "Awarded for innovative project contributions"
    },
    {
      title: "ALUCAST Delegate",
      organization: "ALUCAST Conference",
      date: "Dec 2021",
      description: "Presented on AI/ML trends in die casting industry"
    },
    {
      title: "Sports Captain",
      organization: "Lexicon International Schools",
      date: "Aug 2017",
      description: "Leadership in school athletics program"
    },
    {
      title: "Athletic Achievements",
      organization: "The Bishop's Co-Ed School",
      date: "Apr 2017",
      description: "Medals in 100m sprint, long jump, and relay events"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Publications */}
        <div className="mb-16">
          <div 
            ref={pubTitleRef}
            className={`text-center mb-12 animate-on-scroll ${pubTitleVisible ? 'is-visible' : ''}`}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Publications & Research
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <PublicationCard key={index} pub={pub} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div 
            ref={certTitleRef}
            className={`text-center mb-12 animate-on-scroll ${certTitleVisible ? 'is-visible' : ''}`}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-5 border-l-4 border-accent-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Honors & Awards */}
        <div>
          <div 
            ref={honorsTitleRef}
            className={`text-center mb-12 animate-on-scroll ${honorsTitleVisible ? 'is-visible' : ''}`}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Honors & Awards
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {honors.map((honor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-primary-50 dark:from-gray-900 dark:to-primary-900/10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {honor.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-2">
                      {honor.organization} • {honor.date}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {honor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
