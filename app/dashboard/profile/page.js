"use client"
import Link from "next/link";
import Image from "next/image";
import { useSession,signOut } from "next-auth/react";
import { Button } from "@mui/material";

export default function Profile () {
    const {data:session} = useSession()

    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 lg:py-8 px-4 md:px-12 lg:px-16 bg-gray-100">
            <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 rounded-md bg-gray-50 p-2 md:p-6">
                <div className="flex justify-center">
                    <Image 
                    width={80} 
                    height={80} 
                    src={session?.user?.image}
                    alt="profile photo"
                    className="rounded-full"/>
                </div>

                <p className="py-3 border-b border-sky-200">{session?.user?.name}</p>
                <p className="py-3 border-b border-sky-200">{session?.user?.email}</p>
                <p className="py-3 border-b border-sky-200">Customer ID: {session?.user?.id}</p>

                <Button variant="contained" color="error" onClick={() => signOut()}>Log Out</Button>

                <Link 
                className="p-2 bg-blue-700 rounded-md text-lg text-white text-center"
                href="/dashboard/update-profile">Update Profile</Link>
            </div>
        </main>
    )
}