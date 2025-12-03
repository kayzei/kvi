import React from 'react';
import { Handshake, TrendingUp, Cpu } from 'lucide-react';

const Partnership: React.FC = () => {
  return (
    <section id="partnership" className="py-20 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 font-semibold text-sm mb-6">
              Join the Network
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Kivion. Grow Together.</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We believe in shared success. Our Partnership Program is designed for individuals who want to drive digital adoption in their communities while earning a sustainable income.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Handshake className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">You Connect</h4>
                  <p className="text-slate-400">Use your network to identify businesses that need digital systems. You attract the client.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-teal-600 flex items-center justify-center shrink-0">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">We Build</h4>
                  <p className="text-slate-400">Kivion handles all technical work, development, hosting, and support. No coding required from you.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-purple-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">We Share Dividends</h4>
                  <p className="text-slate-400">Receive a percentage of the project value or ongoing revenue share for every successful referral.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Become a Partner
              </a>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 relative">
             <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-20"></div>
             <div className="relative bg-slate-800 dark:bg-slate-900 p-8 rounded-2xl border border-slate-700 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Partner Success Story</h3>
                <p className="italic text-slate-300 mb-6">
                  "I realized many salons in my area were using notebooks. I introduced them to Kivion's booking system. Now I manage 5 accounts and earn a monthly commission while Kivion handles the maintenance."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-600"></div>
                  <div>
                    <p className="font-bold">Michael C.</p>
                    <p className="text-sm text-slate-500">Lusaka, Zambia</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;