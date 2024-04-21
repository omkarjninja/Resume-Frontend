import ResumeView from "./resume-view";
import { useState } from "react";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import ReactDOMServer from "react-dom/server";
function ResumeForm() {
  const [fname, setfname] = useState("John");
  const [lname, setlname] = useState("Doe");
  const [job, setjob] = useState("Web dev");
  const [city, setcity] = useState("New York");
  const [country, setcountry] = useState("Usa");
  const [phone, setphone] = useState("100");
  const [mail, setmail] = useState("xyz@gmail.com");
  const [summary, setsummary] = useState(
    "Results-oriented Senior Software Engineer with 20 years of experience designing, developing, and deploying comple software solutions. Proficient in a variety of programmingn languages and technologies. Proven track record of leading teams and delivering high-quality products."
  );
  const [personalclass, setpersonalclass] = useState("show");
  const [experienceclass, setexperienceclass] = useState("hide");
  const [skillclass, setskillclass] = useState("hide");
  const [newtableclass, setnewtableclass] = useState("hide");
  const [educlass, seteduclass] = useState("hide");
  const [passionclass, setpassionclass] = useState("hide");

  const [c1name, setc1name] = useState("Netflix");
  const [c2name, setc2name] = useState("Google");
  const [p1name, setp1name] = useState("SDE-2 ");
  const [p2name, setp2name] = useState("Seo Analyst ");
  const [date1, setdate1] = useState("2018-20");
  const [date2, setdate2] = useState("2020-22");
  const [desc1, setdesc1] = useState(
    "Lead a team of developers in designing and implementing a scalable microservices architecture."
  );
  const [desc2, setdesc2] = useState(
    "Collaborated with product managers to define project requirements and timelines."
  );
  const [desc21, setdesc21] = useState(
    "Contributed to the development of a cutting-edge mobile application, used by millions of users worldwide."
  );
  const [desc22, setdesc22] = useState(
    "Mentored junior engineers and conducted code reviews to ensure adherence to best practices.  "
  );
  const [pline, setpline] = useState("bg-black text-white");
  const [Cline, setCline] = useState("");
  const [Sline, setSline] = useState("");
  const [Eline, setEline] = useState("");
  const [Iline, setIline] = useState("");
  const [shead1, setshead1] = useState("Programming Languages");
  const [shead2, setshead2] = useState("Soft Skills");
  const [shead3, setshead3] = useState("Other Skills");
  const [skills1, setskills1] = useState("Java , C , C++");
  const [newtab, setnewtab] = useState("");
  const [linked, setlinked] = useState("");
  const [twitter, settwitter] = useState("");
  const [skills2, setskills2] = useState(
    "Communication , Quick Learner , Leadership"
  );
  const [degree1, setdegree1] = useState("Bachelors of Engineering");
  const [degree2, setdegree2] = useState("BCA");
  const [college1, setcollege1] = useState("BMSIT");
  const [college2, setcollege2] = useState("Dayanad Sagar Uni");
  const [from1, setfrom1] = useState("2018");
  const [from2, setfrom2] = useState("2016");
  const [to1, setto1] = useState("2022");
  const [to2, setto2] = useState("2018");
  const [passions, setpassions] = useState("Football , Anime , Manga , Coding");
  const [Heading, setHeading] = useState("Experience");
  const [skills3, setskills3] = useState("Japanese Specialist , Sales");
  const personalbox = () => {
    setpersonalclass("show");
    setexperienceclass("hide");
    setskillclass("hide");
    seteduclass("hide");
    setpassionclass("hide");
    setpline("bg-black text-white");
    setSline("");
    setCline("");
    setEline("");
    setIline("");
  };
  const experienceBox = () => {
    setpersonalclass("hide");
    setexperienceclass("show");
    setskillclass("hide");
    seteduclass("hide");
    setpassionclass("hide");
    setCline("bg-black text-white");
    setpline("");
    setSline("");
    setEline("");
    setIline("");
  };
  const skillBox = () => {
    setskillclass("show");
    setpersonalclass("hide");
    setexperienceclass("hide");
    seteduclass("hide");
    setpassionclass("hide");
    setSline("bg-black text-white");
    setpline("");
    setCline("");
    setEline("");
    setIline("");
  };
  const EduBox = () => {
    setskillclass("hide");
    seteduclass("show");
    setpassionclass("hide");
    setpersonalclass("hide");
    setexperienceclass("hide");
    setSline("");
    setpline("");
    setCline("");
    setEline("bg-black text-white");
    setIline("");
  };
  const PassionBox = () => {
    seteduclass("hide");
    setpassionclass("show");
    setskillclass("hide");
    setpersonalclass("hide");
    setexperienceclass("hide");
    setSline("");
    setpline("");
    setCline("");
    setEline("");
    setIline("bg-black text-white");
  };
  const addTable = () => {
    setnewtableclass("show");
    setnewtab("hidden");
  };
  // const printHandler = () => {
  //   const printElement = ReactDOMServer.renderToString(ResumeView());
  //   console.log(printElement);

  //   html2pdf().from(printElement).save();
  // };
  // console.log(linked);
  // console.log(twitter);
  return (
    <>
      <div className="lg:flex md:block xl:flex sm:block">
        <div className="bg-gray-300 w-full flex-col">
          <main class="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
            <section class="bg-cream-lighter p-3 shadow">
              <div>
                <div class="md:flex">
                  <button
                    onClick={personalbox}
                    class={`md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 border-2 border-solid hover:bg-black hover:text-white ${pline}`}
                  >
                    Personal Details
                  </button>
                  <button
                    onClick={experienceBox}
                    className={`md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 border-2 border-solid justify-end hover:bg-black hover:text-white ${Cline}`}
                  >
                    Experience Section
                  </button>
                  <button
                    onClick={skillBox}
                    className={`md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 border-2 border-solid justify-end hover:bg-black hover:text-white ${Sline}`}
                  >
                    Skills Section
                  </button>
                </div>
                <div>
                  <button
                    onClick={EduBox}
                    className={`md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 border-2 border-solid justify-end hover:bg-black hover:text-white ${Eline}`}
                  >
                    Education Section
                  </button>
                  <button
                    onClick={PassionBox}
                    className={`md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 border-2 border-solid justify-end hover:bg-black hover:text-white ${Iline}`}
                  >
                    Passion Section
                  </button>
                </div>
              </div>
              <form className={`personal ${personalclass}`}>
                <div class="md:flex mb-8">
                  <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-xs font-bold">
                        First Name
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="text"
                        name="name"
                        placeholder="Doe"
                        onChange={(e) => setfname(e.target.value)}
                      ></input>
                    </div>
                    <div class="md:flex mb-4">
                      <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Last Name
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="last_name"
                          placeholder="Doe"
                          onChange={(e) => setlname(e.target.value)}
                        ></input>
                      </div>
                      <div class="md:flex-1 md:pl-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Job Title
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="job_title"
                          placeholder="Web Dev"
                          onChange={(e) => setjob(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div class="md:flex mb-4">
                      <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          City
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="City"
                          placeholder="Bengaluru"
                          onChange={(e) => setcity(e.target.value)}
                        ></input>
                      </div>
                      <div class="md:flex-1 md:pl-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Country
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="country"
                          placeholder="India"
                          onChange={(e) => setcountry(e.target.value)}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:flex mb-8">
                  <div class="md:w-1/4">
                    <legend class="uppercase tracking-wide text-sm">
                      Contact
                    </legend>
                  </div>
                  <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-xs font-bold">
                        Phone
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="tel"
                        name="phone"
                        placeholder="(555) 555-5555"
                        onChange={(e) => setphone(e.target.value)}
                      ></input>
                    </div>
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        URL
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="url"
                        name="url"
                        placeholder="acme.co"
                      ></input>
                    </div>
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Email
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="email"
                        name="email"
                        placeholder="contact@acme.co"
                        onChange={(e) => setmail(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>
                <div class="md:flex">
                  <div class="md:w-1/4">
                    {/* <legend class="uppercase tracking-wide text-sm">
                      Social
                    </legend> */}
                  </div>
                  <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div class="md:flex mb-4">
                      <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Linkedin
                        </label>
                        <div class="w-full flex">
                          <span class="text-xs py-4 px-1 bg-grey-light text-grey-dark">
                            Linkedin.com/
                          </span>
                          <input
                            class="flex-1 shadow-inner p-2 border-0"
                            type="text"
                            name="Linkedin"
                            placeholder="acmeco"
                            onChange={(e) => setlinked(e.target.value)}
                          ></input>
                        </div>
                      </div>
                      <div class="md:flex-1 md:pl-3 mt-2 md:mt-0">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Twitter
                        </label>
                        <div class="w-full flex">
                          <span class="text-xs py-4 px-0 bg-grey-light text-grey-dark">
                            twitter.com/
                          </span>
                          <input
                            class="flex-1 shadow-inner p-2 border-0"
                            type="text"
                            name="twitter"
                            placeholder="acmeco"
                            onChange={(e) => settwitter(e.target.value)}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="md:flex mb-4">
                      {/* <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Instagram
                        </label>
                        <div class="w-full flex">
                          <span class="text-xs py-4 px-2 bg-grey-light text-grey-dark">
                            instagram.com/
                          </span>
                          <input
                            class="flex-1 shadow-inner p-2 border-0"
                            type="text"
                            name="instagram"
                            placeholder="acmeco"
                          ></input>
                        </div>
                      </div> */}
                      {/* <div class="md:flex-1 md:pl-3 mt-2 md:mt-0"> */}
                      {/* <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Yelp
                        </label> */}
                      {/* <div class="w-full flex">
                          <span class="text-xs py-4 px-2 bg-grey-light text-grey-dark">
                            yelp.com/
                          </span>
                          <input
                            class="flex-1 shadow-inner p-2 border-0"
                            type="text"
                            name="yelp"
                            placeholder="acmeco"
                          ></input>
                        </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div class="md:flex mb-6">
                  <div class="md:w-1/3">
                    <legend class="uppercase tracking-wide text-sm">
                      Summary
                    </legend>
                  </div>
                  <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <textarea
                      class="w-full shadow-inner p-2 border-0"
                      placeholder="We build fine acmes."
                      rows="6"
                      onChange={(e) => setsummary(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                {/* <div class="md:flex mb-6"> */}
                {/* <div class="md:w-1/3"> */}
                {/* <legend class="uppercase tracking-wide text-sm">
                      Cover Image
                    </legend> */}
                {/* </div> */}
                {/* <div class="md:flex-1 px-3 text-center">
                    <div class="button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative">
                      <input
                        class="opacity-0 absolute pin-x pin-y"
                        type="file"
                        name="cover_image"
                      ></input>
                      Add Cover Image
                    </div>
                  </div> */}
                {/* </div> */}
                {/* <div class="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                  <div class="md:flex-1 px-3 text-center md:text-right">
                    <input type="hidden" name="sponsor" value="0"></input>
                    <input
                      class="button text-cream-lighter bg-brick hover:bg-brick-dark"
                      type="submit"
                      value="Create Location"
                    ></input>
                  </div>
                </div> */}
              </form>
              <form className={`personal ${experienceclass}`}>
                <div class="md:flex mb-8">
                  <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-xs font-bold">
                        Heading Name
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="text"
                        name="name"
                        placeholder="Experience"
                        onChange={(e) => setHeading(e.target.value)}
                      ></input>
                    </div>
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-xs font-bold">
                        Company name
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="text"
                        name="Company"
                        placeholder="Netflix"
                        onChange={(e) => setc1name(e.target.value)}
                      ></input>
                    </div>
                    <div class="md:flex mb-4">
                      <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Position
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="last_name"
                          placeholder="Senior Dev"
                          onChange={(e) => setp1name(e.target.value)}
                        ></input>
                      </div>
                      <div class="md:flex-1 md:pl-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Job Joining Year
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="job_title"
                          placeholder="2018"
                          onChange={(e) => setdate1(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div class="md:flex mb-4">
                      <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Work/Project Description 01
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="City"
                          placeholder="Lead a team of developers in designing and implementing a scalable microservices architecture."
                          onChange={(e) => setdesc1(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div class="md:flex mb-4">
                      <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Work/Project Description 02
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="country"
                          placeholder="Collaborated with product managers to define project requirements and timelines."
                          onChange={(e) => setdesc2(e.target.value)}
                        ></input>
                        <hr></hr>
                      </div>
                    </div>
                    <div className={`${newtableclass}`}>
                      <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                        <div class="mb-4">
                          <label class="block uppercase tracking-wide text-xs font-bold">
                            Company name
                          </label>
                          <input
                            class="w-full shadow-inner p-3 border-0"
                            type="text"
                            name="Company"
                            placeholder="Netflix"
                            onChange={(e) => setc2name(e.target.value)}
                          ></input>
                        </div>
                        <div class="md:flex mb-4">
                          <div class="md:flex-1 md:pr-3">
                            <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                              Position
                            </label>
                            <input
                              class="w-full shadow-inner p-3 border-0"
                              type="text"
                              name="last_name"
                              placeholder="Senior Dev"
                              onChange={(e) => setp2name(e.target.value)}
                            ></input>
                          </div>
                          <div class="md:flex-1 md:pl-3">
                            <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                              Job Joining Year
                            </label>
                            <input
                              class="w-full shadow-inner p-3 border-0"
                              type="text"
                              name="job_title"
                              placeholder="2018"
                              onChange={(e) => setdate2(e.target.value)}
                            ></input>
                          </div>
                        </div>
                        <div class="md:flex mb-4">
                          <div class="md:flex-1 md:pr-3">
                            <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                              Work/Project Description 01
                            </label>
                            <input
                              class="w-full shadow-inner p-3 border-0"
                              type="text"
                              name="City"
                              placeholder="Lead a team of developers in designing and implementing a scalable microservices architecture."
                              onChange={(e) => setdesc21(e.target.value)}
                            ></input>
                          </div>
                        </div>
                        <div class="md:flex mb-4">
                          <div class="md:flex-1 md:pr-3">
                            <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                              Work/Project Description 02
                            </label>
                            <input
                              class="w-full shadow-inner p-3 border-0"
                              type="text"
                              name="country"
                              placeholder="Collaborated with product managers to define project requirements and timelines."
                              onChange={(e) => setdesc22(e.target.value)}
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2
                      onClick={addTable}
                      className={`border-2 center w-full ${newtab}`}
                    >
                      Add Another Table
                    </h2>
                  </div>
                </div>
              </form>
              <form className={`personal ${educlass}`}>
                <div class="md:flex mb-8">
                  <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-xs font-bold">
                        Education / Degree
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="text"
                        name="name"
                        placeholder="Bachelors of Enggenering"
                        onChange={(e) => setdegree1(e.target.value)}
                      ></input>
                    </div>
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-xs font-bold">
                        College Name
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="text"
                        name="Company"
                        placeholder="BMSIT"
                        onChange={(e) => setcollege1(e.target.value)}
                      ></input>
                    </div>
                    <div class="md:flex mb-4">
                      <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          From (year)
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="last_name"
                          placeholder="2018"
                          onChange={(e) => setfrom1(e.target.value)}
                        ></input>
                      </div>
                      <div class="md:flex-1 md:pl-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          To (year)
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="job_title"
                          placeholder="2022"
                          onChange={(e) => setto1(e.target.value)}
                        ></input>
                      </div>
                    </div>

                    <div className={`${newtableclass}`}>
                      <div class="mb-4">
                        <label class="block uppercase tracking-wide text-xs font-bold">
                          Education / Degree
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="name"
                          placeholder="12Th"
                          onChange={(e) => setdegree2(e.target.value)}
                        ></input>
                      </div>
                      <div class="mb-4">
                        <label class="block uppercase tracking-wide text-xs font-bold">
                          College Name
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="Company"
                          placeholder="Dayanad Sagar Uni"
                          onChange={(e) => setcollege2(e.target.value)}
                        ></input>
                      </div>
                      <div class="md:flex mb-4">
                        <div class="md:flex-1 md:pr-3">
                          <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                            From (year)
                          </label>
                          <input
                            class="w-full shadow-inner p-3 border-0"
                            type="text"
                            name="last_name"
                            placeholder="2016"
                            onChange={(e) => setfrom2(e.target.value)}
                          ></input>
                        </div>
                        <div class="md:flex-1 md:pl-3">
                          <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                            To (year)
                          </label>
                          <input
                            class="w-full shadow-inner p-3 border-0"
                            type="text"
                            name="job_title"
                            placeholder="2018"
                            onChange={(e) => setto2(e.target.value)}
                          ></input>
                          <span class="text-xs mb-4 font-thin">
                            We lied, this isn't required.
                          </span>
                        </div>
                      </div>
                    </div>
                    <h2
                      onClick={addTable}
                      className={`border-2 center w-full ${newtab}`}
                    >
                      Add Another Table
                    </h2>
                  </div>
                </div>
              </form>
              <form className={`skill ${skillclass}`}>
                <div class="md:flex mb-8">
                  <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-xs font-bold">
                        Skill Heading
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="text"
                        name="skill_heading"
                        placeholder="Programming Languages"
                        onChange={(e) => setshead1(e.target.value)}
                      ></input>
                    </div>

                    <div class="md:flex mb-4">
                      <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Add Skills
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="skills"
                          placeholder="Java , C++ , ReactJS"
                          onChange={(e) => setskills1(e.target.value)}
                        ></input>
                        <span class="text-xs mb-4 font-thin">
                          Seperate each Skill by using , (comma)
                        </span>
                      </div>
                    </div>

                    {/* <h2 onClick={addTable} className="border-2 center w-full">
                      Add Another Skill
                    </h2> */}
                  </div>
                </div>
                <div class="md:flex mb-8">
                  <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-xs font-bold">
                        Skill Heading
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="text"
                        name="skill_heading"
                        placeholder="Soft Skills"
                        onChange={(e) => setshead2(e.target.value)}
                      ></input>
                    </div>

                    <div class="md:flex mb-4">
                      <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Add Skills
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="skills"
                          placeholder="Communication , Quick Learner , Leadership"
                          onChange={(e) => setskills2(e.target.value)}
                        ></input>
                        <span class="text-xs mb-4 font-thin">
                          Seperate each Skill by using , (comma)
                        </span>
                      </div>
                    </div>

                    {/* <h2 onClick={addTable} className="border-2 center w-full">
                      Add Another Skill
                    </h2> */}
                  </div>
                </div>
                <div class="md:flex mb-8">
                  <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-xs font-bold">
                        Skill Heading
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="text"
                        name="skill_heading"
                        placeholder="Other Skills"
                        onChange={(e) => setshead3(e.target.value)}
                      ></input>
                    </div>

                    <div class="md:flex mb-4">
                      <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Add Skills
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="skills"
                          placeholder="Japanese Specialist , Sales"
                          onChange={(e) => setskills3(e.target.value)}
                        ></input>
                        <span class="text-xs mb-4 font-thin">
                          Seperate each Skill by using , (comma)
                        </span>
                      </div>
                      {/* <button onClick={printHandler}> Download</button> */}
                    </div>

                    {/* <h2 onClick={addTable} className="border-2 center w-full">
                      Add Another Skill
                    </h2> */}
                  </div>
                </div>
              </form>
              <form className={`passion ${passionclass}`}>
                <div class="md:flex mb-8">
                  <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                    <div class="mb-4">
                      <label class="block uppercase tracking-wide text-xs font-bold">
                        Passions (enter Your Interests)
                      </label>
                      <input
                        class="w-full shadow-inner p-3 border-0"
                        type="text"
                        name="skill_heading"
                        placeholder="Football , Anime , Manga , Coding"
                        onChange={(e) => setpassions(e.target.value)}
                      ></input>
                    </div>

                    {/* <div class="md:flex mb-4">
                      <div class="md:flex-1 md:pr-3">
                        <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Add Passion
                        </label>
                        <input
                          class="w-full shadow-inner p-3 border-0"
                          type="text"
                          name="skills"
                          placeholder="Java , C++ , ReactJS"
                          onChange={(e) => setskills1(e.target.value)}
                        ></input>
                        <span class="text-xs mb-4 font-thin">
                          Seperate each Skill by using , (comma)
                        </span>
                      </div>
                    </div> */}

                    {/* <h2 onClick={addTable} className="border-2 center w-full">
                      Add Another Skill
                    </h2> */}
                  </div>
                </div>
              </form>
            </section>
          </main>
        </div>

        <ResumeView
          name={fname}
          last={lname}
          job={job}
          city={city}
          country={country}
          phone={phone}
          mail={mail}
          sum={summary}
          c1={c1name}
          c2={c2name}
          p1={p1name}
          p2={p2name}
          d1={date1}
          d2={date2}
          desc1={desc1}
          desc2={desc2}
          desc21={desc21}
          desc22={desc22}
          shead1={shead1}
          shead2={shead2}
          shead3={shead3}
          skills1={skills1}
          skills2={skills2}
          skills3={skills3}
          linked={linked}
          twitter={twitter}
          Heading={Heading}
          degree1={degree1}
          degree2={degree2}
          clg1={college1}
          clg2={college2}
          from1={from1}
          to1={to1}
          from2={from2}
          to2={to2}
          passions={passions}
        ></ResumeView>
      </div>
    </>
  );
}
export default ResumeForm;
