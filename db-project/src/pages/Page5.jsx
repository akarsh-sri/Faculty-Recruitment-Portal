import { useState } from "react";
import Input from "../components/Input";
import TableInput from "../components/TableInput";
// import { sendPostReq } from "../util";
import classes from "./Page.module.css";
import PageHead from "./PageHead";
import { useEffect } from "react";
export default function Page5() {
  const [additionalDetails, setAdditionalDetails] = useState([]);
  const [Details2, setDetails2] = useState([]);
  const [Details3, setDetails3] = useState([]);
  const [Project, setProject] = useState([]);
  const [Project2, setProject2] = useState([]);
  function addDetails(e) {
    e.preventDefault();
    setAdditionalDetails((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
  }
  function addProject(e) {
    e.preventDefault();
    setProject((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
  }
  function addProject2(e) {
    e.preventDefault();
    setProject2((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
  }
  function addDetails2(e) {
    e.preventDefault();
    setDetails2((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
  }
  function addDetails3(e) {
    e.preventDefault();
    setDetails3((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
  }
  function removeDetails3(idx) {
    setDetails3(pre => {
      const arr = pre.filter(item => item !== idx);
      return arr;
    })
  }
  function removeProject(idx) {
    setProject(pre => {
      const arr = pre.filter(item => item !== idx);
      return arr;
    })
  }
  function removeProject2(idx) {
    setProject2(pre => {
      const arr = pre.filter(item => item !== idx);
      return arr;
    })
  }
  function removeDetails2(idx) {
    setDetails2(pre => {
      const arr1 = pre.filter(item => item !== idx);
      return arr1;
    })
  }
  function removeDetails(idx) {
    setAdditionalDetails(pre => {
      const arr2 = pre.filter(item => item !== idx);
      return arr2;
    })
  }


  const [mem, setmem] = useState({});
  const [pt, setpt] = useState({});
  const [aw, setaw] = useState({});
  const [sp, setsp] = useState({});
  const [cp, setcp] = useState({});

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const uid = sessionStorage.getItem('uid');
      const response = await fetch(`http://localhost:3000/mem/?uid=${uid}`);
      if (response.ok) {
        const data = await response.json();
        setmem(data);
        // console.log(data[0].DOB);
      }
      const response1 = await fetch(`http://localhost:3000/pt/?uid=${uid}`);
      if (response1.ok) {
        const data = await response1.json();
        setpt(data);
        // console.log(data[0].DOB);
      }
      const response2 = await fetch(`http://localhost:3000/aw/?uid=${uid}`);
      if (response2.ok) {
        const data = await response2.json();
        setaw(data);
        // console.log(data[0].DOB);
      }
      const response3 = await fetch(`http://localhost:3000/sp/?uid=${uid}`);
      if (response3.ok) {
        const data = await response3.json();
        setsp(data);
        // console.log(data[0].DOB);
      }
      const response4 = await fetch(`http://localhost:3000/cp/?uid=${uid}`);
      if (response4.ok) {
        const data = await response4.json();
        setcp(data);
        // console.log(data[0].DOB);
      }
    }
  }, []);


  async function sendPostReq(data) {
    const uid = sessionStorage.getItem('uid');
    data = { ...data, uid: uid };
    const res = await fetch("http://localhost:3000/pg5", {
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
        <h4>9. Membership of Professional Societies</h4>
        <form onSubmit={handleSubmit}>

          <section>
            {/* <span className={classes.headtop}> */}
            <h3>
              Fill the Details
              <button className={classes.addMore} onClick={(e) => addDetails(e)}>Add More</button>
            </h3>
            <table className={classes.additional} style={{ width: "1318px" }}>
              <tr>
                <th>S. No.</th>
                <th>Name of the Professional Society</th>
                <th>Membership Status (Lifetime/Annual)</th>
                <th></th>
              </tr>
              {
                additionalDetails.map((item, idx) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: "center" }}>
                        {idx + 1}
                      </td>
                      <td>
                        <TableInput identifier={`NoPS${idx}`} name='Name of the Professional Society'
                          value={idx < mem.length ? mem[idx]["Name of Professional Society"] : ''}
                        />
                      </td>
                      <td>
                        <TableInput identifier={`Membership${idx}`} name='Membership Status (Lifetime/Annual)'
                          value={idx < mem.length ? mem[idx]["Membership Status"] : ''} />
                      </td>
                      <td onClick={() => (removeDetails(item))}>
                        <span style={{ color: 'red', cursor: 'pointer', fontWeight: 'bolder' }}>X</span>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
            {/* </span> */}
          </section>
          <h4>10. Professional Training</h4>
          <section>
            <h3>
              Fill the Details
              <button className={classes.addMore} onClick={(e) => addDetails2(e)}>Add More</button>
            </h3>
            <table className={classes.additional} style={{ width: "1300px" }}>
              <tr>
                <th>S. No.</th>
                <th>Type of Training Received</th>
                <th>Organisation</th>
                <th>Year</th>
                <th>Duration (in years & months)</th>
                <th></th>
              </tr>
              {
                Details2.map((item, idx) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: "center" }}>
                        {idx + 1}
                      </td>
                      <td>
                        <TableInput identifier={`Training${idx}`} name='Type of Training Received'
                          value={idx < pt.length ? pt[idx]["Type of Training Received"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Org${idx}`} name='Organisation'
                          value={idx < pt.length ? pt[idx]["Organization"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Year${idx}`} name='Year'
                          value={idx < pt.length ? pt[idx]["Year"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Dur${idx}`} name='Duration (in years & months)'
                          value={idx < pt.length ? pt[idx]["Duration"] : ''} />
                      </td>
                      <td onClick={() => (removeDetails2(item))}>
                        <span style={{ color: 'red', cursor: 'pointer', fontWeight: 'bolder' }}>X</span>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
            {/* </span> */}
          </section>

          <h4>11. Award(s) and Recognition(s)</h4>
          <section>
            <h3>
              Fill the Details
              <button className={classes.addMore} onClick={(e) => addDetails3(e)}>Add More</button>
            </h3>
            <table className={classes.additional} style={{ width: "1300px" }}>
              <tr>
                <th>S. No.</th>
                <th>Name of Award</th>
                <th>Awarded By</th>
                <th>Year</th>
                <th></th>
              </tr>
              {
                Details3.map((item, idx) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: "center" }}>
                        {idx + 1}
                      </td>
                      <td>
                        <TableInput identifier={`Award${idx}`} name='Name of Award'
                          value={idx < aw.length ? aw[idx]["Name of Award"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`AwardedBy${idx}`} name='Awarded By'
                          value={idx < aw.length ? aw[idx]["Awarded By"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Year1${idx}`} name='Year'
                          value={idx < aw.length ? aw[idx]["Year"] : ''}
                        />
                      </td>
                      <td onClick={() => (removeDetails3(item))}>
                        <span style={{ color: 'red', cursor: 'pointer', fontWeight: 'bolder' }}>X</span>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
            {/* </span> */}
          </section>
          <h4>12. Sponsored Projects/ Consultancy Details</h4>
          <section>
            <h3>
              (A) Sponsored Projects
              <button className={classes.addMore} onClick={(e) => addProject(e)}>Add More</button>
            </h3>
            <table className={classes.additional} style={{ width: "1300px" }}>
              <tr>
                <th>S. No.</th>
                <th>Sponsoring Agency</th>
                <th>Title of Project</th>
                <th>Sanctioned Amount (₹)</th>
                <th>Period</th>
                <th>Role</th>
                <th>Status (Completed/On-going)</th>
                <th></th>
              </tr>
              {
                Project.map((item, idx) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: "center" }}>
                        {idx + 1}
                      </td>
                      <td>
                        <TableInput identifier={`Sponsoring${idx}`} name='Sponsoring Agency'
                          value={idx < sp.length ? sp[idx]["Sponsoring Agency"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`ToP${idx}`} name='Title of Project'
                          value={idx < sp.length ? sp[idx]["Title of Project"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Amount${idx}`} name='Sanctioned Amount (₹)'
                          value={idx < sp.length ? sp[idx]["Sanctioned Amount"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Period${idx}`} name='Period'
                          value={idx < sp.length ? sp[idx]["Period"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Role${idx}`} name='Role'
                          value={idx < sp.length ? sp[idx]["Role"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Status${idx}`} name='Status (Completed/On-going)'
                          value={idx < sp.length ? sp[idx]["Status"] : ''} />
                      </td>
                      <td onClick={() => (removeProject(item))}>
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
              (B) Consultancy Projects
              <button className={classes.addMore} onClick={(e) => addProject2(e)}>Add More</button>
            </h3>
            <table className={classes.additional} style={{ width: "1300px" }}>
              <tr>
                <th>S. No.</th>
                <th>Organization</th>
                <th>Title of Project</th>
                <th>Amount of Grant</th>
                <th>Period</th>
                <th>Role</th>
                <th>Status</th>
                <th></th>
              </tr>
              {
                Project2.map((item, idx) => {
                  return (
                    <tr key={item.id}>
                      <td style={{ textAlign: "center" }}>
                        {idx + 1}
                      </td>
                      <td>
                        <TableInput identifier={`Orga${idx}`} name='Organization'
                          value={idx < cp.length ? cp[idx]["Organization"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`ToP2${idx}`} name='Title of Project'
                          value={idx < cp.length ? cp[idx]["Title of Project"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Amount2${idx}`} name='Amount of Grant'
                          value={idx < cp.length ? cp[idx]["Amount of Grant"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Period2${idx}`} name='Period'
                          value={idx < cp.length ? cp[idx]["Period"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Role2${idx}`} name='Role'
                          value={idx < cp.length ? cp[idx]["Role"] : ''} />
                      </td>
                      <td>
                        <TableInput identifier={`Status2${idx}`} name='Status'
                          value={idx < cp.length ? cp[idx]["Status"] : ''} />
                      </td>
                      <td onClick={() => (removeProject2(item))}>
                        <span style={{ color: 'red', cursor: 'pointer', fontWeight: 'bolder' }}>X</span>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
            {/* </span> */}
          </section>
          <span>
            <button style={{ marginLeft: "50px" }} type="button" onClick={() => window.location.href = '/page4'}>&lt;</button>
            <button style={{ marginLeft: "1200px" }} onClick={() => window.location.href = '/page6'}>SAVE & NEXT</button>
          </span>

        </form>
      </div>
    </div>
  );
}
