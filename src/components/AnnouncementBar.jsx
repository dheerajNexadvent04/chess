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
          Dr. Shilpi Jain +91-8447992702
        </span>
      </div>
    </div>
  );
}
