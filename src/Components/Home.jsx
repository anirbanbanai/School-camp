// import Sectionone from "../Homes/Sectionone";
import { Helmet } from "react-helmet-async";
import PopularClasses from "../Homes/PopularClasses";
import PopularInstractor from "../Homes/PopularInstractor";
import Sectiontwo from "../Homes/Sectiontwo";
import Expre from "./Expre";
import ExtraSection from "./ExtraSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home </title>
            </Helmet>
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