// import html2pdf from "html2pdf.js/dist/html2pdf.min";
// import ReactDOMServer from "react-dom/server";
import React from "react";
import "./resume.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Download from "./downloadbtn";
function ResumeTempView2(props) {
  const printref = React.useRef();
  const ClickHandler = async () => {
    const element = printref.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight, "FAST");
    pdf.save("resume.pdf");
  };
  var linkedin = props.linked;
  var twitter = props.twitter;
  console.log(props.linked);
  console.log(props.twitter);
  const linkedinclick = () => {
    window.open(linkedin, "_blank");
  };
  const twitterclick = () => {
    window.open(twitter, "_blank");
  };
  return (
    <>
      <div className={`w-full bg-gray-300`}>
        <div ref={printref} class="container mx-auto py-10 px-5">
          <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div class=" ">
              {/* p-4 sm:p-6 */}
              <div class="flex items-center justify-between temp2 p-4 sm:p-6">
                <div>
                  <h2 class="text-2xl font-black  temp-2-head ">
                    {props.name} {props.last}
                  </h2>
                  <p class="text-sm text-gray-600 temp-2-head">{props.job}</p>
                  <div className="flex">
                    <button
                      onClick={twitterclick}
                      class="bg-blue-400 p-2 font-black  text-white inline-flex items-center space-x-2 rounded mr-2"
                    >
                      <a href={twitterclick} target="_blank">
                        <svg
                          class="w-5 h-5 fill-current"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    </button>
                    <button
                      onClick={linkedinclick}
                      class="bg-blue-600 p-2 font-black  text-white inline-flex items-center space-x-2 rounded"
                    >
                      <a href={linkedinclick} target="_blank">
                        <svg
                          class="w-5 h-5 fill-current"
                          role="img"
                          viewBox="0 0 256 256"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                          </g>
                        </svg>
                      </a>
                    </button>
                  </div>
                </div>
                <div>
                  {/* <p class="text-sm text-gray-600">
                    <a href={`tel:${props.phone}`}>
                      <p class="text-sm text-gray-600">{props.phone}</p>
                    </a>
                  </p> */}
                  <p class="text-sm text-gray-600 temp-2-head">
                    Phone:
                    <a
                      className="no-underline text-white"
                      href={`tel:${props.phone}`}
                    >
                      {" "}
                      {props.phone}
                    </a>
                  </p>
                  <p class="text-sm text-gray-600 temp-2-head">
                    Email:
                    <a
                      className="no-underline text-white"
                      href={`mailto:${props.mail}`}
                    >
                      {" "}
                      {props.mail}
                    </a>
                  </p>
                  <p class="text-sm text-gray-600 temp-2-head">
                    Location: {props.city}, {props.country}
                  </p>
                </div>
              </div>
              {/* <hr class="my-2 temp-2-head"></hr> */}
              <div className="temp-1-summary pl-4 pt-4">
                <h3 class="text-lg font-black  mb-2 temp-2-name">Summary</h3>
                <hr class="my-2"></hr>
                <p class="text-sm leading-relaxed text-bold">{props.sum}</p>
              </div>
              {/* experience/projects */}
              <div class="mt-4 pl-4">
                <h3 class="text-lg font-black  mb-2 temp-2-name">
                  {props.Heading}
                </h3>
                <hr class="my-2"></hr>
                <div>
                  <h4 class="text-md font-black ">{props.c1}</h4>
                  <p class="text-sm text-gray-600">
                    {props.p1} {" | "} {props.d1}
                  </p>
                  <ul class="list-disc list-inside text-sm">
                    <li>{props.desc1}</li>
                    {/* <li>
                      Developed and maintained critical components of the
                      company's flagship product, resulting in increased
                      reliability and performance.
                    </li> */}
                    <li>{props.desc2}</li>
                  </ul>
                </div>
                <div class="mt-2">
                  <h4 class="text-md font-black ">{props.c2}</h4>
                  <p class="text-sm text-gray-600">
                    {props.p2} | {props.d2}
                  </p>
                  <ul class="list-disc list-inside text-sm">
                    <li>{props.desc21}</li>
                    {/* <li>
                      Implemented continuous integration and deployment
                      pipelines, improving team efficiency and product quality.
                    </li> */}
                    <li>{props.desc22}</li>
                  </ul>
                </div>
              </div>
              {/* education */}
              <div class="mt-4 pl-4">
                <h3 class="text-lg font-black  mb-2 temp-2-name">
                  {"Education"}
                </h3>
                <hr class="my-2"></hr>
                <div>
                  <h4 class="text-md font-black ">{props.degree1}</h4>
                  <p class="text-sm text-gray-600 font-black">
                    {props.clg1}&nbsp; ({props.from1}-{props.to1})
                  </p>
                  {/* <br></br> */}

                  {/* <ul class="list-disc list-inside text-sm">
                    <li>{props.desc1}</li>
                   
                    <li>{props.desc2}</li>
                  </ul> */}
                </div>
                <div class="mt-4">
                  <h4 class="text-md font-black  ">{props.degree2}</h4>
                  <p class="text-sm text-gray-600 font-black">
                    {props.clg2} &nbsp; ( {props.from2}-{props.to2})
                  </p>
                  {/* <br></br> */}
                  {/* <p></p> */}
                  {/* <ul class="list-disc list-inside text-sm">
                    <li>{props.desc21}</li>
                    
                    <li>{props.desc22}</li>
                  </ul> */}
                </div>
              </div>
              {/* skills */}
              <div class="mt-4 pl-4">
                <h3 class="text-lg font-black  mb-2 temp-2-name">Skills</h3>
                <hr class="my-2"></hr>
                <ul class="list-disc list-inside text-sm">
                  <li>
                    {props.shead1}: {props.skills1}
                  </li>
                  <li>
                    {props.shead2}: {props.skills2}
                  </li>
                  <li>
                    {props.shead3}: {props.skills3}
                  </li>
                  {/* <button onClick={ClickHandler}>Download</button> */}
                  {/* <li>Cloud Technologies: AWS, Azure, Google Cloud Platform</li>
                  <li>Agile Methodologies: Scrum, Kanban</li>
                  <li>DevOps Tools: Docker, Kubernetes, Jenkins</li> */}
                </ul>
              </div>
              {/* passion */}
              <div class="mt-4">
                <h3 class="text-lg font-black  mb-2 temp-2-name pl-4">
                  Passion
                </h3>
                <hr class="my-2"></hr>
                <ul class="list-disc list-inside text-sm">
                  <li>Passions : {props.passions}</li>

                  {/* <button onClick={ClickHandler}>Download</button> */}
                  {/* <li>Cloud Technologies: AWS, Azure, Google Cloud Platform</li>
                  <li>Agile Methodologies: Scrum, Kanban</li>
                  <li>DevOps Tools: Docker, Kubernetes, Jenkins</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <Download download={ClickHandler}></Download> */}
        <a
          className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-20 ml-10 mb-10 py-3 text-white cursor-pointer   focus:outline-none focus:ring active:text-indigo-500 temp-2-download"
          onClick={ClickHandler}
        >
          <span className="text-sm font-medium cursor-pointer"> Download </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
export default ResumeTempView2;
