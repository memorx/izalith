'use client';

export default function TechStackSection() {
  const technologies = [
    'React',
    'Node.js',
    'TypeScript',
    'n8n',
    'OpenAI',
    'PostgreSQL',
    'GCP',
    'Azure',
    'Telegram',
    'WhatsApp',
    'Render',
    'Docker'
  ];

  return (
    <section className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6 bg-linear-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
          Tech Stack
        </h2>
        <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Modern technologies for scalable, production-ready solutions
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 cursor-default"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(500px) rotateY(${
                  x * 10
                }deg) rotateX(${-y * 10}deg) translateY(-8px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateZ(0)';
              }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300" />
              <span className="text-slate-300 font-medium text-lg relative z-10">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
