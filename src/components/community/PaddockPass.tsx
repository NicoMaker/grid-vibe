'use client';

import React from 'react';
import { MessageCircle, Share2, Clock, ChevronRight, Newspaper } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsItem {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  source: string;
  time: string;
  image?: string;
}

const newsFeed: NewsItem[] = [
  {
    id: 1,
    category: 'QUALIFYING',
    title: "Verstappen: 'Il giro perfetto a Monaco non esiste'",
    excerpt: "Il campione del mondo parla delle sfide del sabato nel principato.",
    source: 'F1 Official',
    time: '10m ago',
    image: '/news/verstappen.jpg', // <-- Immagine Locale
  },
  {
    id: 2,
    category: 'TECHNICAL',
    title: 'Analisi: Il nuovo fondo Ferrari spiegato',
    excerpt: "Gli aggiornamenti portati dalla Scuderia sembrano dare i frutti sperati.",
    source: 'Tech Talk',
    time: '45m ago',
    image: '/news/fondosf25.png', // <-- Immagine Locale
  },
  {
    id: 3,
    category: 'TEAM RADIO',
    title: 'Hamilton frustrato dal traffico nelle FP3',
    excerpt: "Le comunicazioni radio svelano la tensione in casa Mercedes.",
    source: 'Paddock Insider',
    time: '1h ago',
    image: '/news/hamiltonfrustrato.png', // <-- Immagine Locale
  },
];

const PaddockPass = () => {
  const [topStory, ...rest] = newsFeed;

  return (
    <div className="w-full pb-6 pt-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-[11px] font-mono tracking-[0.25em] text-primary-neon/70 uppercase">
            paddock feed
          </p>
          <h1 className="text-2xl md:text-3xl font-black text-white italic tracking-tight">
            PADDOCK PASS
          </h1>
        </div>
        <div className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-primary-neon uppercase tracking-[0.2em]">
          live feed
        </div>
      </div>

      {/* TOP STORY HERO */}
      <Link href={`/news/${topStory.id}`} className="block group">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#101010] transition-transform duration-300 hover:scale-[1.01]">
          {topStory.image && (
            <div className="h-44 w-full relative">
              <Image
                src={topStory.image}
                alt={topStory.title}
                width={176}
                height={176}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
          )}

          <div className="p-5 relative z-10">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-primary-neon text-background-deep">
                {topStory.category}
              </span>
              <span className="text-xs text-text-dim font-mono">{topStory.time}</span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2 group-hover:text-primary-neon transition-colors">
              {topStory.title}
            </h2>
            <p className="text-xs text-text-dim mb-4 line-clamp-2">{topStory.excerpt}</p>
            <p className="text-xs text-text-dim font-bold uppercase">via {topStory.source}</p>

            <div className="flex gap-4 mt-4 pt-3 border-t border-white/5">
              <button className="flex items-center gap-1 text-text-dim hover:text-white transition-colors">
                <MessageCircle size={16} />
                <span className="text-xs">24</span>
              </button>
              <button className="flex items-center gap-1 text-text-dim hover:text-white transition-colors">
                <Share2 size={16} />
                <span className="text-xs">Share</span>
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* RESTO DEL FEED */}
      <div className="space-y-4">
        {rest.map((item) => (
          <Link href={`/news/${item.id}`} key={item.id} className="block group">
            <div className="relative rounded-2xl overflow-hidden transition-all hover:scale-[1.01] bg-[#1a1a1a] border border-white/5 hover:border-primary-neon/40">
              
              {item.image && (
                <div className="h-24 w-full relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-deep to-transparent" />
                </div>
              )}

              <div className="p-4 relative z-10">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-white/10 text-white border border-white/10">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-text-dim font-mono">{item.time}</span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug mb-1 group-hover:text-primary-neon transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-text-dim mb-3">via {item.source}</p>

                <div className="flex gap-4 pt-2 border-t border-white/5">
                  <button className="flex items-center gap-1 text-text-dim hover:text-white transition-colors">
                    <MessageCircle size={14} />
                    <span className="text-[11px]">12</span>
                  </button>
                  <button className="flex items-center gap-1 text-text-dim hover:text-white transition-colors">
                    <Share2 size={14} />
                    <span className="text-[11px]">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <button className="w-full py-3 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all flex items-center justify-center gap-2">
         Load More News <ChevronRight size={14} />
      </button>
    </div>
  );
};

export default PaddockPass;