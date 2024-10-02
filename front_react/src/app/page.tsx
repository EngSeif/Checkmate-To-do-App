'use client';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
const Home = dynamic(() => import('./home/Home'), { ssr: false });

export default function App() {
  useEffect(() => {
    document.title = "Checkmate";
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
