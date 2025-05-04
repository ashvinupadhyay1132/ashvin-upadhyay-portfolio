import React, { useState } from 'react';
import { ExternalLink, Github, Star, Layers, Code2, Users, ChevronDown } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import { projects } from '../../data/projects';
import Button from '../shared/Button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });
  
  // Get unique tags for filter
  const allTags = projects.flatMap(project => project.tags);
  const uniqueTags = ['all', ...new Set(allTags)];
  
  // Filter projects by selected tag
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Latest Projects" subtitle="Portfolio" />
        
        {/* Filters Container */}
        <div className="mb-12">
          {/* Mobile Dropdown */}
          <div className="md:hidden relative z-20">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm flex items-center justify-between border border-gray-200 dark:border-gray-700"
            >
              <span className="text-sm font-medium">
                Filter: {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {isFilterOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                {uniqueTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setFilter(tag);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-300 ${
                      filter === tag
                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-2">
            {uniqueTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => setFilter(tag)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  filter === tag
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-500 ${
                isIntersecting 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full flex justify-between items-center">
                      <div className="flex space-x-3">
                        <Button
                          href={project.demoLink}
                          variant="primary"
                          size="sm"
                          icon={<ExternalLink size={14} />}
                          className="bg-indigo-600 text-white hover:bg-indigo-700 font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                          Live Demo
                        </Button>
                        <Button
                          href={project.githubLink}
                          variant="secondary"
                          size="sm"
                          icon={<Github size={14} />}
                          className="bg-gray-900 text-white hover:bg-gray-800 font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        >
                          Code
                        </Button>
                      </div>
                      {project.featured && (
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star size={16} className="fill-current" />
                          <span className="text-sm font-medium">Featured</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.featured && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col items-center">
                      <Code2 className="w-6 h-6 text-indigo-500 mb-1" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Clean Code</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Layers className="w-6 h-6 text-blue-500 mb-1" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Scalable</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Users className="w-6 h-6 text-green-500 mb-1" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Team Project</span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;