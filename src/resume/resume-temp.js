import React from "react";
import ResumeForm from "./resume-form";
import ResumeView from "./resume-view";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./resume.css";
import ResumeFormTemp from "./resume-formTemp";
function Resume_Temp() {
  return (
    <>
      <div className="w-full">
        <ResumeFormTemp></ResumeFormTemp>
      </div>
    </>
  );
}
export default Resume_Temp;
