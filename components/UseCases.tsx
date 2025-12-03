import React from 'react';

const UseCase: React.FC<{
  title: string;
  scenario: string;
  benefit: string;
  image: string;
  reversed?: boolean;
}> = ({ title, scenario, benefit, image, reversed }) => (
  <div className={`flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''} gap-8 items-center py-12 border-b border-slate-200 dark:border-slate-800 last:border-0 transition-colors`}>
    <div className="w-full md:w-1/2">
      <img src={image} alt={title} className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500 border border-slate-200 dark:border-slate-700" />
    </div>
    <div className="w-full md:w-1/2 space-y-4">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-lg transition-colors">{scenario}</p>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 transition-colors">
        <p className="text-blue-800 dark:text-blue-300 font-medium text-sm transition-colors">
          <span className="font-bold">Kivion Impact:</span> {benefit}
        </p>
      </div>
    </div>
  </div>
);

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">Built for the Real Economy</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2 transition-colors">See how our systems transform daily operations for Zambian businesses.</p>
        </div>

        <div className="space-y-4">
          <UseCase 
            title="The Modern Shop Owner"
            scenario="A small boutique owner struggles to know exactly how much profit she made today versus last week."
            benefit="Our POS & Stock System tracks every sale instantly, providing a daily profit report sent directly to her phone."
            image="https://picsum.photos/600/400?random=1"
          />
          <UseCase 
            title="Barbers & Salons"
            scenario="Customers hate waiting in queues, and the owner loses money when chairs are empty."
            benefit="A Booking System allows clients to reserve slots. Automated SMS reminders reduce no-shows by 40%."
            image="https://picsum.photos/600/400?random=2"
            reversed={true}
          />
          <UseCase 
            title="Catering Startups"
            scenario="Managing multiple event orders, ingredient lists, and deposits on paper is chaotic."
            benefit="Our Order Management Platform tracks deposit status, dietary requirements, and delivery schedules in one dashboard."
            image="https://picsum.photos/600/400?random=3"
          />
          <UseCase 
            title="Rental & Real Estate"
            scenario="Tracking which tenant has paid rent, who is in arrears, and maintenance requests."
            benefit="A Tenant Management System automates rent reminders and keeps a digital ledger of all payments and contracts."
            image="https://picsum.photos/600/400?random=4"
            reversed={true}
          />
           <UseCase 
            title="Mobile Money Agents"
            scenario="Balancing float, cash in hand, and tracking profits across multiple transaction types."
            benefit="A specialized Transaction Tracker calculates net profit daily and alerts when float levels are critical."
            image="https://picsum.photos/600/400?random=5"
          />
        </div>
      </div>
    </section>
  );
};

export default UseCases;