
"use client";


import { useStoreModal } from "@/hooks/use-store-modal";
import * as z from "zod";
import { Modal } from "@/components/ui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import {Input} from "@/components/ui/input";


//form validation
const formSchema = z.object({
    name: z.string().min(1), // atleast 1 char is req to name store
});

export const StoreModal = () => {
    const storeModal = useStoreModal();

    //using hook for form
    const form = useForm<z.infer<typeof formSchema>>({
        // now we will add resolver so that our form can actually be validated using zod
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // to create store
        console.log(values);
    };

    return (
        <Modal
        title = "Create Store"
        description = "Add a new store to manage products and categories"
        isOpen= {storeModal.isOpen}
        onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 pb-4 py-2">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                            name ="name"
                            control = {form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Store Name" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                            <Button type="submit">Create Store</Button>
                            <Button variant={"destructive"} onClick={storeModal.onClose} >Close</Button>
                        </div>

                        </form>
                    </Form>
                </div>
            </div>

        </Modal>
    );
}


//We want modal component to exist and be accessable throughout the application so we will need providers for that to do that.
