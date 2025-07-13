import { useNavigate, Link } from 'react-router-dom';
import Layout from '../Layout';
import Logo from "../../../assets/images/logo.png";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const NewPassword = () => {
    const navigate = useNavigate();

    const initialValues = {
        newPassword: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        newPassword: Yup.string()
            .required('New Password is required')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must be 8+ chars with 1 uppercase, 1 lowercase, 1 number, and 1 special character'
            ),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
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
                        <h3 className="text-2xl font-bold">New Password</h3>
                        <p className="text-sm text-gray-500">
                           Almost done! Choose a new password to finish resetting your account.
                        </p>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            navigate("/");
                        }}
                    >
                        {() => (
                            <Form className="space-y-4">
                                <div>
                                    <Field
                                        name="newPassword"
                                        type="password"
                                        placeholder="New Password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    />
                                    <ErrorMessage name="newPassword" component="div" className="text-red-500 text-sm mt-1" />
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
                                    Reset Password
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
    );
};
