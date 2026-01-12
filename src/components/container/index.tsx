import { ReactNode } from "react";


export default function Container({children}:{children:ReactNode}) {
 return (
   <div className="w-full max-w-1920 mx-auto">
    {children}
   </div>
  );
}