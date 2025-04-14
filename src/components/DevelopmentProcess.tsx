import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Users, Lightbulb, CheckCircle, Rocket } from 'lucide-react';

// Development process data for each project
const processData = {
  1: [
    {
      stage: 'Concept',
      icon: Lightbulb,
      details: "Identified knowledge discovery gaps in traditional search engines",
      duration: "3 weeks",
      highlight: "Conducted interviews with 40+ researchers and knowledge workers"
    },
    {
      stage: 'Prototyping',
      icon: Code,
      details: "Built initial knowledge graph algorithm with 78% connection accuracy",
      duration: "6 weeks",
      highlight: "Developed custom semantic similarity measures"
    },
    {
      stage: 'Development',
      icon: Code,
      details: "Implemented full system with data connectors and visualization tools",
      duration: "4 months",
      highlight: "Integrated 7 different data source types"
    },
    {
      stage: 'Testing',
      icon: Users,
      details: "Closed beta with 200 users from research institutions",
      duration: "6 weeks",
      highlight: "Achieved 94% user satisfaction rating"
    },
    {
      stage: 'Launch',
      icon: Rocket,
      details: "Public release with premium and free tiers",
      duration: "Ongoing",
      highlight: "Featured in Tech Today and AI Weekly"
    }
  ],
  2: [
    {
      stage: 'Concept',
      icon: Lightbulb,
      details: "Identified educational gap in quantum computing visualization",
      duration: "2 weeks",
      highlight: "Collaborated with 3 quantum physics professors"
    },
    {
      stage: 'Prototyping',
      icon: Code,
      details: "Created WebGL-based quantum state visualizations",
      duration: "8 weeks",
      highlight: "Developed interactive qubit representation"
    },
    {
      stage: 'Development',
      icon: Code,
      details: "Built full educational platform with progressive learning path",
      duration: "3 months",
      highlight: "Implemented 12 interactive exercises"
    },
    {
      stage: 'Testing',
      icon: Users,
      details: "Tested with undergraduate physics students",
      duration: "4 weeks",
      highlight: "Improved concept understanding by 40%"
    },
    {
      stage: 'Launch',
      icon: Rocket,
      details: "Released to educational institutions",
      duration: "Ongoing",
      highlight: "Adopted by 12 universities worldwide"
    }
  ],
  3: [
    {
      stage: 'Concept',
      icon: Lightbulb,
      details: "Researched effective sustainability behavior change techniques",
      duration: "4 weeks",
      highlight: "Analyzed 15 existing eco apps for gaps"
    },
    {
      stage: 'Prototyping',
      icon: Code,
      details: "Created carbon footprint calculation engine with ML predictions",
      duration: "5 weeks",
      highlight: "Developed habit formation algorithms"
    },
    {
      stage: 'Development',
      icon: Code,
      details: "Built cross-platform app with community features",
      duration: "12 weeks",
      highlight: "Integrated with 5 smart home platforms"
    },
    {
      stage: 'Testing',
      icon: Users,
      details: "Beta test with 500 environmentally conscious users",
      duration: "8 weeks",
      highlight: "Average carbon reduction of 12% per user"
    },
    {
      stage: 'Launch',
      icon: Rocket,
      details: "Released on App Store and Google Play",
      duration: "Ongoing",
      highlight: "100,000+ downloads in first month"
    }
  ],
  4: [
    {
      stage: 'Concept',
      icon: Lightbulb,
      details: "Explored intersection of human creativity and AI assistance",
      duration: "3 weeks",
      highlight: "Surveyed 120 digital artists on creative workflow"
    },
    {
      stage: 'Prototyping',
      icon: Code,
      details: "Built custom generative models with style transfer capabilities",
      duration: "10 weeks",
      highlight: "Implemented real-time style adjustments"
    },
    {
      stage: 'Development',
      icon: Code,
      details: "Created full digital studio with intuitive AI controls",
      duration: "16 weeks",
      highlight: "Developed collaborative creation mode"
    },
    {
      stage: 'Testing',
      icon: Users,
      details: "Invited 50 professional artists for extended testing",
      duration: "6 weeks",
      highlight: "93% reported enhanced creative output"
    },
    {
      stage: 'Launch',
      icon: Rocket,
      details: "Released subscription service with free tier",
      duration: "Ongoing",
      highlight: "Featured in Digital Arts Magazine"
    }
  ]
};

export default function DevelopmentProcess({ projectId = 1 }: { projectId: keyof typeof processData }) {
  const [expandedStage, setExpandedStage] = useState<number | null>(null);
  const [currentProject, setCurrentProject] = useState(processData[projectId]);
  useEffect(() => {
    setCurrentProject(processData[projectId]);
    setExpandedStage(null);
  }, [projectId]);
  // Calculate current project completion percentage
  const completedStages = currentProject.findIndex((stage: { stage: string }) => stage.stage === 'Launch');
  const progressPercentage = (completedStages / (currentProject.length - 1)) * 100;
  
  return (
    <div className="mt-8 p-4 border-t border-gray-700">
      <div className="flex justify-between items-center mb-3 ">
        <h3 className="text-sm uppercase text-gray-400">Development Process</h3>
        <div className="flex items-center">
          <div className="w-24 bg-gray-700 rounded-full h-1.5 mr-2">
            <div 
              className="bg-primary h-1.5 rounded-full" 
              style={{width: `${progressPercentage}%`}}
            />
          </div>
          <span className="text-xs text-gray-400">{Math.round(progressPercentage)}%</span>
        </div>
      </div>
      
      <div className="relative pl-6">
        {currentProject.map((item, index) => {
          const Icon = item.icon;
          const isCompleted = index <= completedStages;
          const isExpanded = expandedStage === index;
          
          return (
            <motion.div 
              key={item.stage}
              className="mb-4 relative"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline connector */}
              {index < currentProject.length - 1 && (
                <div className="absolute w-0.5 bg-gray-600 left-[-22.5px] top-6 bottom-[-12px]" />
              )}
              
              {/* Timeline node */}
              <motion.div 
                className={`absolute w-4 h-4 rounded-full left-[-24px] top-1 flex items-center justify-center cursor-pointer
                  ${isCompleted ? 'bg-primary' : 'bg-gray-600'}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setExpandedStage(isExpanded ? null : index)}
              >
                <Icon size={10} className="text-white" />
              </motion.div>
              
              {/* Content */}
              <div 
                className={`${isExpanded ? 'bg-gray-800 bg-opacity-30 rounded-lg p-3' : ''} transition-all duration-300`}
                onClick={() => setExpandedStage(isExpanded ? null : index)}
              >
                <div className="flex justify-between cursor-pointer">
                  <p className="text-xs font-medium">{item.stage}</p>
                  <p className="text-xs text-gray-400 flex items-center">
                    <Calendar size={10} className="mr-1" />
                    {item.duration}
                  </p>
                </div>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-gray-300 mt-2">{item.details}</p>
                  <div className="flex items-center mt-2 text-xs text-primary">
                    <CheckCircle size={10} className="mr-1" />
                    <span>{item.highlight}</span>
                  </div>
                </motion.div>
                
                {!isExpanded && (
                  <p className="text-xs text-gray-400 truncate">{item.details}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="text-xs text-gray-500 mt-2 text-center italic">
        Click on a stage to see details
      </div>
    </div>
  );
}