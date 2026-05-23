import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const PrivacyPage = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div className="page contact-page">
      <section className="section" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <h1 style={{ marginBottom: '24px' }}>Privacy Policy</h1>
          <p style={{ marginBottom: '16px' }}>
            At Rohini Chess Academy, we value your privacy. This policy outlines how we collect, use, and protect your personal information when you use our website or enroll in our programs.
          </p>
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Information We Collect</h2>
          <p style={{ marginBottom: '16px' }}>
            We may collect personal details such as your name, email address, and phone number when you register for a class, contact us, or sign up for our newsletter.
          </p>
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>How We Use Your Information</h2>
          <p style={{ marginBottom: '16px' }}>
            The information collected is used to provide and improve our services, process registrations, communicate with you, and send promotional materials if you have opted in.
          </p>
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Data Security</h2>
          <p style={{ marginBottom: '16px' }}>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure.
          </p>
          <p style={{ marginTop: '40px', fontSize: '14px', color: '#666' }}>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </div>
  );
};
