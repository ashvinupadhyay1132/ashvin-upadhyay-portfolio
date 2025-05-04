import React, { useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import { skills } from '../../data/skills';
import { Code2, FileType, File as FileHtml, File as FileCss, Combine, Server, ServerCog, Network, Webhook, Database, TableProperties, DatabaseZap, GitBranch, Container, Cloud, Workflow, TestTube, RepeatIcon as ReactIcon, Wrench } from 'lucide-react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');
  const { ref, isIntersecting } = useIntersectionObserver();
  
  const categories = [
    { id: 'frontend', label: 'Frontend', icon: <Code2 size={18} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={18} /> },
    { id: 'database', label: 'Database', icon: <Database size={18} /> },
    { id: 'tools', label: 'Tools', icon: <Wrench size={18} /> },
  ];
  
  const filteredSkills = skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Technical Skills" subtitle="Expertise" />
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
              className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 transition-opacity duration-500 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className={`transition-all duration-500 delay-${index * 100} ${
                isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col items-center justify-center group">
                <div className="w-16 h-16 flex items-center justify-center mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  {/* Use icon name to render the icon */}
                  {renderIcon(skill.icon)}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h3>
                
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-1 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transform origin-left transition-transform duration-1000 ease-out"
                    style={{ 
                      width: isIntersecting ? `${skill.proficiency}%` : '0%',
                    }}
                  ></div>
                </div>
                
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.proficiency}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to render icons
const renderIcon = (iconName: string) => {
  // Define iconMap with the imported icons
  const iconMap: Record<string, React.ReactNode> = {
    ReactIcon: <ReactIcon size={32} />,
    Code2: <Code2 size={32} />,
    FileType: <FileType size={32} />,
    FileHtml: <FileHtml size={32} />,
    FileCss: <FileCss size={32} />,
    Combine: <Combine size={32} />,
    Server: <Server size={32} />,
    ServerCog: <ServerCog size={32} />,
    Network: <Network size={32} />,
    Webhook: <Webhook size={32} />,
    Database: <Database size={32} />,
    TableProperties: <TableProperties size={32} />,
    DatabaseZap: <DatabaseZap size={32} />,
    GitBranch: <GitBranch size={32} />,
    Container: <Container size={32} />,
    Cloud: <Cloud size={32} />,
    Workflow: <Workflow size={32} />,
    TestTube: <TestTube size={32} />,
    Wrench: <Wrench size={32} />,
  };
  
  return iconMap[iconName] || <Code2 size={32} />;
};

export default Skills;