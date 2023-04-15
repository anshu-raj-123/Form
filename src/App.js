import { useState } from "react";
import "./App.css";
import { Flex, Box, Link, Heading, Spacer } from "@chakra-ui/react";
import RequisitionDetails from "./Requistion";
import JobDetailsForm from "./JobDetails";
import InterviewSettingsForm from "./Interview";
import PreviewPage from "./Preview";

function App() {
  const [activeLink, setActiveLink] = useState("");

  const [requistion, setRequistion] = useState(true);
  const [jobDetails, setjobDetails] = useState(false);
  const [interviewMode, setInterviewMode] = useState(false);

  const [jobTitle, setJobTitle] = useState({
    jobDet: "",
    jobDetails: "",
    jobLocation: "",
  });
  function updateJobValue(newState) {
    setJobTitle(newState);
  }
  const [interviewData, setInterviewData] = useState({
    interviewMode: "",
    interviewDuration: "",
    jobLanguage: "",
  });
  function updateInterviewValue(newState) {
    setInterviewData(newState);
  }
  const [formValues, setFormValues] = useState({
    title: "",
    openings: "",
    gender: "",
    urgency: "",
  });

  function updateFormValue(newState) {
    setFormValues(newState);
  }

  function requisition1() {
    setRequistion(true);
    setjobDetails(false);
    setInterviewMode(false);
  }
  function jobdetails1() {
    setRequistion(false);
    setjobDetails(true);
    setInterviewMode(false);
    setActiveLink("#job-details")
  }
  function interview1() {
    setRequistion(false);
    setjobDetails(false);
    setInterviewMode(true);
    setActiveLink("#interview-settings")
  }
  return (
    <>
      <div className="page">
        <Heading>Create Candidate Requisition</Heading>
        <Box px={4} py={2}>
          <Flex align="center">
            <Box>
              <Flex align="center">
                <Link
                  href="#requisition-details"
                  mr={6}
                  color={
                    activeLink === "#requisition-details"
                      ? "lightblue"
                      : "inherit"
                  }
                  _hover={{
                    textDecoration: "none",
                    borderBottom: "2px solid lightblue",
                    lineHeight: "1.8",
                  }}
                  onMouseEnter={() => setActiveLink("#requisition-details")}
                  onMouseLeave={() => setActiveLink("")}
                  onClick={requisition1}
                >
                  Requisition Details
                </Link>
                <Link
                  href="#job-details"
                  mr={6}
                  color={
                    activeLink === "#job-details" ? "lightblue" : "inherit"
                  }
                  _hover={{
                    textDecoration: "none",
                    borderBottom: "2px solid lightblue",
                    lineHeight: "1.8",
                  }}
                  onMouseEnter={() => setActiveLink("#job-details")}
                  onMouseLeave={() => setActiveLink("")}
                  onClick={jobdetails1}
                >
                  Job Details
                </Link>
                <Link
                  href="#interview-settings"
                  mr={6}
                  color={
                    activeLink === "#interview-settings"
                      ? "lightblue"
                      : "inherit"
                  }
                  _hover={{
                    textDecoration: "none",
                    borderBottom: "2px solid lightblue",
                    lineHeight: "1.8",
                  }}
                  onMouseEnter={() => setActiveLink("#interview-settings")}
                  onMouseLeave={() => setActiveLink("")}
                  onClick={interview1}
                >
                  Interview Settings
                </Link>
              </Flex>
            </Box>
            <Spacer />
          </Flex>
          <hr style={{ borderTop: "1px solid lightblue" }} />
        </Box>

        <div className="content">
          <div className="content-first">
            {requistion ? (
              <RequisitionDetails
                onNext={requisition1}
                formValues={formValues}
                updateFormValue={updateFormValue}
              />
            ) : jobDetails ? (
              <JobDetailsForm
                onPrevious={requisition1}
                updateJobValue={updateJobValue}
                // jobTitle={jobTitle}
                onNext={interview1}
              />
            ) : (
              interviewMode && (
                <InterviewSettingsForm
                  updateInterviewValue={updateInterviewValue}
                  onPrevious1={jobdetails1}
                />
              )
            )}
          </div>
          <div className="content-sec">
            <PreviewPage
              title={formValues.title}
              openings={formValues.openings}
              urgency={formValues.urgency}
              gender={formValues.gender}
              jobtitle={jobTitle.jobDet}
              jobDetails={jobTitle.jobDetails}
              jobLocation={jobTitle.jobLocation}
              interviewMode={interviewData.interviewMode}
              interviewDuration={interviewData.interviewDuration}
              jobLanguage={interviewData.jobLanguage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
