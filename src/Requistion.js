import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
} from "@chakra-ui/react";

const RequisitionDetails = (props) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.updateFormValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Requisition title is required"),
    openings: Yup.number().required("Enter a valid number"),
    gender: Yup.string().required("Gender is required"),
    urgency: Yup.string().required("Urgency is required"),
  });

  return (
    <Box w="80%">
      <Formik
        initialValues={{
          title: "",
          openings: "",
          gender: "",
          urgency: "",
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <Field name="title">
              {({ field, form }) => (
                <FormControl mb={4}>
                  <FormLabel>Requisition Title</FormLabel>
                  <Input
                    {...field}
                    id="title"
                    placeholder="Enter requisition title"
                    onChange={(e) => {
                      handleChange(e);
                      form.handleChange(e);
                    }}
                  />
                  {form.errors.title && form.touched.title && (
                    <Box color="red">{form.errors.title}</Box>
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="openings">
              {({ field, form }) => (
                <FormControl mb={4}>
                  <FormLabel>Number of openings</FormLabel>
                  <Input
                    {...field}
                    id="openings"
                    placeholder="Enter Number"
                    onChange={(e) => {
                      handleChange(e);
                      form.handleChange(e);
                    }}
                  />
                  {form.errors.openings && form.touched.openings && (
                    <Box color="red">{form.errors.openings}</Box>
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="gender">
              {({ field, form }) => (
                <FormControl mb={4}>
                  <FormLabel htmlFor="gender">Gender</FormLabel>
                  <Select
                    {...field}
                    id="gender"
                    placeholder="Gender"
                    onChange={(e) => {
                      handleChange(e);
                      form.handleChange(e);
                    }}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Select>
                  {form.errors.gender && form.touched.gender && (
                    <Box color="red">{form.errors.gender}</Box>
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="urgency">
              {({ field, form }) => (
                <FormControl mb={4}>
                  <FormLabel htmlFor="urgency">Urgency</FormLabel>
                  <Select
                    {...field}
                    id="urgency"
                    placeholder="Urgency"
                    onChange={(e) => {
                      handleChange(e);
                      form.handleChange(e);
                    }}
                  >
                  <option value="Urgent">Urgent</option>
                  <option value="Immediate Joining">Immediate Joining</option>
                  <option value="Relaxed">Relaxed</option>
                </Select>
              </FormControl>
            )}
          </Field>
          <Button type="submit" colorScheme="blue" onClick={props.onNext}>
            Next
          </Button>
        </Form> )}
      </Formik>
    </Box>
  );
};

export default RequisitionDetails;
