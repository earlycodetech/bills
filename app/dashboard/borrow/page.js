"use server"
import { auth } from "@/auth";
import { AuthorizationCheck } from "@/config/authorization-check";
import { Borrow } from "./borrow";

export default async function Page () {
    const session = await auth();

    return (
        <>
        <AuthorizationCheck/>
        <Borrow userId={session?.user?.id}/>
        </>
    )
}