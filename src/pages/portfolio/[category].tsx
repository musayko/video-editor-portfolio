import { useRouter } from 'next/router';
import { videos, VideoCategory } from '@/data/videos';
import { headToTalkAccounts, viralContent } from '@/data/instagram';
import Image from 'next/image';
import { logoAnimations, motionGraphicsVideos, mapAnimationVideos } from '@/data/animations';
import { documentaryChannels } from '@/data/youtube';

export default function PortfolioCategory() {
  const router = useRouter();
  const { category } = router.query;
  
  const portfolioItem = videos.find(video => video.id === category);

  if (!portfolioItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The portfolio category you're looking for doesn't exist.</p>
          <a 
            href="/#work" 
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="mb-12">
        <a 
          href="/#work" 
          className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
          </svg>
          Back to Portfolio
        </a>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{portfolioItem.emoji}</span>
          <h1 className="text-4xl font-bold text-gray-900">{portfolioItem.title}</h1>
        </div>
        <p className="text-xl text-purple-600 mb-2">{portfolioItem.subtitle}</p>
        <p className="text-gray-600">{portfolioItem.description}</p>
      </div>

      {/* Portfolio Examples Section */}
      <div className="grid gap-8">
        {category === 'short-form' && headToTalkAccounts && (
          <>
            <h2 className="text-2xl font-bold mb-8">Head-to-Talk Videos</h2>
            <div className="space-y-16 mb-16">
              {headToTalkAccounts.map((account) => (
                <div key={account.id} className="space-y-6">
                  {/* Account Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative">
                      <Image
                        src={account.profileImage}
                        alt={account.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{account.username}</h3>
                      <p className="text-gray-600">{account.description}</p>
                    </div>
                  </div>
                  
                  {/* Videos Grid */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {account.videos.map((video) => (
                      <div key={video.id} className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
                        <iframe
                          src={video.embedUrl}
                          className="w-full h-full"
                          frameBorder="0"
                          scrolling="no"
                          allowTransparency
                          allowFullScreen
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {viralContent && (
              <>
                <h2 className="text-2xl font-bold mb-8">Viral Videos</h2>
                <div className="space-y-6">
                  {/* Viral Account Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative">
                      <Image
                        src={viralContent.profileImage}
                        alt={viralContent.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{viralContent.username}</h3>
                      <p className="text-gray-600">{viralContent.description}</p>
                    </div>
                  </div>
                  
                  {/* Viral Videos Grid */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {viralContent.videos.map((video) => (
                      <div key={video.id} className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
                        <iframe
                          src={video.embedUrl}
                          className="w-full h-full"
                          frameBorder="0"
                          scrolling="no"
                          allowTransparency
                          allowFullScreen
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </>
        )}

        {category === 'long-form' && documentaryChannels && (
          <>
            <h2 className="text-2xl font-bold mb-8">YouTube Documentaries</h2>
            <div className="space-y-16 mb-16">
              {documentaryChannels.map((channel) => (
                <div key={channel.id} className="space-y-6">
                  {/* Channel Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative">
                      <Image
                        src={channel.profileImage}
                        alt={channel.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{channel.username}</h3>
                      <p className="text-gray-600">{channel.description}</p>
                    </div>
                  </div>
                  
                  {/* Videos Grid */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {channel.videos.map((video) => (
                      <div key={video.id} className="space-y-4">
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                          <iframe
                            src={video.embedUrl}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{video.title}</h4>
                          {video.description && (
                            <p className="text-gray-600 text-sm mt-1">{video.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {category === 'motion-graphics' && (
          <>
            <h2 className="text-2xl font-bold mb-8">Logo Animations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {logoAnimations.map((animation) => (
                <div 
                  key={animation.id} 
                  className="aspect-square bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={animation.gifUrl}
                      alt={animation.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-8">Data Driven Map Animations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {mapAnimationVideos.map((video) => (
                <div key={video.id} className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{video.title}</h3>
                    {video.description && (
                      <p className="text-gray-600 mt-1">{video.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-8">Motion Graphics Showcase</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {motionGraphicsVideos.map((video) => (
                <div key={video.id} className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{video.title}</h3>
                    {video.description && (
                      <p className="text-gray-600 mt-1">{video.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
} 