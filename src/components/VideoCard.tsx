import Link from 'next/link';
import { VideoCategory } from '@/data/videos';

interface VideoCardProps extends VideoCategory {}

export default function VideoCard({ title, emoji, subtitle, description, link }: VideoCardProps) {
  return (
    <Link 
      href={link}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{emoji}</span>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-lg font-medium text-purple-600 mb-3">{subtitle}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
          View Projects
          <svg 
            className="w-5 h-5 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}