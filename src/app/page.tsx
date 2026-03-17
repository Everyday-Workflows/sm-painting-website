import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform Your Space with</span>
                <span className="block text-brand-primary">Expert Painting Services</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:mt-5 md:text-xl">
                Professional residential and commercial painting that brings your vision to life. Quality craftsmanship, attention to detail, and a finish that lasts.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link href="/services">
                  <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-3">
                    Our Services
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-3 mt-3 sm:mt-0">
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <Image 
                  src="/images/logos/Logo_Dark_Mode.webp" 
                  alt="S&M Painting Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20 pointer-events-none">
          <div className="aspect-[1000/1000] w-[60rem] bg-gradient-to-tr from-brand-primary to-brand-secondary" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About S&M Painting
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                With years of experience in the industry, S&M Painting has built a reputation for excellence. We believe that a fresh coat of paint can do more than just change a color—it can revitalize a home or business, increase property value, and create an environment you love.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Our team of skilled professionals is dedicated to providing top-tier service from the initial consultation to the final walkthrough. We use only high-quality materials and proven techniques to ensure a flawless finish every time.
              </p>
              <div className="mt-8">
                <Link href="/services">
                  <Button variant="tertiary" className="px-6 py-2">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/gallery/03f36018-e2da-49ff-a7d3-ce16ebcd2127.jpeg" alt="Painting work" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg mt-8">
                <Image src="/images/gallery/3248cf5d-16fe-4d74-b57b-a7030ff5908d.jpeg" alt="Painting work" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Don't just take our word for it—hear from our satisfied customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "testimonial-1",
                name: "John Smith",
                text: "S&M Painting did an incredible job on our living room. The attention to detail was impressive, and they finished ahead of schedule!",
                role: "Homeowner"
              },
              {
                id: "testimonial-2",
                name: "Sarah Johnson",
                text: "Professional, clean, and the results are stunning. Our office looks brand new. Highly recommend for any commercial project.",
                role: "Business Owner"
              },
              {
                id: "testimonial-3",
                name: "Michael Brown",
                text: "The best painting crew I've ever hired. They were respectful of our home and the final result is perfect. Five stars!",
                role: "Homeowner"
              }
            ].map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={`${testimonial.id}-star-${i}`} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <title>Star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free estimate and let's bring some color to your world.
          </p>
          <Button variant="secondary" className="bg-white text-brand-primary hover:bg-gray-100 px-10 py-4 text-lg">
            Get a Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
