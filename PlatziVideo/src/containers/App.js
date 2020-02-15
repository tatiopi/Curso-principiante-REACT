import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => ( <div className = "App">
        <Header/>
        <Search/>
        <Categories title="Mi lista">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>

        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>

        <Footer/>
    </div>
);

export default App;