import React from 'react';
import { Check } from 'lucide-react';
import { subscriptionPlans } from '../../utils/mockData';

const Pricing: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Plans for every creative need
          </p>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Choose the perfect plan for your creative projects. All plans include full access to our AI technology.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
          {subscriptionPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col ${
                plan.tier === 'premium' ? 'border-teal-500 ring-2 ring-teal-500' : 'border-gray-200'
              }`}
            >
              {plan.tier === 'premium' && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-teal-100 text-teal-600">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
                </p>
                <p className="mt-6 text-gray-500">
                  {plan.imagesPerMonth === 1000 ? 'Unlimited' : plan.imagesPerMonth} images per month
                </p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={plan.tier === 'free' ? '/signup' : '/signup?plan=' + plan.tier}
                className={`mt-8 block w-full py-3 px-6 border rounded-md text-center font-medium ${
                  plan.tier === 'premium'
                    ? 'bg-teal-600 border-transparent text-white hover:bg-teal-700'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.tier === 'free' ? 'Sign up for free' : 'Subscribe'}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500">
            All plans include a 7-day free trial. No credit card required for free trial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;