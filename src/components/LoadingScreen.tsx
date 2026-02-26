'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Wait 1 second after full load
      setTimeout(() => {
        setIsFading(true);
        // Remove from DOM after fade animation
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 1000);
    };

    // Check if already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          ohana
        </h1>
        <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-foreground rounded-full animate-spin" />
      </div>
    </div>
  );
}
