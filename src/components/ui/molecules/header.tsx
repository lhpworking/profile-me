import React from "react"
import { Logo } from "../atoms/logo"
import Link from "next/link"
import { Button } from "../atoms/button"
import { ToggleTheme } from "./toggle-theme"

export const siteConfig = {
    name: 'lhp',
    description: '',
    headerNav: [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Product',
            href: '#product'
        },
        {
            title: 'Contact',
            href: '#contact'
        },
    ],
    links: {
        linkedin: 'https://www.linkedin.com/in/lhngpht/',
        github: 'https://github.com/lhpworking',
    },
}

interface HeaderNavItemProps {
    title: string,
    href: string
}

interface HeaderProps {
    items: {
        name: string,
        description: string,
        headerNav: HeaderNavItemProps[]
    }
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(({
    items,
}, _ref) => {
    return (
        <header className=" border-b border-dashed border-slate-400 h-20 w-full">
            <div className="container flex items-center justify-between h-full">
                <div className="flex items-center gap-2 h-full w-full ">
                    <Logo alt={items.name}></Logo>
                    {
                        items.headerNav?.length ? (
                            <nav className="flex gap-1">
                                {
                                    items.headerNav?.map((item, index) => {
                                        return (
                                            item.href && (
                                                <Button className="p-1.5" variant={'link'} key={index} asChild>
                                                    <Link href={item.href} scroll={true}>
                                                        <p className="inline-block font-normal text-sm">{item.title}</p>
                                                    </Link>
                                                </Button>
                                            )
                                        )
                                    })
                                }
                            </nav>
                        ) : null
                    }
                </div>
                <ToggleTheme></ToggleTheme>
            </div>
        </header>

    )
})

Header.displayName = "Header"

export { Header }