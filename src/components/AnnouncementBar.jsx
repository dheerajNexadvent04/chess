import React from 'react';
import { Link } from 'react-router-dom';

export function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-marquee-container">
        <div className="announcement-marquee-track">
          <p>Admissions Open! Book your online class today and take the first step towards becoming a chess champion.</p>
          <p>Admissions Open! Book your online class today and take the first step towards becoming a chess champion.</p>
        </div>
      </div>
      <div className="announcement-contact">
        <span 
          className="announcement-phone"
          onClick={() => {
            navigator.clipboard.writeText('+918447992702')
            alert('Phone number copied to clipboard!')
          }}
          title="Click to copy"
        >
          <span className="announcement-name">Dr. Shilpi Jain</span>
          <span className="announcement-num">+91-8447992702</span>
        </span>
      </div>
    </div>
  );
}
