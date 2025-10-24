import React from 'react';
import { useState } from 'react';

export default function ContactSection() {
    const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending message:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <section className="bg-[#49306e] py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Contact Us</h2>
          <p className="text-lg text-white/90">Any feedback or Issues?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-2xl text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 p-4"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-2xl text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 p-4"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-2xl text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 p-4"
                  placeholder="Your message"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#febd11] hover:bg-[#e5ae0f] disabled:bg-[#febd11]/50 text-white py-3 rounded-lg text-base transition-colors"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}

              {isSuccess && (
                <p className="text-green-400 text-sm mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
          
          {/* Office Information */}
          <div>
            <h3 className="text-2xl text-white mb-8">Office Information</h3>
            <div className="space-y-4 text-white/90 text-2xl">
              <div className="flex items-start space-x-4">
                <svg className="w-4 h-4 mt-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C6.478 0 3.618 2.86 3.618 6.382c0 4.013 5.912 10.423 6.168 10.724a.307.307 0 00.428 0c.256-.301 6.168-6.711 6.168-10.724C16.382 2.86 13.522 0 10 0zm0 9.573a3.191 3.191 0 110-6.382 3.191 3.191 0 010 6.382z" />
                </svg>
                <div>
                  <p>MSU Student Center</p>
                  <p>Room 204, 1400 Highway 14 West</p>
                  <p>Mankato, MN 56001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>(507) 389-2611</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>studentgov@mnsu.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}