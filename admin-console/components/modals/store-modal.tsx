
"use client";

import { Modal } from "../ui/modal";

export const StoreModal = () => {
    
    return (
        <Modal
        title = "Create Store"
        description = "Add a new store to manage products and categories"
        isOpen= {false}
        onClose={()=> {}}
        >
            Create Store Form
        </Modal>
    );
}