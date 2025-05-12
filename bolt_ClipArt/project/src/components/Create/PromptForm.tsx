import React, { useState } from 'react';
import { Sparkles, Loader2, Image } from 'lucide-react';
import { promptSuggestions } from '../../utils/mockData';

interface PromptFormProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

const PromptForm: React.FC<PromptFormProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
            Describe your clipart
          </label>
          <div className="relative">
            <textarea
              id="prompt"
              name="prompt"
              rows={4}
              className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md p-4 pr-16"
              placeholder="E.g., A cute cartoon cat playing with a ball of yarn, with bright colors and a playful style"
              value={prompt}
              onChange={handlePromptChange}
              disabled={isLoading}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                type="button"
                onClick={() => setShowSuggestions(!showSuggestions)}
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                title="Get prompt suggestions"
              >
                <Sparkles className="h-5 w-5" />
              </button>
            </div>
          </div>
          {showSuggestions && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md overflow-hidden border border-gray-200">
              <ul className="py-1 max-h-60 overflow-auto">
                {promptSuggestions.map((suggestion, index) => (
                  <li 
                    key={index}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="mt-2 text-sm text-gray-500">
            Be specific about style, colors, and content for best results.
          </p>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={isLoading || prompt.trim() === ''}
            className={`flex-1 flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
              prompt.trim() !== '' && !isLoading
                ? 'bg-teal-600 hover:bg-teal-700'
                : 'bg-teal-300 cursor-not-allowed'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors`}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5 mr-2" />
                Generating...
              </>
            ) : (
              <>
                <Image className="h-5 w-5 mr-2" />
                Generate Clipart
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PromptForm;