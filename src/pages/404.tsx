export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[150px] font-bold text-black mb-2">404</h1>
        <h2 className="text-4xl font-bold text-black mb-4">This page could not be found.</h2>
        <a 
          href="/" 
          className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  );
} 