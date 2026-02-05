"use client"
import * as React from "react"
import { useEffect } from "react";
import Link from "next/link"
import { LogOut, Menu, Crown, History } from "lucide-react";
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
import { Button } from "../ui/button";
import { useState } from "react";
import { useAuth } from "@/utils/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMediaQuery } from "@/utils/hooks/useMediaQuery";

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
    const { isUser,isAdmin, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    
    useEffect(() => {
        if (isDesktop && open) {
            setOpen(false);
        }
        if (!isDesktop && menuOpen) {
            setMenuOpen(false);
        }
    }, [isDesktop, open, menuOpen]);

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
                        className="rounded-full w-auto h-auto"
                    />
                </Link>
                
                <div className={`flex ${isUser? 'gap-4' : 'gap-10'}`}>
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
                    
                    {isUser ?
                        (
                            <div className="hidden lg:flex gap-4 items-center">
                                <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen} modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <Image
                                            src="/profilePic.png"
                                            alt="profile"
                                            width={25}
                                            height={20}
                                            priority
                                            className="rounded-full w-auto h-auto cursor-pointer"
                                        />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent >
                                        <DropdownMenuGroup className="w-full">
                                            <DropdownMenuLabel className="border-b border-neutral-300">My Account</DropdownMenuLabel>
                                            {isAdmin && (
                                                <Link href="/admin/blogs">
                                                    <DropdownMenuItem className="justify-between  cursor-pointer btn-primary mt-2 border border-orange-300"
                                                    >
                                                        <span>Admin</span>
                                                        <Crown className="h-4 w-4" />
                                                    </DropdownMenuItem>
                                                </Link>
                                            )}
                                            <Link href="/history">
                                                <DropdownMenuItem className="justify-between cursor-pointer btn-sm hover:bg-blue-100 text-blue-700 hover:text-blue-500 border-blue-700 border-2 my-1 mt-2 font-semibold"
                                                >      
                                                    <span>History</span>
                                                    <History className="h-4 w-4 text-blue-600" />
                                                </DropdownMenuItem>
                                            </Link>
                                            <DropdownMenuItem className="justify-between  cursor-pointer btn-secondary hover:bg-orange-100 my-1 mt-2"
                                            onClick={logout}
                                            >
                                                <span>Logout</span>
                                                <LogOut className="h-4 w-4 text-red-700" />
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        )
                        :
                
                        (
                            <div className="hidden lg:flex gap-4 items-center">
                                <Link href="/signin" className="btn-sm btn-secondary cursor-pointer">
                                    Sign in
                                </Link>
                                <Link href="/signup" className="btn-sm border-1 border-[#f28c28] btn-primary cursor-pointer shadow-blue-300 shadow-md hover:shadow-none">
                                    Sign up
                                </Link>
                            </div>
                        )
                    }
                </div>
                <div className="lg:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild >
                            <Button>
                                <Menu style={{height:28, width:28}}/>
                            </Button>
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
    const { isUser,isAdmin, logout } = useAuth();
    return (
        <nav className="mt-8 flex flex-col gap-6 font-semibold">
            {nav.map((items) => {
                return (
                    <div key={items.id}>
                        <Link href={items.href} className="mb-4 text-sm text-muted-foreground" onClick={closeSheet}>{items.name}</Link>
                    </div>
                )
            })}
            {
                isUser ? (
                    <div className="border-t border-dullwhite pt-4">
                        <div className="mb-4">
                            Your Account
                        </div>
                        {isAdmin && (
                            <div className="justify-center items-center gap-4 flex  cursor-pointer btn-md btn-primary mt-2 border border-orange-300">
                                <Link href="/admin/blogs">
                                    Admin
                                </Link>
                                <Crown className="h-5 w-5" />
                            </div>
                        )}
                        <div className=" justify-center items-center gap-4 flex  cursor-pointer btn-md btn-secondary mt-2 border border-orange-300 text-red-700" onClick={logout}>
                                Logout
                            <LogOut className="h-5 w-5 text-red-700" />
                        </div>
                    </div>
                )
                :
                (
                    <div className="border-t border-dullwhite pt-6 flex flex-col gap-3 text-center text-sm font-medium">
                        <Link href="/signin" className="btn-md btn-secondary cursor-pointer" onClick={closeSheet}>
                            Sign in
                        </Link>
                        <Link href="/signup" className="btn-md border-1 border-[#f28c28] btn-primary cursor-pointer shadow-blue-300 shadow-md hover:shadow-none">
                            Sign up
                        </Link>
                    </div>
                )
            }
         </nav>
    )
}