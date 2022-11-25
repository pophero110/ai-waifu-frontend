import React, { Component } from 'react';
import axios from 'axios';
import { FreeMode, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import '../assets/carousel.css';
import img from '../assets/images/header-background-2.png';
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ai_waifu_images: [],
        };
    }

    loadAiWaifuImages() {
        axios
            .get('/api/ai_waifus')
            .then((res) => {
                this.setState({ ai_waifu_images: res.data });
            })
            .catch((error) => console.log(error));
    }

    componentDidMount() {
        this.loadAiWaifuImages();
    }

    render() {
        return (
            <Swiper
                modules={[FreeMode, Scrollbar]}
                spaceBetween={3}
                slidesPerView={2}
                freeMode
                scrollbar
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                }}>
                {this.state.ai_waifu_images.map((ai_waifu_image) => {
                    return (
                        <SwiperSlide>
                            <img
                                src={ai_waifu_image.image_url}
                                alt='Missing waifu image'
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    }
}

export default Carousel;
