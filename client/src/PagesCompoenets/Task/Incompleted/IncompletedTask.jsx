import React from "react";
import TaskCard from "../TaskCard/TaskCard";

const IncompletedTask = () => {
  const data = [
    {
      id: 1,
      title: "Update Password With User Auth",
      des: "Please Umar, update the password of Super Admin. I cannot log in to the app. Kindly update this password as soon as possible; my work is in a pending state. Please update it; your deadline date is 25 November.",
      status: "completed",
      date: "20/21/2022",
      important: true,
    },
    {
      id: 2,
      title: "Fix Bug in Payment Processing",
      des: "There's a critical bug in the payment processing module. Transactions are not being recorded correctly. Urgently fix this issue to ensure accurate financial data.",
      status: "pending",
      date: "22/11/2022",
    },
    {
      id: 3,
      title: "Implement Two-Factor Authentication",
      des: "Enhance security by implementing two-factor authentication for user accounts. This feature will provide an additional layer of protection against unauthorized access.",
      status: "in-progress",
      date: "23/11/2022",
      important: true,
    },
    {
      id: 4,
      title: "Optimize Database Queries",
      des: "The application is experiencing slow performance due to inefficient database queries. Optimize the queries to enhance overall system speed.",
      status: "pending",
      date: "24/11/2022",
    },
    {
      id: 5,
      title: "Create User Dashboard",
      des: "Develop a user-friendly dashboard to provide users with a centralized view of their activities and relevant information.",
      status: "in-progress",
      date: "25/11/2022",
    },
    // Add 20 more objects...
    {
      id: 6,
      title: "Enhance Email Notification System",
      des: "Improve the email notification system to ensure that users receive timely and accurate notifications about their account activities.",
      status: "pending",
      date: "26/11/2022",
    },
    {
      id: 7,
      title: "Update Mobile App UI",
      des: "Revamp the user interface of the mobile app to provide a modern and intuitive user experience. Focus on improving navigation and visual appeal.",
      status: "in-progress",
      date: "27/11/2022",
    },
    {
      id: 8,
      title: "Integrate Third-Party API for Geolocation",
      des: "Integrate a reliable third-party API to enhance the app's geolocation features. This will improve accuracy and speed in location-based services.",
      status: "pending",
      date: "28/11/2022",
    },
    {
      id: 9,
      title: "Add Multi-Language Support",
      des: "Implement multi-language support to make the application accessible to a wider audience. Allow users to choose their preferred language in the settings.",
      status: "in-progress",
      date: "29/11/2022",
    },
    {
      id: 10,
      title: "Fix Cross-Browser Compatibility Issues",
      des: "Identify and resolve cross-browser compatibility issues to ensure a consistent and optimal user experience across different web browsers.",
      status: "pending",
      date: "30/11/2022",
    },
    {
      id: 11,
      title: "Implement File Upload Feature",
      des: "Add a file upload feature to allow users to easily upload and share documents. Ensure proper validation and security measures are in place.",
      status: "in-progress",
      date: "01/12/2022",
    },
    {
      id: 12,
      title: "Review and Update Documentation",
      des: "Review and update the documentation for the entire application. Ensure that it is comprehensive, accurate, and up-to-date for both users and developers.",
      status: "pending",
      date: "02/12/2022",
    },
    {
      id: 13,
      title: "Create User Onboarding Tutorial",
      des: "Develop an interactive tutorial to guide new users through the onboarding process. Provide clear instructions and highlight key features of the app.",
      status: "in-progress",
      date: "03/12/2022",
    },
    {
      id: 14,
      title: "Enhance Search Functionality",
      des: "Improve the search functionality to deliver more accurate and relevant results. Implement filters and sorting options for better user experience.",
      status: "pending",
      date: "04/12/2022",
    },
    {
      id: 15,
      title: "Integrate Social Media Sharing",
      des: "Add social media sharing capabilities to allow users to easily share content from the application on their preferred social platforms.",
      status: "in-progress",
      date: "05/12/2022",
    },
    {
      id: 16,
      title: "Implement Dark Mode",
      des: "Introduce a dark mode option for users who prefer a darker color scheme. Enhance readability and reduce eye strain during low-light conditions.",
      status: "pending",
      date: "06/12/2022",
    },
    {
      id: 17,
      title: "Update Password Reset Flow",
      des: "Revise the password reset flow to make it more user-friendly and secure. Provide clear instructions and options for account recovery.",
      status: "in-progress",
      date: "07/12/2022",
    },
    {
      id: 18,
      title: "Enhance User Profile Page",
      des: "Improve the user profile page with additional customization options. Allow users to add profile pictures and update personal information.",
      status: "pending",
      date: "08/12/2022",
      important: true,
    },
    {
      id: 19,
      title: "Implement User Feedback System",
      des: "Integrate a feedback system to collect user opinions and suggestions. Use this feedback to continuously improve the application.",
      status: "in-progress",
      date: "09/12/2022",
    },
    {
      id: 20,
      title: "Optimize Server-Side Code",
      des: "Review and optimize the server-side code to improve overall application performance and response times.",
      status: "pending",
      date: "10/12/2022",
    },
    {
      id: 21,
      title: "Implement Notification Preferences",
      des: "Allow users to customize their notification preferences, including the type and frequency of notifications they receive.",
      status: "in-progress",
      date: "11/12/2022",
    },
    {
      id: 22,
      title: "Update Terms of Service",
      des: "Review and update the terms of service to ensure compliance with current laws and regulations. Clearly communicate changes to users.",
      status: "pending",
      date: "12/12/2022",
    },
    {
      id: 23,
      title: "Enhance Accessibility Features",
      des: "Improve accessibility features to make the application more inclusive. Ensure compatibility with screen readers and keyboard navigation.",
      status: "in-progress",
      date: "13/12/2022",
      important: true,
    },
    {
      id: 24,
      title: "Implement Real-Time Chat",
      des: "Integrate a real-time chat feature to facilitate instant communication between users. Ensure a secure and seamless chat experience.",
      status: "pending",
      date: "14/12/2022",
    },
    {
      id: 25,
      title: "Update Privacy Policy",
      des: "Review and update the privacy policy to address current data protection standards. Clearly communicate privacy practices to users.",
      status: "in-progress",
      date: "15/12/2022",
      important: true,
    },
  ];

  const filterthedata = data?.filter((item) => item.status !== "completed");
  return (
    <div className="px-[10px] py-3">
      <div>
        <TaskCard data={filterthedata} title={"Incompleted Tasks"} />
      </div>
    </div>
  );
};

export default IncompletedTask;
