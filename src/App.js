import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layouts/navbar';
import Header from './layouts/header';
import Carousel from './layouts/carousel';
import SectionTitle from './components/section_titile';
function App() {
    return (
        <div className='App'>
            <div className='containe-fluid m-none p-none'>
                <Navbar></Navbar>
                <header className='row'>
                    <div className='col'>
                        <Header></Header>
                    </div>
                </header>
                <div className='row mt-5'>
                    <div className='col'>
                        <SectionTitle
                            sectionTitle='Recent Uploads'
                            metaData='1 day ago'></SectionTitle>
                        <Carousel></Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
