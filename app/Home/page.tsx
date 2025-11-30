import Image from 'next/image';
import React from 'react';

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Bienvenido a WarmaWasi .l.</h1>
        
        <p className="mb-4">
          Ya mi kion xd
        </p>

        {/* 
        */}
        <Image
          src="/warma-logo.png"
          alt="Logo de WarmaWasi"
          width={300}
          height={300}
          priority
        />
      </div>
    </main>
  );
}

export default HomePage;