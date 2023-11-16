"use client"
import {useState, useEffect } from "react";
import { StoreModal } from "@/components/modals/store-modal";


export const MOdalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=> {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    //This not mounted return null is being used to prevent Hydration error, as this modal is a client side componenet and we will place it on the app/layout.tsx on the server side code. So we ensure that there is no mismatch on server and client rendering the same thing hence if no mounted return null from client side
    
    return(
        <>
            <StoreModal/>
        </>
    );
}