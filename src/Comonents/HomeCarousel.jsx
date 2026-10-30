import { Image } from "react-bootstrap";
import { Carousel} from "react-bootstrap";
import slide3 from "../Slides/cooler-water.avif";
function HomeCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src="/purifier.webp" alt='slider 01' className="w-100"
                    style={{ height: "500px", objectFit: "cover" }}
                />

                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="https://img.magnific.com/premium-psd/water-filter-isolated-transparent-background_84443-3270.jpg" alt="secondslide" className="w-100"
                    style={{ height: "500px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
<Image src={slide3} alt="slider3" className="w-100"
 style={{ height: "500px", objectFit: "cover" }} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;
