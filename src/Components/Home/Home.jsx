
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import ParallaxImage from "../Parallax/ParallaxImage";
import Services from "../Services/Services";
import Support from "../Support/Support";
import TopReview from "../TopReview/TopReview";

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <TopReview></TopReview>
            <ParallaxImage></ParallaxImage>
            <Support></Support>
            <Discount></Discount>
           <Services></Services>
        </section>
    );
};

export default Home;