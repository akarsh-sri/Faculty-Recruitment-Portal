import { useRef, useState } from "react";
import Input from "../components/Input";
import TableInput from "../components/TableInput";
// import { sendPostReq } from "../util";
import classes from "./Page.module.css";
import PageHead from "./PageHead";
import Select from "react-select";
const options = [
  { value: "Thesis Supervisor", label: "Thesis Supervisor" },
  { value: "Postdoc Supervisor", label: "Postdoc Supervisor" },
  { value: "Research Collaborator", label: "Research Collaborator" },
  { value: "Other", label: "Other" },
];
export default function Page8() {
  const [bestPapers, setBestPapers] = useState([]);
  const [phd, setPhd] = useState();
  const [pg, setPg] = useState();
  const [ug, setUg] = useState();
  const [doc12, setDoc12] = useState();
  const [doc10, setDoc10] = useState();
  const [paySlip, setPaySlip] = useState();
  const [noc, setNoc] = useState();
  const [postPhd, setPostPhd] = useState();
  const [exp, setExp] = useState();
  const [sign, setSign] = useState();
  async function sendPostReq() {
    const payload = {
      bestPapers: ["bestPapers", bestPapers],
      phd: ["phd", phd],
      pg: ["pg", pg],
      ug: ["ug", ug],
      doc12: ["doc12", doc12],
      doc10: ["doc10", doc10],
      paySlip: ["paySlip", paySlip],
      noc: ["noc", noc],
      postPhd: ["postPhd", postPhd],
      exp: ["exp", exp],
      sign: ["sign", sign],
    };

    const res = await fetch("http://localhost:3000/pg8", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({payload}),
    });
  }
  function handleChange(e) {
    // console.log(e.target.files);
    // const chosenFiles = Array.prototype.slice.call(e.target.files);
    // const files = chosenFiles.map((res) => {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(res);
    //   let val;
    //   reader.onloadend = () => {
    //     setPhd([res.name, reader.result]);

    //   };
    // });
    const res = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      setBestPapers([res.name, reader.result]);
    };
    // setBestPapers(chosenFiles);
  }
  function handlePhd(e) {
    const res = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      setPhd([res.name, reader.result]);
    };
  }
  function handlePg(e) {
    // setPg(e.target.files[0]);
    const res = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      setPg([res.name, reader.result]);
    };
  }
  function handleUg(e) {
    // setUg(e.target.files[0]);
    const res = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      setUg([res.name, reader.result]);
    };
  }
  function handleDoc12(e) {
    // setDoc12(e.target.files[0]);
    const res = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      setDoc12([res.name, reader.result]);
    };
  }
  function handleDoc10(e) {
    // setDoc10(e.target.files[0]);
    const res = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      setDoc10([res.name, reader.result]);
    };
  }
  function handlePaySlip(e) {
    // setPaySlip(e.target.files[0]);
    const res = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      setPaySlip([res.name, reader.result]);
    };
  }
  function handleNoc(e) {
    // setNoc(e.target.files[0]);
    const res = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      setNoc([res.name, reader.result]);
    };
  }
  function handlePostPhd(e) {
    // setPostPhd(e.target.files[0]);
    const res = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      setPostPhd([res.name, reader.result]);
    };
  }
  function handleExp(e) {
    // setExp(e.target.files[0]);
    const res = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      setExp([res.name, reader.result]);
    };
  }
  function handleSign(e) {
    // setSign(URL.createObjectURL(e.target.files[0]));
    const res = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      setSign([URL.createObjectURL(res), reader.result]);
    };
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
        <form>
          <h4>20. Reprints of 5 Best Research Papers *</h4>
          <section>
            <h3>{"Upload 5 Best Research Papers in a single PDF < 6MB"}</h3>
            <div className={classes.flex}>
              <div>
                <div className={classes["file-input"]}>
                  <p className={classes["file-label"]}>Upload 5 best paper:</p>
                  <input
                    id="best5"
                    type="file"
                    hidden
                    onChange={handleChange}
                    multiple
                  />
                  <label htmlFor="best5" className={classes["file-button"]}>
                    Choose File
                  </label>
                  <p className={classes["selected-item"]}>
                    {bestPapers && bestPapers[0]}
                    {/* {bestPapers.map((paper) => (
                      <span>{paper.name} </span>
                    ))} */}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <h4>
            21. Check List of the documents attached with the online application
            *
          </h4>
          <section>
            <h3>
              Check List of the documents attached with the online application
              (Documents should be uploaded in PDF format only):
              <div className={classes["small-text"]} style={{ color: "red" }}>
                Uploaded PDF files will not be displayed as part of the printed
                form.
              </div>
            </h3>
            <div className={classes["small-flex"]}>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  PHD Certificate{" "}
                  <button className={classes["head-button"]} type="button">
                    View Details
                  </button>{" "}
                </h5>
                <div className={classes["flex-center"]}>
                  <p className={classes["file-label"]}>
                    Update PHD Certificate{" "}
                  </p>
                  <input id="phd" type="file" hidden onChange={handlePhd} />
                  <label htmlFor="phd" className={classes["file-button-sm"]}>
                    Choose File
                  </label>
                  <p className={classes["selected-item"]}>
                    {phd ? phd[0] : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  PG Documents{" "}
                  <button className={classes["head-button"]} type="button">
                    View Details
                  </button>
                </h5>
                <div className={classes["flex-center"]}>
                  <p className={classes["file-label"]}>
                    Update All semester/year-Marksheets and degree certificate
                  </p>
                  <input id="pg" type="file" hidden onChange={handlePg} />
                  <label htmlFor="pg" className={classes["file-button-sm"]}>
                    Choose File
                  </label>
                  <p className={classes["selected-item"]}>
                    {pg ? pg[0] : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  UG Documents{" "}
                  <button className={classes["head-button"]} type="button">
                    View Details
                  </button>
                </h5>
                <div className={classes["flex-center"]}>
                  <p className={classes["file-label"]}>
                    Update PHD Certificate
                  </p>
                  <input id="ug" type="file" hidden onChange={handleUg} />
                  <label htmlFor="ug" className={classes["file-button-sm"]}>
                    Choose File
                  </label>
                  <p className={classes["selected-item"]}>
                    {ug ? ug[0] : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  12th/HSC/Diploma Documents{" "}
                  <button className={classes["head-button"]} type="button">
                    View Details
                  </button>
                </h5>
                <div className={classes["flex-center"]}>
                  <p className={classes["file-label"]}>
                    Update 12th/HSC/Diploma/Marksheet(s) and passing certificate
                  </p>
                  <input id="doc12" type="file" hidden onChange={handleDoc12} />
                  <label htmlFor="doc12" className={classes["file-button-sm"]}>
                    Choose File
                  </label>
                  <p className={classes["selected-item"]}>
                    {doc12 ? doc12[0] : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  10th/SSC Documents{" "}
                  <button className={classes["head-button"]} type="button">
                    View Details
                  </button>
                </h5>
                <div className={classes["flex-center"]}>
                  <p className={classes["file-label"]}>
                    Update 10th/SSC/Marksheet(s) and passing certificate
                  </p>
                  <input id="doc10" type="file" hidden onChange={handleDoc10} />
                  <label htmlFor="doc10" className={classes["file-button-sm"]}>
                    Choose File
                  </label>
                  <p className={classes["selected-item"]}>
                    {doc10 ? doc10[0] : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  Pay Slip{" "}
                  <button className={classes["head-button"]} type="button">
                    View Details
                  </button>
                </h5>
                <div className={classes["flex-center"]}>
                  <p className={classes["file-label"]}>Update Pay Slip</p>
                  <input
                    id="pay-slip"
                    type="file"
                    hidden
                    onChange={handlePaySlip}
                  />
                  <label
                    htmlFor="pay-slip"
                    className={classes["file-button-sm"]}
                  >
                    Choose File
                  </label>
                  <p className={classes["selected-item"]}>
                    {paySlip ? paySlip[0] : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  NOC or Undertaking{" "}
                  <button className={classes["head-button"]} type="button">
                    View Details
                  </button>
                </h5>
                <div className={classes["flex-center"]}>
                  <p className={classes["file-label"]}>
                    Undertaking-in case, NOC is not available at the time of
                    application but will be provided at the time of interview
                  </p>
                  <input id="noc" type="file" hidden onChange={handleNoc} />
                  <label htmlFor="noc" className={classes["file-button-sm"]}>
                    Choose File
                  </label>
                  <p className={classes["selected-item"]}>
                    {noc ? noc[0] : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  Post phd Experience Certificate/All Experience Certificates/
                  Last Pay slip/{" "}
                  <button className={classes["head-button"]} type="button">
                    View Details
                  </button>
                </h5>
                <div className={classes["flex-center"]}>
                  <p className={classes["file-label"]}>Update Certificate</p>
                  <input
                    id="post-phd"
                    type="file"
                    hidden
                    onChange={handlePostPhd}
                  />
                  <label
                    htmlFor="post-phd"
                    className={classes["file-button-sm"]}
                  >
                    Choose File
                  </label>
                  <p className={classes["selected-item"]}>
                    {postPhd ? postPhd[0] : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  {
                    "Upload any other relevant document in a single PDF (For example award certificate, experience certificate etc) . If there are multiple documents, combine all the documents in a single PDF) <1MB."
                  }
                </h5>
                <div className={classes["flex-center"]}>
                  <p className={classes["file-label"]}>
                    Upload any other document
                  </p>
                  <input id="exp" type="file" hidden onChange={handleExp} />
                  <label htmlFor="exp" className={classes["file-button-sm"]}>
                    Choose File
                  </label>
                  <p className={classes["selected-item"]}>
                    {exp ? exp[0] : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  Upload your Signature in JPG only
                </h5>
                <div className={classes["flex-center"]}>
                  <p className={classes["file-label"]}>Your Signature</p>
                  <input id="sign" type="file" hidden onChange={handleSign} />
                  <label htmlFor="sign" className={classes["file-button-sm"]}>
                    Choose File
                  </label>
                  {sign && (
                    <img
                      src={sign[0]}
                      style={{
                        height: "50px",
                        width: "240px",
                        marginTop: "20px",
                      }}
                    />
                  )}
                </div>
              </section>
            </div>
          </section>
          <h4>22. Referees *</h4>
          <section>
            <h3>Fill the Details</h3>
            <table>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Association with Referee </th>
                <th>Institution/Organization </th>
                <th>E-mail </th>
                <th>Contact No.</th>
              </tr>
              <tr>
                <td>
                  <TableInput identifier="name-1" name="name" />
                </td>
                <td>
                  <TableInput identifier="position-1" name="position" />
                </td>
                <td>
                  <Select options={options} name="association-1" />
                </td>
                <td>
                  <TableInput
                    identifier="institution-1"
                    name="Institution/Organization"
                  />
                </td>
                <td>
                  <TableInput identifier="email-1" name="email" />
                </td>
                <td>
                  <TableInput identifier="Contact-1" name="Contact Number" />
                </td>
              </tr>
              <tr>
                <td>
                  <TableInput identifier="name-2" name="name" />
                </td>
                <td>
                  <TableInput identifier="position-2" name="position" />
                </td>
                <td>
                  <Select options={options} name="association-2" />
                </td>
                <td>
                  <TableInput
                    identifier="institution-2"
                    name="Institution/Organization"
                  />
                </td>
                <td>
                  <TableInput identifier="email-2" name="email" />
                </td>
                <td>
                  <TableInput identifier="Contact-2" name="Contact Number" />
                </td>
              </tr>
              <tr>
                <td>
                  <TableInput identifier="name-3" name="name" />
                </td>
                <td>
                  <TableInput identifier="position-3" name="position" />
                </td>
                <td>
                  <Select options={options} name="association-3" />
                </td>
                <td>
                  <TableInput
                    identifier="institution-3"
                    name="Institution/Organization"
                  />
                </td>
                <td>
                  <TableInput identifier="email-3" name="email" />
                </td>
                <td>
                  <TableInput identifier="Contact-3" name="Contact Number" />
                </td>
              </tr>
            </table>
          </section>
          <section className={classes.rightAlign}>
            <button className={classes.submit} type="button" onClick={sendPostReq}>
              Save and Next
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}