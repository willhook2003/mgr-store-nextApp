import { FC } from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import styles from './ProductSlideshow.module.css';

interface Props {
    images: string[];
}

export const ProductSlideshow: FC<Props> = ({ images }) => {
    const slideImages = images.map((image) => `/products/${image}`);

    return (
        <div className={styles['slide-container']}>
            <Slide
                images={slideImages}
                easing="ease"
                duration={7000}
                indicators
            >
                {slideImages.map((url, index) => (
                    <div className={styles['each-slide']} key={index}>
                        <div style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover' }}></div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

