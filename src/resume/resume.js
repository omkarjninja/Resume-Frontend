import React from "react";
import ResumeForm from "./resume-form";
import ResumeView from "./resume-view";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./resume.css";
function Resume() {
  return (
    <>
      <div className="w-full">
        <ResumeForm></ResumeForm>
      </div>
    </>
  );
}
export default Resume;
