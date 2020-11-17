import {
  makeStyles,
  Box,
  Container,
  Typography,
  Button,
} from '@material-ui/core';
import Image from 'next/image';
import styles from '../styles/Banner';

const useStyles = makeStyles(styles);

const Banner = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.mainSection}>
      <Container fixed className={classes.container}>
        <Box component="article" className={classes.detailsContent}>
          <Typography variant="h1" className={classes.title}>
            Desarrollo y diseño de aplicaciones
            <span> móviles </span>
            iOS y Android
          </Typography>
          <Typography
            variant="h2"
            component="p"
            className={classes.description}
          >
            Tus productos en el bolsillo de tus clientes
          </Typography>
          <Box>
            <Button variant="contained" className={classes.actionButton}>
              Contáctanos
            </Button>
          </Box>
        </Box>
        <Box className={classes.containerImage}>
          <Box component="figure" className={classes.image}>
            <Image
              quality={100}
              priority
              src="/assets/images/diseno-desarrollo-aplicaciones-moviles-ios-android-ecuador.png"
              layout="fill"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
