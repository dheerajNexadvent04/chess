import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const TermsPage = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div className="page contact-page">
      <section className="section" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <h1 style={{ marginBottom: '24px' }}>Terms & Conditions</h1>
          <p style={{ marginBottom: '16px' }}>
            Welcome to SckoolChess. By accessing or using our website and services, you agree to be bound by these terms and conditions.
          </p>
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Enrollment & Payment</h2>
          <p style={{ marginBottom: '16px' }}>
            All fees for chess programs and classes must be paid in full prior to the start of the session. We reserve the right to cancel or modify classes based on enrollment numbers.
          </p>
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Code of Conduct</h2>
          <p style={{ marginBottom: '16px' }}>
            Students are expected to behave respectfully towards instructors and peers. We reserve the right to dismiss any student whose behavior is disruptive.
          </p>
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>Intellectual Property</h2>
          <p style={{ marginBottom: '16px' }}>
            All materials provided during classes are the intellectual property of SckoolChess and may not be reproduced or distributed without permission.
          </p>
          <p style={{ marginTop: '40px', fontSize: '14px', color: '#666' }}>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </div>
  );
};
