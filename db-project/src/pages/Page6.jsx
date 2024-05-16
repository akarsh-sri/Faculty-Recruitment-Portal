import { useState } from "react";
import Input from "../components/Input";
import TableInput from "../components/TableInput";
// import { sendPostReq } from "../util";
import classes from "./Page.module.css";
import PageHead from "./PageHead";
import { useEffect } from "react";
export default function Page6() {
    const [PhD, setPhD] = useState([]);
    const [Mtech, setMtech] = useState([]);
    const [Btech, setBtech] = useState([]);
    function addPhD(e) {
        e.preventDefault();
        setPhD((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
    }
    function addBtech(e) {
        e.preventDefault();
        setBtech((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
    }

    function addMtech(e) {
        e.preventDefault();
        setMtech((pre) => ([...pre, { id: Math.random(), degree: undefined }]));
    }
    function removeBtech(idx) {
        setBtech(pre => {
            const arr = pre.filter(item => item !== idx);
            return arr;
        })
    }
    function removeMtech(idx) {
        setMtech(pre => {
            const arr1 = pre.filter(item => item !== idx);
            return arr1;
        })
    }
    function removePhD(idx) {
        setPhD(pre => {
            const arr2 = pre.filter(item => item !== idx);
            return arr2;
        })
    }

    const [phd, setphd] = useState({});
    const [ug, setug] = useState({});
    const [pg, setpg] = useState({});


    useEffect(() => {
        fetchData();
        async function fetchData() {
            const uid = sessionStorage.getItem('uid');
            const response = await fetch(`http://localhost:3000/ph/?uid=${uid}`);
            if (response.ok) {
                const data = await response.json();
                setphd(data);
                // console.log(data[0].DOB);
            }
            const response1 = await fetch(`http://localhost:3000/u/?uid=${uid}`);
            if (response1.ok) {
                const data = await response1.json();
                setug(data);
                // console.log(data[0].DOB);
            }
            const response2= await fetch(`http://localhost:3000/p/?uid=${uid}`);
            if (response2.ok) {
                const data = await response2.json();
                setpg(data);
                // console.log(data[0].DOB);
            }
        }
    }, []);

    async function sendPostReq(data) {
        const uid = sessionStorage.getItem('uid');
        data={ ...data, uid: uid };
        const res = await fetch("http://localhost:3000/pg6", {
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
                <h4>13. Research Supervision:</h4>
                <form onSubmit={handleSubmit}>

                    <section>
                        {/* <span className={classes.headtop}> */}
                        <h3>
                            (A) PhD Thesis Supervision
                            <button className={classes.addMore} onClick={(e)=>addPhD(e)}>Add More</button>
                        </h3>
                        <table className={classes.additional} style={{ width: "1318px" }}>
                            <tr>
                                <th>S. No.</th>
                                <th>Name of Student/Research Scholar</th>
                                <th>Title of Thesis</th>
                                <th>Role</th>
                                <th>Ongoing/Completed</th>
                                <th>Ongoing Since/ Year of Completion</th>
                                <th></th>
                            </tr>
                            {
                                PhD.map((item, idx) => {
                                    return (
                                        <tr key={item.id}>
                                            <td style={{ textAlign: "center" }}>
                                                {idx + 1}
                                            </td>
                                            <td>
                                                <TableInput identifier={`PName${idx}`} name='Name of Student/Research Scholar' 
                                                value={idx<phd.length?phd[idx]["Name"]:''}/>
                                            </td>
                                            <td>
                                                <TableInput identifier={`PTitle${idx}`} name='Title of Thesis'
                                                value={idx<phd.length?phd[idx]["Title of Thesis"]:''} />
                                            </td>
                                            <td>
                                                <TableInput identifier={`PRole${idx}`} name='Role'
                                                value={idx<phd.length?phd[idx]["Role"]:''} />
                                            </td>
                                            <td>
                                                <TableInput identifier={`POngoing${idx}`} name='Ongoing/Completed'
                                                value={idx<phd.length?phd[idx]["Ongoing/Completed"]:''} />
                                            </td>
                                            <td>
                                                <TableInput identifier={`PSince${idx}`} name='Ongoing Since/ Year of Completion'
                                                value={idx<phd.length?phd[idx]["Ongoing Since"]:''} />
                                            </td>
                                            <td onClick={() => (removePhD(item))}>
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
                            (B). M.Tech/M.E./Master's Degree
                            <button className={classes.addMore} onClick={(e)=>addMtech(e)}>Add More</button>
                        </h3>
                        <table className={classes.additional} style={{ width: "1300px" }}>
                            <tr>
                                <th>S. No.</th>
                                <th>Name of Student/Research Scholar</th>
                                <th>Title of Thesis</th>
                                <th>Role</th>
                                <th>Ongoing/Completed</th>
                                <th>Ongoing Since/ Year of Completion</th>
                                <th></th>
                            </tr>
                            {
                                Mtech.map((item, idx) => {
                                    return (
                                        <tr key={item.id}>
                                            <td style={{ textAlign: "center" }}>
                                                {idx + 1}
                                            </td>
                                            <td>
                                                <TableInput identifier={`MName${idx}`} name='Name of Student/Research Scholar'
                                                value={idx<pg.length?pg[idx]["Name"]:''} />
                                            </td>
                                            <td>
                                                <TableInput identifier={`MTitle${idx}`} name='Title of Thesis'
                                                value={idx<pg.length?pg[idx]["Title of Thesis"]:''} />
                                            </td>
                                            <td>
                                                <TableInput identifier={`MRole${idx}`} name='Role' 
                                                value={idx<pg.length?pg[idx]["Role"]:''}/>
                                            </td>
                                            <td>
                                                <TableInput identifier={`MOngoing${idx}`} name='Ongoing/Completed'
                                                value={idx<pg.length?pg[idx]["Ongoing/Completed"]:''} />
                                            </td>
                                            <td>
                                                <TableInput identifier={`MSince${idx}`} name='Ongoing Since/ Year of Completion' 
                                                value={idx<pg.length?pg[idx]["Ongoing Since"]:''}/>
                                            </td>
                                            <td onClick={() => (removeMtech(item))}>
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
                            (C) B.Tech/B.E./Bachelor's Degree
                            <button className={classes.addMore} onClick={(e)=>addBtech(e)}>Add More</button>
                        </h3>
                        <table className={classes.additional} style={{ width: "1300px" }}>
                            <tr>
                                <th>S. No.</th>
                                <th>Name of Student/Research Scholar</th>
                                <th>Title of Thesis</th>
                                <th>Role</th>
                                <th>Ongoing/Completed</th>
                                <th>Ongoing Since/ Year of Completion</th>
                                <th></th>
                            </tr>
                            {
                                Btech.map((item, idx) => {
                                    return (
                                        <tr key={item.id}>
                                            <td style={{ textAlign: "center" }}>
                                                {idx + 1}
                                            </td>
                                            <td>
                                                <TableInput identifier={`BName${idx}`} name='Name of Student/Research Scholar' 
                                                value={idx<ug.length ? ug[idx]["Name"]:''}/>
                                            </td>
                                            <td>
                                                <TableInput identifier={`BTitle${idx}`} name='Title of Thesis'
                                                value={idx<ug.length ? ug[idx]["Title of Thesis"]:''} />
                                            </td>
                                            <td>
                                                <TableInput identifier={`BRole${idx}`} name='Role'
                                                value={idx<ug.length ? ug[idx]["Role"]:''} />
                                            </td>
                                            <td>
                                                <TableInput identifier={`BOngoing${idx}`} name='Ongoing/Completed' 
                                                value={idx<ug.length ? ug[idx]["Ongoing/Completed"]:''}/>
                                            </td>
                                            <td>
                                                <TableInput identifier={`BSince${idx}`} name='Ongoing Since/ Year of Completion'
                                                value={idx<ug.length ? ug[idx]["Ongoing Since"]:''} />
                                            </td>
                                            <td onClick={() => (removeBtech(item))}>
                                                <span style={{ color: 'red', cursor: 'pointer', fontWeight: 'bolder' }}>X</span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </section>
                    <span>
                        <button style={{ marginLeft: "50px" }} type="button" onClick={() => window.location.href = '/page5'}>&lt;</button>
                        <button style={{ marginLeft: "1200px" }} onClick={() => window.location.href = '/page7'}>SAVE & NEXT</button>
                    </span>
                </form>
            </div>
        </div>
    );
}
