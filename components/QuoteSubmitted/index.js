import Link from 'next/link';
import React from 'react';
import QuoteIcon from '../Vectors/QuoteIcon';
import SubHeader from '../QuoteWrapper/SubHeader';
import { useRouter } from 'next/router';

export default function QuoteSubmitted({ submitted, h4, h5 }) {
  const router = useRouter();
  var border = '';

  submitted ? (border = '') : (border = 'border-0');

  return (
    <div className="quotes">
      <div className={`quote + ${border}`}>
        <div className="illustration text-center">
          <QuoteIcon />
        </div>
        <SubHeader
          h4={submitted ? 'Quote Submitted' : h4}
          h5={
            submitted
              ? 'Your quote have been submitted and awaiting approval from out admin. Kindly Sign In or Create an account to view your quote details and finish up with your shipment'
              : h5
          }
        />

        {submitted ? (
          <button
            className="btn text800"
            onClick={() => {
              router.push('/create-account');
            }}
          >
            Create an account
          </button>
        ) : (
          <button
            className="btn text800"
            onClick={() => {
              router.push('/dash-quote-step-one');
            }}
          >
            Get Free Quote
          </button>
        )}

        {submitted ? (
          <button className="btn text800 signin">
            <Link href="/login">Sign In</Link>
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

QuoteSubmitted.defaultProps = {
  submitted: true,
  h4: '',
  h5: '',
};
