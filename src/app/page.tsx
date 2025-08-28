"use client";

import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import ButtonHoverBubble from '@/components/buttons/ButtonHoverBubble';
import BentoDepthThreeD from '@/components/bento/BentoDepthThreeD/BentoDepthThreeD';
import AccordionStandardExpand from '@/components/accordions/AccordionStandardExpand';
import TextboxStandard from '@/components/textbox/TextboxStandard';
import TextNumberCount from '@/components/text/TextNumberCount';
import { LucideIcon } from 'lucide-react';

export default function Home() {
  const contactFormData = {
    name: '',
    email: '',
    message: ''
  };

  const handleContactSubmit = () => {
    console.log(contactFormData);
  };

  return (
    <main>
      {/* Hero Section */}
      <BillboardHero
        title="DriveJoy: Your Fun Car Marketplace"
        subtitle="Discover amazing deals and drive your dream car today!"
      />

      {/* Inventory Section */}
      <section id="inventory" className="bg-white">
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-6">Our Featured Cars</h2>
          <BentoDepthThreeD
            items={[
              { titleEN: "Honda Accord", descriptionEN: "$22,000", image: "/images/placeholder1.avif", position: 'left' },
              { titleEN: "Toyota Camry", descriptionEN: "$25,000", image: "/images/placeholder2.avif", position: 'center' },
              { titleEN: "BMW 5 Series", descriptionEN: "$40,000", image: "/images/placeholder3.avif", position: 'right' },
            ]}
            className="grid gap-4"
          />
          <div className="py-4 text-center">
            <ButtonHoverBubble text="View All Cars" onClick={() => {}} className="mt-4" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-soft-grid">
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Best Prices", "Wide Selection", "Top-Notch Support"].map(benefit => (
              <div key={benefit} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{benefit}</h3>
                <p className="mt-2">Enjoy unparalleled service with every purchase.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white">
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
          <AccordionStandardExpand
            items={[
              { title: "Great experience!", content: "I bought my car here and I love it!" },
              { title: "Smooth process!", content: "The purchasing process was simple and quick." },
            ]}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-soft-noise">
        <div className="max-w-7xl mx-auto py-16">
          <TextboxStandard
            title={<h3 className="text-2xl font-semibold">About DriveJoy</h3>}
            description={<p>We are a playful car marketplace that connects you with the best deals on cars.</p>}
            titleClassName="text-center"
            descriptionClassName="text-gray-700"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white">
        <div className="max-w-7xl mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
          <form onSubmit={handleContactSubmit} className="w-full max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">Name</label>
              <input type="text" id="name" className="border p-3 rounded w-full" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">Email</label>
              <input type="email" id="email" className="border p-3 rounded w-full" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-2">Message</label>
              <textarea id="message" className="border p-3 rounded w-full" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="bg-[#FF5A5F] text-white p-3 rounded">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}