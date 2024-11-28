import styles from "./experience.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselDiv from "../../components/carouselDiv/CarouselDiv";

import printSaathi from "../../assets/images/printSaathi.png";
import malang from "../../assets/images/malang.png";
import vogel from "../../assets/images/vogel.png";

const Experience = () => {
  const detailsOne = {
    title: "Vogel",
    description: "A skate merch streetwear online store",
    Time: "October 2024 | November 2024",
    Client: "Jake Lyles, London",
  };
  const detailsTwo = {
    title: "Malang",
    description: "A travel app for backpackers",
    Time: "January 2024 | March 2024",
    Client: "Manish Reddy, Dehradun",
  };
  const detailsThree = {
    title: "Print Saathi",
    description: "A print shop website",
    Time: "April 2024 | June 2024",
    Client: "Lucky Raj, Jalandhar",
  };

  return (
    <div className={styles.experienceContainer}>
      <h1 className={styles.heading}>Experience</h1>
      <h2 className={styles.subHeading}>
        Crafted with Expertise, Driven by Results
      </h2>
      <h3 className={styles.description}>
        My journey in UI/UX has been driven by a passion for creating
        thoughtful, engaging user experiences. With a focus on both form and
        function, I design with intention, blending modern aesthetics with
        strategic insights to deliver work that resonates with users and
        elevates brands.
      </h3>

      <div
        className={`relative w-full flex justify-center item-center py-5 m-0 p-0  ${styles.experienceCarosuel}`}
      >
        <Carousel className="w-full overflow-visible">
          <CarouselContent className="overflow-visible">
            <CarouselItem className="basis-4/4 flex overflow-visible ">
              <CarouselDiv
                pic={vogel}
                details={detailsOne}
                className="overflow-visible"
              />
            </CarouselItem>
            <CarouselItem className="basis-4/4 flex overflow-visible">
              <CarouselDiv pic={malang} details={detailsTwo} />
            </CarouselItem>
            <CarouselItem className="basis-4/4 flex">
              <CarouselDiv pic={printSaathi} details={detailsThree} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="w-[36px] h-[36px]" />
          <CarouselNext className="w-[36px] h-[36px]" />
        </Carousel>
      </div>
    </div>
  );
};

export default Experience;
