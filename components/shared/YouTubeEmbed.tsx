'use client';

import { motion } from 'framer-motion';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export default function YouTubeEmbed({
  videoId,
  title,
  className = ''
}: YouTubeEmbedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative w-full ${className}`}
      style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-xl border border-slate-700"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </motion.div>
  );
}
