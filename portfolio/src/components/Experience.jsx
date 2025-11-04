const Experience = () => {
  const experiences = [
    {
      title: "Research Assistant",
      company: "ScienceNLP Lab, University of Illinois Urbana-Champaign",
      duration: "Jan 2026 – May 2026",
      location: "Champaign, IL",
      type: "Research",
      logo: "/JyotBuch/logos/uiuc.png",
      achievements: [
        "Developed and fine-tuned LLM-based models to automatically extract treatment-mechanism-outcome relationships from medical research papers",
        "Built knowledge graphs connecting complementary medicine interventions to biological pathways and clinical outcomes using annotated biomedical datasets"
      ],
      tags: ["LLM Fine-tuning", "NLP", "Knowledge Graphs", "Biomedical NLP", "Relation Extraction"]
    },
    {
      title: "Teaching Assistant",
      company: "University of Illinois, Urbana-Champaign",
      duration: "Aug 2025 – Present",
      location: "Champaign, IL",
      type: "Research",
      logo: "/JyotBuch/logos/uiuc.png",
      achievements: [
        "Built Graph-RAG pipeline linking PostgreSQL and Neo4j for student-assessment-error knowledge graph",
        "Integrated LLMs for personalized feedback with performance tracking",
        "Implemented AWS LocalStack and 'Right-of-AI' learning stack (Claude, Cursor, Marimo)"
      ],
      tags: ["Graph-RAG", "Neo4j", "PostgreSQL", "LLMs", "AWS LocalStack"]
    },
    {
      title: "Data Science Intern",
      company: "Amazon",
      duration: "May 2025 – Aug 2025",
      location: "Seattle, WA",
      type: "Internship",
      logo: "/JyotBuch/logos/amazon.png",
      achievements: [
        "Built FinLens: document-agnostic entity extraction pipeline using AWS Bedrock, S3, Lambda with >95% accuracy",
        "Enhanced Minerva RAG system with multimodal capabilities, improved BM25 Recall@10 by 8%",
        "Designed novel intent-aware completeness recall metric for summarization evaluation"
      ],
      tags: ["AWS Bedrock", "RAG", "NLP", "Entity Extraction", "Lambda"]
    },
    {
      title: "Automation Developer",
      company: "Accelirate Softech",
      duration: "Dec 2023 – Jul 2024",
      location: "Pune, India",
      type: "Full-time",
      logo: "/JyotBuch/logos/accelirate.png",
      achievements: [
        "Built intelligent invoice processing workflow using UiPath Agents with computer vision and LLMs",
        "Developed SQL procedures for compliance checking and exception reporting",
        "Streamlined document processing reducing manual effort by 60%"
      ],
      tags: ["UiPath", "RPA", "Computer Vision", "LLMs", "SQL"]
    },
    {
      title: "Data Science Intern",
      company: "Eaton",
      duration: "Aug 2022 – Dec 2022",
      location: "Pune, India",
      type: "Internship",
      logo: "/JyotBuch/logos/eaton.png",
      achievements: [
        "Developed Drawing-to-Data (D2D) tool using YOLOv5 and Tesseract OCR (91% detection accuracy, 93% OCR precision)",
        "Built automated compliance mapping system for engineering drawings",
        "Recognized with Intellectual Property award for D2D tool innovation"
      ],
      tags: ["YOLOv5", "OCR", "Computer Vision", "PyTorch", "OpenCV"]
    }
  ];

  const typeColors = {
    "Internship": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    "Full-time": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    "Research": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Timeline line - more visible */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              // Extract year from duration (e.g., "May 2025 – Aug 2025" => "2025")
              const year = exp.duration.match(/\d{4}/)?.[0] || '';
              
              return (
                <div
                  key={index}
                  className={`relative animate-slide-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex flex-col md:flex md:items-center`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot at center with year label */}
                  <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10">
                    {/* Solid filled circle */}
                    <div className="w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"></div>
                    {/* Year label */}
                    <div className="mt-2 px-2 py-1 bg-white dark:bg-gray-800 rounded-md shadow-md border border-gray-200 dark:border-gray-700">
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                        {year}
                      </span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} relative z-20`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-l-4 border-primary-500">
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
