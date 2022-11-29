import React from 'react';
// import PropTypes from 'prop-types';

import METADATA from '../../constants/metadata';

const propTypes = {
  // title: PropTypes.string.isRequired,
};

const defaultProps = {
  // title: '',
};

const Meta = props => {
  // const { title } = props;

  return (
    <>
      <title>{METADATA.TITLE}</title>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
      <meta name="description" content={METADATA.APP_DESCRIPTION} />
      <meta content={METADATA.KEY_WORDS} name="keywords" />

      {/* application/ld */}

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/image/dp.png" sizes="16x16" type="image/png" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta property="og:title" content="Syncteams" />
      <meta property="og:description" content="maiking shiping simple as ABC" />

      <meta property="og:type" content="website" />
    </>
  );
};

Meta.propTypes = propTypes;

Meta.defaultProps = defaultProps;

export default Meta;
