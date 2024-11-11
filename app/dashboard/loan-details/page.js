"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { AppContext } from "@/config/context.config";
import { db } from "@/config/firebase.config";
import { doc,getDoc } from "firebase/firestore";
import { Skeleton } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import {TextField,Button} from "@mui/material";

const schema = yup.object().shape({
    amount: yup.number().required().min(1),
});

export default function History () {
    const {loanDocId} = React.useContext(AppContext);
    const [loan,setLoan] = React.useState(null);
    const [totalOffsets,setTotalOffsets] = React.useState(0);

    const router = useRouter();

    React.useEffect(() => {
        if (loanDocId === null) {
            router.push("/dashboard/history")
        }
    },[]);

    React.useEffect(() => {
        const handleDocFetch = async () => {
            const docRef = doc(db,"loans",loanDocId);
            const res = await getDoc(docRef);

            if (res.exists()) {
                setLoan(res.data())
            } else {
                alert("Invalid request ID")
            }
        }

        //call the function to execute
        handleDocFetch()
    },[]);

    const { handleSubmit,handleChange,touched,errors,values } = useFormik({
        initialValues: {amount:undefined},
        onSubmit: () => {

        },
        validationSchema:schema
    });

    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-16">
            <div className="w-[380px] min-h-[400px] bg-white rounded-md p-4">
                <h1 className="text-xl text-gray-800 mb-4">Loan Details</h1>

                { loan !== null ? 
                <div className="flex flex-col gap-4">
                   <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Amount</li>
                        <li className="text-lg text-gray-700 text-end">₦{loan.amount}</li>
                   </ul>
                   <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Payback Amount</li>
                        <li className="text-lg text-gray-700 text-end">₦{loan.payback}</li>
                   </ul>
                   <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Duration</li>
                        <li className="text-lg text-gray-700 text-end">{loan.duration} days</li>
                   </ul>
                   <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Rate</li>
                        <li className="text-lg text-gray-700 text-end">{loan.rate}%</li>
                   </ul>
                   <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Due Date</li>
                        <li className="text-lg text-gray-700 text-end">{}</li>
                   </ul>
                   <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Total Upsets</li>
                        <li className="text-lg text-gray-700 text-end">₦{}</li>
                   </ul>

                   <form 
                   onSubmit={handleSubmit} 
                   style={{display:totalOffsets >= loan.amount ? "none" : "block"}}
                   className="bg-gray-200 p-4 rounded-md">
                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-xs text-gray-700">Offset this loan</label>
                            <TextField
                            type="number"
                            id="amount"
                            label="amount"
                            value={values.amount}
                            onChange={handleChange}/>
                            {touched.amount && errors.amount ? <span className="text-xs text-red-500">{errors.amount}</span> : null}
                        </div>

                        <Button type="submit" color="error" variant="outlined">CONTINUE</Button>
                   </form>
                </div>
                :
                <div className="flex flex-col gap-4">
                    <Skeleton variant="rectangular" className="w-full h-14 rounded-md" />
                    <Skeleton variant="rectangular" className="w-full h-14 rounded-md" />
                    <Skeleton variant="rectangular" className="w-full h-14 rounded-md" />
                </div>
                }

            </div>
        </main>
    )
}