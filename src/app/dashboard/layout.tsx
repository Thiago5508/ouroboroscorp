import DashboardHeader from "./components/Header";


export default function DasboardLayout({children}:{children:React.ReactNode}){
    return(
        <>
        <DashboardHeader/>
            {children}
        </>
    )
}