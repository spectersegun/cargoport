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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <meta name="description" content={METADATA.APP_DESCRIPTION} />
      <meta content={METADATA.KEY_WORDS} name="keywords" />

      {/* application/ld */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareCompany',
            name: 'Syncteams',
            description:
              'A work communication tool that collects daily work check-in and converts them to concise reports, replacing time-consuming meetings',
            slogan: 'More collaboration, fewer meetings',
            image:
              'https://res.cloudinary.com/syncteams-co/image/upload/v1661201884/Frame_4524_1_ohk90n.png',
            logo: 'https://res.cloudinary.com/syncteams-co/image/upload/v1661201884/Frame_4524_1_ohk90n.png',
            url: 'https://syncteams.co/',
            legalName: 'Syncteams',
            numberOfEmployees: 10,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Lagos',
              postalCode: '1000001',
              addressCountry: 'NG',
            },
            contactPoint: [
              {
                '@type': 'ContactPoint',
                email: 'mailto:hello@syncteams.co',
                contactType: 'Customer Service',
              },
            ],
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
              opens: '09:00',
              closes: '17:00',
            },
            sameAs: [
              'https://twitter.com/Thesyncteams',
              'https://www.instagram.com/thesyncteams/',
              'https://www.linkedin.com/company/syncteams/',
            ],
          }),
        }}
      />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:site"
        content={'@' + METADATA.APP_NAME.toLowerCase()}
      />
      <meta name="twitter:title" content={METADATA.APP_NAME} />
      <meta name="twitter:description" content={METADATA.APP_DESCRIPTION} />
      <meta name="twitter:image" content={METADATA.IMG_SHARE} />
      {/* Facebook */}
      <meta property="fb:app_id" content={METADATA.FB_APP_ID} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={METADATA.APP_NAME} />
      <meta property="og:description" content={METADATA.APP_DESCRIPTION} />
      <meta property="og:image" content={METADATA.IMG_SHARE} />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:locale" content="en_EN" />
      <meta property="og:url" content={METADATA.WEB_URL} />

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* <link
        rel="icon"
        href="https://res.cloudinary.com/syncteams-co/image/upload/v1660412862/Group_9597_w8wq75.png"
        sizes="16x16"
        type="image/png"
      /> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta property="og:title" content="Syncteams" />
      <meta
        property="og:description"
        content="Synctems is a work communication tool that turns async check-ins and project management data into concise, insightful reports, with human resources management tools."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/syncteams-co/image/upload/v1660412862/Group_9597_w8wq75.png"
      />
      <meta property="og:type" content="website" />
    </>
  );
};

Meta.propTypes = propTypes;

Meta.defaultProps = defaultProps;

//https://res.cloudinary.com/syncteams-co/image/upload/v1646989098/Group_38_tmc0ae.ico

export default Meta;
