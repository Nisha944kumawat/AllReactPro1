import flipkartLogo from '../assets/flipkart.png';
import amazonLogo from '../assets/amazon.png';
import shoeImage from '../assets/shoe_image.png';

const HeroSection = () => {
    return (
        <>
            <main className="hero container">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>
                        YOUR FEET DESERVE THE BEST AND WE’RE 
                        HERE TO HELP YOU WITH OUR SHOES. YOUR FEET 
                        DESERVE THE BEST AND WE’RE HERE TO HELP YOU 
                        WITH OUR SHOES.
                    </p>

                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className="secondary-btn">Category</button>
                    </div>

                    <div className="brand-icons">
                        <img src={flipkartLogo} alt="flipkart-logo" />
                        <img src={amazonLogo} alt="amazon-logo" />
                    </div>

                    <div className="shopping">
                        <p>Also Available On</p>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={shoeImage} alt="shoe-logo" />
                </div>
            </main>
        </>
    );
};

export default HeroSection;
