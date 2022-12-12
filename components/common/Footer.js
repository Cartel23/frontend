import React from 'react';

const Footer = () => (
  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Quick Links
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://cartel23.ch/impressum"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Impressum
              </a>
              <a
                href="https://cartel23.ch/datenschutz"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutzerklärung
              </a>
            </div>
            <div>
              <a
                href="https://cartel23.ch/agb"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                AGB
              </a>
              <a
                href="https://cartel23.ch/retouren"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Retouren
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Follow us
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://twitter.com/commercejs"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/commerce.js/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://angel.co/company/chec"
                className="mb-3 d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Angel
              </a>
              <a
                href="https://www.linkedin.com/company/chec-chec-commerce-inc.-/"
                className="d-block font-color-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <p className="mb-3 d-block font-color-medium">
            © { new Date().getFullYear() }, CARTEL 23
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
