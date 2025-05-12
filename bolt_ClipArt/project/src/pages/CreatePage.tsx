import React, { useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import PromptForm from '../components/Create/PromptForm';
import ResultsGallery from '../components/Create/ResultsGallery';
import { useAuth } from '../context/AuthContext';
import { mockImages } from '../utils/mockData';

const CreatePage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Array<{ id: string; imageUrl: string }>>([]);

  const handlePromptSubmit = async (promptText: string) => {
    setPrompt(promptText);
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, this would be an API call to generate images
    // For demo, we'll use the mock data
    const generatedResults = mockImages.slice(0, 3).map(img => ({
      id: img.id,
      imageUrl: img.imageUrl
    }));
    
    setResults(generatedResults);
    setIsLoading(false);
  };

  const handleDownload = (imageId: string) => {
    // In a real app, this would trigger a download
    console.log(`Downloading image with ID: ${imageId}`);
    alert('Image download started');
  };

  const handleFavorite = (imageId: string) => {
    // In a real app, this would add to favorites
    console.log(`Adding image with ID: ${imageId} to favorites`);
    alert('Added to favorites');
  };

  const handleShare = (imageId: string) => {
    // In a real app, this would open a share dialog
    console.log(`Sharing image with ID: ${imageId}`);
    alert('Share dialog opened');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-24 pb-16 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Login Required</h2>
            <p className="text-gray-600 mb-6">
              You need to be logged in to create clipart. Please log in or sign up to continue.
            </p>
            <div className="flex space-x-4">
              <a 
                href="/login" 
                className="flex-1 bg-teal-600 text-white py-2 px-4 rounded-md text-center hover:bg-teal-700 transition"
              >
                Log in
              </a>
              <a 
                href="/signup" 
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md text-center hover:bg-gray-300 transition"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Create Clipart</h1>
              <p className="text-gray-600 mt-1">
                Describe what you want to create, and our AI will generate unique clipart based on your prompt.
              </p>
            </div>
            <PromptForm onSubmit={handlePromptSubmit} isLoading={isLoading} />
          </div>

          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-pulse flex space-x-4 items-center">
                <div className="rounded-full bg-teal-100 h-12 w-12 flex items-center justify-center">
                  <svg className="animate-spin h-6 w-6 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <div>
                  <div className="h-4 bg-teal-100 rounded w-36"></div>
                  <div className="h-3 bg-teal-50 rounded w-48 mt-2"></div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Generating your clipart. This may take a moment...
              </p>
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <ResultsGallery 
              results={results} 
              prompt={prompt}
              onDownload={handleDownload}
              onFavorite={handleFavorite}
              onShare={handleShare}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePage;