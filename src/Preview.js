import { Box, Heading, Flex, Text, Divider } from "@chakra-ui/react";

const VerticalBox = ({ title, children, ...rest }) => {
  return (
    <Box backgroundColor="white" borderRadius="md" p="4" width="90%" {...rest}>
      <Heading as="h4" size="sm" mb="4">
        {title}
      </Heading>
      <div>{children}</div>
    </Box>
  );
};

const Preview = (props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      //   alignItems="flex-start"
      backgroundColor="#E9E5E5"
      mt="2"
      height="calc(100vh - 30px)"
      borderRadius={"9px"}
      position={"relative"}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Heading
          as="h4"
          size="sm"
          mb="4"
          ml={3.5}
          mt={1}
          fontFamily={"sans-serif"}
          fontSize="2xl"
        >
          Draft
        </Heading>
        <Heading
          as="h4"
          size="sm"
          mb="4"
          bgColor="red"
          color={"white"}
          fontFamily={"sans-serif"}
          fontSize="2xl"
          justifyContent={"flex-end"}
          borderTopRightRadius={"9px"}
        >
          Preview
        </Heading>
      </Box>
      <Box align="center">
        <VerticalBox
          bgColor={"darkblue"}
          color={"white"}
          fontFamily="sans-serif"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <span mb="4">{props.title}</span>
            <span>Openings: {props.openings}</span>
          </Box>
        </VerticalBox>
        <VerticalBox
          children={" "}
          title="Requisition Details"
          mt="2"
          textAlign={"left"}
        >
          <Flex>
            <Text>
              Urgency{" "}
              <Text fontWeight={"bold"} textAlign={"center"}>
                {props.urgency ? props.urgency : "--"}
              </Text>
            </Text>
            <Divider />
            <Text>
              Gender{" "}
              <Text fontWeight={"bold"} textAlign={"center"}>
                {props.gender ? props.gender : "--"}
              </Text>
            </Text>
          </Flex>
        </VerticalBox>

        <VerticalBox title="Job Details" mt="2" textAlign={"left"}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box>
              Job Title{" "}
              <Text fontWeight={"bold"}>
                {props.jobDet ? props.jobDet : "--"}
              </Text>
            </Box>
            <Box justifyContent={"flex-end"}>
              Job Details{" "}
              <Text fontWeight={"bold"}>
                {props.jobDetails ? props.jobDetails : "--"}
              </Text>
            </Box>
          </Box>
          <Text mt={"3"}>
            Job Location{" "}
            <Text fontWeight={"bold"}>
              {props.jobLocation ? props.jobLocation : "--"}
            </Text>
          </Text>
        </VerticalBox>

        <VerticalBox title="Interview Settings" mt="2" textAlign={"left"}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box>
              Interview Duration{" "}
              <Text fontWeight={"bold"}>
                {props.interviewDuration ? props.interviewDuration : "--"}
              </Text>
            </Box>
            <Box justifyContent={"flex-end"}>
              Interview Language{" "}
              <Text fontWeight={"bold"}>
                {props.jobLanguage ? props.jobLanguage : "--"}
              </Text>
            </Box>
          </Box>
          <Text mt={"3"}>
            Interview Mode{" "}
            <Text fontWeight={"bold"}>
              {props.interviewMode ? props.interviewMode : "--"}
            </Text>
          </Text>
        </VerticalBox>
      </Box>
    </Box>
  );
};

export default Preview;
