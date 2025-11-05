'use client';

import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Zap, Database, Code } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: MessageSquare,
      title: 'AI Agents',
      description:
        'Bilingual conversational AI across WhatsApp, voice, and web channels',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Automation',
      description:
        'n8n workflows for triage, routing, and business process automation',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description:
        'ETL pipelines, API integrations, and real-time data synchronization',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Full-Stack Dev',
      description:
        'React, Node.js, TypeScript applications with modern architecture',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6 bg-linear-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
          Services
        </h2>
        <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Embedded engineering solutions that transform your business operations
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="group relative bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-slate-700 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(0)'
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(1000px) rotateY(${
                  x * 15
                }deg) rotateX(${-y * 15}deg) translateZ(20px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateZ(0)';
              }}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <CardContent className="p-8 relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 shadow-xl`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-100">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
