const Publications = () => {
  const publications = [
    {
      title: "Drinking water potability prediction using machine learning approaches: a case study of Indian rivers",
      journal: "Water Practice & Technology",
      date: "Dec 2023",
      authors: "Jyot Buch et al.",
      link: "#", // Placeholder - Update with actual DOI or link
      abstract: "Research on predicting water potability using ML techniques for Indian rivers.",
      type: "Journal Article"
    },
    {
      title: "Applications of Machine Learning and Artificial Intelligence in Metal Die Casting",
      conference: "ALUCAST, India",
      date: "Jan 2022",
      authors: "Jyot Buch",
      link: "#", // Placeholder
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
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Publications & Research
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold">
                        {pub.type}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{pub.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {pub.authors} • <span className="font-semibold">{pub.journal || pub.conference}</span>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {pub.abstract}
                    </p>
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors whitespace-nowrap"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Read Paper
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-slide-up">
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
          <div className="text-center mb-12 animate-slide-up">
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
