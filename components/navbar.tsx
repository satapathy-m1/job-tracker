"use client";

import { Briefcase, Ghost } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { getSession, signOut } from "@/lib/auth/auth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Sign } from "crypto";
import SignOutButton from "./sign-out-btn";
import { useSession } from "@/lib/auth/authClient";

export default function Navbar() { 
    const {data : session} = useSession();
    return (

        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
                    <Briefcase className="h-6 w-6 mr-2 inline-block" />
                    Job Tracker
                </Link>
                <div className="flex items-center gap-4">
                    {session?.user ?(
                    <>
                        <Link href = "/dashboard"><Button variant="ghost" className="text-gray-700 hover:text-black">Dashboard</Button>
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" >
                                    <Avatar>
                                        <AvatarFallback className="bg-primary text-white">
                                            {session.user.name?.charAt(0).toUpperCase() || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    <div>
                                        <p>{session.user.name}</p>
                                        <p>{session.user.email}</p>
                                        </div>
                                </DropdownMenuLabel>
                                <SignOutButton />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>) : (<>
                    <Link href = "/sign-in"><Button variant="ghost" className="text-gray-700 hover:text-black">Log In </Button></Link>
                    <Link href = "/sign-up"><Button className="bg-primary hover:bg-primary/90">Start for free</Button></Link>
                    </>)}
                </div>
            </div>
        </nav>
    );
}