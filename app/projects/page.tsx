// src/pages/ProjectsPage.tsx
'use client'

import React from 'react';
import { CardsCarousel } from '../Carousels/CardsCarousel';

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h1>Projects Page</h1>
      <p>This is where project content will go.</p>
      <p><CardsCarousel/></p>
    </div>
  );
};

export default ProjectsPage;
