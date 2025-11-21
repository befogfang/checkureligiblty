import React, { useState } from 'react';

// 1. Define the structure for the data the card will display
interface CardData {
  title: string;
  metricValue: number;
  metricUnit: string;
  // CHANGED: Description is now an array of strings (bullet points)
  details: string[]; 
  status: 'Active' | 'Warning' | 'Error';
  lastUpdated: string;
}

// Helper to determine status color
const getStatusColor = (status: CardData['status']) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-700 border-green-400';
    case 'Warning':
      return 'bg-yellow-100 text-yellow-700 border-yellow-400';
    case 'Error':
      return 'bg-red-100 text-red-700 border-red-400';
  }
};

const DataCard: React.FC<{ data: CardData }> = ({ data }) => {
  const statusClasses = getStatusColor(data.status);
  
  // Icon placeholder using lucide-react equivalent (using inline SVG for single-file mandate)
  const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-gray-100 transition duration-300 hover:shadow-3xl transform hover:-translate-y-1 w-full max-w-sm mx-auto">
      
      {/* Header and Title */}
      <div className="flex items-start justify-between mb-4 border-b pb-4">
        <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
          {data.title}
        </h2>
        <div className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusClasses}`}>
          {data.status}
        </div>
      </div>

      {/* Main Metric Display */}
      <div className="flex items-baseline mb-6">
        <span className="text-5xl font-bold text-indigo-600">
          {data.metricValue}
        </span>
        <span className="ml-2 text-lg font-medium text-gray-500">
          {data.metricUnit}
        </span>
      </div>

      {/* Details (formerly Description) - now rendered as a bulleted list */}
      <ul className="text-gray-700 mb-6 text-sm space-y-2 list-disc pl-5">
        {data.details.map((detail, index) => (
          <li key={index} className="leading-relaxed">
            {detail}
          </li>
        ))}
      </ul>

      {/* Footer and Metadata */}
      <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 flex justify-between items-center">
        <div className="flex items-center">
          <ClockIcon className="w-4 h-4 mr-1 text-indigo-400" />
          Last Updated:
        </div>
        <span className="font-medium text-gray-700">
          {data.lastUpdated}
        </span>
      </div>
    </div>
  );
};

// Main card component to manage state and render the card
const Cards: React.FC = () => {
  // Placeholder data state
  const [cardInfo] = useState<CardData>({
    title: 'GST Inspector',
    metricValue: 45000,
    metricUnit: 'Rs',
    // CHANGED: Placeholder data is now an array of strings
    details: [
        'Starting Salary',
        'Check Website',
        'You Can Do it',
    ],
    status: 'Active',
    lastUpdated: '5 mins ago',
  });

  return (
    <>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Exams You Might Like</h1>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6   sm:p-6 font-sans">
      <div className="w-full max-w-lg ">
        <DataCard data={cardInfo} />
      </div>
    </div>
    </>
  );
};

export default Cards;

