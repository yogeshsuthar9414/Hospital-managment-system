import { useNavigate, Link } from 'react-router-dom';
import Layout from '../Layout';
import Logo from "../../../assets/images/logo.png";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const CreateAccount = () => {
    const navigate = useNavigate();

    const initialValues = {
        fullName: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string()
            .matches(
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                'Invalid email format'
            )
            .required('Email is required'),
        mobile: Yup.string().required('Mobile no. is required'),
        role: Yup.string().required('Role is required'),
        password: Yup.string()
            .required('Password is required')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must be 8+ characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character'
            ),
        confirmPassword: Yup.string()
            .required('Confirm your password')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
    });

    return (
        <Layout>
            <div className="w-full lg:w-[40%] flex items-center justify-center p-8 pt-0">
                <div className="w-full max-w-sm space-y-5">
                    <div>
                        <img src={Logo} alt="HMS Logo" style={{ height: '100px', width: 'auto', marginLeft: "-11px" }} />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 pt-3">Hospital Management System</h2>
                    <div>
                        <h3 className="text-2xl font-bold">Create New Account</h3>
                        <p className="text-sm text-gray-500">
                            Already have an account?{" "}
                            <Link to="/" className="linkPrimary">Go to login</Link>
                        </p>
                    </div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log("Registered user:", values);
                            navigate('/otp-verify');
                        }}
                    >
                        {() => (
                            <Form className="space-y-4">
                                <div>
                                    <Field
                                        name="fullName"
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    />
                                    <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div>
                                    <Field
                                        name="email"
                                        type="text"
                                        placeholder="Email Address"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div>
                                    <Field
                                        name="mobile"
                                        type="text"
                                        placeholder="Mobile Number"
                                        maxLength="10"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    />
                                    <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div>
                                    <Field
                                        as="select"
                                        name="role"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    >
                                        <option value="">Select Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="doctor">Doctor</option>
                                        <option value="nurse">Nurse</option>
                                        <option value="receptionist">Receptionist</option>
                                    </Field>
                                    <ErrorMessage name="role" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div>
                                    <Field
                                        name="password"
                                        type="password"
                                        maxLength="10"
                                        placeholder="Password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div>
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    />
                                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <button type="submit" className="btnPrimary w-full">
                                    Create Account
                                </button>
                            </Form>
                        )}
                    </Formik>

                    {/* <p className="text-sm text-gray-500 text-center pt-3">
                        Forgot password?{" "}
                        <Link to="/forgot-password" className="linkPrimary">Click here</Link>
                    </p> */}
                </div>
            </div>
        </Layout>
    );
};
