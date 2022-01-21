import { Form, Formik } from "formik";
import React from "react";
import styles from "./Contact.module.scss";
import { contactValidationSchema } from "./validator";
import contactImg from "../../assets/gif/contactGif.gif";

const Contact = ({ id }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formData = {
    name: "",
    email: "",
    message: "",
  };

  return (
    <div className={styles.Contact} id={id}>
      <div className={styles.Contact_header}>
        <h3>Contact</h3>
        <p>Reach me from anywhere</p>
      </div>
      <div className={styles.Contact_content}>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={contactValidationSchema}
          validateOnChange
          initialValues={formData}
        >
          {({ values, errors, touched, handleBlur, handleChange }) => {
            return (
              <Form className={styles.Contact_form}>
                <div className={styles.Contact_form_row}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter full name."
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={styles.Contact_form_input}
                  />
                  {touched.name && (
                    <p className={styles.Contact_form_error}>{errors.name}</p>
                  )}
                </div>
                <div className={styles.Contact_form_row}>
                  <label htmlFor="email" className={styles.Contact_form_label}>
                    Email
                  </label>
                  <input
                    placeholder="Enter email address."
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={styles.Contact_form_input}
                  />
                  {touched.email && (
                    <p className={styles.Contact_form_error}>{errors.email}</p>
                  )}
                </div>
                <div className={styles.Contact_form_row}>
                  <label
                    htmlFor="message"
                    className={styles.Contact_form_label}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Write something."
                    type="text"
                    name="message"
                    id="message"
                    value={values.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={styles.Contact_form_input}
                  />
                  {touched.message && (
                    <p className={styles.Contact_form_error}>
                      {errors.message}
                    </p>
                  )}
                </div>
                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
        <img
          src={contactImg}
          alt="contact image"
          className={styles.Contact_img}
        />
      </div>
    </div>
  );
};

export default Contact;
