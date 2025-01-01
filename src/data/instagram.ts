export interface InstagramAccount {
  id: string;
  username: string;
  profileImage: string;
  description: string;
  videos: InstagramVideo[];
}

export interface InstagramVideo {
  id: string;
  embedUrl: string;
  title: string;
}

export const headToTalkAccounts: InstagramAccount[] = [
  {
    id: 'metinukvisa',
    username: '@metinukvisa',
    profileImage: '/instagram/profile1.jpg',
    description: '',
    videos: [
      {
        id: 'short1',
        embedUrl: 'https://www.instagram.com/reel/C_iuNFYop5c/embed',
        title: ''
      },
      {
        id: 'short2',
        embedUrl: 'https://www.instagram.com/reel/DCW6b48IjSR/embed',
        title: ''
      },
      {
        id: 'short3',
        embedUrl: 'https://www.instagram.com/reel/C9PsFIao7HS/embed',
        title: ''
      }
    ]
  },
  {
    id: 'ucDortBes',
    username: '@ucdortbesallstar',
    profileImage: '/instagram/profile2.jpg',
    description: '',
    videos: [
      {
        id: 'short4',
        embedUrl: 'https://www.instagram.com/reel/DDe9mCEtkQn/embed',
        title: ''
      },
      {
        id: 'short5',
        embedUrl: 'https://www.instagram.com/reel/DChXZsONW5N/embed',
        title: ''
      },
      {
        id: 'short6',
        embedUrl: 'https://www.instagram.com/reel/C_BXszLtmUp/embed',
        title: ''
      }
    ]
  },
  {
    id: 'enDeneme',
    username: '@endenemenet',
    profileImage: '/instagram/profile3.jpg',
    description: '',
    videos: [
      {
        id: 'short7',
        embedUrl: 'https://www.instagram.com/reel/DDjrcePNhxj/embed',
        title: ''
      },
      {
        id: 'short8',
        embedUrl: 'https://www.instagram.com/reel/DAvEeU0NTpI/embed',
        title: ''
      },
      {
        id: 'short9',
        embedUrl: 'https://www.instagram.com/reel/DAOKzLQtNQR/embed',
        title: ''
      }
    ]
  }
];

export const viralContent: InstagramAccount = {
  id: 'viral',
  username: '@elzmimarlik',
  profileImage: '/instagram/profile4.jpg',
  description: '',
  videos: [
    {
      id: 'viral1',
      embedUrl: 'https://www.instagram.com/reel/DDSXdtGtQ4O/embed',
      title: ''
    },
    {
      id: 'viral2',
      embedUrl: 'https://www.instagram.com/reel/DDFe2q3N2UB/embed',
      title: ''
    },
    {
      id: 'viral3',
      embedUrl: 'https://www.instagram.com/reel/C4vwt44tg0g/embed',
      title: 'MacBook Air M2 Unboxing'
    }
  ]
}; 