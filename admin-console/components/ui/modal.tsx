// THis is going to standardize the use of dialog componenet
"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";

//interface in  typically refers to the structure or shape of data, and it's often used in the context of TypeScript to define the expected shape of objects or props
interface ModalProp {
    title: string,
    description: string,
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode;
};

// React.FC is a TypeScript generic type that stands for "React Functional Component." It's often used to define the type of a React functional component. When you declare a component using React.FC, you can pass in the props that the component expects as a generic parameter

export const Modal: React.FC<ModalProp> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => {
    const onChange = (open:boolean) => {
        if(!open){
            onClose();
        };
    };

    return(
        <Dialog open={isOpen} onOpenChange={onChange} >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                    <div>
                        {children}
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};