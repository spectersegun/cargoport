import Link from 'next/link';
import React, { useState } from 'react';

export default function Privacy() {
  const [navList, setNavList] = useState(1);

  const settingNav = x => {
    setNavList(x);
  };
  return (
    <section>
      <div className="container privacy-wrapper">
        <div className="row">
          <div className="col-auto terms-nav d-none d-lg-block">
            <ul className="terms-nav-list">
              <li
                className="active d-none"
                onClick={() => {
                  settingNav(1);
                }}
                style={{ display: 'none' }}
              >
                Privacy Policy
              </li>
              <li
                className={navList == 1 ? 'active' : ''}
                onClick={() => {
                  settingNav(1);
                }}
              >
                Privacy Policy
              </li>
              <li
                className={navList == 2 ? 'active' : ''}
                onClick={() => {
                  settingNav(2);
                }}
              >
                Terms & Conditions
              </li>
              <li
                className={navList == 3 ? 'active' : ''}
                onClick={() => {
                  settingNav(3);
                }}
              >
                Cookie Policy
              </li>
            </ul>
          </div>

          {navList == 1 ? (
            <div className="col privacy-policy">
              <div className="row ">
                <div className="policy-header">
                  <h2>Privacy Policy</h2>
                </div>
              </div>
              <div className="row">
                <p>
                  <span>
                    Cargoport(&#34;we&#34; or &#34;us&#34; or &#34;our&#34;)
                    respects your privacy. This Privacy Policy describes the
                    types of information we may collect from users, including
                    you, and our practices for collecting, using, maintaining,
                    protecting, and disclosing that information.
                  </span>
                  <span className="sub-link">
                    This privacy policy is issued by Cargoport and only applies
                    to information we collect via Cargoport&#39;s website at{' '}
                    <Link href="www.cargoport.trade">www.cargoport.trade </Link>
                    (the &#34;Site&#34;). This Privacy Policy does not apply to
                    information that we collect offline or that you provide to
                    or is collected by any third party.
                  </span>
                  <span>
                    Please read this Privacy Policy carefully to understand our
                    policies and practices regarding your information and how we
                    will treat it. By accessing or using the Site, you represent
                    and warrant that you have read and understand this Privacy
                    Policy and that you accept and consent to the privacy
                    practices (including any uses and disclosures of information
                    about you) described in this Privacy Policy. If you do not
                    agree with all the provisions of this Privacy Policy, do not
                    access or use the Site.
                  </span>
                </p>
              </div>

              <div className="row">
                <h5>Information we collect and how we collect it</h5>
                <p>
                  <span>
                    {' '}
                    We collect information directly from you when you provide it
                    to us and automatically when you use the Site.
                  </span>
                </p>
              </div>

              <div className="row">
                <h5>When do we collect information?</h5>
                <p>
                  <span>
                    We collect information from you when you register on our
                    site, place an order, subscribe to a newsletter or enter
                    information on our site.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>Information you provide to us</h5>
                <p>
                  <span>
                    You do not have to give us personal information to visit our
                    Site. If, however, you access or use the Site, you may be
                    required to specifically and knowingly provide certain
                    information that will allow us to facilitate such access or
                    use. For example, parts of our Site allow you to purchase
                    products and services. If you wish to purchase such products
                    or services, we will request and collect from you the
                    information needed to fulfil your order or request, just as
                    though your order or request had been made on paper.
                    Information that we request may include, without limitation,
                    personal information such as your name, email address, and
                    other unique identifiers. You acknowledge that your access
                    and use of certain portions of the Site is conditioned on
                    your provision of certain information, including personal
                    information. You may decline to share information with us,
                    in which case we may not be able to provide to you some of
                    the features and functionality of the Site.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>Information we collect automatically</h5>
                <p>
                  <span>
                    When you browse through the Site without actively and
                    voluntarily providing us information in response to direct
                    and explicit prompts for the same (e.g., you merely read
                    Site pages or download information), we will nevertheless
                    automatically gather and store certain information about
                    your visit. Such information that we automatically collect,
                    and store may include but is not limited to the following
                    information about your visit:
                    <br />
                    The internet domain (for example, &#34;xcompany.com&#34; if
                    you use a private internet access account, or
                    &#34;yourschool.edu&#34; if you connect from a
                    university&#39;s domain) from which you access our Site and
                    IP address (an IP address is a number that is automatically
                    assigned to your computer, smartphone, or other device used
                    to access whenever you are surfing the web) assigned to the
                    device you use to access our Site.
                    <br />
                    The type of browser and operating system you use to access
                    our Site.
                    <br />
                    The date and time you access our Site.
                    <br />
                    The Site pages you visit.
                    <br />
                    If you linked to the Site from another website, the internet
                    address of that website.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>
                  The technologies we use for automatic information collection
                  may include:
                </h5>
                <h5>i. Cookies</h5>
                <p>
                  <span>
                    As you interact with our website, we will automatically
                    collect data about your equipment, browsing actions and
                    patterns. We collect this personal data by using cookies and
                    other similar technologies. We collect such data to be able
                    to properly provide you with our services. Please see our
                    cookie policy [LINK] for further details. If you do not want
                    information to be collected through the use of cookies, you
                    may be able to refuse to accept cookies by activating the
                    appropriate setting on your computer, smartphone, or other
                    applicable device. However, if you select this setting, you
                    may be unable to access certain features of the Site.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>ii. Web beacons </h5>
                <p>
                  <span>
                    Pages of the Site may contain small electronic files known
                    as web beacons (also referred to as clear gifs, pixel tags
                    and single-pixel gifs) that permit us to, for example, count
                    users who have visited those pages and for other related
                    statistics (for example, recording the popularity of certain
                    Site pages or content and verifying system and server
                    integrity). Analytics services We may use third party
                    services such as Google Analytics that collect, monitor, and
                    analyze the information we collect automatically.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>How we use your information</h5>
                <p>
                  <span>
                    We use the information that you provide to us, including
                    personal information, and which we collect from and about
                    you to:
                  </span>{' '}
                  <span>
                    Operate, maintain, and provide the Site and the products and
                    services provided thereon;
                  </span>
                  <span>
                    Process registration with the Site and open, maintain, and
                    close accounts;
                  </span>
                  <span>Fulfil your order or request for services;</span>
                  <span>Respond to your electronic inquiries;</span>
                  <span>
                    Provide you with information, communications, etc. relevant
                    to your use of the Site and products and services provided
                    thereon in which you have expressed interest;
                  </span>
                  <span>
                    Improve, expand, and troubleshoot the Site and the products
                    and services provided thereon;
                  </span>
                  <span>
                    Make the Site more useful to visitors and learn about the
                    number of visitors to the different sections of the Site,
                    what information is of most and least interest, and
                    technical information that will enhance ease of use, such as
                    the types of technology our visitors use and system
                    performance or problem areas;
                  </span>
                  <span>
                    Analyse user behaviour in order to measure customer interest
                    in the various areas of the Site, and for statistical
                    purposes;
                  </span>
                  <span>Use for internal business purposes;</span>
                  <span>Conduct billing and collection;</span>
                  <span>
                    Fulfil any other use disclosed at the time you provide your
                    information or as described in this Privacy Policy.
                  </span>
                </p>
              </div>

              <div className="row">
                <h5>Disclosure of your information </h5>
                <p>
                  <span>
                    We may disclose aggregated information about our users, and
                    information that does not identify any individual or device,
                    for business purposes without restriction. In addition, we
                    may disclose information that we collect from you, or you
                    provide, including personal information:
                  </span>{' '}
                  <span>
                    To contractors, service providers and other third parties we
                    use to support our business and who are bound by contractual
                    obligations to keep personal information confidential and
                    use it only for the purposes for which we disclose it to
                    them;
                  </span>
                  <span>
                    To our subsidiaries and affiliates, for the purpose of
                    providing the Site and any related products or services, any
                    purpose described in this Privacy Policy or the Terms and
                    Conditions, or for any other lawful purpose;
                  </span>
                  <span>
                    To a buyer or other successor in the event of a merger,
                    divestiture, restructuring, reorganisation, dissolution or
                    other sale or transfer of some or all of CARGOPORT&#39;s
                    assets, whether as a going concern or as part of bankruptcy,
                    liquidation, or similar proceeding, in which personal
                    information held by Cargoport about our Site users is among
                    the assets transferred;
                  </span>
                  <span>To fulfil the purpose for which you provide it;</span>
                  <span>
                    For any other purpose disclosed by us when you provide the
                    information; With your consent; If required to do so to
                    comply with any court order, law, or legal process
                    (including to respond to any government or regulatory
                    request), or in the good-faith belief that such disclosure
                    is so required;
                  </span>
                  <span>
                    To enforce our rights arising from any contracts entered
                    into between you and us, including the Terms and Conditions,
                    and for billing and collection; and
                  </span>
                  <span>
                    If we believe disclosure is necessary or appropriate to
                    protect the rights, property, or safety of Cargoport, our
                    customers or others. This includes exchanging information
                    with other companies and organizations for fraud protection
                    and credit risk reduction.
                  </span>
                </p>
              </div>

              <div className="row">
                <h5>Data security </h5>
                <p>
                  <span>
                    We have implemented measures designed to secure your
                    personal information from accidental loss and from
                    unauthorised access, use, alteration, and disclosure.The
                    safety and security of your personal information also
                    depends on you. You are responsible for maintaining the
                    confidentiality of the login credentials (including your
                    account login username and password) we have given you (or
                    you have chosen) to access to certain parts of the Site. Do
                    not share your password with anyone, and we urge you to be
                    careful about giving out information in any public areas of
                    the Site. Unfortunately, the transmission of information via
                    the internet and mobile platforms is not completely secure.
                    Although we have implemented measures designed to secure
                    your personal information, we cannot guarantee the security
                    of your personal information transmitted through our Site.
                    Any transmission of personal information is at your own
                    risk. If your communication is very sensitive or includes
                    information such as your bank account or charge card you
                    should send it by mail unless our Site indicates the
                    transmission is secured. We are not responsible for
                    circumvention of any privacy settings or security measures
                    we provide.
                  </span>{' '}
                  <span>
                    For Site security purposes and to ensure that the Site and
                    related products and services remain available to all users,
                    CARGOPORT employs software programs to monitor network
                    traffic to identify unauthorised attempts to upload or
                    change information, or otherwise cause damage.
                  </span>
                </p>
              </div>

              <div className="row">
                <h5>Data Retention </h5>
                <p>
                  <span>
                    We will only retain your personal data for as long as
                    reasonably necessary to fulfil the purposes we collected it
                    for, including for the purposes of satisfying any legal,
                    regulatory, tax, accounting, or reporting requirements. We
                    may retain your personal data for a longer period in the
                    event of a complaint or if we reasonably believe there is a
                    prospect of litigation in respect to our relationship with
                    you.
                  </span>{' '}
                  <span>
                    To determine the appropriate retention period for personal
                    data, we consider the amount, nature and sensitivity of the
                    personal data, the potential risk of harm from unauthorised
                    use or disclosure of your personal data, the purposes for
                    which we process your personal data and whether we can
                    achieve those purposes through other means, and the
                    applicable legal, regulatory, tax, accounting, or other
                    requirements.
                  </span>
                </p>
              </div>

              <div className="row">
                <h5>Your legal rights </h5>
                <p>
                  <span>
                    In addition to being able to control the data your directly
                    provide to us, you may exercise any of the below rights with
                    respect to your data:
                  </span>{' '}
                  <span>
                    Request information about any of your personal data which we
                    are processing, and request access to your personal
                    information which we process.
                  </span>
                  <span>
                    Request correction of personal information that we hold
                    about you to make them more accurate or to reflect change in
                    circumstances.
                  </span>
                  <span>
                    Request us to refrain from doing certain things with your
                    data or restrict the extent of our collection or processing
                    of your data.
                  </span>
                  <span>
                    Request partial or complete erasure of your personal
                    information.
                  </span>
                  <span>
                    Object to our processing of your personal information where
                    we are processing your personal information for direct
                    marketing purposes.
                  </span>
                  <span>
                    Object to decisions being taken by automated means which
                    produce legal effects concerning you or similarly
                    significantly affect you.
                  </span>
                  <span>
                    Request the transfer of your personal information to another
                    party. If you wish to exercise any of the rights set out
                    above, please contact us using the contact details provided
                    below
                  </span>
                </p>
              </div>

              <div className="row">
                <h5>Children's privacy </h5>
                <p>
                  <span>
                    Our Site and the related services and products are not
                    directed to or intended for use by individuals under the age
                    of eighteen (18). We do not knowingly collect, keep, or
                    maintain personal information from individuals under the age
                    of eighteen (18). If you are under the age of eighteen (18),
                    you may not access or use the Site or the related services
                    and products. If you are aware of any use of the Site by an
                    individual under the age of eighteen (18), please inform us
                    immediately so that we can terminate such usage.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>Contact Details </h5>
                <p>
                  <span>
                    If you have any questions about this privacy policy or our
                    privacy practices, please contact us using the details
                    provided below:
                  </span>{' '}
                  <span>
                    <span className="text500 d-inline-block mb-0">
                      Full name of legal entity:
                    </span>
                    {'  '}
                    <span className="text800 d-inline-block mb-0">
                      CARGOPORT
                    </span>
                  </span>
                  <span>
                    <span className="text500 d-inline-block mb-0">
                      Email address:
                    </span>
                    {'  '}
                    <span className="text800 d-inline-block mb-0">
                      Hello.Cargoport.trade@gmail.com
                    </span>
                  </span>
                  <span>
                    <span className="text500 d-inline-block mb-0">
                      Telephone number:
                    </span>
                    {'  '}
                    <span className="text800 d-inline-block mb-0">
                      +2348038277977
                    </span>
                  </span>
                  <span>
                    <span className="text500 d-inline-block mb-0">
                      Changes to our privacy policy
                    </span>{' '}
                  </span>
                  <span>
                    We may update this Privacy Policy from time to time. If we
                    modify the Privacy Policy, we will make it available through
                    the Site. All such modifications, updates, and amendments
                    are effective immediately upon notice thereof, which we may
                    give by any means, including, but not limited to, by posting
                    a revised version of this Privacy Policy or other notice on
                    the Site. You should view this Privacy Policy often to stay
                    informed of changes that may affect you, as your continued
                    use of the Site signifies your continuing consent to this
                    Privacy Policy. This Privacy Policy is not intended to and
                    does not create any contractual or other legal right in or
                    on behalf of any party.
                  </span>
                  <span className="text500 ourfont16">Acknowledgement</span>
                  <span className=" text500">
                    BY ACCESSING OR USING THE SITE, OR ANY PORTION THEREOF, YOU
                    ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THIS PRIVACY
                    POLICY.
                  </span>
                </p>
              </div>
            </div>
          ) : (
            ''
          )}

          {navList == 2 ? (
            <div className="col privacy-policy">
              <div className="row ">
                <div className="policy-header">
                  <h2>BROKERAGE TERMS AND CONDITIONS</h2>
                </div>
              </div>
              <div className="row">
                <p>
                  <span>
                    This page describes the general terms that apply to your use
                    of any of our services. By using our services, you agree to
                    these terms on top of any other terms that apply to a
                    specific service you are using (like Quotes, for example).
                    If you use our services on behalf of your company, your
                    company agrees to them too.
                  </span>
                  <span className="sub-link">
                    {' '}
                    These Terms and Conditions (the &#34;Agreement&#34;) is a
                    legally binding agreement between CARGOPORT company (the
                    &#34;Broker&#34;), and third parties registered as Customers
                    who, via the website at{' '}
                    <Link href="www.cargoport.trade">
                      www.cargoport.trade
                    </Link>{' '}
                    (the &#34;Site&#34;), or via mobile phone or email, post or
                    request shipments requiring Air, Ocean, over-the-road
                    transportation, and custom clearance (collectively, with the
                    Site and all services provided therein, the
                    &#34;Service&#34;).
                  </span>
                  <span>
                    As used herein, the term &#34;Customer&#34; means any entity
                    establishing an Account as a customer. In order to use the
                    Service, whether requesting Services via the Site or
                    otherwise, Customers must register for an account on the
                    Site (&#34;Account&#34;) and provide certain information as
                    prompted by the registration form. Customer represents and
                    warrants that all required registration information it
                    submits (whether via the Site or otherwise) is truthful and
                    accurate and that Customer will maintain the accuracy of
                    such information.
                  </span>
                  <span>
                    The Service, and this Agreement, apply only to the
                    Broker&#39;s arrangement of for-hire Motor Carrier
                    Transportation regarding shipments moving to, from or within
                    the United States, Mexico and Canada and do not apply to any
                    other services that Broker may provide including, but not
                    limited to, customs brokerage services.
                  </span>
                  <span>
                    By accessing or using the service, you, the Customer, are
                    accepting this Agreement, on behalf of yourself, the
                    company, entity, or organization that you represent, and the
                    owner of the shipment being identified by you. You further
                    represent and warrant that you have the right, authority,
                    and capacity to enter into this agreement, on behalf of
                    yourself, on behalf of the customer that you identify as
                    when accessing the service, and on behalf of the owner of
                    the shipment identified by you. Any terms and conditions on
                    any transactional or shipment-specific document, including,
                    but not limited to, any bill of lading, dock receipt or
                    similar documentation exchanged between the parties other
                    than this agreement shall not apply to any services
                    performed under this agreement and shall not be binding on
                    or applicable to the Broker.
                  </span>
                  <span>
                    You may not access or use the service or accept this
                    agreement if you are not at least 18 years old, have full
                    legal capacity and in the case of a legal representative,
                    have full authority to represent the stated customer. If you
                    do not agree with all the provisions of this agreement, do
                    not access, or use the Service. Brokers may terminate your
                    access to and ability to use the service at any time, in its
                    sole discretion whether with or without cause.
                  </span>
                  <span>
                    This agreement applies except to the extent it conflicts
                    with, or is expressly waived by, a written contract signed
                    by an officer of the Broker. Upon the reasonable request of
                    the Broker, the Customer shall provide all documentation and
                    other information requested in connection with applicable
                    &#34;know your customer&#34; and anti-money-laundering
                    rules, regulations, and policies of the Broker.
                  </span>
                </p>
              </div>

              <div className="row">
                <h5>Service description and use</h5>
                <p>
                  <span>
                    The Broker works with the information provided by the
                    Customer to arrange their shipment. The Broker provides no
                    guarantee that the Customer&#39;s goods would be shipped
                    even after getting a quote.
                  </span>{' '}
                  <span>
                    The Service includes a platform whereby the Customer can
                    request pricing for a specific shipment (each an “Order”).
                    The Customer is responsible for providing, and shall
                    provide, all information requested by the Service
                    (&#34;Order Information&#34;) and warrants and represents
                    that all such Order Information is accurate and complete.
                    The Broker will provide a price quote (&#34;Quote&#34;) to
                    the Customer via the Service based on the Order Information
                    input into the Service.
                  </span>
                  <span>
                    By providing a quote, the Broker is not guaranteeing that it
                    will be able to arrange for requested transportation but
                    will use commercially reasonable efforts to do so. The
                    service will give the Customer the option of accepting the
                    quote. By accepting the quote, via the functionality
                    provided by the service, the Customer is authorizing the
                    Broker to arrange for transportation in accordance with the
                    order information and agrees to pay the price stated in the
                    quote.
                  </span>
                  <span>
                    The Customer understands and agrees that the Broker
                    functions as an independent entity, and not as a carrier, in
                    selling, negotiating, providing, and arranging for
                    transportation for compensation, and that the actual
                    transportation of shipments tendered to the Broker shall be
                    performed by third-party shippers (“Shipping company”). The
                    Broker and the Customer represent and warrant that their
                    relationship is that of independent contractors and that the
                    respective employees are under their respective exclusive
                    management and control. Nothing in this Agreement shall be
                    deemed to require the Broker to provide Services upon
                    request of the Customer and the Broker reserves the right to
                    accept or decline, in its sole discretion, any request for
                    Services.
                  </span>
                </p>
              </div>
              <div className="row">
                <h5>Payment and charges</h5>
                <p>
                  <span>
                    The customer is responsible for all charges that may arise.
                    If the information provided by customer for getting a quote
                    is inaccurate, broker may revise the price charged for the
                    service.
                  </span>{' '}
                  <span>
                    The Broker will charge, and the Customer will pay the rates
                    and charges set forth in the Quote without offset. The
                    Customer agrees to pay Broker without offset or withholding
                    of any type and within fifteen (14) days of receiving the
                    invoice, with interest accruing monthly at a rate of one
                    percent (1%) per month on any unpaid balance. Customers
                    shall also be liable for any expenses, taxes, import and
                    export duties and fees and other governmental charges
                    incurred in the rendering of the Services, including
                    attorney fees, the Broker incurs in collecting its rates and
                    charges.
                  </span>
                  <span>
                    Customers shall also be responsible for any additional
                    accessorial charges imposed by the shipping company which
                    were not anticipated by the Broker at the time the Broker
                    arranged the shipping company&#39;s services or which were
                    not otherwise included in the rate quoted by the Broker. If
                    any information provided by the customer is inaccurate or
                    incomplete, the customer acknowledges and agrees that agreed
                    upon rates may, in broker&#39;s sole discretion, be revised
                    to reflect the goods tendered or service rendered.
                  </span>
                </p>
              </div>
              <div className="row">
                <h5>Indemnification</h5>
                <p>
                  <span>
                    The customer is responsible for compensation that may become
                    necessary as a result of their misconduct.
                  </span>{' '}
                  <span>
                    The Customers shall defend, indemnify, and hold harmless the
                    Broker, its affiliated entities, and each of their officers,
                    members, and directors from and against, and shall pay and
                    reimburse each of them for, any and all claims, damages,
                    liabilities, fines, judgments, penalties and amounts
                    (including reasonable attorney fees) arising from or related
                    to:
                  </span>
                  <span>Breach by customer of this agreement; </span>
                  <span>
                    The negligence or other wrongful conduct of customer, its
                    agents, contractors or employees; Violation by customer, its
                    agents, contractors or employees of any applicable laws,
                    rule, or regulation; or
                  </span>
                  <span>
                    Customer&#39;s failure to provide, or broker&#39;s
                    compliance with or reliance on instructions, directions, or
                    request of customer.
                  </span>
                  <span>
                    The foregoing notwithstanding, customer&#39;s obligation to
                    hold harmless, defend, indemnify, pay, and reimburse shall
                    not apply to the extent any claim is caused by the
                    negligence or intentional misconduct of the party otherwise
                    seeking the protections of this paragraph (each of which,
                    with the exception of broker, is an intended third-party
                    beneficiary of this agreement).
                  </span>
                </p>
              </div>
              <div className="row">
                <h5>Broker insurance</h5>
                <p>
                  <span>
                    The Broker shall comply with all insurance and bonding
                    requirements imposed upon it by law, including its
                    obligation to maintain a surety bond or trust fund
                    agreement, provided however, that such bonding and/or
                    insurance requirements shall not be interpreted to supersede
                    and/or substitute any insurance and/or bonding requirements
                    that the Customer and/or shipping company shall maintain as
                    a matter of legal requirements or reasonable commercial
                    caution, for which Broker shall under no circumstance shall
                    be responsible and for which liability Customer hereby
                    explicitly releases Broker.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>Cargo loss, damage, or shortage</h5>
                <p>
                  <span>
                    The broker is not responsible for cargo loss damage or
                    shortage unless caused by broker&#39;s documented negligent
                    acts or omissions.
                  </span>{' '}
                  <span>
                    The Customer acknowledges that shipping companies may limit
                    their liability for cargo loss, damage, or delay. Upon
                    request from the Customer, the Broker will use reasonable
                    commercial efforts to determine and communicate the shipping
                    company&#39;s limitation on cargo loss and damage liability
                    to the Customer. If the Customer wishes for the Broker to
                    arrange for the shipping company to assume liability in
                    excess of the otherwise applicable limitation, the Customer
                    must make such request to the Broker by contacting your
                    designated sales representative at the Broker to request an
                    increased limit to liability at least seventy-two (72) hours
                    prior to scheduled pick-up of the shipment.
                  </span>
                  <span>
                    Upon receipt of such request, the Broker will use reasonable
                    efforts to source a shipping company able to perform the
                    services at the requested liability levels and if the Broker
                    is able to do so, will issue a revised Quote to the Customer
                    setting forth additional charges applicable to the
                    Customer&#39;s request for additional recovery and the
                    Customer agrees to pay such additional amounts. If the
                    Broker does not issue a Quote setting forth additional
                    charges related to the request for the shipping company to
                    assume additional liability, then the Customer acknowledges
                    and agrees that the shipping company&#39;s default
                    limitation of liability will apply.
                  </span>
                  <span>
                    It will be the Customer&#39;s responsibility to insure
                    product in-transit. The Broker may facilitate claims filing
                    and processing with the shipping company if the Customer
                    submits to the Broker, within sixty (60) days of the date of
                    delivery, a written claim, fully supported by all relevant
                    documentation, including but not limited to the signed
                    delivery receipt, listing the nature and cause of the claim
                    for cargo damage. The Broker may, in its sole discretion and
                    without liability to the Customer, discontinue pursuit of
                    claims with the shipping company if such claim is not
                    resolved within sixty (60) days of receipt by the Broker or
                    if the Customer, in the Broker&#39;s sole discretion, fails
                    to cooperate with the Broker in filing of claims with the
                    shipping company. The Broker in no event shall be
                    responsible for the outcome of a claim with the shipping
                    company or for the failure of a Servicing Motor Carrier to
                    perform any of its obligations derived from such claim.
                  </span>
                  <span>
                    The Customer acknowledges and agrees that failure or alleged
                    failure by the shipping company to comply with shipment
                    handling instructions, or a broken trailer seal, shall not,
                    in and of itself, result in any presumption that cargo has
                    been adulterated, contaminated, or otherwise rendered unfit
                    for its intended purpose.
                  </span>
                  <span>
                    The Broker shall have no liability for cargo loss, damage,
                    or shortage except to the extent such claims are caused by
                    the Broker&#39;s documented negligent acts or omissions, in
                    which case, the Broker&#39;s liability shall be limited to
                    the charges assessed by the Broker and paid by the Customer
                    concerning the goods at issue.
                  </span>
                  <span>
                    The Customer is responsible for filing a claim with the
                    Broker alleging the Broker&#39;s liability for cargo loss
                    and damage within sixty (60) days of the date of delivery of
                    the cargo in question (or, if none, within sixty (60) days
                    of the date cargo should have been delivered). Failure to do
                    so will result in an absolute bar to any such claim and will
                    relieve Broker of any and all liability with respect
                    thereto. In no event will Broker have any liability arising
                    from or related to the shipping company&#39;s refusal to
                    accept full value liability or the Servicing Motor Carrier
                    otherwise limiting or disclaiming its liability for cargo
                    loss and damage.
                  </span>
                  <span>
                    The Broker shall be under no obligation to arrange, and the
                    shipping company shall be under no obligation to provide
                    service in accordance with any set pick-up or delivery
                    schedule; the Broker&#39;s sole obligation is to ensure
                    shipping companies provide services with reasonable
                    dispatch.
                  </span>
                  <span>
                    Any lawsuit arising from such claims must be commenced
                    within eighteen (18) months of denial of all or any part of
                    such claim. The Customer acknowledges and agrees that the
                    sole liability of the Broker with respect to loss, damage or
                    delay to cargo shall be as set forth in this provision and
                    Customer warrants and represents that if it is not the owner
                    of such cargo, the Customer holds authority from such owner
                    to bind the owner to the provisions of this Agreement.
                  </span>
                </p>
              </div>

              <div className="row">
                <h5>Disclaimers and Release</h5>
                <p>
                  <span>
                    The Broker has no responsibility or liability for any
                    shipping services provided to the Customer by any shipping
                    company. The Broker shall not be deemed to be an agent or a
                    partner of any shipping company or customer for any reason.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>Disclaimers and Release</h5>
                <p>
                  <span>
                    The Broker has no responsibility or liability for any
                    shipping services provided to the Customer by any shipping
                    company. The Broker shall not be deemed to be an agent or a
                    partner of any shipping company or customer for any reason.
                  </span>{' '}
                  <span>
                    The Customer consents to receiving communications from the
                    Broker in an electronic form and agree that all terms and
                    conditions, agreements, notices, disclosures, and other
                    communications that the Broker provides to the Customer
                    electronically satisfy any legal requirement that such
                    communications would satisfy if it were in a hardcopy
                    writing and expressly agrees to be bound by all transactions
                    with the Broker conducted through electronic means without
                    the need of physical signatures. The foregoing does not
                    affect the Customer&#39;s non-waivable rights.
                  </span>
                </p>
              </div>

              <div className="row">
                <h5>Force Majeure</h5>
                <p>
                  <span>
                    No one is responsible for failed delivery caused by economic
                    or political factors
                  </span>
                  <span>
                    Neither party, nor any shipping company, shall be liable for
                    any delay in the performance of their respective obligations
                    under this Agreement resulting from any force majeure,
                    including, but not limited to, acts of God, acts of
                    government or other civil or military authorities, acts of
                    terror, war, riots, or any other event of like kind beyond
                    the reasonable control of the party. In the event of a force
                    majeure, the affected party shall promptly notify the other
                    party in writing, stating the reasons for the inability to
                    comply with the provisions of this Agreement, and the
                    expected duration of the force majeure.
                  </span>{' '}
                </p>
              </div>
            </div>
          ) : (
            ''
          )}

          {navList == 3 ? (
            <div className="col privacy-policy">
              <div className="row ">
                <div className="policy-header">
                  <h2>COOKIES POLICY</h2>
                </div>
              </div>
              <div className="row">
                {/* <h5>What Information do we collect?</h5> */}
                <p>
                  <span>
                    CARGOPORT&#39;s(&#34;we&#34; or &#34;us&#34; or
                    &#34;our&#34;) may use cookies, web beacons, tracking
                    pixels, and other tracking technologies when you visit our
                    website, including any other media form, media channel,
                    mobile website, or mobile application related or connected
                    thereto (collectively, the &#34;Site&#34;) to help customize
                    the Site and improve your experience.
                  </span>
                </p>
              </div>
              <div className="row">
                {/* <h5>How do we use your information?</h5> */}
                <p>
                  <span>
                    {' '}
                    By continuing to use our Site and services, you are agreeing
                    to the use of cookies and similar technologies for the
                    purposes we describe in this policy. If you do not accept
                    the use of cookies and similar technologies, do not use this
                    site.
                  </span>

                  <span>
                    We also reserve the right to make changes to this Cookie
                    Policy at any time and for any reason. We will alert you
                    about any changes by updating the &#34;Last Updated&#34;
                    date of this Cookie Policy. Any changes or modifications
                    will be effective immediately upon posting the updated
                    Cookie Policy on the Site, and you waive the right to
                    receive specific notice of each such change or modification.
                  </span>

                  <span>
                    You are encouraged to periodically review this Cookie Policy
                    to stay informed of updates. You will be deemed to have been
                    made aware of, will be subject to, and will be deemed to
                    have accepted the changes in any revised Cookie Policy by
                    your continued use of the Site after the date such revised
                    Cookie Policy is posted.
                  </span>
                </p>
              </div>
              <div className="row">
                <h5>What is a cookie?</h5>
                <p>
                  <span>
                    A cookie is a simple text file that is stored on your
                    computer or mobile device by a website&#39;s server. Each
                    cookie is unique to your web browser. It will contain some
                    anonymous information such as a unique identifier and the
                    site name and some digits and numbers.
                  </span>{' '}
                </p>
              </div>
              <div className="row">
                <h5>How does CARGOPORT use cookies?</h5>
                <p>
                  <span>
                    CARGOPORT uses different types of cookies to enhance and
                    improve your experience.
                  </span>{' '}
                  <span>CARGOPORT uses cookies for:</span>{' '}
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pellentesque tincidunt dictum. Aliquam commodo lorem
                    quis eros facilisis, at pharetra sapien pharetra. Duis
                    varius auctor maximus. Phasellus vestibulum erat ac turpis
                    eleifend mollis. Praesent porta augue ut euismod eleifend.
                    Proin id ultricies augue. Phasellus varius nunc suscipit
                    ultricies faucibus.
                  </span>
                </p>
              </div>
              <div className="row">
                <h5>Security</h5>
                <p>
                  <span>
                    We use cookies to enable and support our security features,
                    for example: to authenticate Members, prevent fraudulent use
                    of login credentials, and protect Member data from
                    unauthorized parties.
                  </span>{' '}
                </p>
              </div>
              <div className="row">
                <h5>Preferences</h5>
                <p>
                  <span>
                    When you are signed into your account, cookies help us
                    display the correct information and personalize your
                    experience, by providing you with features, insights, and
                    customized content. They can also help you fill out forms
                    more easily, e.g., Request for Information (RFI) forms. Loss
                    of the information stored in a preference cookie may make
                    the Site experience less functional but should not prevent
                    it from working.
                  </span>{' '}
                </p>
              </div>
              <div className="row">
                <h5>Session State</h5>
                <p>
                  <span>
                    We collect information about how our Users and Members use
                    and interact with the Site. This may include the pages
                    Members visit most often and when and where Members get
                    error messages. We use these &#34;session state cookies&#34;
                    to help us improve our Site and Services. Blocking or
                    deleting these cookies will not prevent the Site from
                    working.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>Analytics</h5>
                <p>
                  <span>
                    These cookies help us learn how our Site performs in
                    different locations. We use cookies to understand and
                    improve our Services and features.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>Control of Cookies</h5>
                <p>
                  <span>
                    Some people find the idea of a website storing information
                    on their computer or mobile device to be intrusive,
                    particularly when this information is stored and used by a
                    third party without them knowing. Although cookies are
                    generally quite harmless, you may not, for example, want to
                    see advertising that has been targeted to your interests
                    using your browser history. If you prefer, you may choose to
                    block some or all cookies, or even to delete cookies that
                    have already been set; but you should be aware that you
                    might lose some functions of the website.
                  </span>{' '}
                  <span>
                    If you want to restrict or block the cookies that are set by
                    our Site, or any other site, you can do so through your
                    browser setting. The &#39;Help&#39; function in your browser
                    should explain how. Alternatively, you can visit
                    www.aboutcookies.org, which contains comprehensive
                    information on how to do this on a wide variety of browsers.
                    You will find general information about cookies and details
                    on how to delete cookies from your devices.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>Privacy Policy</h5>
                <p>
                  <span>
                    For more information about how we use information collected
                    by cookies and other tracking technologies, please refer to
                    our Privacy Policy [Link to Privacy Policy]. This Cookie
                    Policy is part of and is incorporated into our Privacy
                    Policy. By using the Site, you agree to be bound by this
                    Cookie Policy and our Privacy Policy.
                  </span>{' '}
                </p>
              </div>

              <div className="row">
                <h5>Contact Us</h5>
                <p>
                  <span>
                    All access requests, questions, comments, complaints, and
                    other requests regarding the cookies policy should be sent
                    to Hello.Cargoport.trade@gmail.com
                  </span>{' '}
                  <span>
                    We may request additional details from you regarding your
                    complaints and keep records of your requests and resolution.
                  </span>
                </p>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
}
