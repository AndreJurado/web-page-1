import React from 'react';
import {
  Grid,
  Typography,
  Box,
  makeStyles,
  Container,
} from '@material-ui/core';
// import { LOGO_FOOTER_INITGRAMMERS } from '../../constants/services/imageFooter';
import LinkWithIcon from './components/LinkWithIcon';
import {
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
} from '../../assets/icons';
import LinkIcon from './components/LinkIcon';
import CustomLink from '#Components/CustomLink';
import styles from './styles';
import ContactUs from './ContactUs';

const useStyles = makeStyles(styles);
const CustomFooter = () => {
  const classes = useStyles();

  const services = [
    {
      label: 'Desarrollo de aplicaciones web',
      href: '/services/WebDevelopment',
    },
    {
      label: 'Desarrollo de aplicaciones móviles',
      href: '/services/MobileDevelopment',
    },
    {
      label: 'Desarrollo de aplicaciones PWA',
      href: '/services/PWADevelopment',
    },
    { label: 'Marketing y diseño digital', href: '/services/DigitalMarketing' },
    { label: 'Diseño UI / UX ', href: '/services/UXUIDesign' },
    { label: 'Tiendas en línea / E-commerce', href: 'Ecommerce' },
  ];
  const portfolio = [
    { label: 'Portafolio', href: '#' },
    { label: '¿Quiénes somos?', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contacto', href: '#' },
  ];

  return (
    <>
      <ContactUs />
      <footer className={classes.root}>
        <Container fixed>
          {/* <img
            src={LOGO_FOOTER_INITGRAMMERS.image}
            alt={LOGO_FOOTER_INITGRAMMERS.alt}
          /> */}
          <Grid container spacing={3} className={classes.gridContainer}>
            <Grid item md={6} sm={12}>
              <Typography className={classes.description}>
                InitGrammers es una empresa dedicada a crear soluciones y
                capacitaciones tecnológicas en software, marketing y diseño
                digital
              </Typography>
              <LinkWithIcon
                href="tel: +593963277297"
                icon={<PhoneIcon />}
                label="(+593) 963277297"
              />
              <LinkWithIcon
                href="mailto: info@initgrammers.com"
                icon={<MailIcon />}
                label="info@initgrammers.com"
              />
              <Box display="flex" mt={2}>
                <LinkIcon
                  icon={<FacebookIcon />}
                  href="https://www.facebook.com/"
                />
                <LinkIcon
                  icon={<LinkedInIcon />}
                  href="https://www.linkedin.com/company/initgrammersec"
                />
                <LinkIcon
                  icon={<InstagramIcon />}
                  href="https://www.instagram.com/initgrammers/"
                />
              </Box>
            </Grid>
            <Grid item md={3} sm={12}>
              <Typography variant="h6" className={classes.text}>
                Servicios
              </Typography>
              {services.map((item, key) => (
                <CustomLink key={key} href={item.href}>
                  <Typography className={classes.text}>{item.label}</Typography>
                </CustomLink>
              ))}
            </Grid>
            <Grid item md={3} sm={12}>
              {portfolio.map((item, key) => (
                <CustomLink key={key} href={item.href}>
                  <Typography variant="h6" className={classes.text}>
                    {item.label}
                  </Typography>
                </CustomLink>
              ))}
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};
export default CustomFooter;
