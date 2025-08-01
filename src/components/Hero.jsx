import React, { useState } from 'react'

const Hero = () => {
  const [showHowItWorks, setShowHowItWorks] = useState(false)
  return (
    <header className='relative w-full mt-8'>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      <nav className='flex justify-between items-center w-full mb-16'>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-accent">
            SnapSummary
          </span>
        </div>
      </nav>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className='text-5xl md:text-6xl font-extrabold leading-tight text-accent'>
            Read <span className='text-accent'>smarter</span>, not harder
          </h1>
          <p className='text-lg text-gray-300 max-w-md'>
            Transform lengthy articles into clear, concise summaries with our AI-powered tool in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#summarizer" className="px-8 py-3 rounded-lg bg-accent text-white font-medium hover:bg-blue-600 transition-all shadow-lg shadow-accent/20 text-center">
              Try it now
            </a>
            <button
              type="button"
              onClick={() => setShowHowItWorks(true)}
              className="px-8 py-3 rounded-lg bg-accent text-white font-medium hover:bg-blue-600 transition-all shadow-lg shadow-accent/20 text-center"
            >
              How it works
            </button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
          <div className="relative bg-gray-800 rounded-2xl border border-gray-700 shadow-xl p-6 transform -rotate-3 transition-transform hover:rotate-0 duration-300 floating-animation">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-2 text-xs text-gray-400">snapsummary.app</div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-700 rounded w-2/3"></div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-4/5"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            </div>
            <div className="mt-6">
              <div className="text-sm text-accent font-medium">Summary</div>
              <div className="mt-2 space-y-2">
                <div className="h-3 bg-accent/30 rounded w-full"></div>
                <div className="h-3 bg-accent/30 rounded w-5/6"></div>
                <div className="h-3 bg-accent/30 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 grid md:grid-cols-3 gap-8" id="features">
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Instant Summaries</h3>
          <p className="text-gray-400">Get concise summaries of any article in seconds, powered by advanced AI.</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">High Accuracy</h3>
          <p className="text-gray-400">Our summaries capture the key points without missing crucial information.</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">History & Sync</h3>
          <p className="text-gray-400">Access your summary history anytime, with automatic cloud synchronization.</p>
        </div>
      </div>
      {showHowItWorks && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl shadow-2xl border border-accent max-w-lg w-full p-8 relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
              onClick={() => setShowHowItWorks(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              How SnapSummary Works
            </h2>
            <ol className="list-decimal list-inside text-gray-200 space-y-2 mb-4">
              <li>Paste the URL of any article you want summarized into the input box.</li>
              <li>Click the <span className="font-semibold text-accent">Summarize</span> button.</li>
              <li>SnapSummary uses advanced AI to generate a concise summary of the article.</li>
              <li>View your summary instantly, and access your summary history anytime.</li>
            </ol>
            <p className="text-gray-400">Perfect for students, professionals, and anyone who wants to save time reading!</p>
          </div>
        </div>
      )}
    </header>
  )
}

export default Hero
