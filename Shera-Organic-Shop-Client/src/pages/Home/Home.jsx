import App from '../../App';
import BrowseRecentPost from './BrowseRecentPost/BrowseRecentPost';
import CustomerReview from './CustomerReview/CustomerReview';
import OurFeaturedProducts from './OurFeaturedProducts/OurFeaturedProducts';
import OurTopCategory from './OurTopCategory/OurTopCategory';
import Slider from './Slider/Slider';
import ThreeFeatureImg from './ThreeFeatureImg/ThreeFeatureImg';
import TrendingProducts from './TrendingProducts/TrendingProducts';
import TwoFeatureImg from './TwoFeatureImg/TwoFeatureImg';
import WeeklyBestDeals from './WeeklyBestDeals/WeeklyBestDeals';
const Home = () => {
    return (
        <div>
            {/* <App></App> */}
            <Slider/>
            <OurTopCategory></OurTopCategory>
            <OurFeaturedProducts></OurFeaturedProducts>
            <TrendingProducts></TrendingProducts>
            <ThreeFeatureImg></ThreeFeatureImg>
            <WeeklyBestDeals></WeeklyBestDeals>
            <TwoFeatureImg></TwoFeatureImg>
            <CustomerReview></CustomerReview>
            <BrowseRecentPost></BrowseRecentPost>
        </div>
    );
};

export default Home;