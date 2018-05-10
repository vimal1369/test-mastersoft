import * as React from 'react';
// import { FormattedMessage } from 'react-intl';
import FooterSocialMedia from './FooterSocialMedia';
import FooterInfo from './FooterInfo';
import './styles.css';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer: React.SFC<{}> = () => {
  return (
  <footer>
          <Grid>
              <Row className="show-grid">
                  <Col sm={12} md={6} lg={6}>
                      <FooterSocialMedia />
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                      <FooterInfo />
                  </Col>
              </Row>
          </Grid>
  </footer>
  );
};

export default Footer;
