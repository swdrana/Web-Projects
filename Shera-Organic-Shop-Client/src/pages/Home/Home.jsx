import App from '../../App';
import OurFeaturedProducts from './OurFeaturedProducts/OurFeaturedProducts';
import OurTopCategory from './OurTopCategory/OurTopCategory';
const Home = () => {
    return (
        <div>
            <App></App>
            <OurTopCategory></OurTopCategory>
            <OurFeaturedProducts></OurFeaturedProducts>
        </div>
    );
};

export default Home;