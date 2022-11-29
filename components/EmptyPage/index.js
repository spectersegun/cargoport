import React from 'react';
import SubHeader from '../QuoteWrapper/SubHeader';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function EmptyPage({ submitted, h4, h5, icon, button, href }) {
  const router = useRouter();
  var border = 'border-0';

  return (
    <div className="quote-innner">
      <div className="quotes">
        <div className={`quote + ${border}`}>
          <div className="illustration text-center">
            {icon == 1 ? (
              <div className="n0-wrapper">
                <Image
                  src={'/image/no-document.png'}
                  width={253}
                  height={253}
                  alt="no document"
                  objectFit="contain"
                  quality={100}
                  priority={true}
                />
              </div>
            ) : icon == 2 ? (
              <Image
                src={'/image/payment-successful.png'}
                width={300}
                height={300}
                alt="nothing"
                objectFit="payment successful"
                quality={100}
                priority={true}
              />
            ) : icon == 3 ? (
              <Image
                src={'/image/no-shipment.png'}
                width={457}
                height={304}
                alt="no shipment"
                objectFit="contain"
                quality={100}
                priority={true}
              />
            ) : (
              ''
            )}
          </div>
          <SubHeader h4={h4} h5={h5} />

          {icon == 0 ? (
            <button
              className="btn text800"
              onClick={() => {
                router.push('#');
              }}
            >
              Create an account
            </button>
          ) : (
            ''
          )}

          {button && (
            <button
              className="btn text800"
              onClick={() => {
                router.push('#');
              }}
            >
              {button}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

EmptyPage.defaultProps = {
  submitted: true,
  h4: '',
  h5: '',
};
