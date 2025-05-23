import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to bring your ideas to life?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-teal-50">
                Join thousands of creators who are transforming their ideas into beautiful clipart with the power of AI. Start your 7-day free trial today.
              </p>
              <a
                href="/signup"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-teal-600 hover:bg-teal-50 transition"
              >
                Get started for free
              </a>
            </div>
          </div>
          <div className="relative -mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <div className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 h-full w-full">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                    <img 
                      src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Example clipart" 
                      className="w-full h-48 object-cover" 
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                    <img 
                      src="https://images.pexels.com/photos/3334510/pexels-photo-3334510.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Example clipart" 
                      className="w-full h-48 object-cover" 
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                    <img 
                      src="https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Example clipart" 
                      className="w-full h-48 object-cover" 
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
                    <img 
                      src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Example clipart" 
                      className="w-full h-48 object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;