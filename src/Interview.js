import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Button,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const InterviewSettings = (props) => {

  const submitClick =() =>{
    alert("form sucessfully submitted");
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    props.updateInterviewValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const [formData, setFormData] = useState({});

  const initialValues = {
    interviewMode: "",
    interviewDuration: "",
    jobLocation: "",
  };

  const validationSchema = Yup.object({
    interviewMode: Yup.string().required("Required"),
    interviewDuration: Yup.string().required("Required"),
    jobLocation: Yup.string().required("Required"),
  });

  const interviewModes = ["Online", "In-Person"];
  const interviewDurations = ["30 Minutes", "1 Hour", "2 Hours"];
  const Languages = ["Hindi","English"];

  const handleSubmit = (values) => {
    setFormData(values);
  };

  return (
    <Box px={4} py={8}>
      <Flex justify="space-between" align="center" mb={4}>
        <Box as="h1" fontSize="3xl">
          Interview Mode 
        </Box>
      </Flex>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FormControl mb={4}>
              <FormLabel>Interview Mode</FormLabel>
              <Select name="interviewMode"   onBlur={handleChange}>
                <option value="" disabled selected>
                  Select Interview Mode
                </option>
                {interviewModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Interview Duration</FormLabel>
              <Select name="interviewDuration"   onBlur={handleChange}>
                <option value="" disabled selected>
                  Select Interview Duration
                </option>
                {interviewDurations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Interview Language</FormLabel>
              <Select name="jobLocation"   onBlur={handleChange}>
                <option value="" disabled selected>
                  Select Job Language
                </option>
                {Languages.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Flex justify="flex-end"
              onClick={props.onPrevious1}
            >
              <Button type="submit" mr={4}>
                Previous
              </Button>
              <Button
                type="submit"
                colorScheme="red"
               onClick= {submitClick}
              >
                Submit
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default InterviewSettings;
