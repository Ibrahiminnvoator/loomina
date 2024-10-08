import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto mt-12 flex justify-between items-center text-sm text-muted-foreground">
      <p>© 2023 AI Image Creator. All rights reserved.</p>
      <div className="flex items-center space-x-4">
        <span className="cursor-not-allowed">Privacy Policy</span>
        <span className="cursor-not-allowed">Terms of Service</span>
        <span className="cursor-not-allowed">
          <Github className="h-5 w-5" />
        </span>
      </div>
    </footer>
  );
}