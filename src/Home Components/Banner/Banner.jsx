import { useEffect } from 'react';
import './Banner.css'
import { useRef } from 'react';
import { useState } from 'react';

import img1 from './Banner Image/8-bit-graphics-pixels-scene-with-forest.jpg'
import img2 from './Banner Image/autism-day-awareness-collage-style-with-people.jpg'
import img3 from './Banner Image/digital-art-beautiful-mountains.jpg'
import img4 from './Banner Image/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai.jpg'

const Banner = () => {
    const [active, setActive] = useState(0);
    const [prev, setPrev] = useState(0);

    // Refs
    const contentRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const nameRef = useRef("");

    const sliderContent = [
        {
            img: img1,
            name: "Forest Landscape painting",
        },
        {
            img: img2,
            name: "Oil Painting",
        },
        {
            img: img3,
            name: "Mountain view canvas",
        },
        {
            img: img4,
            name: "Water Colour Painting",
        },
    ];

    const Slide = (type) => {
        let local;
        if (type === "next") {
            local = active + 1;
            sliderContent.length - 1 < local ? setActive(0) : setActive(local);
        }
        if (type === "prev") {
            local = active - 1;
            local < 0 ? setActive(sliderContent.length - 1) : setActive(local);
        }
        setPrev(active);
    };

    useEffect(() => {
        contentRef.current.style.bottom = "-100%";
        prevRef.current.style.left = "-10%";
        nextRef.current.style.right = "-10%";
        setTimeout(() => {
            nameRef.current.innerText = sliderContent[active].name;
            contentRef.current.style.bottom = "0%";
            prevRef.current.style.left = "0%";
            nextRef.current.style.right = "0%";
        }, 1000);
    }, [active]);

    return (
        <div>
            <div className="rounded-xl relative md:mt-10 overflow-hidden color">
                <div className="w-[600px] h-[400px] relative">
                    {sliderContent.map((slide, i) => {
                        return (
                            <img
                                src={slide.img}
                                key={i}
                                alt="slideImg"
                                className={`h-[433px] w-[800px] absolute object-cover inset-0 duration-[2.5s] ease-out transition-[clip-path] ${i === active ? "clip-visible" : "clip-hidden"
                                    }`}
                            />
                        );
                    })}
                    <img
                        src={sliderContent[prev].img}
                        alt="previmg"
                        className="w-[800px] h-[433px]  object-cover"
                    />
                </div>
                <div>
                    <button id="back" ref={prevRef} onClick={() => Slide("prev")}>
                        <ion-icon name="chevron-back-outline" size="large"></ion-icon>
                    </button>
                    <button
                        id="forward"
                        ref={nextRef}
                        className="right-0"
                        onClick={() => Slide("next")}
                    >
                        <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
                    </button>
                </div>
                <div className="content" ref={contentRef}>
                    <h1 ref={nameRef}>{sliderContent[0].name}</h1>
                    <p>
                        Painting is a form of visual art that involves applying pigment and color to a surface.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;