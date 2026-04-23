import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef([]);

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'LIVE - QUANT FINANCE TOOL',
      tags: ['terminal-based', 'analysis', 'quant'],
      description: '> \n> Im building a tool for quantitative data analysis \n> merges data from AsterDEX and Hyperliquid \n> integrated strategies \n> integrating stat and math \n> my agent will have great tools \n> \n> Im backtesting via oracle cloud infra',
      images: [
        '/projects/quant-finance-tool/asterdex-liquidation.png',
        '/projects/quant-finance-tool/asterdex-live-liquidation.png',
        '/projects/quant-finance-tool/asterdex-market-data.png',
        '/projects/quant-finance-tool/data-viewer-1.png',
        '/projects/quant-finance-tool/06_signal_generator.png'
      ]
    },
    {
      id: 2,
      title: 'BUILDING MY PERSONAL WEBSITE',
      tags: ['WEB', 'design', 'creative'],
      description: '> On a Tuesday I decided I want a personal site \n> In two days I built this \n> Now I have a personal portfolio \n> Thanks to Anthropic and their free version of Claude Sonnet \n> ',         
      images: [
        '/projects/website-building/Screenshot1.png',
        '/projects/website-building/Screenshot2.png',
        '/projects/website-building/Screenshot3.png'
      ]
    },
    // Add more projects here
  ];

  // Goals data - two types: 'progress' (with bar) or 'status' (with badge)
  // Status options: 'not yet', 'in progress', 'done'
  const goals = [
    {
      id: 1,
      title: 'I read 3650 pages',
      description: 'ten pages a day',
      type: 'progress',
      current: 1371,
      target: 3650,
      unit: 'pages'
    },
    {
      id: 2,
      title: 'I develop 5 projects',
      description: 'building things',
      type: 'progress',
      current: 1,
      target: 5,
      unit: 'projects'
    },
    {
      id: 3,
      title: 'I make friends (irl and online)',
      description: 'dm me on X',
      type: 'status',
      status: 'in progress'
    },
    {
      id: 4,
      title: 'I earn at least 1 internet dollar',
      description: 'first dollar is the hardest',
      type: 'progress',
      current: 0,
      target: 1,
      unit: '$'
    },
    {
      id: 5,
      title: 'I get rid of Youtube',
      description: 'the last bad social in my life',
      type: 'status',
      status: 'in progress'
    },
    {
      id: 6,
      title: "I'm totally financially independent",
      description: 'feeling the freedom',
      type: 'progress',
      current: 0,
      target: 10000,
      unit: '$ saved'
    },
    // Add more goals here
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;
          
          if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
            setActiveProject(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-light mb-2">Marc</h1>
            <div className="flex items-center gap-4">
              <p className="text-gray-600">Creator & tryin' become Dev</p>
              <span className="text-gray-400">•</span>
              <a 
                href="https://x.com/mrcbzz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
              >
                <span className="text-sm">I share more on</span>
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4 fill-current group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
          <a
            href="https://mrcbzz.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-400 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition-colors"
          >
            Writing
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <div className="relative">
        {projects.length === 0 ? (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-400 text-xl">No projects yet. Check back soon!</p>
          </div>
        ) : (
          projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="relative min-h-screen"
            >
              <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex gap-12">
                  {/* INFO PART - Left Column (1/3) - Sticky */}
                  <div className="w-1/3 sticky top-32 self-start">
                    <h2 className="text-3xl font-light mb-4">{project.title}</h2>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.description}</p>
                  </div>

                  {/* IMAGE PART - Right Column (2/3) - Scrolling Vertical Carousel */}
                  <div className="w-2/3 space-y-8">
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Separator */}
              {index < projects.length - 1 && (
                <div className="border-b border-gray-200 mx-6"></div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Goals Section */}
      <div className="border-t border-gray-300 mx-6 mt-20"></div>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light mb-12">2026 Goals</h2>
        <div className="space-y-8">
          {goals.map((goal) => {
            if (goal.type === 'status') {
              // Status badge style
              const badgeStyles = {
                'not yet': 'bg-gray-100 text-gray-500',
                'in progress': 'bg-sky-100 text-sky-600',
                'done': 'bg-green-100 text-green-600'
              };
              return (
                <div key={goal.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-light">{goal.title}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${badgeStyles[goal.status]}`}>
                      {goal.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{goal.description}</p>
                </div>
              );
            }

            // Progress bar style
            const percentage = Math.min((goal.current / goal.target) * 100, 100);
            return (
              <div key={goal.id} className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-light">{goal.title}</h3>
                  <span className="text-sm text-gray-500">
                    {goal.current} / {goal.target} {goal.unit} ({percentage.toFixed(1)}%)
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{goal.description}</p>
                {/* Progress Bar */}
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-400 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Marc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;