export interface YouTubeChannel {
  id: string;
  username: string;
  profileImage: string;
  description: string;
  videos: YouTubeVideo[];
}

export interface YouTubeVideo {
  id: string;
  embedUrl: string;
  title: string;
  description?: string;
}

export const documentaryChannels: YouTubeChannel[] = [
  {
    id: 'caspianreportDE',
    username: '@CaspianReport DE',
    profileImage: '/youtube/profile1.jpg',
    description: 'Political and Social Commentary',
    videos: [
      {
        id: 'doc1',
        embedUrl: 'https://www.youtube.com/embed/q-OS2dAd4C8',
        title: 'France is preparing for war',
        description: ''
      },
      {
        id: 'doc2',
        embedUrl: 'https://www.youtube.com/embed/VV73ChGYO1Y',
        title: 'The global consequences of the change of power in Syria',
        description: ''
      },
      {
        id: 'doc3',
        embedUrl: 'https://www.youtube.com/embed/E4r_mzX6dqQ?start=9',
        title: 'China is dying - is there a way out?',
        description: ''
      }
    ]
  },
  {
    id: 'geschäftswelt',
    username: '@Geschäftswelt',
    profileImage: '/youtube/profile2.jpg',
    description: 'Long-form Video Essays',
    videos: [
      {
        id: 'segway',
        embedUrl: 'https://www.youtube.com/embed/M_bJIQNJOAk',
        title: 'The Decline of Segway - What Happened?',
        description: ''
      },
      {
        id: 'hp',
        embedUrl: 'https://www.youtube.com/embed/3CPXZSNXf24',
        title: 'The Decline of HP - What Happened?',
        description: ''
      },
      {
        id: 'universal',
        embedUrl: 'https://www.youtube.com/embed/cYYqd7gGb58',
        title: 'The eventful rise of Universal',
        description: ''
      }
    ]
  }
]; 