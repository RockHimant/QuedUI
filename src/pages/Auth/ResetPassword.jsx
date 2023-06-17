import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

// Redux
import { Link } from "react-router-dom"

import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Form,
  Input,
  Label,
  FormFeedback,
} from "reactstrap"

// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"

import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"

// import images
import profile from "../../assets/images/profile-img.png"
import logo from "../../assets/images/logo.svg"
import lightlogo from "../../assets/images/logo-light.svg"
import UserPool from "UserPool"

const ResetPassword = () => {
  const [show, setShow] = useState(false)
  const email = localStorage.getItem("email")

  const navigate = useNavigate()

  //meta title
  document.title = "Change Password"

  // Form validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required(
        "Please enter your current password"
      ),
      newPassword: Yup.string().required("Please enter your new password"),
    }),

    onSubmit: values => {
      const user = new CognitoUser({
        Username: email,
        Pool: UserPool
      })

      user.getSession((error, session) => {
        if (session) {
          console.log(session);

        }
        if (error) {
          console.log(error);
        }
      })

      user.changePassword(
        values.currentPassword,
        values.newPassword,
        (result, error) => {
          if (result) {
            debugger;
            navigate("/")
          }

          if (error) {
            console.error(error)
          }
        }
      )

      console.log("values", values)
    },
  })
  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary"></h5>
                        <p>Reset your password.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div className="auth-logo">
                    <Link to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={lightlogo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                    <Link to="/" className="auth-logo-dark">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={e => {
                        e.preventDefault()
                        validation.handleSubmit()
                        return false
                      }}
                    >
                      <div className="mb-3">
                        <Label className="form-label">Current Password</Label>
                        <Input
                          name="currentPassword"
                          className="form-control"
                          placeholder="Enter username"
                          type={show ? "text" : "password"}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.currentPassword || ""}
                          invalid={
                            validation.touched.username &&
                            validation.errors.currentPassword
                              ? true
                              : false
                          }
                        />
                        {validation.touched.currentPassword &&
                        validation.errors.currentPassword ? (
                          <FormFeedback type="invalid">
                            {validation.errors.currentPassword}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">New Password</Label>
                        <div className="input-group auth-pass-inputgroup">
                          <Input
                            name="newPassword"
                            value={validation.values.newPassword || ""}
                            type={show ? "text" : "password"}
                            placeholder="Enter Password"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.newPassword &&
                              validation.errors.newPassword
                                ? true
                                : false
                            }
                          />
                          <button
                            onClick={() => setShow(!show)}
                            className="btn btn-light "
                            type="button"
                            id="password-addon"
                          >
                            <i className="mdi mdi-eye-outline"></i>
                          </button>
                        </div>
                        {validation.touched.newPassword &&
                        validation.errors.newPassword ? (
                          <FormFeedback type="invalid">
                            {validation.errors.newPassword}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block "
                          type="submit"
                        >
                          Reset
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign in with</h5>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="social-list-item bg-primary text-white border-primary"
                            >
                              <i className="mdi mdi-facebook" />
                            </Link>
                          </li>{" "}
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="social-list-item bg-info text-white border-info"
                            >
                              <i className="mdi mdi-twitter" />
                            </Link>
                          </li>{" "}
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="social-list-item bg-danger text-white border-danger"
                            >
                              <i className="mdi mdi-google" />
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/pages-forgot-pwd" className="text-muted">
                          <i className="mdi mdi-lock me-1" /> Forgot your
                          password?
                        </Link>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&apos;t have an account ?{" "}
                  <Link to="pages-register" className="fw-medium text-primary">
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ResetPassword
