import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactCTA: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Integrate real email sending logic here
    };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300">
          <div className="grid md:grid-cols-2">
            <div className="p-10 bg-slate-50 dark:bg-slate-900 flex flex-col justify-center transition-colors">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Ready to Digitize?</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 transition-colors">
                Book a consultation or request a demo today. Let's discuss how we can automate your business operations.
              </p>
              <ul className="space-y-4 text-slate-700 dark:text-slate-200 font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Free initial consultation</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Tailored demo for your industry</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Quote within 24 hours</li>
              </ul>
            </div>
            
            <div className="p-10">
                {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="h-16 w-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                            <Send className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Request Sent!</h3>
                        <p className="text-slate-600 dark:text-slate-300">Our team will contact you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Business Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors" placeholder="e.g. Lusaka Logistics" required />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                        <input type="email" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors" placeholder="you@company.com" required />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                        <input type="tel" className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors" placeholder="+260..." required />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Interest</label>
                        <select className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors">
                            <option>General Inquiry</option>
                            <option>POS & Stock System</option>
                            <option>Website Development</option>
                            <option>School System</option>
                            <option>Partnership Program</option>
                        </select>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg">
                        Request Consultation
                        </button>
                    </form>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;