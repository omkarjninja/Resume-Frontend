import React from "react";
import resume from "../assets/resume.jpg";
import temp from "../assets/tempresume2.jpg";
import TempResume from "../assets/resume-temp.jpg";
import { useLocation } from "react-router-dom";
import TemplateImage from "./template-image";
export default function Template() {
  return (
    <>
      <div className>
        <div className="dark:bg-gray-900 h-full">
          <section className="mx-auto container w-full py-36">
            <div className="flex flex-col justify-center items-center">
              <div className="md:text-5xl text-4xl font-black text-center text-gray-800 dark:text-white leading-snug lg:w-3/4">
                <h2>Choose A Template From Below</h2>
              </div>
              <div className="flex justify-center items-center mt-16">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                  <TemplateImage src={resume} goto="/resume"></TemplateImage>
                  <TemplateImage
                    src={TempResume}
                    goto="/resume-temp"
                  ></TemplateImage>
                  <TemplateImage
                    src={temp}
                    goto={"/resume-temp2"}
                  ></TemplateImage>
                  {/* <div className="h-32 rounded-lg bg-gray-200"></div>
                    <div className="h-32 rounded-lg bg-gray-200"></div> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

// import Head from "next/head";

// export default function index() {
//     return (

//     );
// }
