import App from '../../App';
import CustomerReview from './CustomerReview/CustomerReview';
import OurFeaturedProducts from './OurFeaturedProducts/OurFeaturedProducts';
import OurTopCategory from './OurTopCategory/OurTopCategory';
import ThreeFeatureImg from './ThreeFeatureImg/ThreeFeatureImg';
import TrendingProducts from './TrendingProducts/TrendingProducts';
import TwoFeatureImg from './TwoFeatureImg/TwoFeatureImg';
import WeeklyBestDeals from './WeeklyBestDeals/WeeklyBestDeals';
const Home = () => {
    return (
        <div>
            {/* <App></App>
            <OurTopCategory></OurTopCategory>
            <OurFeaturedProducts></OurFeaturedProducts>
            <TrendingProducts></TrendingProducts>
            <ThreeFeatureImg></ThreeFeatureImg>
            <WeeklyBestDeals></WeeklyBestDeals>
            <TwoFeatureImg></TwoFeatureImg> */}
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;