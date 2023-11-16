
"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
        title = "Create Store"
        description = "Add a new store to manage products and categories"
        isOpen= {storeModal.isOpen}
        onClose={storeModal.onClose}
        >
            Create Store Form
        </Modal>
    );
}


//We want modal component to exist and be accessable throughout the application so we will need providers for that to do that.
