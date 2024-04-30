// import ArtAndCraftCategories from "../Art & Craft Categories Section/ArtAndCraftCategories";
import Banner from "../Banner/Banner";
import CraftItem from "../Craft item section/Craft-Items";
import ExtraSection from "../Extra 1/ExtraSection";
import ExtraSection2 from "../Extra 1/ExtraSection2";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
            <ExtraSection></ExtraSection>
            <Banner></Banner>
            <CraftItem></CraftItem>
            <Review></Review>
            {/* <ArtAndCraftCategories></ArtAndCraftCategories> */}
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;