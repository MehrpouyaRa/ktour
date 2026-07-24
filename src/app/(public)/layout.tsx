import Footer from "@/component/layout/Footer"
import { ReactNode } from "react"

function layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col">
            {children}
            <Footer />
        </div>
    )
}

export default layout