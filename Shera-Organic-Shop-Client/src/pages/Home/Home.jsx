import MessengerCustomerChat from "react-messenger-customer-chat";
import { PageView } from "../../utilities/facebookPixel";
import BrowseRecentPost from "./BrowseRecentPost/BrowseRecentPost";
import CustomerReview from "./CustomerReview/CustomerReview";
import OurFeaturedProducts from "./OurFeaturedProducts/OurFeaturedProducts";
import OurTopCategory from "./OurTopCategory/OurTopCategory";
import Slider from "./Slider/Slider";
import ThreeFeatureImg from "./ThreeFeatureImg/ThreeFeatureImg";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import TwoFeatureImg from "./TwoFeatureImg/TwoFeatureImg";
import WeeklyBestDeals from "./WeeklyBestDeals/WeeklyBestDeals";

const Home = () => {
  PageView();
  return (
    <div>
      <MessengerCustomerChat
        pageId="105274921383668"
        appId="1184899329559971"
      ></MessengerCustomerChat>
      <Slider />
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
