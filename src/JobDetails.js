import {
  Box,
  FormControl,
  FormErrorMessage,
  Button,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const jobDetailsSchema = Yup.object().shape({
  jobDetail: Yup.string().required("Required"),
  experienceLevel: Yup.string().required("Required"),
  employmentType: Yup.string().required("Required"),
});

const JobDetailsForm = (props) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.updateJobValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <Box>
      <Formik
        initialValues={{
          jobDetail: "",
          experienceLevel: "",
          employmentType: "",
        }}
        validationSchema={jobDetailsSchema}
      >
        {(formik) => (
          <Form>
            <Field name="jobTitle">
              {({ field, form }) => (
                <FormControl mb={4}>
                  <FormLabel >Job Title</FormLabel>
                  <Input
                    {...field}
                    id="jobTitle"
                    placeholder="Enter Job title"
                    onChange={(e) => {
                      handleChange(e);
                      field.onChange(e);
                    }}
                  />
                  {form.errors.jobDetail && form.touched.jobDetail && (
                    <Box color="red">{form.errors.jobDetail}</Box>
                  )}
                </FormControl>
              )}
            </Field>
            <Field name="jobDetails">
              {({ field, form }) => (
                <FormControl mb={4}>
                  <FormLabel>Job Details</FormLabel>
                  <Input
                    {...field}
                    id="jobDetails"
                    placeholder="Enter Job Details"
                    onChange={(e) => {
                      handleChange(e);
                      field.onChange(e);
                    }}
                  />
                  {form.errors.experienceLevel &&
                    form.touched.experienceLevel && (
                      <Box color="red">{form.errors.experienceLevel}</Box>
                    )}
                </FormControl>
              )}
            </Field>
            <Field name="jobLocation">
              {({ field, form }) => (
                <FormControl mb={4}>
                  <FormLabel>Job Location</FormLabel>
                  <Input
                    {...field}
                    id="jobLocation"
                    placeholder="Enter job Location"
                    onChange={(e) => {
                      handleChange(e);
                      field.onChange(e);
                    }}
                  />
                  {form.errors.employmentType &&
                    form.touched.employmentType && (
                      <Box color="red">{form.errors.employmentType}</Box>
                    )}
                </FormControl>
              )}
            </Field>

              <Button mr={4} onClick={props.onPrevious}>
                Previous
              </Button>
              <Button type="submit" colorScheme="blue" onClick={props.onNext}>
                Next
              </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default JobDetailsForm;
