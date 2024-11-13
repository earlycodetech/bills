"use server"
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function AuthorizationCheck () {
    const session = await auth();

    //redirect to sign in page if user is not signed in
    if (!session?.user) {
        redirect("/auth/signin")
    }
}