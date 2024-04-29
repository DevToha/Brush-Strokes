import Banner from "../Banner/Banner";
import CraftItem from "../Craft item section/Craft-Items";
import ExtraSection from "../Extra 1/ExtraSection";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
            <ExtraSection></ExtraSection>
            <Banner></Banner>
            <CraftItem></CraftItem>
            <Review></Review>
        </div>
    );
};

export default Home;