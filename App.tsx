import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background-deep text-text-ghost min-h-screen selection:bg-primary-neon selection:text-background-deep">
        <main className="relative w-full h-full pb-24">
          {children}
        </main>
        
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md glass-panel rounded-full h-16 flex items-center justify-around px-4 z-50 transition-transform duration-300 hover:scale-105">
           {/* Navigation items will be injected here in Sprint 1 */}
        </nav>
      </body>
    </html>
  );
}