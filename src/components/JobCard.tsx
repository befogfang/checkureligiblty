// src/components/JobCard.tsx

import React, { useState } from 'react';
import type { JobData } from '../types/job';

interface JobCardProps {
  job: JobData;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  // State to track if the user has clicked to expand the description
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Function to determine color based on Recruiting Body
  const getBodyColor = (body: string) => {
    if (body.startsWith('UPSC')) return 'bg-indigo-100 text-indigo-800';
    if (body.startsWith('SSC')) return 'bg-green-100 text-green-800';
    if (body.startsWith('IBPS')) return 'bg-blue-100 text-blue-800';
    if (body.startsWith('RRB')) return 'bg-yellow-100 text-yellow-800';
    if (body.startsWith('State PSC')) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  // Click handler to toggle the expansion state
  const handleCardClick = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  // Utility classes for description area
  const descriptionClasses = `
    text-sm text-gray-700 transition-all duration-300 cursor-pointer 
    ${isDescriptionExpanded ? '' : 'line-clamp-2'} 
  `;

  return (
    // Make the entire card clickable and use appropriate hover/cursor styles
    <div 
      className="bg-white  m-2  rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] flex flex-col justify-center w-full h-full cursor-pointer "
      onClick={handleCardClick}
    >
      <div className="p-5 ">
        
        {/* Header */}
        <div className="mb-3 pb-2 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {job.JobTitle}
          </h3>
          <span
            className={`inline-block mt-1 px-2 py-0.5 text-xs font-semibold rounded ${getBodyColor(
              job.RecruitingBody
            )}`}
          >
            {job.RecruitingBody}
          </span>
        </div>
        
        {/* Description Section with Line Clamp (Truncation) */}
        <div className="mb-4">
            <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">About the Role (Click to {isDescriptionExpanded ? 'Collapse' : 'Expand'})</h4>
            
            {/* The core change: using Tailwind's line-clamp utility */}
            <p className={descriptionClasses}>
                {job.JobDescription_FirstPerson}
            </p>

            {/* Hint for interaction */}
            {!isDescriptionExpanded && (
                <p className="text-xs text-indigo-500 mt-1 font-medium italic">
                    Click to read full role...
                </p>
            )}
        </div>

        {/* Core Details */}
        <div className="space-y-1 text-sm text-gray-700 mt-2">
          <p>
            <span className="font-semibold text-gray-800">Grade:</span>{' '}
            {job.GroupGrade}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Focus:</span>{' '}
            {job.PrimaryJobRoleFocus}
          </p>
        </div>
      </div>
      
      {/* Footer (Salary & Age) - Fixed at Bottom */}
      <div className="flex justify-between items-center bg-gray-50 p-4 rounded-b-xl border-t border-gray-100">
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <span className="text-lg text-green-600">💰</span>
          <span className="font-bold text-green-700">Pay:</span>
          <span className="font-medium text-green-700">
            {job.StartingBasicPay}
          </span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <span className="text-lg text-red-600">⏳</span>
          <span className="font-bold text-red-700">Max Age:</span>
          <span className="font-medium text-red-700">
            {job.MaxAgeLimit_General}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;