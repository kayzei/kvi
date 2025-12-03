import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50/50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-100 dark:border-blue-800 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Innovating for Africa
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight transition-colors">
              Empowering African Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Digital Intelligence</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed transition-colors">
              We build affordable, web-based systems designed for Startups, SMEs, and NGOs in Zambia and across Africa. Stop struggling with manual records—start automating your growth today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#solutions" className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                Explore Systems
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium transition-colors">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                <span>Locally Developed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                <span>Mobile First Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="African team using technology" 
              className="relative rounded-2xl shadow-2xl border border-white/20 w-full object-cover h-[400px] lg:h-[500px]"
            />
            {/* Floating Card Element */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-xs hidden sm:block transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold">
                  $
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Weekly Profit</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">POS Tracking</p>
                </div>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[75%]"></div>
              </div>
              <p className="text-right text-xs font-bold text-green-600 dark:text-green-400 mt-1">+24% vs last week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;