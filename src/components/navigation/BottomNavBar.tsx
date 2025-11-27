import React, { useState, useEffect } from 'react';
import { Map, Users, Calendar, Video, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNavBar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { icon: Map, label: 'Atlas', path: '/atlas' },
    { icon: Calendar, label: 'Cal', path: '/calendar' },
    { icon: Video, label: 'Live', path: '/live', isMain: true },
    { icon: Users, label: 'Grid', path: '/grid' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
      <nav className="glass-panel rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl border border-white/10">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          
          if (item.isMain) {
            return (
              <Link key={item.path} href={item.path}>
                <div className="relative -mt-8">
                  <div className={`bg-primary-neon rounded-full p-4 shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-transform hover:scale-110 active:scale-95 border-4 border-background-deep`}>
                    <Icon size={24} className="text-background-deep stroke-[3]" />
                  </div>
                </div>
              </Link>
            );
          }

          return (
            <Link key={item.path} href={item.path}>
              <div className="flex flex-col items-center gap-1 group">
                <Icon 
                  size={22} 
                  className={`transition-colors duration-300 ${isActive ? 'text-primary-neon drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]' : 'text-text-dim group-hover:text-text-ghost'}`} 
                />
                <span className={`text-[10px] font-medium tracking-wide transition-colors ${isActive ? 'text-primary-neon' : 'text-text-dim'}`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNavBar;