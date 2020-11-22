import React from 'react';
import { useRect } from 'react-use-rect';
import { Header, Footer } from './index';

export function PageLayout({ children }) {
  const [measureRef, { height: headerHeight }] = useRect();

  return (
    <>
      <Header ref={measureRef} />

      <main style={{ paddingTop: headerHeight }}>{children}</main>

      <Footer />

      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      />
    </>
  );
}
