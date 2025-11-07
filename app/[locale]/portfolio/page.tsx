'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Filter, ExternalLink } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import YouTubeEmbed from '@/components/shared/YouTubeEmbed';

type ProjectCategory =
  | 'all'
  | 'ai-agents'
  | 'automation'
  | 'web-dev'
  | 'consulting';

interface Project {
  id: string;
  translationKey: string;
  category: ProjectCategory;
  techStack: string[];
  videoId?: string;
  url?: string;
}

export default function PortfolioPage() {
  const t = useTranslations('portfolio');
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  // Estructura de proyectos con tech stacks, videos y URLs
  // Los nombres, descripciones y métricas vienen de las traducciones
  const projects: Project[] = [
    // AI AGENTS
    {
      id: 'made-by-humans',
      translationKey: 'madeByHumans',
      category: 'ai-agents',
      techStack: ['OpenAI', 'Claude', 'n8n', 'TypeScript', 'GCP']
    },
    {
      id: 'axen-energy',
      translationKey: 'axenEnergy',
      category: 'ai-agents',
      techStack: ['WhatsApp API', 'OpenAI', 'n8n', 'Python'],
      videoId: 'ETNayGL30vg'
    },
    {
      id: 'axen-capital',
      translationKey: 'axenCapital',
      category: 'ai-agents',
      techStack: ['Claude', 'LangChain', 'PostgreSQL', 'TypeScript'],
      videoId: 'GI5-djeAE3c'
    },
    {
      id: 'ai-whatsapp-packages',
      translationKey: 'aiWhatsappPackages',
      category: 'ai-agents',
      techStack: ['WhatsApp Business API', 'OpenAI', 'n8n', 'Stripe']
    },

    // AUTOMATION
    {
      id: 'subastas-automation',
      translationKey: 'subastasAutomation',
      category: 'automation',
      techStack: ['n8n', 'Redis', 'WebSockets', 'YouTube API'],
      videoId: 'TD5I3l_G53A',
      url: 'https://subastalasilla.com'
    },
    {
      id: 'n8n-templates',
      translationKey: 'n8nTemplates',
      category: 'automation',
      techStack: ['n8n', 'OpenAI', 'PostgreSQL', 'Various APIs']
    },

    // WEB DEVELOPMENT
    {
      id: 'wenco',
      translationKey: 'wenco',
      category: 'web-dev',
      techStack: ['React', 'Azure IoT', 'C#', 'Kubernetes', 'Docker'],
      videoId: 'WbdJZiLvVjg'
    },
    {
      id: 'subastas-web',
      translationKey: 'subastasWeb',
      category: 'web-dev',
      techStack: ['Django', 'Nuxt.js', 'PostgreSQL', 'Redis', 'AWS'],
      videoId: 'TD5I3l_G53A',
      url: 'https://subastalasilla.com'
    },
    {
      id: 'disney',
      translationKey: 'disney',
      category: 'web-dev',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      videoId: 'FB6eq1EV9OY'
    },
    {
      id: 'myrichmond',
      translationKey: 'myrichmond',
      category: 'web-dev',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      videoId: 'p3xQyTqfMeM'
    },
    {
      id: 'central1',
      translationKey: 'central1',
      category: 'web-dev',
      techStack: ['Angular', 'Java', 'Oracle DB', 'Jenkins'],
      videoId: 'XNySLSzH74s'
    },
    {
      id: 'sage',
      translationKey: 'sage',
      category: 'web-dev',
      techStack: ['Java', 'Android', 'Selenium', 'Jenkins'],
      videoId: 'oBQqCUKmoH0'
    },
    {
      id: 'radiant',
      translationKey: 'radiant',
      category: 'web-dev',
      techStack: ['ASP.NET', 'C#', 'SQL Server', 'SignalR'],
      videoId: 'Ik1FzjZoEMo'
    },
    {
      id: 'unity',
      translationKey: 'unity',
      category: 'web-dev',
      techStack: ['React', 'TypeScript', 'WebSockets', 'Python'],
      videoId: 'pi2uWNC6_9E'
    },
    {
      id: 'concurso',
      translationKey: 'concurso',
      category: 'web-dev',
      techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'Vercel'],
      videoId: 'TD5I3l_G53A',
      url: 'https://concursolasilla.com'
    },
    {
      id: 'pemt',
      translationKey: 'pemt',
      category: 'web-dev',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Zoho Mail'],
      url: 'https://pemt.mx'
    },
    {
      id: 'congreso',
      translationKey: 'congreso',
      category: 'web-dev',
      techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Vercel']
    },

    // CONSULTING
    {
      id: 'educaruno',
      translationKey: 'educaruno',
      category: 'consulting',
      techStack: ['Curriculum Design', 'Python', 'JavaScript', 'AI/ML']
    },
    {
      id: 'ai-course',
      translationKey: 'aiCourse',
      category: 'consulting',
      techStack: ['Curriculum Design', 'OpenAI', 'Python', 'Jupyter']
    },
    {
      id: 'gov-canada',
      translationKey: 'govCanada',
      category: 'consulting',
      techStack: ['RFP Strategy', 'Procurement', 'Contract Management']
    }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filters = [
    {
      id: 'all' as ProjectCategory,
      label: t('filters.all'),
      count: projects.length
    },
    {
      id: 'ai-agents' as ProjectCategory,
      label: t('filters.aiAgents'),
      count: projects.filter((p) => p.category === 'ai-agents').length
    },
    {
      id: 'automation' as ProjectCategory,
      label: t('filters.automation'),
      count: projects.filter((p) => p.category === 'automation').length
    },
    {
      id: 'web-dev' as ProjectCategory,
      label: t('filters.webDev'),
      count: projects.filter((p) => p.category === 'web-dev').length
    },
    {
      id: 'consulting' as ProjectCategory,
      label: t('filters.consulting'),
      count: projects.filter((p) => p.category === 'consulting').length
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('title')}
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 sticky top-0 z-40 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const projectData = t.raw(
                `projects.${project.translationKey}`
              ) as {
                name: string;
                description: string;
                metrics: string[];
              };

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Video if available */}
                  {project.videoId && (
                    <div className="p-6 pb-0">
                      <YouTubeEmbed
                        videoId={project.videoId}
                        title={projectData.name}
                      />
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-100">
                        {projectData.name}
                      </h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {projectData.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {projectData.metrics.map((metric, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <p className="text-sm text-slate-300">{metric}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-cyan-400 rounded-full border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
