import React from 'react';

const drivers = [
  { id: 1, name: 'MAX', number: '1', team: 'Red Bull Racing', image: '/drivers/max.png' },
  { id: 2, name: 'LEWIS', number: '44', team: 'Mercedes', image: '/drivers/lewis.png' },
  { id: 3, name: 'CHARLES', number: '16', team: 'Ferrari', image: '/drivers/charles.png' },
  { id: 4, name: 'LANDO', number: '4', team: 'McLaren', image: '/drivers/lando.png' },
  { id: 5, name: 'FERNANDO', number: '14', team: 'Aston Martin', image: '/drivers/alo.png' },
];

const DriverGrid = () => {
  return (
    <div className="p-4 columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
      {drivers.map((driver, index) => (
        <div 
          key={driver.id} 
          className="relative group break-inside-avoid mt-12 mb-8 cursor-pointer"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-neon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          <div className="glass-panel rounded-3xl p-4 pt-16 relative overflow-visible border-t-0 border-white/10 hover:border-primary-neon/50 transition-colors">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-36 z-20 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
               <div className="w-full h-full bg-gray-500/20 rounded-t-full mask-image-linear-to-b" /> 
               {/* Actual Image Tag would go here */}
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <h1 className="text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                {driver.number}
              </h1>
              <h2 className="text-xl font-bold text-white uppercase tracking-wide mt-1">
                {driver.name}
              </h2>
              <p className="text-xs text-primary-neon font-mono mt-1 opacity-80">
                {driver.team}
              </p>
            </div>

            <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
               <div className="h-full bg-primary-neon w-3/4 shadow-[0_0_10px_var(--primary-neon)]" />
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-text-dim font-mono">
               <span>PTS</span>
               <span className="text-white">285</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DriverGrid;