"use client";

import { motion } from 'framer-motion';
import { MoonIcon, SunIcon, Home } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto flex justify-between items-center mb-12 py-2 px-4 bg-gray-200/90 dark:bg-gray-800/90 rounded-full shadow-lg"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center"
      >
        <h1 className="text-lg font-semibold mr-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Loomina</h1>
      </motion.div>
      <div className="flex items-center space-x-6">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-8 h-8"
        >
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full w-8 h-8 bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600"
        >
          <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </motion.header>
  );
}