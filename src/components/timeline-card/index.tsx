import React, { useState } from 'react';
import { SanitizedEducation, SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import './timeline.css';

// Type for any timeline item
type TimelineItem = {
  type: 'education' | 'experience';
  id: number;
  from: string;
  to: string;
  title: string;
  institution?: string;
  company?: string;
  link?: string;
  description?: string;
  coursework?: string; // For education items
  gpa?: string; // For education items
};

const TimelineCard = ({
  loading,
  educations,
  experiences,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
  experiences: SanitizedExperience[];
}) => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  // Convert and prepare items with year extraction for sorting
  const prepareTimelineItems = () => {
    // Extract year from date string for sorting purposes
    const extractYear = (dateStr: string): number => {
      const yearMatch = dateStr.match(/\d{4}/);
      return yearMatch ? parseInt(yearMatch[0]) : 0;
    };

    // Process education items
    const educationItems: TimelineItem[] = educations.map((edu, index) => ({
      type: 'education',
      id: index,
      from: edu.from,
      to: edu.to,
      title: edu.degree || '',
      institution: edu.institution,
      description: edu.description || '',
      coursework: edu.coursework || '',
      gpa: edu.gpa || ''
    }));

    // Process experience items
    const experienceItems: TimelineItem[] = experiences.map((exp, index) => ({
      type: 'experience',
      id: index,
      from: exp.from,
      to: exp.to,
      title: exp.position || '',
      company: exp.company,
      link: exp.companyLink,
      description: exp.description || ''
    }));
    
    // Sort both arrays by year (descending)
    educationItems.sort((a, b) => extractYear(b.from) - extractYear(a.from));
    experienceItems.sort((a, b) => extractYear(b.from) - extractYear(a.from));
    
    return { educationItems, experienceItems };
  };

  const { educationItems, experienceItems } = prepareTimelineItems();
  const maxItems = Math.max(educationItems.length, experienceItems.length);

  const handleItemClick = (item: TimelineItem) => {
    if (selectedItem && selectedItem.type === item.type && selectedItem.id === item.id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  const renderSkeleton = () => {
    return (
      <div className="timeline-items-container">
        <div className="timeline-side left">
          <div className="timeline-item experience">
            <div className="timeline-dot"></div>
            <div className="timeline-connector"></div>
            <div className="timeline-content shadow-lg compact bg-base-100 p-4">
              {skeleton({ widthCls: 'w-5/12', heightCls: 'h-4' })}
              {skeleton({ widthCls: 'w-7/12', heightCls: 'h-4', className: 'my-2' })}
              {skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
            </div>
          </div>
        </div>
        <div className="timeline-side right">
          <div className="timeline-item education">
            <div className="timeline-dot"></div>
            <div className="timeline-connector"></div>
            <div className="timeline-content shadow-lg compact bg-base-100 p-4">
              {skeleton({ widthCls: 'w-5/12', heightCls: 'h-4' })}
              {skeleton({ widthCls: 'w-7/12', heightCls: 'h-4', className: 'my-2' })}
              {skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render an individual timeline item
  const renderTimelineItem = (item: TimelineItem | null) => {
    if (!item) return <div className="timeline-item-placeholder"></div>;
    
    const isEducation = item.type === 'education';
    const isSelected = selectedItem && selectedItem.type === item.type && selectedItem.id === item.id;
    
    return (
      <div className={`timeline-item ${isEducation ? 'education' : 'experience'}`}>
        <div className={`timeline-dot ${isSelected ? 'active' : ''}`}></div>
        <div className="timeline-connector"></div>
        <div 
          className={`timeline-content z-hover shadow-md compact bg-base-100 p-4 cursor-pointer ${isSelected ? 'selected-item' : ''}`}
          onClick={() => handleItemClick(item)}
        >
          <div className="my-0.5 text-xs text-base-content text-opacity-60">{`${item.from} - ${item.to}`}</div>
          <h3 className="font-semibold">{item.title}</h3>
          <div className="mb-1 font-normal text-base-content text-opacity-60">
            {isEducation ? (
              item.institution
            ) : (
              item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  className="text-primary"
                >
                  {item.company}
                </a>
              ) : (
                item.company
              )
            )}
          </div>
        </div>
      </div>
    );
  };

  // Helper function to parse description into bullet points with sections
  const renderBulletPoints = (description?: string) => {
    if (!description || description.trim() === '') {
      return <p className="text-base-content text-opacity-70">No additional details available.</p>;
    }
  
    // Split by new lines
    const lines = description.split(/\n/).filter(line => line.trim() !== '');
    
    // Check if description has sections (lines ending with a colon)
    const hasSections = lines.some(line => /\w+:$/.test(line.trim()));
    
    if (!hasSections) {
      // Simple bullet list (no sections)
      return (
        <ul className="list-disc pl-5 space-y-1 text-base-content text-opacity-70">
          {lines.map((point, index) => (
            <li key={index}>{point.trim()}</li>
          ))}
        </ul>
      );
    }
    
    // Process sections
    let currentSection = '';
    const sections: { [key: string]: string[] } = {};
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      // Is this a section heading? (ends with colon)
      if (/\w+:$/.test(trimmedLine)) {
        currentSection = trimmedLine;
        sections[currentSection] = [];
      } else if (currentSection) {
        sections[currentSection].push(trimmedLine);
      } else {
        // Handle points before any section
        if (!sections['']) sections[''] = [];
        sections[''].push(trimmedLine);
      }
    });
    
    return (
      <div className="space-y-4">
        {Object.entries(sections).map(([section, points], sectionIndex) => (
          <div key={sectionIndex}>
            {section && (
              <h4 className="font-bold text-base-content text-opacity-80 mb-2">
                {section}
              </h4>
            )}
            <ul className="list-disc pl-5 space-y-1 text-base-content text-opacity-70">
              {points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3 mb-2">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Career Timeline</span>
            )}
          </h5>
        </div>

        {loading ? (
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {renderSkeleton()}
            {renderSkeleton()}
          </div>
        ) : (
          <>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              
              <div className="timeline-items-container">
                <div className="timeline-side left">
                  {/* Experience heading */}
                  <h6 className="text-center font-semibold mb-3 text-base-content opacity-70">Experience (3+ years)</h6>
                  {experienceItems.map(item => renderTimelineItem(item))}
                </div>
                <div className="timeline-side right">
                  {/* Education heading */}
                  <h6 className="text-center font-semibold mb-3 text-base-content opacity-70">Education</h6>
                  {educationItems.map(item => renderTimelineItem(item))}
                </div>
              </div>
            </div>
            
            {/* Details section */}
            {selectedItem && (
              <div className="timeline-details bg-base-200">
                <h3 className="text-lg font-bold mb-2">
                  {selectedItem.type === 'education' ? 
                    `${selectedItem.title} at ${selectedItem.institution}` : 
                    `${selectedItem.title} at ${selectedItem.company}`}
                </h3>
                <p className="text-sm mb-3 text-base-content text-opacity-60">{`${selectedItem.from} - ${selectedItem.to}`}</p>
                
                {/* Show GPA for education items if available */}
                {selectedItem.type === 'education' && selectedItem.gpa && (
                  <div className="mb-3">
                    <span className="font-semibold">GPA:</span> {selectedItem.gpa}
                  </div>
                )}
                
                {/* Show coursework for education items if available */}
                {selectedItem.type === 'education' && selectedItem.coursework && (
                  <div className="mb-3">
                    <span className="font-semibold">Coursework:</span>
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-base-content text-opacity-70">
                      {selectedItem.coursework.split(',').map((course, index) => (
                        <li key={index}>{course.trim()}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Show description with proper formatting */}
                {selectedItem.description && (
                  <div>
                    {selectedItem.type === 'education' ? (
                      <div className="text-base-content text-opacity-70">{selectedItem.description}</div>
                    ) : (
                      renderBulletPoints(selectedItem.description)
                    )}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineCard;