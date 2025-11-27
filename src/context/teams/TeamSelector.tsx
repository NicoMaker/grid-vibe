import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const teams = [
  { id: 'redbull', name: 'Red Bull Racing', color: '#0600EF' },
  { id: 'ferrari', name: 'Ferrari', color: '#FF2800' },
  { id: 'mercedes', name: 'Mercedes', color: '#00D2BE' },
  { id: 'mclaren', name: 'McLaren', color: '#FF8000' },
  { id: 'aston', name: 'Aston Martin', color: '#006F62' },
];

const TeamSelector = () => {
  const { setTeam, currentTeam } = useTheme();

  return (
    <div className="w-full py-6 overflow-x-auto no-scrollbar">
      <div className="flex px-4 gap-4">
        {teams.map((team) => (
          <button
            key={team.id}
            onClick={() => setTeam(team.id)}
            className={`
              relative flex-shrink-0 w-20 h-20 rounded-2xl glass-panel 
              flex items-center justify-center transition-all duration-300
              ${currentTeam === team.id ? 'scale-110 border-primary-neon shadow-[0_0_20px_var(--primary-neon)]' : 'opacity-60 hover:opacity-100'}
            `}
          >
            <div 
              className="w-12 h-12 rounded-full"
              style={{ backgroundColor: team.color }} 
            />
            {currentTeam === team.id && (
              <div className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-primary-neon animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeamSelector;