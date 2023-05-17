import styles from './ArtistProfile.module.scss';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router';

interface Link {
  url: string,
  name: string,
  target: string
}

interface Artist {
  tokenId: number,
  images: string[],
  poster: string,
  posterMintUrl: string,
  name: string,
  info: string
  links: Link[]
}

interface Props {
  artistsData: Artist[];
}

const ArtistProfile = (props: Props) => {
  const route = useRouter();
  const artistId = Number(route.query.token);
  const artist = props.artistsData.filter(artist => artist.tokenId == artistId)[0];

  return (
    <div className="pb-5">
      <Container className={`${styles.main}`}>
        <Row>
          <Col
            className={`${styles.artistPoster}`}
            md={4}>
            {artist.poster ? (
              <>
                <a href={artist.poster} target="_blank">
                  {artist.poster.endsWith('.mp4') ? (
                    <video className="d-block w-100" controls muted playsInline autoPlay>
                      <source src={artist.poster} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={artist.poster} alt="Prememe artwork" className={`img-fluid ${styles.shadow}`} />
                  )}
                </a>
                <p>
                  <em>Prememe by <a href="https://twitter.com/wintermutegan" target="_blank">@Wintermute</a></em>
                  {artist.posterMintUrl ? (
                    <em> — <a href={artist.posterMintUrl} target="_blank">mint it!</a></em>
                  ) : (<span></span>)}
                </p>
              </>
            ) : (<span></span>)}
          </Col>
          <Col
            md={5}>
            <Row>
              <h3 className={`${styles.artistName}`}>
                {artist.name}: Meme Artist {artist.tokenId}
              </h3>
              <ReactMarkdown>{artist.info}</ReactMarkdown>
            </Row>

          </Col>
          <Col className={`${styles.artistWorks}`}>
            <Row>
              <Carousel interval={3000} fade>
                {artist.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    {image.endsWith('.mp4') ? (
                      <video className="d-block w-100" autoPlay muted loop playsInline>
                        <source src={image} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={image} alt={`carousel item ${index}`} className="d-block w-100" />
                    )}
                  </Carousel.Item>
                ))}
              </Carousel>
              <h3>Previous Work</h3>
            </Row>
            <Row className={`${styles.artistLinks}`}>
              {artist.links.map((link, index) => (
                <a key={index} href={link.url} target={link.target}>
                  {link.name}
                </a>
              ))}
            </Row>
            <Row className={`${styles.seizeButton}`}>
              <Button
                variant="outline-dark"
                size="lg"
                href={`https://seize.io/the-memes/${artist.tokenId}?focus=live`}
                target="_blank"
              >
                Seize!
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArtistProfile;
