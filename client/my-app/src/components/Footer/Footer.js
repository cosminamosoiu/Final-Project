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
            <FooterLink href='#'>React</FooterLink>
            <FooterLink href='#'>CRUD</FooterLink>
            <FooterLink href='#'>Database</FooterLink>
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href='#'>Number: 07*****</FooterLink>
            <FooterLink href='#'>Romania</FooterLink>
            <FooterLink href='#'>Brasov</FooterLink>
            <FooterLink href='#'>Street ***</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href='#'>
              <i className='fab fa-facebook-f'>
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-instagram'>
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-twitter'>
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href='#'>
              <i className='fab fa-youtube'>
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <div className='row' style={{ textAlign: "center" }}>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} Cosmina-Maria Mosoiu| All rights
            reserved | Terms of service | Privacy
          </p>
        </div>
      </Container>
    </Box>
  );
};
export default Footer;
