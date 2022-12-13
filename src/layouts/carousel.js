import React, { useEffect, useState } from 'react';
import { FreeMode, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import '../assets/carousel.css';
import errorWaifu from '../assets/images/404-waifu.png';
import { loadAiWaifuImages } from '../utils/requests';
const Carousel = (props) => {
	const [aiWaifuImages, setAiWaifuImages] = useState([]);
	const fetchImages = async () => {
		const result = await loadAiWaifuImages();
		if (result.data) {
			setAiWaifuImages(result.data);
		}
	};

	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<Swiper
			modules={[FreeMode, Scrollbar]}
			spaceBetween={3}
			slidesPerView={2}
			freeMode
			scrollbar
			onSwiper={(swiper) => ''}
			onSlideChange={() => ''}
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
			{aiWaifuImages.length
				? aiWaifuImages.map((ai_waifu_image) => {
						return (
							<SwiperSlide key={ai_waifu_image.id}>
								<img
									src={ai_waifu_image.image_url}
									alt='Ops Something went wrong'
								/>
							</SwiperSlide>
						);
				  })
				: [1, 2, 3].map((key) => {
						return (
							<SwiperSlide>
								<img
									key={key}
									src={errorWaifu}
									alt='Ops Something went wrong'
								/>
							</SwiperSlide>
						);
				  })}
		</Swiper>
	);
};

export default Carousel;
