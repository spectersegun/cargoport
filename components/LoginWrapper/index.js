import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginWrapper({ children }) {
  return (
    <>
      <header className="header">
        <nav class="navbar ">
          <div class="container">
            <div className="col-auto navbar-brand">
              <Link href="/">Cargoport.</Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="login-inner">
        <div className="container ">{children}</div>
        <div className="chat-us d-flex">
          <div>
            <Image
              src={'/image/ceo1.png'}
              width={40}
              height={40}
              alt="chisom"
              objectFit="cover"
              quality={100}
              priority={true}
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div>
            <p style={{ color: '#849EB5' }}>
              Hey! I&#39;m Chisom From Cargoport
            </p>
            <p className="text-800">
              Want to have chat? <Link href="#">Click here</Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
