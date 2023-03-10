import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignInValidation = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/images/Logo.png"
          alt="Kiwify"
        />
        <h1 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Entrar na sua conta
        </h1>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Ou{" "}
          <a
            href="/Signup"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            fazer cadastro
          </a>
        </p>
      </div>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignInValidation}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  E-mail
                </label>
                <div>
                  <input
                    type="text"
                    autocomplete="username"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-xs text-red-500">{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div class="mt-6">
                <label
                  for="password"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Senha
                </label>
                <div>
                  <input
                    type="password"
                    autocomplete="current-password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-xs text-red-500">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
              </div>
              <div class="mt-2 flex items-center justify-end">
                <div class="text-sm leading-5">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div class="mt-6">
                <span class="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Entrar
                  </button>
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
