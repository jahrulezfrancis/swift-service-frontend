import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {  Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import SlideInAniamtion from '../Animation/SlideIn';
import Image1 from "../../../assets/dispatch.jpg"


interface SliderProps {
  heading: string;
  description: string;
}


export default function HeroSlider() {
  function SliderComponent(props: SliderProps) {
    return (
      <SlideInAniamtion children={
          <Flex  bgSize="cover" w="100vw" height="600px" bgImage={Image1} align="center" justify="center">
            <Stack w={600} height="100%" justify="center" align="center">
              <Heading>{props.heading}</Heading>
              <Text textAlign="center">{props.description}</Text>
              <Button>Contact us</Button>
            </Stack>
          </Flex>
      } />

    )
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderComponent heading='Delivery Service' description="Delegate your daily tasks to us, from grocery shopping to package collection, and we'll handle them efficiently and promptly." />
        </SwiperSlide>
        <SwiperSlide>
          <SliderComponent heading='Swift lunch' description='Swift Services specializes in pickup and delivery services, offering efficient and timely transportation of packages, documents, and goods to various locations.' />
        </SwiperSlide>
        <SwiperSlide>
          <SliderComponent heading='Cleaning' description='Our professional cleaning team will create a clean and organized environment for residential and commercial spaces through regular cleaning, deep cleaning, move-in/move-out cleaning, and office cleaning.' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
