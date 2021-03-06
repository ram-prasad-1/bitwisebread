import React from 'react';
import Nav from '@/components/common/Nav';
import Footer from '@/components/common/Footer';

export default function RootContainer({ children }) {
  return (
    <>
      <Nav />
      <div className='prose container max-w-screen-lg mx-auto p-4 '>
        <main className='my-12'>{children}</main>
        <Footer />
      </div>
    </>
  );
}
