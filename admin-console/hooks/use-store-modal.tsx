//We are  trying to create a Zustand store for managing modal state.

import {create} from "zustand";

interface useStoreModalInterface {
    isOpen: boolean,
    onOpen: ()=> void,
    onClose: ()=> void,
};


export const useStoreModal = create<useStoreModalInterface>((set) =>({
    isOpen : false,
    onOpen: ()=> set({isOpen: true}),
    onClose: ()=> set({isOpen: false}),
}));

//In the context of Zustand or similar state management libraries, the set function is a mechanism for updating the state within your store.

