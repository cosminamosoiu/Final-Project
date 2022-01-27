import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About</Heading>
            <FooterLink>React</FooterLink>
            <FooterLink>CRUD</FooterLink>
            <FooterLink>Database</FooterLink>
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink>Number: 07*****</FooterLink>
            <FooterLink>Romania</FooterLink>
            <FooterLink>Brasov</FooterLink>
            <FooterLink>Street ***</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>

            <FooterLink
              target='_blank'
              href='https://www.linkedin.com/in/cosmina-mo%C8%99oiu-9bb905142/'
            >
              <i className='fab fa-linkedin'>
                <span style={{ marginLeft: "10px" }}>LinkedIn</span>
              </i>
            </FooterLink>
            <FooterLink target='_blank' href='https://github.com/cosminamosoiu'>
              <i className='fab fa-github'>
                <span style={{ marginLeft: "10px" }}>Github</span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-instagram'>
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-facebook-f'>
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <div className='row' style={{ textAlign: "center" }}>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} Cosmina-Maria Mosoiu| All rights
            reserved
          </p>
        </div>
      </Container>
    </Box>
  );
};
export default Footer;
