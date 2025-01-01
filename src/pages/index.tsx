import { videos } from '@/data/videos';
import { clients } from '@/data/clients';
import VideoCard from '@/components/VideoCard';
import ClientLogo from '@/components/ClientLogo';
import WhatsAppButton from '../components/WhatsAppButton';
import { contactConfig } from '../config/contact';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight py-1">
            Crafting Visual Stories
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional video editor specializing in motion graphics, short-form content, and storytelling.
          </p>
          <a href="#work" 
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition duration-300">
            View My Work
          </a>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      {/* Portfolio Section */}
      <section id="work" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <ClientLogo key={index} {...client} />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Channels Section */}
      <section id="channels" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">My Channels</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <a 
            href="https://www.youtube.com/@musayko" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group block bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden relative">
                <Image
                  src="/youtube/musayko.jpg"
                  alt="@Musayko channel"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">@Musayko</h3>
                <p className="text-purple-600">Content Creator</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">Creating entertaining and creative videos</p>
            <span className="text-black font-medium group-hover:text-purple-600 transition-colors duration-300 flex items-center">
              Visit Channel 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </a>
          
          <a 
            href="https://www.youtube.com/channel/UCdke08Ec9t6rHVjKdg0Spmw" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group block bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden relative">
                <Image
                  src="/youtube/musaozdemir.jpg"
                  alt="@Musa Özdemir channel"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">@Musa Özdemir</h3>
                <p className="text-purple-600">Personal Account</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">Stay tuned for future content where I plan to explore ideas.</p>
            <span className="text-black font-medium group-hover:text-purple-600 transition-colors duration-300 flex items-center">
              Visit Channel 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <p className="text-gray-600 mb-6 text-center">
              Ready to start your project? Contact me directly through WhatsApp for a quick response.
            </p>
            <WhatsAppButton 
              phoneNumber={contactConfig.whatsapp.phoneNumber}
              message={contactConfig.whatsapp.defaultMessage}
              className="w-full justify-center"
            />
          </div>
        </div>
      </section>
    </>
  );
}