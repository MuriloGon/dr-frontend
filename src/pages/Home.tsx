import React from 'react';
import InkCalculator from '@components/InkCalculator';

function Home() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <InkCalculator />
    </div>
  );
}

export default Home;
