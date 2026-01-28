import useScrollAnimation from '../hooks/useScrollAnimation';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  
  const experiences = [
    {
      title: "Research Assistant",
      company: "ScienceNLP Lab, University of Illinois Urbana-Champaign",
      duration: "Jan 2026 – May 2026",
      location: "Champaign, IL",
      type: "Research",
      logo: "/JyotBuch/logos/uiuc.png",
      achievements: [
        "Developing knowledge graph integration and RAG-based QA system for NIH-funded biomedical research, building transformer-based entity extraction pipeline using BERT and graph neural networks for automated hypothesis generation from literature",
        "Engineered LLM-based reranking system using FLAN-T5 and GPT prompting for multi-ontology entity disambiguation, implementing dense retrieval baselines and fine-tuning models on domain-specific data to improve entity linking accuracy"
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
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
