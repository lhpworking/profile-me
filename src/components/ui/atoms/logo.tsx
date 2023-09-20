
import Link from "next/link"
import React from "react"

interface LogoProps {
    alt: string
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(({
    alt
},ref)=>{
    return(
        <Link href="/" className=" p-2 rounded-sm border-dashed border border-slate-400">
            <h1 className="text-2xl font-medium"> LHP </h1>
        </Link>
    )
})

Logo.displayName = "Logo"

export { Logo }