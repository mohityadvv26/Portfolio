import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        }
        try {
            await axios.post("https://getform.io/f/raeqgvza",userInfo);
            toast.success("Message sent successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message. Please try again later.");
        }
      }
    return (
        <>
            {/* form details are taken from getform.io */}
            <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mb-10 mt-10">
                <h1 className="text-3xl font-bold mb-4">Contact me</h1>
                <p>Please fill out the form below to contact me</p>
                <div className="flex flex-col items-center justify-center mt-5">
                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    // action="https://getform.io/f/raeqgvza" 
                    // method="POST"
                    className="bg-slate-300 w-96 px-8 py-6 rounded-xl"
                    >
                        <h1 className="text-xl font-semibold mb-4">Send your Message</h1>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="block text-gray-700">Full Name:</label>
                            <input
                                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your full name"
                                type="text" id="name" name="name" required
                                {...register("name", { required: true })}
                            />
                            {errors.namw && <span>This field is required</span>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email Adderess:</label>
                            <input
                                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email address"
                                type="email" id="email" name="email" required
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="message" className="block text-gray-700">Message:</label>
                            <textarea
                                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your message"
                                type="text" id="message" name="message" required
                                {...register("message", { required: true })}
                            />
                            {errors.message && <span>This field is required</span>}
                        </div>
                        <button type="submit" className="bg-black text-white rounded-xl py-3 px-2 hover:bg-slate-700 duration-300">
                            Send
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contact
