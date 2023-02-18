import '../App.css';

import Header from '../components/Header/index.js';
import AppFooter from '../components/Footer/index.js';
import Fristpage from '../pages/Fristpage.js';
import Generate from '../pages/Generate.js';
import BestCreations from '../pages/BestCreations.js';
import Story from '../pages/Story.js';
import Latest from '../pages/Latest.js';

export default function Dashboard() {
    return (
        <div>
            <Header />
            <Fristpage />
            <Generate />
            <BestCreations />
            <Story />
            <Latest />
            <AppFooter />
        </div>
    )
}