import { useRef, useState } from "react";
import JoditEditor from "jodit-react";

import Input from "../components/Input";
import TableInput from "../components/TableInput";
// import { sendPostReq } from "../util";
import classes from "./Page.module.css";
import PageHead from "./PageHead";
export default function Page7() {
  const editor = useRef(null);
  const [researchContri, setResearchContri] = useState("");
  const [teachingContri, setTeachingContri] = useState("");
  const [relevantInfo, setrelevantInfo] = useState("");
  const [professionalService, setProfesssionalService] = useState("");
  const [loj, setLoj] = useState("");
  const [loc, setLoc] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: "Enter Your Information",
    height: "300px",
    maxHeight: "400px",
    marginTop: "20px",
  };

  async function sendPostReq(data) {
    const uid = sessionStorage.getItem('uid');
    data = { ...data, uid: uid };
    const res = await fetch("http://localhost:3000/pg7", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    const fd = new FormData(evt.target);
    // const acquisition_names=fd.getAll('acquisition');
    const data = Object.fromEntries(fd.entries());
    // data.acquisition=acquisition_names;
    console.log(data);
    evt.target.reset();
    sendPostReq(data);
  }


  function handleClick() {
    console.log(researchContri, teachingContri, relevantInfo, professionalService, loj, loc);
    console.log(teachingContri);
    window.location.href = '/page8';
  }
  return (
    <div className={classes.page}>
      <PageHead />
      <div className={classes.mainform}>
        <div className={classes.formHead}>
          <p>
            Welcome : <span className={classes.name}>Astitva</span>
          </p>
          <button className={classes.logout}>Logout</button>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <section>
            <h3>
              <div className={classes["space-between"]}>
                <span>
                  14. Significant research contribution and future plans*
                </span>
                <span>(not more than 500 words)</span>
              </div>
              <div className={classes["small-text"]}>
                (Please provide a Research Statement describing your research
                plans and one or two specific research projects to be conducted
                at IIT Patna in 2-3 years time frame)
              </div>
            </h3>
            <JoditEditor
              ref={editor}
              value={researchContri}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setResearchContri(newContent)} // preferred to use only this option to update the content for performance reasons
            />
          </section>
          <section>
            <h3>
              <div className={classes["space-between"]}>
                <span>
                  15. Significant teaching contribution and future plans *
                  (Please list UG/PG courses that you would like to develop
                  and/or teach at IIT Indore)
                </span>
              </div>
              <div >
                (not more than 500 words)
              </div>
            </h3>
            <JoditEditor
              ref={editor}
              value={teachingContri}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setTeachingContri(newContent)} // preferred to use only this option to update the content for performance reasons
            />
          </section>
          <section>
            <h3>
              <div className={classes["space-between"]}>
                <span>16. Any other relevant information.</span>
                <span>(not more than 500 words)</span>
              </div>
            </h3>
            <JoditEditor
              ref={editor}
              value={relevantInfo}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setrelevantInfo(newContent)} // preferred to use only this option to update the content for performance reasons
            />
          </section>
          <section>
            <h3>
              <div className={classes["space-between"]}>
                <span>17. Professional Service : Editorship/Reviewership</span>
                <span>(not more than 500 words)</span>
              </div>
            </h3>
            <JoditEditor
              ref={editor}
              value={professionalService}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setProfesssionalService(newContent)} // preferred to use only this option to update the content for performance reasons
            />
          </section>
          <section>
            <h3>
              <div className={classes["space-between"]}>
                <span>18. Detailed List of Journal Publications</span>
                {/* <span>(not more than 500 words)</span> */}
              </div>
              <div className={classes["small-text"]}>
                (Including Sr. No., Author's Names, Paper Title, Volume, Issue,
                Year, Page Nos., Impact Factor (if any), DOI,
                Status[Published/Accepted] )
              </div>
            </h3>
            <JoditEditor
              ref={editor}
              value={loj}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setLoj(newContent)} // preferred to use only this option to update the content for performance reasons
            />
          </section>
          <section>
            <h3>
              <div className={classes["space-between"]}>
                <span>19. Detailed List of Conference Publications </span>
              </div>
              <div className={classes["small-text"]}>
                (Including Sr. No., Author's Names, Paper Title, Name of the
                conference, Year, Page Nos., DOI [If any] )
              </div>
            </h3>
            <JoditEditor
              ref={editor}
              value={loc}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setLoc(newContent)} // preferred to use only this option to update the content for performance reasons
            />
          </section>
          <section className={classes.rightAlign}>
            <button className={classes.submit} onClick={handleClick}>Save and Next</button>
          </section>
        </form>
      </div>
    </div>
  );
}
