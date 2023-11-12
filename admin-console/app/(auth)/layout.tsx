export default function AuthLayout({
    children
}: {children : React.ReactNode}) {
    return (
        <div className="flex items-center justify-center h-full">
            {children}
        </div>
    )
}

//This is a shorthand for destructuring the props object to extract the children property. 
//It also specifies the type of the children prop as React.ReactNode.

//Now all the componenets inside the (routes) folder will be represented as children and will have same effect of className as on children here.
