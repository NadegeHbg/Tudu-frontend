import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash } from "react-icons/fa";
import { handleRegistration } from "../../events/axiosGlobal";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Cookies from "js-cookie";

export default function Registration() {
    const [showModal, setShowModal] = React.useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const navigate = useNavigate();

    const onSubmit = async (data = {}) => {
        console.log(data, "data");
        handleRegistration(data);
        navigate("/login");
    };

    return (
        <div className="container mx-auto">
            <button
                className="justify-center items-center flex bg-cyan-900 text-white active:bg-pink-600 font-logoFont uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg  mr-1 mb-1 "
                type="button"
                onClick={() => setShowModal(true)}
            >
                Register
            </button>
            {!showModal ? null : (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  ">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*Content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white  ">
                                {/*Title Section*/}

                                {/*Body*/}
                                <div className="relative p-6 flex-auto">
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                name="username"
                                                className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                {...register("email")}
                                                placeholder="Choose Your Username"
                                                {...register("username", {
                                                    required: true,
                                                    minLength: {
                                                        value: 4,
                                                        message: "Username must have at least 8 characters",
                                                    },
                                                })}
                                            />
                                            {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="firstName" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                {...register("firstName")}
                                                placeholder="Add First Name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                                Last Name
                                            </label>
                                            <input
                                                type="test"
                                                name="lastName"
                                                className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                {...register("secondName")}
                                                placeholder="Add Last Name "
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                {...register("email")}
                                                placeholder="Add Your Email "
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                                Password
                                            </label>
                                            <input
                                                type={passwordShown ? "text" : "password"}
                                                name="password"
                                                {...register("password", {
                                                    required: true,
                                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                                                })}
                                                className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                {...register("email")}
                                                placeholder="Add Your Password "
                                                required
                                            />
                                            <FaRegEyeSlash onClick={togglePassword} />
                                            {errors.password && (
                                                <p style={{ color: "red" }}>
                                                    Password should include capital letter, special symbol, number and at least to be 4 characters
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-logoFont text-gray-900 ">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                className="shadow-sm text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-lightcream"
                                                required
                                                placeholder="Confirm Your Email "
                                                {...register("confirmPassword", {
                                                    required: true,
                                                    validate: (val) => {
                                                        if (watch("password") !== val) {
                                                            return "Your passwords do not match";
                                                        }
                                                    },
                                                })}
                                            />

                                            {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-logoFont uppercase px-6 py-2 text-sm  mr-1 mb-1 transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                type="submit"
                                                className="bg-cyan-900 text-white active:bg-emerald-600 font-logoFont uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg  mr-1 mb-1 transition-all duration-150 "
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
