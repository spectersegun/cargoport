import Link from 'next/link';
import React from 'react';
import SubHeader from '../QuoteWrapper/SubHeader';
import QuoteIcon from '../Vectors/QuoteIcon';
import { Button, Checkbox, Form, Input } from 'antd';

export default function QuoteFinalStep() {
  return (
    <div className="quotes">
      <div className="quote">
        <SubHeader
          h4="Final Step"
          h5="Kindly fill the field below in order to get a trade finance"
        />

        <button className="btn text800">Create an account</button>
      </div>
    </div>
  );
}
