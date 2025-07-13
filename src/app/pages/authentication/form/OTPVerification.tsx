import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout'
import Logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const OTPVerification = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState<string>("");
    const [timer, setTimer] = useState<number>(60);
    const [resendVisible, setResendVisible] = useState<boolean>(false);

    const initialValues = {
        otp: '',
    };

    const validationSchema = Yup.object({
        otp: Yup.string()
            .matches(/^\d{6}$/, 'OTP must be exactly 6 digits')
            .required('OTP is required'),
    });

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        } else {
            setResendVisible(true);
        }

        return () => clearInterval(interval);
    }, [timer]);

    return (
        <Layout>
            <div className="w-full lg:w-[40%] flex items-center justify-center p-8 pt-0">
                <div className="w-full max-w-sm space-y-6">
                    <div>
                        <img src={Logo} alt="HMS Logo" style={{ height: '100px', width: 'auto', marginLeft: "-11px" }} />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 pt-4">Hospital Management System</h2>
                    <div>
                        <h3 className="text-2xl font-bold">OTP Verification</h3>
                        <p className="text-sm text-gray-500">
                            Enter the 6-digit code sent to your registered email or mobile number.
                        </p>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            navigate("/new-password");
                        }}
                    >
                        {() => (
                            <Form className="space-y-4">
                                <div>
                                    <Field
                                        type="password"
                                        placeholder="Enter valid OTP"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md inputPrimary"
                                        maxLength={6}
                                        name="otp"
                                        onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                            const input = e.currentTarget;
                                            input.value = input.value.replace(/[^\d]/g, ''); // remove all non-digits
                                        }}
                                    />
                                    <ErrorMessage name="otp" component="div" className="text-red-500 text-sm mt-1" />
                                    <div>
                                        {resendVisible ? (
                                            <p className="text-sm text-end text-gray-700 pt-3">
                                                Didn't receive the code?{" "}
                                                <button
                                                    type="button"
                                                    className="linkPrimary underline"
                                                >
                                                    Resend Code
                                                </button>
                                            </p>
                                        ) : (
                                            <p className="text-sm text-end text-gray-500 pt-3">
                                                You can resend code in <span className="font-medium" style={{ color: "#F79B72" }}>{timer}s</span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btnPrimary"
                                >
                                    Verify OTP
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <p className="text-sm text-gray-500 text-center pt-3">
                        Back To Login? <Link to="/" className="linkPrimary">Click here</Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}
