
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import HomePage from './HomeSection/HomePage';
import Gallery from './HomeSection/Gallery';
import AboutUs from './HomeSection/AboutUs';
import LatestUpdates from './HomeSection/Updates';
import Footer from './HomeSection/Footer';



export const Routes = () => {
    return(

        <Router>
            <Switch>
                <Route path="/">
                    <HomePage />
                </Route>

                <Route path="/gallery" exact component={Gallery} />

                <Route path="/about">
                    <AboutUs />
                </Route>

                <Route path="/blog">
                    <LatestUpdates />
                </Route>

                
                <Route path="/contact">
                    <Footer />
                </Route>

            </Switch>
        </Router>

    );
};