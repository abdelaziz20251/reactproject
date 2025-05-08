import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/products');
    };

    return (
        <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-4 text-red-500">Welcome to Maadi 115 Projects</h1>
            <p className="text-lg mb-6 text-gray-300">Explore innovative programming projects by the Amit team. Let's build something amazing together!</p>
            <p className="text-sm mb-4 text-gray-400">Created by Abdelaziz Mostafa Mohammed</p>
            <button 
                className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700"
                onClick={handleButtonClick}
            >
                View Projects
            </button>
        </div>
    );
};

export default HeroSection;
