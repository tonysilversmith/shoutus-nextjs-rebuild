// import React from "react";
// import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
// import Swiper from "react-id-swiper";
// import { Navigation, Pagination } from "swiper/js/swiper.esm";
// //import ImageGallery from "react-image-gallery";

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];

// // class Carousel extends React.Component {
// //   render() {
// //     return <ImageGallery items={images} />;
// //   }
// // }

// const Carousel = () => {
//   return <div>Carousel</div>;
// };

// export default Carousel;

// const CustomBuildSwiper = () => {
//   const params = {
//     // Provide Swiper class as props
//     Swiper,
//     // Add modules you need
//     // modules: [Navigation, Pagination],
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     spaceBetween: 30,
//   };

//   return (
//     <ReactIdSwiperCustom {...params}>
//       <div>Slide 1</div>
//       <div>Slide 2</div>
//       <div>Slide 3</div>
//       <div>Slide 4</div>
//       <div>Slide 5</div>
//     </ReactIdSwiperCustom>
//   );
// };

// export { CustomBuildSwiper };

// import React from "react";
// import Swiper from "react-id-swiper";

// import "swiper/swiper.scss"; // core Swiper
// import "swiper/modules/navigation/navigation.scss"; // Navigation module
// import "swiper/modules/pagination/pagination.scss"; // Pagination module

// const SimpleSwiper = () => (
//   <Swiper>
//     <div>Slide 1</div>
//     <div>Slide 2</div>
//     <div>Slide 3</div>
//     <div>Slide 4</div>
//     <div>Slide 5</div>
//   </Swiper>
// );

// export default SimpleSwiper;

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

let CarouselList = [
  "https://unsplash.it/800/600",
  "https://unsplash.it/801/600",
  "https://unsplash.it/799/600",
  "https://unsplash.it/800/601",
  "https://unsplash.it/800/599",
];

const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="swiper-height-auto"
      style={{
        maxWidth: "100%",
        //height: "50vh",
      }}
    >
      {CarouselList.map((item, index) => (
        <SwiperSlide
          key={index}
          virtualIndex={index}
          style={{
            maxWidth: "100vw",
            //height: "50vw",
            // "@media (maxWidth: 600px)": {
            // maxHeight: "30vw",
            // backgroundImage: `url(${item})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // },
          }}
        >
          <Image
            style={{
              width: "100vw",
              minHeight: "50vh",
              backgroundSize: "cover",
            }}
            loader={() => item}
            src={item}
            width={1920}
            height={1080}
            alt="image"
          />
        </SwiperSlide>
      ))}
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default Carousel;
