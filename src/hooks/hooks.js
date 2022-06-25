import { useState, useEffect } from "react";
import { useGlobalContext } from "../hooks";

export const hooks = () => {
    const { isSidebarOpen } = useGlobalContext();
    const [carouselVisible, setCarouselVisible] = useState(true)
    

    useEffect(() => {

    }, [isSidebarOpen])
};