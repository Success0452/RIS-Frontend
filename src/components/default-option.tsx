import animationData from "../../public/load.json";
import emptyAnimationData from "../../public/empty.json";

export const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export const emptyDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emptyAnimationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
