import React, { useState, useEffect } from 'react';
import { threads } from './data/posts';
import { Post } from './components/Post';
import { About } from './components/About';
import { PiArrowLeft, PiArrowRight, PiBook, PiMoon, PiSun, PiInfo } from 'react-icons/pi';
import { useTheme } from 'next-themes';
import { Logo } from './components/Logo';

function parseThread(markdown: string): { content: string; images: string[] }[] {
  return markdown
    .split('---')
    .map(section => section.trim())
    .filter(Boolean)
    .map(section => {
      const imageRegex = /!\[.*?\]\((.*?)\)/g;
      const images = [...section.matchAll(imageRegex)].map(match => match[1]);
      const content = section.replace(imageRegex, '').trim();
      return { content, images };
    });
}

function TableOfContents({ onSelectThread }: { onSelectThread: (id: string) => void }) {
  const sortedThreads = [...threads].sort((a, b) => a.order - b.order);

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <h1 className="text-3xl font-bold mb-6">Love to Hate Me - A Yellowjackets SMAU</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">By: <a href="https://x.com/kacchixx">@Kacchixx</a></p>
        
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Yellowjackets' vocalist, Shauna Shipman, is everyone's dream girl… except Jackie Taylor's apparently. After the actress outright rejects her in public, Shauna decides to do everything she can to exact revenge.
      </p>

      <div className="space-y-4">
        {sortedThreads.map((thread) => (
          <div key={thread.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
            <button
              onClick={() => onSelectThread(thread.id)}
              className="w-full text-left"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{thread.title}</h2>
              {thread.description && (
                <p className="text-gray-600 dark:text-gray-400">{thread.description}</p>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const { theme, setTheme } = useTheme();
  const sortedThreads = [...threads].sort((a, b) => a.order - b.order);
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const currentThread = selectedThread ? sortedThreads.find(t => t.id === selectedThread)! : null;
  const currentIndex = currentThread ? sortedThreads.findIndex(t => t.id === selectedThread) : -1;
  const posts = currentThread ? parseThread(currentThread.content) : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedThread, showAbout]);

  const handlePrevThread = () => {
    const prevIndex = (currentIndex - 1 + sortedThreads.length) % sortedThreads.length;
    setSelectedThread(sortedThreads[prevIndex].id);
  };

  const handleNextThread = () => {
    const nextIndex = (currentIndex + 1) % sortedThreads.length;
    setSelectedThread(sortedThreads[nextIndex].id);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleBack = () => {
    if (showAbout) {
      setShowAbout(false);
    } else if (selectedThread) {
      setSelectedThread(null);
    }
  };

  const goToHome = () => {
    setSelectedThread(null);
    setShowAbout(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-2xl mx-auto py-4 px-4">
        <div className="flex items-center justify-between gap-2 mb-4">
          <button 
            onClick={goToHome}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Logo className="w-8 h-8 text-green-500 dark:text-green-400 font-bold" />
            <h1 className="text-2xl font-bold dark:text-white">LTHM</h1>
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <PiSun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <PiMoon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <button
              onClick={() => setShowAbout(true)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="About"
            >
              <PiInfo className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {(selectedThread || showAbout) && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  <PiBook className="w-5 h-5" />
                  <span>Back</span>
                </button>
                {selectedThread && !showAbout && (
                  <select 
                    value={selectedThread}
                    onChange={(e) => setSelectedThread(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {sortedThreads.map(thread => (
                      <option key={thread.id} value={thread.id}>
                        {thread.title}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            )}
          </div>
        </div>
        
        {showAbout ? (
          <About />
        ) : selectedThread ? (
          <>
            <div className="space-y-3">
              {posts.map((post, index) => (
                <Post
                  key={index}
                  content={post.content}
                  images={post.images}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={handlePrevThread}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                <PiArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">{sortedThreads[(currentIndex - 1 + sortedThreads.length) % sortedThreads.length].title}</span>
              </button>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {currentIndex + 1} of {sortedThreads.length}
              </div>
              <button
                onClick={handleNextThread}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                <span className="hidden sm:inline">{sortedThreads[(currentIndex + 1) % sortedThreads.length].title}</span>
                <PiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </>
        ) : (
          <TableOfContents onSelectThread={setSelectedThread} />
        )}

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 space-y-2">
          <div>
            Site created by <a href="https://x.com/pssngrprncss69" className="hover:text-gray-700 dark:hover:text-gray-300">@pssngrprncss69</a>
          </div>
          <div>
            <button 
              onClick={() => setShowAbout(true)}
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              About this Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;