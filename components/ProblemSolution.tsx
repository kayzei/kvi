import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Closing the Digital Gap</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 transition-colors">
            Too many brilliant Zambian businesses are held back by outdated methods. Kivion bridges the gap between where you are and where you could be.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* The Problem */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-red-100 dark:border-red-900/20 transition-colors">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center gap-2">
              <XCircle className="h-6 w-6" /> The Struggle (Manual)
            </h3>
            <ul className="space-y-4">
              {[
                "Lost revenue due to poor record keeping",
                "Manual operations consuming valuable time",
                "Lack of customer databases & tracking",
                "Inaccurate financial reporting for investors",
                "Invisible to the digital market"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <div className="h-6 w-6 rounded-full bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 flex items-center justify-center shrink-0 text-xs mt-0.5">✕</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* The Solution */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-900/30 relative overflow-hidden transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 dark:bg-blue-400/5 rounded-bl-full"></div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" /> The Kivion Advantage
            </h3>
            <ul className="space-y-4">
              {[
                "Automated sales and profit tracking",
                "Streamlined operations with custom apps",
                "CRM systems to retain & engage clients",
                "Real-time financial dashboards",
                "Professional digital presence & credibility"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 font-medium">
                  <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 text-xs mt-0.5">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;