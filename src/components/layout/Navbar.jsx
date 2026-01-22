"use client"
import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";

const nav = [
    {
        id: 1,
        name: "Home",
        href:"/"
    },
    {
        id: 2,
        name: "About",
        href:"/about"
    },
    {
        id: 3,
        name: "Blogs",
        href:"/blogs"
    },
    {
        id: 4,
        name: "Donate",
        href:"/donate"
    },
    {
        id: 5,
        name: "Extrass",
        href:"/donate"
    },
]
export default function Navbar() {                                         
    const [open, setOpen] = React.useState(false);
    return (
        <header className="sticky top-0 z-50 w-full border-b backdrop-blur-sm bg-neutral-100/60 border-dullwhite">
           
            <div className="mx-auto max-w-7xl md:py-0 flex justify-between items-center sm:px-10 px-6 ">
                <Link href="/" className="flex items-center py-2 gap-2">
                    <Image
                        src="/logo.png"
                        alt="sanatanisena logo"
                        width={45}
                        height={40}
                        priority
                        className="rounded-full"
                    />
                </Link>
                
                <div className="flex gap-10">
                    <div className="hidden lg:flex">
                        <NavigationMenu className="h-14 flex items-center">
                            <NavigationMenuList className="flex items-center">
                                {nav.map((item) => (
                                    <NavigationMenuItem key={item.id}>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href={item.href}>{item.name}</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    
                    <div className="hidden lg:flex gap-4 items-center">
                        <Link href="/signin" className="btn-sm btn-secondary cursor-pointer">
                            Sign in
                        </Link>
                        <Link href="/upload" className="btn-sm btn-primary cursor-pointer shadow-blue-300 shadow-md hover:shadow-none">
                            Try free analysis
                        </Link>
                    </div>
                </div>
                <div className="lg:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <button className="p-2">
                                <Menu className="h-6 w-6"/>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80 px-6 bg-neutral-100">
                            <VisuallyHidden>
                                <SheetTitle>
                                    mobile navigation
                                </SheetTitle>
                            </VisuallyHidden>
                            <MobileNav closeSheet={() => setOpen(false)} />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

function MobileNav({ closeSheet }) {
    return (
        <nav className="mt-8 flex flex-col gap-6 font-semibold">
            {nav.map((items) => {
                return (
                    <div key={items.id}>
                        <Link href={items.href} className="mb-4 text-sm text-muted-foreground" onClick={closeSheet}>{items.name}</Link>
                    </div>
                )
            })}
            <div className="border-t border-dullwhite pt-6 flex flex-col gap-3 text-center text-sm font-medium">
                <Link href="/signin" className="btn-md btn-secondary cursor-pointer" onClick={closeSheet}>
                    Sign in
                </Link>
                <Link href="/tryFree" className="btn-primary btn-md cursor-pointer" onClick={closeSheet}>
                    Try free analysis
                </Link>
            </div>
         </nav>
    )
}