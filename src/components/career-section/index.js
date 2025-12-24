import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';
import './style.scss';

function CareerSection({ careers }) {
  if (!careers || careers.length < 2) return null;
  return (
    <div className="career-section">
      <SectionHeader title="Careers" />
      <div className="body">
        {careers.map((career, index) =>
          index === 0 ? null : (
            <div className="career" key={index}>
              <div className="date">{career.date}</div>

              <div className="right">
                <div className="title">
                  <div className="title-en">{career.en}</div>
                  <div className="title-kr">{career.kr}</div>
                  <div className="position">{career.position}</div>
                </div>

                <div className="activity">
                  {career.activity}&nbsp;
                  {career.links && <IconButtonBar links={career.links} />}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default CareerSection;
