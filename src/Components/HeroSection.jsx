import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/products');
    };

    return (
        <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-4 text-red-500">Welcome to Amit Stores</h1>
            <p className="text-lg mb-6 text-gray-300">Your one-stop shop for all your needs. Amazing deals await!</p>
            <button 
                className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700"
                onClick={handleButtonClick}
            >
                Shop Now
            </button>
        </div>
    );
};

export default HeroSection;

