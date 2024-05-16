import { useState } from "react";
import Input from "../components/Input";
import TableInput from "../components/TableInput";
import classes from "./Page.module.css";
import PageHead from "./PageHead";
import { useEffect } from "react";
export default function Page2() {
  const [additionalEducation, setAdditionalEducation] = useState([]);
  function addEducation(e) {
    e.preventDefault();
    setAdditionalEducation((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
  }
  function removeEducation(idx) {
    setAdditionalEducation(pre => {
      const arr = pre.filter(item => item !== idx);
      console.log(arr);
      return arr;
    })
  }

  const [formphd, setphd] = useState({});
  const [formug, setug] = useState({});
  const [formpg, setpg] = useState({});
  const [ten, setten] = useState({});
  const [tw, settw] = useState({});
  const [added, setadded] = useState({});

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const uid = sessionStorage.getItem('uid');
      const response = await fetch(`http://localhost:3000/phd/?uid=${uid}`);
      if (response.ok) {
        const data = await response.json();
        setphd(data[0]);
        // console.log(data[0]);
      }
      const response2 = await fetch(`http://localhost:3000/pg/?uid=${uid}`);
      if (response2.ok) {
        const data = await response2.json();
        setpg(data[0]);
        // console.log(data[0]);
      }
      const response3 = await fetch(`http://localhost:3000/ug/?uid=${uid}`);
      if (response3.ok) {
        const data = await response3.json();
        setug(data[0]);
        // console.log(data[0]);
      }
      const response4 = await fetch(`http://localhost:3000/10th/?uid=${uid}`);
      if (response4.ok) {
        const data = await response4.json();
        setten(data[0]);
        // console.log(data[0]);
      }
      const response5 = await fetch(`http://localhost:3000/12th/?uid=${uid}`);
      if (response5.ok) {
        const data = await response5.json();
        settw(data[0]);
        // console.log(data[0]);
      }
      const response6 = await fetch(`http://localhost:3000/pg2/?uid=${uid}`);
      if (response6.ok) {
        const data = await response6.json();
        setadded(data);
        // console.log(data);
      }
    }
  }, []);

  async function sendPostReq(data) {
    const uid = sessionStorage.getItem('uid');
    data = { ...data, uid: uid };
    const res = await fetch(`http://localhost:3000/pg2`, {
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
        <h4>2.Educational Qualification</h4>
        <form onSubmit={handleSubmit}>
          <section>
            <h3>(A) Details of PhD *</h3>
            <div className={classes.flex}>
              <Input
                name="University/Institute"
                type="text"
                identifier="University"
                value={formphd ? formphd["University"] : ''}
              />
              <Input name="Department" type="text" identifier="Department" value={formphd?formphd["Department"]:''} />
              <Input
                name="Name of PhD Supervisor"
                type="text"
                identifier="PhDS"
                value={formphd ? formphd["Name of PhD Supervisor"] : ''}
              />
              <Input
                name="Year of Joining"
                type="text"
                identifier="YoJ"
                value={formphd ? formphd["Year of Joining"] : ''}
              />
              <Input
                name="Date of Successful Thesis Defence"
                type="text"
                identifier="Defence"
                value={formphd ? formphd["Date of Thesis Defence"] : ''}
              />
              <Input
                name="Date of Award"
                type="date"
                identifier="Award"
                value={formphd ? formphd["Date of Award"] : ''}
              />
              <Input
                name="Title of PhD Thesis"
                type="text"
                identifier="TPhD"
                value={formphd ? formphd["Title of PhD Thesis"] : ''}
              />
            </div>
          </section>
          <section>
            <h3>(B) Academic Details - M. Tech./ M.E./ PG Details *</h3>
            <div className={classes.flex}>
              <Input identifier="MDegree" name="Degree/Certificate" type="text" value={formpg ? formpg["Degree"] : ''} />
              <Input identifier="MUniversity" name="University/Institute" type="text" value={formpg ? formpg["Institute"] : ''} />
              <Input identifier="MBranch" name="Branch/Stream" type="text" value={formpg ? formpg["Branch"] : ''} />
              <Input identifier="MYoJ" name="Year of Joining" type="text" value={formpg ? formpg["Year of Joining"] : ''} />
              <Input identifier="MYoC" name="Year of Completion" type="text" value={formpg ? formpg["Year of Completion"] : ''} />
              <Input identifier="MDuration" name="Duration (in years)" type="text" value={formpg ? formpg["Duration"] : ''} />
              <Input identifier="MCGPA" name="Percentage/ CGPA" type="text" value={formpg ? formpg["CGPA"] : ''} />
              <Input identifier="MDivision" name="Division/Class" type="text" value={formpg ? formpg["Division"] : ''} />
            </div>
          </section>
          <section>
            <h3>(C) Academic Details - B. Tech /B.E. / UG Details *</h3>
            <div className={classes.flex}>
              <Input identifier="BDegree" name="Degree/Certificate" type="text" value={formug ? formug["Degree"] : ''} />
              <Input identifier="BUniversity" name="University/Institute" type="text" value={formug ? formug["Institute"] : ''} />
              <Input identifier="BBranch" name="Branch/Stream" type="text" value={formug ? formug["Branch"] : ''} />
              <Input identifier="BYoJ" name="Year of Joining" type="text" value={formug ? formug["Year of Joining"] : ''} />
              <Input identifier="BYoC" name="Year of Completion" type="text" value={formug ? formug["Year of Completion"] : ''} />
              <Input identifier="BDuration" name="Duration (in years)" type="text" value={formug ? formug["Duration"] : ''} />
              <Input identifier="BCGPA" name="Percentage/ CGPA" type="text" value={formug ? formug["CGPA"] : ''} />
              <Input identifier="BDivision" name="Division/Class" type="text" value={formug ? formug["Division"] : ''} />
            </div>
          </section>
          <section>
            <h3>(D) Academic Details - School *</h3>
            <table>
              <tr>
                <th>10th/12th/HSC/Diploma</th>
                <th>School</th>
                <th>Year of Passing</th>
                <th>Percentage/ Grade</th>
                <th>Division/Class</th>
              </tr>
              <tr>
                <td>
                  <TableInput
                    disabled={true}
                    name="education"
                    value="12th/HSC/Diploma"
                    identifier="12th"
                  />
                </td>
                <td>
                  <TableInput
                    // disabled={true}
                    name="School"
                    // value="12th/HSC/Diploma"
                    identifier="School12"
                    value={tw ? tw["School"] : ''}
                  />
                </td>
                <td>
                  <TableInput
                    // disabled={true}
                    name="Passing Year"
                    // value="12th/HSC/Diploma"
                    identifier="PassingYear12"
                    value={tw ? tw["Year of Passing"] : ''}
                  />
                </td>
                <td>
                  <TableInput
                    // disabled={true}
                    name="Percentage/Grade"
                    // value="12th/HSC/Diploma"
                    identifier="Grade12"
                    value={tw ? tw["Grade"] : ''}
                  />
                </td>
                <td>
                  <TableInput
                    // disabled={true}
                    name="Division/Class"
                    // value="12th/HSC/Diploma"
                    identifier="Division12"
                    value={tw ? tw["Division"] : ''}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TableInput
                    disabled={true}
                    name="education"
                    value="10th"
                    identifier="10th"
                  />
                </td>
                <td>
                  <TableInput
                    // disabled={true}
                    name="School"
                    // value="12th/HSC/Diploma"
                    identifier="School10"
                    value={ten ? ten["School"] : ''}
                  />
                </td>
                <td>
                  <TableInput
                    // disabled={true}
                    name="Passing Year"
                    // value="12th/HSC/Diploma"
                    identifier="PassingYear10"
                    value={ten ? ten["Year of Passing"] : ''}
                  />
                </td>
                <td>
                  <TableInput
                    // disabled={true}
                    name="Percentage/Grade"
                    // value="12th/HSC/Diploma"
                    identifier="Grade10"
                    value={ten ? ten["Grade"] : ''}
                  />
                </td>
                <td>
                  <TableInput
                    // disabled={true}
                    name="Division/Class"
                    // value="12th/HSC/Diploma"
                    identifier="Division10"
                    value={ten ? ten["Division"] : ''}
                  />
                </td>
              </tr>
            </table>
          </section>
          <section>
            {/* <span className={classes.headtop}> */}
            <h3>
              (E) Additional Educational Qualification (If any)
              <button type="button" className={classes.addMore} onClick={(e) => addEducation(e)}>Add More</button>
            </h3>
            <table className={classes.additional}>
              <tr>
                <th>Degree/Certificate</th>
                <th>University/Institute</th>
                <th>Branch/Stream</th>
                <th>Year of Joining</th>
                <th>Year of Completion</th>
                <th>Duration (in years)</th>
                <th>Percentage/ CGPA</th>
                <th>Division/Class</th>
                <th></th>
              </tr>
              {
                additionalEducation.map((item, idx) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <TableInput identifier={`degree${idx}`} name='degree' value={idx < added.length ? added[idx]["Degree"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`college${idx}`} name='College' value={idx < added.length ? added[idx]["Institute"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`subjects${idx}`} name='subjects' value={idx < added.length ? added[idx]["Branch"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`YearOfJoining${idx}`} name='YearOfJoining' value={idx < added.length ? added[idx]["Year of Joining"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`YearOfCompletion${idx}`} name='YearOfCompletion' value={idx < added.length ? added[idx]["Year of Completion"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`duration${idx}`} name='duration' value={idx < added.length ? added[idx]["Duration"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`percentage${idx}`} name='percentage' value={idx < added.length ? added[idx]["CGPA"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`division${idx}`} name='division' value={idx < added.length ? added[idx]["Division"] : ''} />
                      </td>
                      <td onClick={() => (removeEducation(item))}>
                        <span style={{ color: 'red', cursor: 'pointer', fontWeight: 'bolder' }}>X</span>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
            {/* </span> */}
          </section>
          <button style={{ marginLeft: "1200px" }} onClick={() => window.location.href = '/page3'}>SAVE & NEXT</button>
        </form>
      </div>
    </div>
  );
}
