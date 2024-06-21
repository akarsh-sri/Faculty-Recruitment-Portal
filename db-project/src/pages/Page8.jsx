import { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import TableInput from "../components/TableInput";
// import { sendPostReq } from "../util";
import classes from "./Page.module.css";
import PageHead from "./PageHead";
import Select from "react-select";
import axios from "axios";
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
  const [signImg, setSignImg] = useState();
  const [phdButton, setPhdButton] = useState();
  const [pgButton, setPgButton] = useState();
  const [ugButton, setUgButton] = useState();
  const [doc12Button, setDoc12Button] = useState();
  const [doc10Button, setDoc10Button] = useState();
  const [paySlipButton, setPaySlipButton] = useState();
  const [nocButton, setNocButton] = useState();
  const [postPhdButton, setPostPhdButton] = useState();
  const [refrees,setRefrees]=useState();
  async function sendPostReq(e) {
    e.preventDefault();
    const uuid=sessionStorage.getItem('uid');
    const data = new FormData(e.target);
    data.append("bestPapers", bestPapers);
    data.append("phd", phd);
    data.append("pg", pg);
    data.append("ug", ug);
    data.append("doc12", doc12);
    data.append("doc10", doc10);
    data.append("paySlip", paySlip);
    data.append("noc", noc);
    data.append("postPhd", postPhd);
    data.append("exp", exp);
    data.append("sign", sign);
    data.append("uid",uuid);
    console.log(data)
    axios
      .post("http://localhost:3000/pg8", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    // const res = await fetch("http://localhost:3000/pg8", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({payload}),
    // });
  }
  function handleChange(e) {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    setBestPapers(e.target.files[0]);
  }
  function handlePhd(e) {
    setPhd(e.target.files[0]);
  }
  function handlePg(e) {
    setPg(e.target.files[0]);
  }
  function handleUg(e) {
    setUg(e.target.files[0]);
  }
  function handleDoc12(e) {
    setDoc12(e.target.files[0]);
  }
  function handleDoc10(e) {
    setDoc10(e.target.files[0]);
  }
  function handlePaySlip(e) {
    setPaySlip(e.target.files[0]);
  }
  function handleNoc(e) {
    setNoc(e.target.files[0]);
  }
  function handlePostPhd(e) {
    setPostPhd(e.target.files[0]);
  }
  function handleExp(e) {
    setExp(e.target.files[0]);
  }
  function handleSign(e) {
    setSign(e.target.files[0]);
    setSignImg(URL.createObjectURL(e.target.files[0]));
  }
  useEffect(() => {
    const uuid=sessionStorage.getItem('uid')
    if (!uuid) {
      window.location.href = '/login'
  }
    async function getFile() {
      const response = await fetch(`http://localhost:3000/getfiles/${uuid}`);
      if (response.ok) {
        const resData = await response.json();
        resData.map((i) => {
          if (i.name === "phd") {
            setPhdButton(i["File Link"]);
          }
          if (i.name === "pg") {
            setPgButton(i["File Link"]);
          }
          if (i.name === "ug") {
            setUgButton(i["File Link"]);
          }
          if (i.name === "doc12") {
            setDoc12Button(i["File Link"]);
          }
          if (i.name === "doc10") {
            setDoc10Button(i["File Link"]);
          }
          if (i.name === "paySlip") {
            setPaySlipButton(i["File Link"]);
          }
          if (i.name === "noc") {
            setNocButton(i["File Link"]);
          }
          if (i.name === "postPhd") {
            setPostPhdButton(i["File Link"]);
          }
        });
      }
    }
    async function getRefrees(){
      const response=await fetch(`http://localhost:3000/referals/${uuid}`);
      if(response.ok){
        const resData=await response.json();
        setRefrees(resData);
      }
    }
    if(uuid){
      getFile();
      getRefrees();
    }
  }, []);
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
        <form onSubmit={sendPostReq}>
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
                    {bestPapers && bestPapers.name}
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
                  <button className={classes["head-button"]} type="button" disabled={!phdButton}>
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
                    {phd ? phd.name : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  PG Documents{" "}
                  <button className={classes["head-button"]} type="button" disabled={!pgButton}>
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
                    {pg ? pg.name : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  UG Documents{" "}
                  <button className={classes["head-button"]} type="button" disabled={!ugButton}>
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
                    {ug ? ug.name : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  12th/HSC/Diploma Documents{" "}
                  <button className={classes["head-button"]} type="button" disabled={!doc12Button}>
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
                    {doc12 ? doc12.name : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  10th/SSC Documents{" "}
                  <button className={classes["head-button"]} type="button" disabled={!doc10Button}>
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
                    {doc10 ? doc10.name : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  Pay Slip{" "}
                  <button className={classes["head-button"]} type="button" disabled={!paySlipButton}>
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
                    {paySlip ? paySlip.name : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  NOC or Undertaking{" "}
                  <button className={classes["head-button"]} type="button" disabled={!nocButton}>
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
                    {noc ? noc.name : undefined}
                  </p>
                </div>
              </section>
              <section className={classes["file-card"]}>
                <h5 className={classes["card-head"]}>
                  Post phd Experience Certificate/All Experience Certificates/
                  Last Pay slip/{" "}
                  <button className={classes["head-button"]} type="button" disabled={!postPhdButton}>
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
                    {postPhd ? postPhd.name : undefined}
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
                    {exp ? exp.name : undefined}
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
                      src={signImg}
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
                  <TableInput  identifier="name1" name="name" value={refrees && refrees[0].Name}/>
                </td>
                <td>
                  <TableInput identifier="position1" name="position" value={refrees && refrees[0].Position}/>
                </td>
                <td>
                  <Select options={options} name="association1" value={refrees && refrees[0].Association}/>
                </td>
                <td>
                  <TableInput
                    identifier="institution1"
                    name="Institution/Organization"
                    value={refrees && refrees[0].Institution}
                  />
                </td>
                <td>
                  <TableInput identifier="email1" name="email" value={refrees && refrees[0].Email}/>
                </td>
                <td>
                  <TableInput identifier="contact1" name="Contact Number" value={refrees && refrees[0]['Contact No.']} />
                </td>
              </tr>
              <tr>
                <td>
                  <TableInput identifier="name2" name="name" value={refrees && refrees[1].Name} />
                </td>
                <td>
                  <TableInput identifier="position2" name="position" value={refrees && refrees[1].Position} />
                </td>
                <td>
                  <Select options={options} name="association2" value={refrees && refrees[1].Association} />
                </td>
                <td>
                  <TableInput
                    identifier="institution2"
                    name="Institution/Organization"
                    value={refrees && refrees[1].Institution}
                  />
                </td>
                <td>
                  <TableInput identifier="email2" name="email" value={refrees && refrees[1].Email} />
                </td>
                <td>
                  <TableInput identifier="contact2" name="Contact Number" value={refrees && refrees[1]['Contact No.']} />
                </td>
              </tr>
              <tr>
                <td>
                  <TableInput identifier="name3" name="name" value={refrees && refrees[2].Name}/>
                </td>
                <td>
                  <TableInput identifier="position3" name="position" value={refrees && refrees[2].Position} />
                </td>
                <td>
                  <Select options={options} name="association3" value={refrees && refrees[2].Association} />
                </td>
                <td>
                  <TableInput
                    identifier="institution3"
                    name="Institution/Organization"
                    value={refrees && refrees[2].Institution}
                  />
                </td>
                <td>
                  <TableInput identifier="email3" name="email" value={refrees && refrees[2].Email} />
                </td>
                <td>
                  <TableInput identifier="contact3" name="Contact Number" value={refrees && refrees[2]['Contact No.']} />
                </td>
              </tr>
            </table>
          </section>
          <section className={classes.rightAlign}>
            <button onClick={() => window.location.href = '/final'}
              className={classes.submit}
              type="submit"
            >
              Save and Next
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}
