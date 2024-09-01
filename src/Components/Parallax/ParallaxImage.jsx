import { Parallax } from 'react-scroll-parallax';

const ParallaxImage = () => {
    return (
        <section>

            <Parallax speed={5}>
                <img className='w-full' src="https://i.ibb.co/LQYz6sC/Banner2.jpg" alt="" />
            </Parallax>
        </section>
    );
};

export default ParallaxImage;