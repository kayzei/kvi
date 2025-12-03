import React from 'react';
import { 
  Banknote, 
  ShoppingCart, 
  Calendar, 
  Users, 
  Briefcase, 
  Box, 
  CreditCard, 
  BookOpen, 
  Code 
} from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description }) => (
  <div className="group p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300">
    <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">{description}</p>
  </div>
);

const Solutions: React.FC = () => {
  const solutions = [
    { icon: <Banknote className="h-6 w-6" />, title: "Financial Tools", description: "Simplify expense tracking, profit calculation, and automated invoicing." },
    { icon: <ShoppingCart className="h-6 w-6" />, title: "Sales Tracking", description: "Monitor daily sales performance and trends from your mobile device." },
    { icon: <Calendar className="h-6 w-6" />, title: "Booking Platforms", description: "Allow clients to book appointments online 24/7 without phone calls." },
    { icon: <Users className="h-6 w-6" />, title: "CRM Systems", description: "Manage customer relationships and build loyalty with detailed databases." },
    { icon: <Briefcase className="h-6 w-6" />, title: "HR Management", description: "Track employee attendance, performance, and payroll easily." },
    { icon: <Box className="h-6 w-6" />, title: "Stock Management", description: "Real-time inventory tracking to prevent theft and stock-outs." },
    { icon: <CreditCard className="h-6 w-6" />, title: "POS Systems", description: "Modern Point of Sale interfaces for shops, restaurants, and retail." },
    { icon: <BookOpen className="h-6 w-6" />, title: "School Systems", description: "Manage students, grades, fees, and parent communication portals." },
    { icon: <Code className="h-6 w-6" />, title: "Custom Web Apps", description: "Bespoke software tailored specifically to your unique business logic." },
  ];

  return (
    <section id="solutions" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Our Ecosystem</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl transition-colors">
            Comprehensive Web-Based Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto transition-colors">
            From retail to education, we have the tools to run your organization efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <SolutionCard key={index} {...sol} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;