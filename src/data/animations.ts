export interface LogoAnimation {
  id: string;
  title: string;
  gifUrl: string;
}

export const logoAnimations: LogoAnimation[] = [
  {
    id: 'logo1',
    title: 'Logo Animation 1',
    gifUrl: '/animations/logo1.gif'  // Place your GIF files in public/animations folder
  },
  {
    id: 'logo2',
    title: 'Logo Animation 2',
    gifUrl: '/animations/logo2.gif'
  },
  {
    id: 'logo3',
    title: 'Logo Animation 3',
    gifUrl: '/animations/logo3.gif'
  },
  {
    id: 'logo4',
    title: 'Logo Animation 4',
    gifUrl: '/animations/logo4.gif'
  },
  {
    id: 'logo5',
    title: 'Logo Animation 5',
    gifUrl: '/animations/logo5.gif' 
  },
  {
    id: 'logo6',
    title: 'Logo Animation 6',
    gifUrl: '/animations/logo6.gif'
  },
  {
    id: 'logo7',
    title: 'Logo Animation 7',
    gifUrl: '/animations/logo7.gif'
  },
  {
    id: 'logo8',
    title: 'Logo Animation 8',
    gifUrl: '/animations/logo8.gif'
  }
]; 

export interface YouTubeVideo {
  id: string;
  title: string;
  embedUrl: string;
  description?: string;
}

export const motionGraphicsVideos: YouTubeVideo[] = [
  {
    id: 'Commentin',
    title: 'Commentin',
    embedUrl: 'https://www.youtube.com/embed/cekwj9YQo0U',
    description: 'Explainer video for a WEB3 project'
  },
  {
    id: 'poppin',
    title: 'Introducing Poppin',
    embedUrl: 'https://www.youtube.com/embed/wOuyVGp-Vg4',
    description: 'A new way to comment on web'
  },
  {
    id: 'PoppinExplainer',
    title: 'Poppin Explainer',
    embedUrl: 'https://www.youtube.com/embed/zp6it6y2s94',
    description: 'Explainer video for a WEB3 project'
  },
  {
    id: 'BlinkGenerator',
    title: 'Blink Generator',
    embedUrl: 'https://www.youtube.com/embed/JVK7rrqhT94',
    description: 'A website that lets your create blinks on Solana'
  },
  {
    id: 'Bonkathon',
    title: 'Bonkathon',
    embedUrl: 'https://www.youtube.com/embed/k0Vyef-xHcM',
    description: 'The Bonkathon is an on-chain primitive for DAOs and community-run hackathons'
  },
  {
    id: 'Challenge',
    title: 'Challenge App',
    embedUrl: 'https://www.youtube.com/embed/Q0sFtA3iiyw',
    description: 'Challenge App that lets you create challenges and earn rewards'
  }
]; 

export const mapAnimationVideos: YouTubeVideo[] = [
  {
    id: 'map1',
    title: 'Railway Route Map',
    embedUrl: 'https://www.youtube.com/embed/gCpdLTv5kQ8',
    description: 'Map Animation For Turkish Ministry of Transport'
  },
  {
    id: 'map2',
    title: 'Real Life Lore Style Map',
    embedUrl: 'https://www.youtube.com/embed/hT78JnGGB7g',
    description: 'World\'s undiscovered oil and gas'
  },
  {
    id: 'map3',
    title: 'Adana Airport Map',
    embedUrl: 'https://www.youtube.com/embed/dluvPCpoAmQ',
    description: 'Map Animation For Turkish Ministry of Transport'
  },
  {
    id: 'map4',
    title: 'Historical Map',
    embedUrl: 'https://www.youtube.com/embed/TIH63-JSK20',
    description: 'Dutch East Indies Map'
  },
  {
    id: 'map5',
    title: 'Metro Line Map',
    embedUrl: 'https://www.youtube.com/embed/ERz_zjHovzA',
    description: 'Istanbul Airport Metro Line Map'
  },
  {
    id: 'map6',
    title: 'Metro Line Map',
    embedUrl: 'https://www.youtube.com/embed/i3LKHs75m80',
    description: 'Metro line map animation'
  }
]; 