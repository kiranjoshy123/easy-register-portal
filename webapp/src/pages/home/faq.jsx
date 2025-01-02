import React, { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "How much does it cost to register a company?",
    answer:
      "Registering a business online through us will cost you £69",
  },
  {
    question: "How long does the company formation process take?",
    answer:
      "The process usually takes 24-48 hours, but it can vary depending on the workload at Companies House.",
  },
  {
    question: "What information is required to register a company?",
    answer:
      "You will need a company name, address, details of directors and shareholders, and the Memorandum and Articles of Association.",
  },
  {
    question: "Can I use my home address as the registered office address?",
    answer:
      "Yes, you can use your home address as the registered office address. However, this address will be publicly available.",
  },
  {
    question: "What are the responsibilities of a company director?",
    answer:
      "Company directors are responsible for running the company in accordance with the law, managing the company's finances, and filing annual returns and financial statements.",
  },
  {
    question: "Do I need a company secretary?",
    answer:
      "While it's not mandatory to appoint a company secretary, having one can help manage the administrative tasks and compliance requirements.",
  },
  {
    question: "Can I change my company name after registration?",
    answer:
      "Yes, you can change your company name after registration by passing a special resolution and notifying Companies House.",
  },
  {
    question: "What are the different types of company structures?",
    answer:
      "The main types of company structures are Private Limited Company (Ltd), Public Limited Company (PLC), and Limited Liability Partnership (LLP).",
  },
  {
    question: "How can I protect my company name?",
    answer:
      "You can protect your company name by registering it as a trademark with the Intellectual Property Office.",
  },
  {
    question: "What is a Memorandum and Articles of Association?",
    answer:
      "The Memorandum and Articles of Association are legal documents that outline the company's structure and the rules it must follow.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <Accordion
    expanded={isOpen}
    onChange={onClick}
    sx={{ mb: 1 }}
    // sx={{ boxShadow: "none", border: "none" }}
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">{question}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{answer}</Typography>
    </AccordionDetails>
  </Accordion>
);

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleChange = (index) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? index : null);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box my={4} textAlign="center">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 0 }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" gutterBottom>
          Find answers to some of the most common questions about company
          registration.
        </Typography>
      </Box>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={expandedIndex === index}
          onClick={handleChange(index)}
        />
      ))}
    </Box>
  );
};

export default FAQ;
