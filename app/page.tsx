// app/page.tsx

'use client';

import React from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import FooterComponent from './components/common/Footer';
import HeaderComponent from './components/Header/Header';
import LaunchPage from './components/Main/LaunchPage';
import FourthPage from './components/Pages/FourthPage'; // Import the FourthPage
import SecondPage from './components/Pages/SecondPage';
import ThirdPage from './components/Pages/ThirdPage';

export default function HomePage() {
  // Initialize the useScrollIntoView hook
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    // You can add options here if needed
  });

  return (
    <div>
      <HeaderComponent />

      {/* Pass the scrollIntoView function to LaunchPage */}
      <LaunchPage scrollIntoView={scrollIntoView} />

      {/* Attach targetRef to the SecondPage container */}
      <div ref={targetRef} style={{ height: '75vh' }}>
        <SecondPage />
      </div>

      <div style={{ height: '100vh' }}>
        <ThirdPage />
      </div>

      <div style={{ height: '60vh' }}>
        <FourthPage />
      </div>

      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
