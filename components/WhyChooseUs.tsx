import React from 'react';
import { ShieldCheck, Globe2, Smartphone, Zap, Layout, HeartHandshake } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    { icon: <ShieldCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />, title: "Reliability", desc: "Systems built to handle the demands of growing businesses with 99.9% uptime." },
    { icon: <Globe2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />, title: "African-Focused", desc: "Designed with local context, currency, and connectivity challenges in mind." },
    { icon: <Smartphone className="h-8 w-8 text-blue-600 dark:text-blue-400" />, title: "Mobile-Friendly", desc: "Manage your entire business from your smartphone. No expensive hardware needed." },
    { icon: <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />, title: "Scalability", desc: "Start small and expand your system features as your business grows." },
    { icon: <Layout className="h-8 w-8 text-blue-600 dark:text-blue-400" />, title: "Transparent Pricing", desc: "No hidden fees. Affordable subscription models tailored for SMEs." },
    { icon: <HeartHandshake className="h-8 w-8 text-blue-600 dark:text-blue-400" />, title: "Professional Support", desc: "Local technical support team ready to assist you whenever you need help." },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">Why Businesses Choose Kivion</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 transition-colors">We don't just write code; we build pillars for your business success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700 hover:border-blue-100 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{reason.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 transition-colors">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;