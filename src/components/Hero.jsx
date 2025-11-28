import flipkartLogo from '../assets/flipkart.png';
import amazonLogo from '../assets/amazon.png';
import shoeImage from '../assets/shoe_image.png';

const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>

                <div className="brand-icons">
                    <img src={flipkartLogo} alt="flipkart" />
                    <img src={amazonLogo} alt="amazon" />
                </div>

            </div>

            <div className="hero-image">
                <img src={shoeImage} alt="shoe" />
            </div>
        </main>
    );
};
export default HeroSection;
