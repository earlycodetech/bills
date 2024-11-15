"use server"
import { auth } from "@/auth";
import { AuthorizationCheck } from "@/config/authorization-check";
import LoanDetails from "./loan-detail";

export default async function Page () {
    const session = await auth();

    return (
        <>
        <AuthorizationCheck/>
        <LoanDetails user={session?.user}/>
        </>
    )
}