import React from "react";

// Components
import Heading from "./Heading";

// Assets
import PlusIcon from "./../../../assets/PlusIcon.svg";

const IconsSection = () => {
    const iconCards = [
        {
            id: 1,
            img: PlusIcon,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem quidem, consequatur hic modi doloremque?",
        },
        {
            id: 2,
            img: PlusIcon,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem quidem, consequatur hic modi doloremque?",
        },
        {
            id: 3,
            img: PlusIcon,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem quidem, consequatur hic modi doloremque?",
        },
    ];
    return (
        <div className=" mb-14">
            <Heading text=" Our Values" />
            <p className=" mb-8 text-2xl w-2/4 sm:px-20 mx-auto my-0">
                Consequat faucibus tristique vitae vulputate tristique vitae
                vulputate tristique vitae faucibus tristique vitae vulputate
                tristique vitae
            </p>

            <div className=" grid grid-cols-3 px-20 mb-12">
                {iconCards.map((x) => (
                    <div
                        className={
                            x.id === 3
                                ? "flex flex-col border mr-0 py-8 hover:bg-blue-700 hover:text-white "
                                : "flex flex-col border mr-8 rounded  py-8 hover:bg-blue-700 hover:text-white"
                        }
                        key={x.id}
                    >
                        <img
                            src={x.img}
                            alt=""
                            className=" items-center h-20 sm:mb-4"
                        />
                        <p className=" sm:py-6 sm:px-8   text-lg">{x.text}</p>
                    </div>
                ))}
            </div>

            <div className=" grid grid-cols-3 px-20 mb-12">
                {iconCards.map((x) => (
                    <div
                        className={
                            x.id === 3
                                ? "flex flex-col border rounded mr-0 py-8 hover:bg-blue-700 hover:text-white "
                                : "flex flex-col border mr-8 rounded  py-8 hover:bg-blue-700 hover:text-white"
                        }
                        key={x.id}
                    >
                        <img
                            src={x.img}
                            alt=""
                            className=" items-center h-20 sm:mb-4"
                        />
                        <p className=" sm:py-6 sm:px-8   text-lg">{x.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconsSection;
