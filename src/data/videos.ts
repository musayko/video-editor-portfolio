export interface VideoCategory {
  id: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  link: string;
}

export const videos: VideoCategory[] = [
  {
    id: 'short-form',
    title: 'Short-Form Content',
    emoji: '⚡',
    subtitle: 'Head-to-Talk Videos & Viral Clips',
    description: 'Engaging, fast-paced content optimized for social media platforms.',
    link: '/portfolio/short-form'
  },
  {
    id: 'long-form',
    title: 'Long-Form Content',
    emoji: '📺',
    subtitle: 'YouTube Documentaries & Editing Works',
    description: 'In-depth storytelling and comprehensive video productions.',
    link: '/portfolio/long-form'
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    emoji: '✨',
    subtitle: 'Logo Animations & Explainer Videos',
    description: 'Dynamic visual elements that bring your brand to life.',
    link: '/portfolio/motion-graphics'
  }
];