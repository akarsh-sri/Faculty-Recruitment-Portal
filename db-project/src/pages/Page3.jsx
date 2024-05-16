import { useState } from "react";
import Input from "../components/Input";
import TableInput from "../components/TableInput";
import classes from "./Page.module.css";
import PageHead from "./PageHead";
import { useEffect } from "react";
export default function Page3() {
  const [additionalEmployment, setAdditionalEmployment] = useState([]);
  const [Experience, setExperience] = useState([]);
  const [Research, setResearch] = useState([]);
  const [Industry, setIndustry] = useState([]);
  function addEmployment(e) {
    e.preventDefault();
    setAdditionalEmployment((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
  }
  function addIndustry(e) {
    e.preventDefault();
    setIndustry((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
  }
  function addExperience(e) {
    e.preventDefault();
    setExperience((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
  }
  function addResearch(e) {
    e.preventDefault();
    setResearch((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
  }
  function removeResearch(idx) {
    setResearch(pre => {
      const arr = pre.filter(item => item !== idx);
      return arr;
    })
  }
  function removeIndustry(idx) {
    setIndustry(pre => {
      const arr = pre.filter(item => item !== idx);
      return arr;
    })
  }
  function removeExperience(idx) {
    setExperience(pre => {
      const arr1 = pre.filter(item => item !== idx);
      return arr1;
    })
  }
  function removeEmployment(idx) {
    setAdditionalEmployment(pre => {
      const arr2 = pre.filter(item => item !== idx);
      return arr2;
    })
  }

  const [pre, setpre] = useState({});
  const [his, sethis] = useState({});
  const [te, sette] = useState({});
  const [re, setre] = useState({});
  const [ie, setie] = useState({});

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const uid = sessionStorage.getItem('uid');
      const response = await fetch(`http://localhost:3000/pre/?uid=${uid}`);
      if (response.ok) {
        const data = await response.json();
        setpre(data[0]);
        // console.log(data[0].DOB);
      }
      const response2 = await fetch(`http://localhost:3000/his/?uid=${uid}`);
      if (response2.ok) {
        const data = await response2.json();
        sethis(data);
        // console.log(data[0].DOB);
      }
      const response3 = await fetch(`http://localhost:3000/te/?uid=${uid}`);
      if (response3.ok) {
        const data = await response3.json();
        sette(data);
        // console.log(data[0].DOB);
      }
      const response4 = await fetch(`http://localhost:3000/re/?uid=${uid}`);
      if (response4.ok) {
        const data = await response4.json();
        setre(data);
        // console.log(data[0].DOB);
      }
      const response5 = await fetch(`http://localhost:3000/ie/?uid=${uid}`);
      if (response5.ok) {
        const data = await response5.json();
        setie(data);
        // console.log(data[0].DOB);
      }
    }
  }, []);


  async function sendPostReq(data) {
    const uid = sessionStorage.getItem('uid');
    data = { ...data, uid: uid };
    const res = await fetch("http://localhost:3000/pg3", {
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
        <h4>3. Employment Details</h4>
        <form onSubmit={handleSubmit}>
          <section>
            <h3>(A) Present Employment</h3>
            <div className={classes.flex}>
              <Input
                name="Position"
                type="text"
                identifier="Position"
                value={pre ? pre["Position"] : ''}
              />
              <Input name="Organization/Institution" type="text" identifier="Institution" value={pre ? pre["Institution"] : ''} />
              <Input
                name="Status"
                type="select"
                identifier="Status"
                value={pre ? pre["Status"] : ''}
              >
                <option value="select">Select</option>
                <option value="Central Govt">Central Govt</option>
                <option value="State Govt">State Govt</option>
                <option value="Private">Private</option>
                <option value="Quasi Govt">Quasi Govt</option>
                <option value="Other">Other</option>
              </Input>
              <Input
                name="Date of Joining"
                type="text"
                identifier="DoJ"
                value={pre ? pre["Date of Joining"] : ''}
              />
              <Input
                name="Date of Leaving (Mention Continue if working)"
                type="text"
                identifier="DoL"
                value={pre ? pre["Date of Leaving"] : ''}
              />
              <Input
                name="Duration (in years & months)"
                type="text"
                identifier="Duration"
                value={pre ? pre["Duration"] : ''}
              />
            </div>
          </section>

          <section>
            {/* <span className={classes.headtop}> */}
            <h3>
              (B) Employment History (After PhD, Starting with Latest)
              <button className={classes.addMore} onClick={(e) => addEmployment(e)}>Add More</button>
            </h3>
            <table className={classes.additional} style={{ width: "1318px" }}>
              <tr>
                <th>S. No.</th>
                <th>Position</th>
                <th>Organization/Institution</th>
                <th>Date of Joining</th>
                <th>Date of Leaving</th>
                <th>Duration (in years & months)</th>
                <th></th>
              </tr>
              {
                additionalEmployment.map((item, idx) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: "center" }}>
                        {idx + 1}
                      </td>
                      <td>
                        <TableInput identifier={`Pos${idx}`} name='Position' value={idx < his.length ? his[idx]["Position"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Inst${idx}`} name='Organization/Institution' value={idx < his.length ? his[idx]["Institution"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`DoJ1${idx}`} name='DD/MM/YYYY' value={idx < his.length ? his[idx]["Date of Joining"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`DoL1${idx}`} name='DD/MM/YYYY' value={idx < his.length ? his[idx]["Date of Leaving"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Duration${idx}`} name='Duration' value={idx < his.length ? his[idx]["Duration"] : ''} />
                      </td>
                      <td onClick={() => (removeEmployment(item))}>
                        <span style={{ color: 'red', cursor: 'pointer', fontWeight: 'bolder' }}>X</span>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
            {/* </span> */}
          </section>

          <section>
            <h3>
              (C) Teaching Experience (After PhD)
              <button className={classes.addMore} onClick={(e) => addExperience(e)}>Add More</button>
            </h3>
            <table className={classes.additional} style={{ width: "1300px" }}>
              <tr>
                <th>S. No.</th>
                <th>Position</th>
                <th>Employer</th>
                <th>Course Taught</th>
                <th>UG/PG</th>
                <th>No. of Students</th>
                <th>Date of Joining the Institute</th>
                <th>Date of Leaving the Institute</th>
                <th>Duration (in years & months)</th>
                <th></th>
              </tr>
              {
                Experience.map((item, idx) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: "center" }}>
                        {idx + 1}
                      </td>
                      <td>
                        <TableInput identifier={`TPos${idx}`} name='Position' value={idx < re.length ? te[idx]["Position"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`TEmployer${idx}`} name='Employer' value={idx < re.length ? te[idx]["Employer"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Course${idx}`} name='Course Taught' value={idx < re.length ? te[idx]["Course Taught"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`UG${idx}`} name='	UG/PG' value={idx < re.length ?
                          te[idx]["UG/PG"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Nos${idx}`} name='No. of Students' value={idx < re.length ? te[idx]["No. of Students"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`TDoJ${idx}`} name='Date of Joining the Institute' value={idx < re.length ? te[idx]["Date of Joining"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`TDoL${idx}`} name='Date of Leaving the Institute' value={idx < re.length ? te[idx]["Date of Leaving"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`TDuration${idx}`} name='Duration (in years & months)' value={idx < re.length ? te[idx]["Duration"] : ''} />
                      </td>
                      <td onClick={() => (removeExperience(item))}>
                        <span style={{ color: 'red', cursor: 'pointer', fontWeight: 'bolder' }}>X</span>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
            {/* </span> */}
          </section>

          <section>
            <h3>
              (D) Research Experience (Post PhD, including Post Doctoral)
              <button className={classes.addMore} onClick={(e) => addResearch(e)}>Add More</button>
            </h3>
            <table className={classes.additional} style={{ width: "1300px" }}>
              <tr>
                <th>S. No.</th>
                <th>Position</th>
                <th>Institute</th>
                <th>Supervisor</th>
                <th>Date of Joining</th>
                <th>Date of Leaving</th>
                <th>Duration (in years & months)</th>
                <th></th>
              </tr>
              {
                Research.map((item, idx) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: "center" }}>
                        {idx + 1}
                      </td>
                      <td>
                        <TableInput
                          identifier={`RPos${idx}`}
                          name='Position'
                          value={idx < re.length ? re[idx]["Position"] : ''}
                        />
                      </td>
                      <td>
                        <TableInput
                          identifier={`RInstitute${idx}`}
                          name='Institute'
                          value={idx < re.length ? re[idx]["Institute"] : ''}
                        />
                      </td>
                      <td>
                        <TableInput
                          identifier={`Supervisor${idx}`}
                          name='Supervisor'
                          value={idx < re.length ? re[idx]["Supervisor"] : ''}
                        />
                      </td>
                      <td>
                        <TableInput
                          identifier={`RDoJ${idx}`}
                          name='Date of Joining'
                          value={idx < re.length ? re[idx]["Date of Joining"] : ''}
                        />
                      </td>
                      <td>
                        <TableInput
                          identifier={`RDoL${idx}`}
                          name='Date of Leaving'
                          value={idx < re.length ? re[idx]["Date of Leaving"] : ''}
                        />
                      </td>
                      <td>
                        <TableInput
                          identifier={`RDuration${idx}`}
                          name='Duration (in years & months)'
                          value={idx < re.length ? re[idx]["Duration"] : ''}
                        />
                      </td>

                      <td onClick={() => (removeResearch(item))}>
                        <span style={{ color: 'red', cursor: 'pointer', fontWeight: 'bolder' }}>X</span>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
            {/* </span> */}
          </section>

          <section>
            <h3>
              (E) Industrial Experience
              <button className={classes.addMore} onClick={(e) => addIndustry(e)}>Add More</button>
            </h3>
            <table className={classes.additional} style={{ width: "1300px" }}>
              <tr>
                <th>S. No.</th>
                <th>Organization</th>
                <th>Work Profile</th>
                <th>Date of Leaving</th>
                <th>Duration (in years & months)</th>
                <th></th>
              </tr>
              {
                Industry.map((item, idx) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: "center" }}>
                        {idx + 1}
                      </td>
                      <td>
                        <TableInput identifier={`Organization${idx}`} name='Organization' value={idx < ie.length ? ie[idx]["Organization"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`WorkP${idx}`} name='Work Profile' value={idx < ie.length ? ie[idx]["Work Profile"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`IDoL${idx}`} name='Date of Leaving' value={idx < ie.length ? ie[idx]["Date of Leaving"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`IDuration${idx}`} name='Duration (in years & months)' value={idx < ie.length ? ie[idx]["Duration"] : ''} />
                      </td>
                      <td onClick={() => (removeIndustry(item))}>
                        <span style={{ color: 'red', cursor: 'pointer', fontWeight: 'bolder' }}>X</span>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
            {/* </span> */}
          </section>

          <section>
            <h4>4. Area(s) of Specialization and Current Area(s) of Research</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>

              <Input type="textarea" name="specialization"></Input>
              <Input type="textarea" name="research"></Input>
            </div>
          </section>

          <button style={{ marginLeft: "1200px" }} onClick={() => window.location.href = '/page4'}>SAVE & NEXT</button>
        </form>
      </div>
    </div>
  );
}
