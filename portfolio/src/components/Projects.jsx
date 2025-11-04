import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ProjectCard = ({ project, index }) => {
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col animate-on-scroll-scale ${cardVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      {project.image && (
        <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
            {project.date}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-3 flex-1">
          {project.description}
        </p>

        <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 px-4 py-2 mb-4">
          <p className="text-sm font-semibold text-accent-700 dark:text-accent-300">
            {project.achievement}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-center text-sm font-medium"
            >
              <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-center text-sm font-medium"
            >
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Dribble.AI",
      description: "AI-powered video analysis for soccer using CNN-Transformer hybrid. Detects passes, shots, and transitions from SoccerNet dataset with temporal attention mechanisms.",
      achievement: "Achieved 0.713 mAP@0.75 score",
      date: "Apr–May 2025",
      tags: ["Computer Vision", "Deep Learning", "PyTorch", "Transformers"],
      category: ["Computer Vision", "Deep Learning"],
      github: "#", // Placeholder
      demo: null,
      image: null // Placeholder
    },
    {
      title: "FinLens",
      description: "Document-agnostic entity extraction pipeline using AWS Bedrock for diverse financial documents. Production-level accuracy with serverless architecture.",
      achievement: ">95% accuracy on financial documents",
      date: "Summer 2025",
      tags: ["AWS Bedrock", "NLP", "Entity Extraction", "Serverless"],
      category: ["NLP", "Cloud"],
      github: null, // Corporate project
      demo: null,
      image: null
    },
    {
      title: "DocuSense.AI",
      description: "Local RAG platform using FAISS and local LLMs to answer questions about uploaded documents like offer letters and lease agreements.",
      achievement: "Privacy-first local document intelligence",
      date: "Apr 2025",
      tags: ["RAG", "FAISS", "LLMs", "Privacy"],
      category: ["NLP", "ML"],
      github: "#", // Placeholder
      demo: "#",
      image: null
    },
    {
      title: "AgroTalk",
      description: "Multimodal chatbot for farmers integrating weather APIs, soil data, and crop calendars. Provides field-specific advice using RAG+LLM architecture.",
      achievement: "Empowering farmers with AI-driven insights",
      date: "Mar 2025",
      tags: ["Chatbot", "RAG", "Multimodal", "Agriculture"],
      category: ["NLP", "Web Development"],
      github: "#", // Placeholder
      demo: "#",
      image: null
    },
    {
      title: "Semantic Clustering for Model Cards",
      description: "Organized HuggingFace model cards using NLP and clustering techniques. Created interactive semantic maps for model discovery.",
      achievement: "Enhanced model discoverability",
      date: "Apr–May 2025",
      tags: ["NLP", "Clustering", "Visualization", "HuggingFace"],
      category: ["NLP", "Data Science"],
      github: "#", // Placeholder
      demo: "#",
      image: null
    },
    {
      title: "Drawing-to-Data (D2D)",
      description: "YOLOv5-based tool with Tesseract OCR for automated extraction from engineering drawings. Streamlined compliance mapping workflow.",
      achievement: "91% detection, 93% OCR precision | IP Award",
      date: "Aug–Dec 2022",
      tags: ["YOLOv5", "OCR", "Computer Vision", "PyTorch"],
      category: ["Computer Vision", "ML"],
      github: null, // Corporate IP
      demo: null,
      image: null
    }
  ];

  const categories = ['All', 'Computer Vision', 'NLP', 'Deep Learning', 'ML', 'Data Science', 'Web Development', 'Cloud'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 animate-on-scroll ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-12">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
