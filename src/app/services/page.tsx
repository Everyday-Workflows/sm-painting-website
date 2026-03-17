import React from 'react';
import Button from '@/components/Button';

const services = [
  {
    title: "Interior Painting",
    description: "Transform your living spaces with our expert interior painting services. From walls and ceilings to trim and doors, we provide a flawless finish that reflects your style.",
    features: ["Wall & Ceiling Painting", "Trim & Door Refinishing", "Cabinet Painting", "Color Consultation"]
  },
  {
    title: "Exterior Painting",
    description: "Protect and beautify your property's exterior. Our durable finishes withstand the elements while giving your home or business a fresh, new look.",
    features: ["Siding & Stucco Painting", "Deck & Fence Staining", "Pressure Washing", "Surface Preparation"]
  },
  {
    title: "Commercial Painting",
    description: "Professional painting solutions for businesses. We work around your schedule to minimize disruption while delivering high-quality results.",
    features: ["Office Spaces", "Retail Stores", "Industrial Facilities", "Maintenance Painting"]
  },
  {
    title: "Specialty Finishes",
    description: "Add a unique touch to your space with our specialty painting techniques and finishes.",
    features: ["Faux Finishes", "Texture Application", "Wallpaper Removal", "Drywall Repair"]
  }
];

export const metadata = {
  title: "Services | S&M Painting",
  description: "Explore our wide range of professional painting services. From interior and exterior to commercial and specialty finishes.",
};

const ServicesPage = () => {
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Professional Services
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            We offer a comprehensive range of painting services tailored to meet your specific needs. Quality and customer satisfaction are our top priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-brand-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <title>Check</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary'} className="w-full">
                Get a Quote for {service.title}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-secondary rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Don't See What You're Looking For?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We handle projects of all sizes and types. Contact us to discuss your specific requirements and get a custom quote.
          </p>
          <Button variant="primary" className="bg-white text-brand-secondary hover:bg-gray-100 px-10 py-4 text-lg">
            Contact Us Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
