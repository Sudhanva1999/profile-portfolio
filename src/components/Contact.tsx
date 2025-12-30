import { useEffect } from 'react';
import ContactForm from './ContactForm';
import { initScrollAnimations } from '@/utils/scrollAnimations';

export default function Contact() {
  useEffect(() => {
    return initScrollAnimations();
  }, []);

  return (
    <section id="contact" className="w-full h-screen flex items-center justify-center pt-6 pb-4 md:py-12">
      <div className="container mx-auto px-8 md:px-12">
        <div className="mb-4 md:mb-10 animate-on-scroll">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-2 md:mb-4">Contact Me</h2>
          <p className="text-center text-foreground/70 text-xs md:text-base max-w-sm md:max-w-2xl mx-auto px-2">
            Send me a message and I'll get back to you as soon as possible
          </p>
        </div>
        
        <div className="max-w-sm md:max-w-2xl mx-auto animate-on-scroll">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
