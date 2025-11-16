import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./StoriesSection.css";
import ProjectCard from "./projectcard.jsx"; // Make sure the filename is correct

function StoriesSection({id}) {
  const stories = [
    {
      id: 1,
      title: "My Portfolio",
      description: "A unique design philosophy , from a vibrant color story to subtle micro interactions guided the creation of this portfolio. The goal? To fully immerse the user in the experience itself. ",
      image: "/assets/portfolio.jpg",
      skills: ["Product Design", "UX Copy-writing"], // Added skills
    },
    {
      id: 2,
      title: "Elevating the Alumni Experience",
      description: "Addressing a common industry challenge: high user churn in alumni platforms. By focusing on intuitive design and new interactive features, the goal was to transform a static directory into a dynamic, living community.",
      image: "/assets/buasac.jpg",
      skills: ["Product Design", "UX Copywritting"], // Added skills
    },
    {
      id: 3,
      title: "A case study in visiual storytelling",
      description: "Took on the challenge of transforming a traditional industry with modern design principles. The goal? To use visual storytelling and a clean user journey to build trust and make a direct-to-consumer model beautiful in its simplicity.",
      image: "/assets/naijagro.png",
      skills: ["Product Design", "UX Copywritting", "W.I.P"], // Added skills
    },
    {
      id: 4,
      title: "Re-imagining digital health experience",
      description: "Creating a calm and secure user experience leveraging color and copy to soothe anxiety. The core innovation was a hands-off emergency feature, designed to provide critical peace of mind when users need it most.",
      image: "/assets/Zoeverse.jpg",
      skills: ["Product Design", "UX Copywritting"], // Added skills
    },
  ];


return (
    <section className="stories-section" id={id}>
        <div>
            <h3 className="headline-header">PRODUCTS</h3>
            <h2 className="headline">Some stories <span className="headline-accent">I've told</span></h2>
        </div>
        <div>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1.5}
                spaceBetween={32}
                centeredSlides={true}
                navigation
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                    type: 'custom',
                    renderCustom: function(swiper, current, total) {
                        return `
                            <div class="custom-progress-bar">
                                <div class="custom-progress-fill" style="width: ${
                                    (current / total) * 100
                                }%;"></div>
                            </div>
                            <div class="custom-pagination-text">
                                <span class="current-slide">${current}</span>
                                <span class="separator">/</span>
                                <span class="total-slides">${total}</span>
                            </div>
                        `;
                    },
                }}
                className="stories-slider"
            >
                {stories.map((story) => (
                    <SwiperSlide className="swiperslide" key={story.id}>
                        <ProjectCard
                            title={story.title}
                            description={story.description}
                            image={story.image}
                            skills={story.skills}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Move the custom pagination container below the Swiper */}
            <div className="custom-pagination"></div>
        </div>
    </section>
);
}

export default StoriesSection;