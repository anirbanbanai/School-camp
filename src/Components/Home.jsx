// import Sectionone from "../Homes/Sectionone";
import PopularClasses from "../Homes/PopularClasses";
import PopularInstractor from "../Homes/PopularInstractor";
import Sectiontwo from "../Homes/Sectiontwo";
import Expre from "./Expre";
import ExtraSection from "./ExtraSection";

const Home = () => {
    return (
        <div>
            {/* <Sectionone></Sectionone> */}
            <Sectiontwo></Sectiontwo>
            <PopularClasses></PopularClasses>
            <PopularInstractor></PopularInstractor>
            <ExtraSection></ExtraSection>
            <Expre></Expre>
        </div>
    );
};

export default Home;