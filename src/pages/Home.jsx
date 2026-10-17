import HomeHero from '../components/HomeHero';
import ScratchCardDate from '../components/ScratchCardDate';
import PreWeddingStory from '../components/PreWeddingStory';
import MomentsGallery from '../components/MomentsGallery';
import SacredPheras from '../components/SacredPheras';
import EventsSection from '../components/EventsSection';
import InteractiveGuestQuiz from '../components/InteractiveGuestQuiz';

const Home = () => (
    <>
        <HomeHero />
        <ScratchCardDate />
        <PreWeddingStory />
        <MomentsGallery />
        <SacredPheras />
        <EventsSection />
        <InteractiveGuestQuiz />
        {/* <DriveSection /> -- "Capture Our Moments" drive downloads */}
    </>
);

export default Home;
