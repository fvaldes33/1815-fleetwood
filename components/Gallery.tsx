import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Gallery({ anchor }) {
  return (
    <section id={anchor} className="container mx-auto">
      <Carousel
        dynamicHeight={true}
        showArrows={true}
        useKeyboardArrows={true}
        swipeable={true}
        swipeScrollTolerance={5}
      >
        {Array.from(Array(24).keys()).map((_, index) => (
          <div key={index}>
            <img src={`/assets/image-${index}.jpg`} />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
