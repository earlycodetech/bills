"use client"
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import { FaUserEdit } from "react-icons/fa";

const schema = yup.object().shape({
    firstName: yup.string().required().min(3),
    lastName: yup.string().required().min(3),
    phone: yup.string().required().min(11).max(17),
    address: yup.string().required().min(12).max(300)
});

export default function UpdateProfile () {

    const { handleSubmit,handleChange,handleBlur,errors,touched,values } = useFormik({
        initialValues: {firstName:"",lastName:"",phone:"",address:""},
        onSubmit: () => {
            console.log("form was submitted")
        },
        validationSchema: schema 
    });

    return (
        <main className="min-h-screen flex justify-center px-2 md:px-16 lg:px-20 py-16 bg-gray-200">
            <div className="w-full md:w-[400px] p-4 rounded-md bg-gray-50">
                <blockquote className="flex items-center gap-2">
                    <FaUserEdit className="text-2xl"/>
                    <span className="block text-2xl">Update Your Profile</span>
                </blockquote>

                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-3">
                        <TextField
                        type="text"
                        id="firstName"
                        label="first name"
                        variant="outlined"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="eg. Ademola"
                        className="w-full"
                        />
                        {touched.firstName && errors.firstName ? <span className="text-xs text-red-500">{errors.firstName}</span> : null}
                    </div>
                    <div className="mb-3">
                        <TextField
                        type="text"
                        id="lastName"
                        label="last name"
                        variant="outlined"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="eg. Ademola"
                        className="w-full"
                        />
                        {touched.lastName && errors.lastName ? <span className="text-xs text-red-500">{errors.lastName}</span> : null}
                    </div>
                    <div className="mb-3">
                        <TextField
                        type="tel"
                        id="phone"
                        label="phone"
                        variant="outlined"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="eg. Ademola"
                        className="w-full"
                        />
                        {touched.phone && errors.phone ? <span className="text-xs text-red-500">{errors.phone}</span> : null}
                    </div>
                    <div className="mb-3">
                        <TextField
                        multiline
                        rows={4}
                        type="text"
                        id="address"
                        label="address"
                        variant="outlined"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="eg. Ademola"
                        className="w-full"
                        />
                        {touched.address && errors.address ? <span className="text-xs text-red-500">{errors.address}</span> : null}
                    </div>

                    <Button type="submit" variant="contained">Update Profile</Button>
                </form>
            </div>
        </main>
    )
}