import { useNavigate, Link } from 'react-router-dom';
import Layout from '../Layout';
import Logo from "../../../assets/images/logo.png";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Login = () => {
    const navigate = useNavigate();

    const initialValues = {
        loginId: '',
        password: '',
    };

    const validationSchema = Yup.object({
        loginId: Yup.string()
            .required('Please enter your registered mobile number or email address')
            .test(
                'is-email-or-mobile',
                'Please enter a valid email address or 10-digit mobile number',
                (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || '') ||
                    /^[6-9]\d{9}$/.test(value || '')
            ),
        password: Yup.string()
            .required('Please enter your password'),
    });

    return (
        <Layout>
            <div className="w-full lg:w-[40%] flex items-center justify-center p-8 pt-0">
                <div className="w-full max-w-sm space-y-6">
                    <div>
                        <img src={Logo} alt="HMS Logo" style={{ height: '100px', width: 'auto', marginLeft: "-11px" }} />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 pt-4">Hospital Management System</h2>
                    <div>
                        <h3 className="text-2xl font-bold">Login</h3>
                        <p className="text-sm text-gray-500">
                            Welcome back! Please log in to continue.
                        </p>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            navigate("/dashboard");
                        }}
                    >
                        {() => (
                            <Form className="space-y-4">
                                <div>
                                    <Field
                                        name="loginId"
                                        type="text"
                                        placeholder="Email or Mobile No."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    />
                                    <ErrorMessage name="loginId" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div>
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <button type="submit" className="btnPrimary w-full">
                                    Login
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <p className="text-sm text-gray-500 text-center pt-3">
                        Forgot password? <Link to="/forgot-password" className="linkPrimary">Click here</Link>
                    </p>
                </div>
            </div>
        </Layout>
    );
};
