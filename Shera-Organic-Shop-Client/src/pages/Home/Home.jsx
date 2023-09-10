import App from '../../App';
import OurFeaturedProducts from './OurFeaturedProducts/OurFeaturedProducts';
import OurTopCategory from './OurTopCategory/OurTopCategory';
import TrendingProducts from './TrendingProducts/TrendingProducts';
const Home = () => {
    return (
        <div>
            <App></App>
            <OurTopCategory></OurTopCategory>
            <OurFeaturedProducts></OurFeaturedProducts>
            <TrendingProducts></TrendingProducts>
        </div>
    );
};

export default Home;