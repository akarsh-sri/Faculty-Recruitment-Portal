import React from 'react';
import './Final.css'; // Import the CSS file for custom styling
import { useEffect } from 'react';
import { useState } from "react";

const Final = () => {

    const [formData, setFormData] = useState({});
    const [formphd, setphd] = useState({});
    const [formug, setug] = useState({});
    const [formpg, setpg] = useState({});
    const [ten, setten] = useState({});
    const [tw, settw] = useState({});
    const [added, setadded] = useState([]);
    const [pre, setpre] = useState({});
    const [his, sethis] = useState([]);
    const [te, sette] = useState([]);
    const [re, setre] = useState([]);
    const [ie, setie] = useState([]);
    const [sum, setsum] = useState({});
    const [best, setbest] = useState([]);
    const [pat, setpat] = useState([]);
    const [bk, setbk] = useState([]);
    const [bc, setbc] = useState([]);
    const [g, setg] = useState({});
    const [mem, setmem] = useState([]);
    const [pt, setpt] = useState([]);
    const [aw, setaw] = useState([]);
    const [sp, setsp] = useState([]);
    const [cp, setcp] = useState([]);
    const [phd, settphd] = useState([]);
    const [ug, settug] = useState([]);
    const [pg, settpg] = useState([]);

    function func(){
        sessionStorage.removeItem('uid');
        window.print();
        window.location.href='/'
    }

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const uid = sessionStorage.getItem('uid');
            const response8 = await fetch(`http://localhost:3000/ph/?uid=${uid}`);
            if (response8.ok) {
                const data = await response8.json();
                settphd(data);
                // console.log(data[0].DOB);
            }
            const response18 = await fetch(`http://localhost:3000/u/?uid=${uid}`);
            if (response18.ok) {
                const data = await response18.json();
                settug(data);
                // console.log(data[0].DOB);
            }
            const response28= await fetch(`http://localhost:3000/p/?uid=${uid}`);
            if (response28.ok) {
                const data = await response28.json();
                settpg(data);
                // console.log(data[0].DOB);
            }
            const response7 = await fetch(`http://localhost:3000/mem/?uid=${uid}`);
            if (response7.ok) {
                const data = await response7.json();
                setmem(data);
                // console.log(data[0].DOB);
            }
            const response17 = await fetch(`http://localhost:3000/pt/?uid=${uid}`);
            if (response17.ok) {
                const data = await response17.json();
                setpt(data);
                // console.log(data[0].DOB);
            }
            const response27 = await fetch(`http://localhost:3000/aw/?uid=${uid}`);
            if (response27.ok) {
                const data = await response27.json();
                setaw(data);
                // console.log(data[0].DOB);
            }
            const response37 = await fetch(`http://localhost:3000/sp/?uid=${uid}`);
            if (response37.ok) {
                const data = await response37.json();
                setsp(data);
                // console.log(data[0].DOB);
            }
            const response47 = await fetch(`http://localhost:3000/cp/?uid=${uid}`);
            if (response47.ok) {
                const data = await response47.json();
                setcp(data);
                // console.log(data[0].DOB);
            }
            const response22 = await fetch(`http://localhost:3000/sum/?uid=${uid}`);
            if (response22.ok) {
                const data = await response22.json();
                setsum(data[0]);
                // console.log(data[0].DOB);
            }
            const response23 = await fetch(`http://localhost:3000/best/?uid=${uid}`);
            if (response23.ok) {
                const data = await response23.json();
                setbest(data);
                // console.log(data[0].DOB);
            }
            const response33 = await fetch(`http://localhost:3000/pat/?uid=${uid}`);
            if (response33.ok) {
                const data = await response33.json();
                setpat(data);
                // console.log(data[0].DOB);
            }
            const response44 = await fetch(`http://localhost:3000/book/?uid=${uid}`);
            if (response44.ok) {
                const data = await response44.json();
                setbk(data);
                // console.log(data[0].DOB);
            }
            const response54 = await fetch(`http://localhost:3000/bc/?uid=${uid}`);
            if (response54.ok) {
                const data = await response54.json();
                setbc(data);
                // console.log(data[0].DOB);
            }
            const response64 = await fetch(`http://localhost:3000/g/?uid=${uid}`);
            if (response64.ok) {
                const data = await response64.json();
                setg(data[0]);
                // console.log(data[0].DOB);
            }
            const response0 = await fetch(`http://localhost:3000/?uid=${uid}`);
            if (response0.ok) {
                const data = await response0.json();
                setFormData(data[0]);
                // console.log(data[0].DOB);
            }
            const response11 = await fetch(`http://localhost:3000/phd/?uid=${uid}`);
            if (response11.ok) {
                const data = await response11.json();
                setphd(data[0]);
                // console.log(data[0]);
            }
            const response21 = await fetch(`http://localhost:3000/pg/?uid=${uid}`);
            if (response21.ok) {
                const data = await response21.json();
                setpg(data[0]);
                // console.log(data[0]);
            }
            const response31 = await fetch(`http://localhost:3000/ug/?uid=${uid}`);
            if (response31.ok) {
                const data = await response31.json();
                setug(data[0]);
                // console.log(data[0]);
            }
            const response41 = await fetch(`http://localhost:3000/10th/?uid=${uid}`);
            if (response41.ok) {
                const data = await response41.json();
                setten(data[0]);
                // console.log(data[0]);
            }
            const response51 = await fetch(`http://localhost:3000/12th/?uid=${uid}`);
            if (response51.ok) {
                const data = await response51.json();
                settw(data[0]);
                // console.log(data[0]);
            }
            const response6 = await fetch(`http://localhost:3000/pg2/?uid=${uid}`);
            if (response6.ok) {
                const data = await response6.json();
                setadded(data);
                // console.log(data);
            }
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

    // console.log(added[0]);

    return (
        <div>
            <div class="receipt final" >
                <div class="receipt_center">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Indian_Institute_of_Technology%2C_Patna.svg/1200px-Indian_Institute_of_Technology%2C_Patna.svg.png" style={{ height: '85px', float: 'left' }} alt="IIT Indore Logo" />
                    <p style={{ textAlign: "center", fontSize: "1.7em" }}>भारतीय प्रौद्योगिकी संस्थान पटना <br />Indian Institute of Technology Patna</p>
                    <p style={{ textAlign: 'center', marginTop: '10px', backgroundColor: '#175395', lineHeight: '25px', color: '#FFF', fontWeight: 'bold' }}>Application for the Faculty Position</p>
                </div>
                {/* <hr> */}
                <div class="title">{formData["First Name"]}</div>
                <div class="receipt_left">
                    <p>Advertisement Number : {formData["Advertisement No."]}</p>
                    <p>Date of Application : {formData["Date of Application"]}</p>
                    <p>Post Applied for :{formData["Post"]}</p>
                    <p>Department : {formData["Department"]}</p>
                    <p>Application Number : {formData["Application No."]}</p>
                </div>
                <div className="receipt_right" style={{ marginTop: '-30px' }}>
                    <img src="https://ofa.iiti.ac.in/facrec_che_2023_july_02/attach/711_Ma_Agarwal_1698348165/711_1715232633163116.jpeg" alt="Image" />
                </div>
                <div style={{ clear: 'both' }}></div>
                <div>
                    <span className="label">1. Personal Details</span>
                    <table className="tab">
                        <thead>
                            <tr style={{ backgroundColor: '#f1f1f1' }}>
                                <th><strong className="tr_title">First Name</strong></th>
                                <th><strong className="tr_title">Middle Name</strong></th>
                                <th><strong className="tr_title">Last Name</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{formData["First Name"]}</td>
                                <td>{formData["Middle Name"]}</td>
                                <td>{formData["Last Name"]}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </div>
                <table className="tab">
                    <thead>
                        <tr style={{ backgroundColor: '#f1f1f1' }}>
                            <th><strong className="tr_title">Date of Birth</strong></th>
                            {/* <th><strong className="tr_title">Age</strong></th> */}
                            <th><strong className="tr_title">Gender</strong></th>
                            <th><strong className="tr_title">Marital Status</strong></th>
                            <th><strong className="tr_title">Category</strong></th>
                            <th><strong className="tr_title">Nationality</strong></th>
                            <th><strong className="tr_title">ID Proof</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{formData["DOB"]}</td>
                            {/* <td></td> */}
                            <td>{formData["Gender"]}</td>
                            <td>{formData["Marital Status"]}</td>
                            <td>{formData["Category"]}</td>
                            <td>{formData["Nationality"]}</td>
                            <td>{formData["ID Proof"]}</td>
                        </tr>
                        <tr>
                            <td><strong>Father's Name</strong></td>
                            <td colSpan="6">{formData["Father Name"]}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="tab">
                    <tbody>
                        <tr style={{ backgroundColor: '#f1f1f1' }}>
                            <td width="50%"><strong className="tr_title">Current Address</strong></td>
                            <td width="50%"><strong className="tr_title">Permanent Address</strong></td>
                        </tr>
                        <tr>
                            <td>{formData["Correspondence Address"]}</td>
                            <td>{formData["Permanent Address"]}</td>
                        </tr>
                    </tbody>
                </table>
                <span className="label"></span>
                <table className="tab">
                    {/* <tr>
          <td colSpan="2"><strong>Mobile & Email</strong></td>
        </tr> */}
                    <tr>
                        <td style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">Mobile</strong></td>
                        <td>{formData["Mobile"]}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">Alternate Mobile</strong></td>
                        <td>{formData["AltMobile"]}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">Landline Phone No.</strong></td>
                        <td>{formData["Landline"]}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">E-mail</strong></td>
                        <td>{formData["Email"]}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">Alternate E-mail</strong></td>
                        <td>{formData["AltEmail"]}</td>
                    </tr>
                </table>

                <span className="label">2. Educational Qualifications</span>
                <table className="tab">
                    <tr style={{ backgroundColor: '#f1f1f1' }}>
                        <td colSpan="6" className="tr_title"><strong>(A) Ph. D. Details</strong></td>
                    </tr>
                    <tr>
                        <td width="30%"><strong>University/<br />Institute</strong></td>
                        <td width="12%"><strong>Department</strong></td>
                        <td width="17%"><strong>Name of Ph. D. <br />Supervisor</strong></td>
                        <td width="10%"><strong>Year of <br />Joining</strong></td>
                        <td width="15%"><strong>Date of <br />successful <br />thesis Defence</strong></td>
                        <td width="15%"><strong>Date of <br />Award</strong></td>
                    </tr>
                    <tr>
                        <td>{formphd["University"]}</td>
                        <td>{formphd["Department"]}</td>
                        <td>{formphd["Name of PhD Supervisor"]}</td>
                        <td>{formphd["Year of Joining"]}</td>
                        <td>{formphd["Date of Thesis Defence"]}</td>
                        <td>{formphd["Date of Award"]}</td>
                    </tr>
                    <tr>
                        <td><strong>Title of Ph. D. Thesis</strong></td>
                        <td colSpan="5">{formphd["Title of PhD Thesis"]}</td>
                    </tr>
                </table>
                <table className="tab">
                    <tr style={{ backgroundColor: '#f1f1f1' }}>
                        <td colSpan="8" className="tr_title"><strong>(B) Academic Details - PG</strong></td>
                    </tr>
                    <tr>
                        <td width="10%"><strong>Degree</strong></td>
                        <td width="25%"><strong>University/<br />Institute</strong></td>
                        <td width="20%"><strong>Subjects</strong></td>
                        <td width="10%"><strong>Year of <br />Joining</strong></td>
                        <td width="12%"><strong>Year of <br />Graduation</strong></td>
                        <td width="10%"><strong>Duration <br />(in years)</strong></td>
                        <td width="30%"><strong>Percentage/CGPA </strong></td>
                        <td width="30%"><strong>Division/Class </strong></td>
                    </tr>
                    <tr>
                        <td>{formpg["Degree"]}</td>
                        <td>{formpg["Institute"]}</td>
                        <td>{formpg["Branch"]}</td>
                        <td>{formpg["Year of Joining"]}</td>
                        <td>{formpg["Year of Completion"]}</td>
                        <td>{formpg["Duration"]}</td>
                        <td>{formpg["CGPA"]}</td>
                        <td>{formpg["Division"]}</td>
                    </tr>
                </table>
                <table className="tab">
                    <tr style={{ backgroundColor: '#f1f1f1' }}>
                        <td colSpan="8" className="tr_title"><strong>(C) Academic Details - UG</strong></td>
                    </tr>
                    <tr>
                        <td width="10%"><strong>Degree</strong></td>
                        <td width="25%"><strong>University/<br />Institute</strong></td>
                        <td width="20%"><strong>Subjects</strong></td>
                        <td width="10%"><strong>Year of <br />Joining</strong></td>
                        <td width="12%"><strong>Year of <br />Graduation</strong></td>
                        <td width="10%"><strong>Duration <br />(in years)</strong></td>
                        <td width="30%"><strong>Percentage/CGPA </strong></td>
                        <td width="30%"><strong>Division/Class </strong></td>
                    </tr>
                    <tr>
                        <td>{formpg["Degree"]}</td>
                        <td>{formug["Branch"]}</td>
                        <td>{formug["Institute"]}</td>
                        <td>{formug["Year of Joining"]}</td>
                        <td>{formug["Year of Completion"]}</td>
                        <td>{formug["Duration"]}</td>
                        <td>{formug["CGPA"]}</td>
                        <td>{formug["Division"]}</td>
                    </tr>
                </table>
                <table className="tab">
                    <tr style={{ backgroundColor: '#f1f1f1' }}>
                        <td colSpan="5" className="tr_title"><strong>(D) Academic Details - School</strong></td>
                    </tr>
                    <tr>
                        <td width="20%"><strong>10th/12th/HSC/Diploma</strong></td>
                        <td width="20%"><strong>School</strong></td>
                        <td width="15%"><strong>Year of Passing</strong></td>
                        <td width="15%"><strong>Percentage/CGPA</strong></td>
                        <td width="15%"><strong>Division/Class</strong></td>
                    </tr>
                    <tr>
                        <td>12th/HSC/Diploma</td>
                        <td>{tw["School"]}</td>
                        <td>{tw["Year of Passing"]}</td>
                        {/* <td></td> */}
                        <td>{tw["Grade"]}</td>
                        <td>{tw["Division"]}</td>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td>{ten["School"]}</td>
                        <td>{ten["Year of Passing"]}</td>
                        {/* <td></td> */}
                        <td>{ten["Grade"]}</td>
                        <td>{ten["Division"]}</td>
                    </tr>
                </table>

                <table className="tab">
                    <tr style={{ backgroundColor: '#f1f1f1' }}>
                        <td colSpan="8" className="tr_title"><strong>(E) Additional Educational Qualifications (If any)</strong></td>
                    </tr>
                    <tr>
                        <td width="10%"><strong>Degree</strong></td>
                        <td width="25%"><strong>University/<br />Institute</strong></td>
                        <td width="20%"><strong>Subjects</strong></td>
                        <td width="10%"><strong>Year of <br />Joining</strong></td>
                        <td width="12%"><strong>Year of <br />Graduation</strong></td>
                        <td width="10%"><strong>Duration <br />(in years)</strong></td>
                        <td width="30%"><strong>Percentage/CGPA</strong></td>
                        <td width="30%"><strong>Division/Class</strong></td>
                    </tr>
                    <tbody>
                        {added.map((item, index) => (
                            <tr key={index}>
                                <td>{item["Degree"]}</td>
                                <td>{item["Institute"]}</td>
                                <td>{item["Branch"]}</td>
                                <td>{item["Year of Joining"]}</td>
                                <td>{item["Year of Completion"]}</td>
                                <td>{item["Duration"]}</td>
                                <td>{item["CGPA"]}</td>
                                <td>{item["Division"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <span className="label">3. Employment Details </span>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td colSpan="5" className="tr_title"><strong>(A) Present Employment</strong></td>
                    </tr>
                    <tr>
                        <td width="20%"><strong>Position </strong></td>
                        <td width="30%"><strong>Organization/Institution</strong></td>
                        <td width="15%"><strong>Date of <br />Joining</strong></td>
                        <td width="15%"><strong>Date of <br />Leaving </strong></td>
                        <td width="15%"><strong>Duration <br />(in years)</strong></td>
                    </tr>
                    <tr>
                        <td>{pre["Position"]}</td>
                        <td>{pre["Institution"]}</td>
                        <td>{pre["Date of Joining"]}</td>
                        <td>{pre["Date of Leaving"]}</td>
                        <td>{pre["Duration"]}</td>
                    </tr>
                </table>

                <span className="label"> </span>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td colSpan="5" className="tr_title"><strong>(B) Employment History (After PhD )</strong></td>
                    </tr>
                    <tr>
                        <td width="20%"><strong>Position </strong></td>
                        <td width="30%"><strong>Organization/Institution</strong></td>
                        <td width="15%"><strong>Date of <br />Joining</strong></td>
                        <td width="15%"><strong>Date of <br />Leaving </strong></td>
                        <td width="15%"><strong>Duration <br />(in years)</strong></td>
                    </tr>
                    <tbody>
                        {his.map((item, index) => (
                            <tr key={index}>
                                <td>{item["Position"]}</td>
                                <td>{item["Institution"]}</td>
                                <td>{item["Date of Joining"]}</td>
                                <td>{item["Date of Leaving"]}</td>
                                <td>{item["Duration"]}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tr>
                        <tr>
                            <td colSpan="5">Experience : Minimum 6 years’ experience of which at least 3 years should be at the level of Assistant Professor Grade I/Senior Scientific Officer/Senior Design Engineer. <strong style={{ color: "red" }}>Yes</strong></td>
                        </tr>
                    </tr>
                </table>
                <br />
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td colSpan="8" className="tr_title"><strong>(C) Teaching Experience (After PhD)</strong></td>
                    </tr>
                    <tr>
                        <td width="25%"><strong>Position</strong></td>
                        <td width="30%"><strong>Employer</strong></td>
                        <td width="30%"><strong>Course Taught</strong></td>
                        <td width="30%"><strong>UG/PG</strong></td>
                        <td width="30%"><strong>No. of Students</strong></td>
                        <td width="10%"><strong>Date of <br />Joining</strong></td>
                        <td width="10%"><strong>Date of <br />Leaving</strong></td>
                        <td width="10%"><strong>Duration</strong></td>
                    </tr>
                    <tbody>
                        {te.map((item, index) => (
                            <tr key={index}>
                                <td>{item["Position"]}</td>
                                <td>{item["Employer"]}</td>
                                <td>{item["Course Taught"]}</td>
                                <td>{item["UG/PG"]}</td>
                                <td>{item["No. of Students"]}</td>
                                <td>{item["Date of Joining"]}</td>
                                <td>{item["Date of Leaving"]}</td>
                                <td>{item["Duration"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td colSpan="6" className="tr_title"><strong>(D) Research Experience </strong></td>
                    </tr>
                    <tr>
                        <td width="20%"><strong>Position</strong></td>
                        <td width="20%"><strong>Institute</strong></td>
                        <td width="20%"><strong>Supervisor</strong></td>
                        <td width="10%"><strong>Date of <br />Joining</strong></td>
                        <td width="10%"><strong>Date of <br />Leaving</strong></td>
                        <td width="10%"><strong>Duration</strong></td>
                    </tr>
                    <tbody>
                        {re.map((item, index) => (
                            <tr key={index}>
                                <td>{item["Position"]}</td>
                                <td>{item["Institute"]}</td>
                                <td>{item["Supervisor"]}</td>
                                <td>{item["Date of Joining"]}</td>
                                <td>{item["Date of Leaving"]}</td>
                                <td>{item["Duration"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1" }}>
                        <td colspan="5"><strong className="tr_title">(E) Industrial Experience </strong></td>
                    </tr>
                    <tr>
                        <td width="20%"><strong>Organization</strong></td>
                        <td width="20%"><strong>Work Profile</strong></td>
                        <td width="10%"><strong>Date of <br />Leaving</strong></td>
                        <td width="10%"><strong>Duration</strong></td>
                    </tr>
                    <tbody>
                        {ie.map((item, index) => (
                            <tr key={index}>
                                <td>{item["Organization"]}</td>
                                <td>{item["Work Profile"]}</td>
                                <td>{item["Date of Leaving"]}</td>
                                <td>{item["Duration"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <span className="label">4.  Area(s) of Specialization and Current Area(s) of Research</span>
                <table className="tab">
                    <tr>
                        <td width="25%" style={{ backgroundColor: "#f1f1f1" }}><strong className="tr_title">Area(s) of Specialization</strong></td>
                        <td>Ducimus molestiae animi explicabo odio vero.</td>
                    </tr>
                    <tr>
                        <td width="25%" style={{ backgroundColor: "#f1f1f1" }}><strong className="tr_title">Current Area(s) of Research</strong></td>
                        <td>955 Rolfson Points</td>
                    </tr>
                </table>
                <br />
                <span className="label">5. Summary of Publications</span>
                <table className="tab">
                    <tr>
                        <td width="50%"><strong>Number of International Journal Papers  </strong></td>
                        <td>{sum["Number of International Journal Paper"]}</td>
                    </tr>
                    <tr>
                        <td width="50%"><strong>Number of National Journal Papers  </strong></td>
                        <td>{sum["Number of National Journal Paper"]}</td>
                    </tr>
                    <tr>
                        <td><strong> Number of International Conference Papers </strong></td>
                        <td>{sum["Number of International Conference Paper"]}</td>
                    </tr>
                    <tr>
                        <td><strong> Number of National Conference Papers </strong></td>
                        <td>{sum["Number of National Conference Paper"]}</td>
                    </tr>
                    <tr>
                        <td><strong> Number of Patent(s) </strong></td>
                        <td>{sum["Number of Patent"]}</td>
                    </tr>
                    <tr>
                        <td><strong> Number of Book(s) </strong></td>
                        <td>{sum["Number of Book"]}</td>
                    </tr>
                    <tr>
                        <td><strong>Number of Book Chapter(s) </strong></td>
                        <td>{sum["Number of Book Chapter"]}</td>
                    </tr>
                </table>
                <span className="label">6. List of 10 Best Research Publications (Journal/Conference)</span>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="8"><strong className="tr_title">(A) Journals(s)</strong></td>
                    </tr>

                    <tr>
                        <td width="5%"><strong>S. No.</strong></td>
                        <td width="25%"><strong>Author(s) </strong></td>
                        <td width="30%"><strong>Title</strong></td>
                        <td width="25%"><strong>Name of Journal</strong></td>
                        <td width="10%"><strong>Year, Vol., Page</strong></td>
                        <td width="5%"><strong>Impact Factor</strong></td>
                        <td width="1%"><strong>DOI</strong></td>
                        <td width="5%"><strong>Status</strong></td>
                    </tr>
                    <tbody>
                        {best.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item["Author"]}</td>
                                <td>{item["Title"]}</td>
                                <td>{item["Name of Journal"]}</td>
                                <td>{item["Year Vol Page"]}</td>
                                <td>{item["Impact Factor"]}</td>
                                <td>{item["DOI"]}</td>
                                <td>{item["Status"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <span className="label">7. List of Patent(s), Book(s), Book Chapter(s)</span>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="8"><strong className="tr_title">(A) Patent(s)</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"><strong>S. No.</strong></td>
                        <td width="20%"><strong>Inventor(s) </strong></td>
                        <td width="20%"><strong>Title of Patent</strong></td>
                        <td width="15%"><strong>Country of<br /> Patent</strong></td>
                        <td width="10%"><strong>Patent <br />Number</strong></td>
                        <td width="10%"><strong>Date of <br />Filing</strong></td>
                        <td width="10%"><strong>Date of <br />Published</strong></td>
                        <td width="10%"><strong>Status<br />Filed/Published</strong></td>
                    </tr>
                    {pat.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item["Inventor"]}</td>
                            <td>{item["Title of Patent"]}</td>
                            <td>{item["Country of Patent"]}</td>
                            <td>{item["Patent Number"]}</td>
                            <td>{item["Date of Filing"]}</td>
                            <td>{item["Date of Publish"]}</td>
                            <td>{item["Status"]}</td>
                        </tr>
                    ))}
                </table>
                <br />
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="5"><strong className="tr_title">(B) Book(s)</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"><strong>S. No.</strong></td>
                        <td width="30%"><strong>Author(s) </strong></td>
                        <td width="40%"><strong>Title of the Book</strong></td>
                        <td width="20%"><strong>Year of Publication</strong></td>
                        <td width="10%"><strong>ISBN</strong></td>
                    </tr>
                    {bk.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item["Author"]}</td>
                            <td>{item["Title of Book"]}</td>
                            <td>{item["Year of Publication"]}</td>
                            <td>{item["ISBN"]}</td>
                        </tr>
                    ))}
                </table>
                <br />
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="5"><strong className="tr_title">(C) Book Chapter(s)</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"><strong>S. No.</strong></td>
                        <td width="30%"><strong>Author(s) </strong></td>
                        <td width="40%"><strong>Title of the Book Chapter</strong></td>
                        <td width="20%"><strong>Year of Publication</strong></td>
                        <td width="10%"><strong>ISBN</strong></td>
                    </tr>
                    {bc.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item["Author"]}</td>
                            <td>{item["Title of Book Chapter"]}</td>
                            <td>{item["Year of Publication"]}</td>
                            <td>{item["ISBN"]}</td>
                        </tr>
                    ))}
                </table>
                <br />
                <span className="label">8. Google Scholar Link </span>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="6"><strong className="tr_title">URL</strong></td>
                    </tr>
                    <tr>
                        <td width="12%"><a href="Exercitationem excepturi commodi magnam placeat impedit illum eligendi nobis." target="_blank">{g["Google Scholar Link"]}</a></td>
                    </tr>
                </table>
                <br />
                <span className="label">9. Membership of Professional Societies </span>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="3"><strong className="tr_title">Details</strong></td>
                    </tr>
                    <tr>
                        <td width="3%"><strong>S. No.</strong></td>
                        <td width="20%"><strong>Name of the Professional Society</strong></td>
                        <td width="20%"><strong>Membership Status (Lifetime/Annual)</strong></td>
                    </tr>
                    {mem.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item["Name of Professional Society"]}</td>
                            <td>{item["Membership Status"]}</td>
                        </tr>
                    ))}

                </table>
                <span className="label">10. Professional Training</span>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="5"><strong className="tr_title">Details</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"><strong>S. No.</strong></td>
                        <td width="20%"><strong>Type of Training Received</strong></td>
                        <td width="20%"><strong>Organisation</strong></td>
                        <td width="10%"><strong>Year</strong></td>
                        <td width="10%"><strong>Duration</strong></td>
                    </tr>
                    {pt.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item["Type of Training Received"]}</td>
                            <td>{item["Organization"]}</td>
                            <td>{item["Year"]}</td>
                            <td>{item["Duration"]}</td>
                        </tr>
                    ))}
                </table>
                <br />
                <span className="label">11. Award(s) and Recognition(s)</span>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="4"><strong className="tr_title">Details</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"><strong>S. No.</strong></td>
                        <td width="20%"><strong>Name of Award</strong></td>
                        <td width="20%"><strong>Awarded By</strong></td>
                        <td width="10%"><strong>Year</strong></td>
                    </tr>
                    {aw.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item["Name of Award"]}</td>
                            <td>{item["Awarded By"]}</td>
                            <td>{item["Year"]}</td>
                            
                        </tr>
                    ))}
                </table>
                <br />
                <span className="label">12. Research Supervision</span>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="6"><strong className="tr_title">(A) PhD Thesis Supervision</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"><strong>S. No.</strong></td>
                        <td width="25%"><strong>Name of Student/Research Scholar</strong></td>
                        <td width="30%"><strong>Title of Thesis</strong></td>
                        <td width="10%"><strong>Role</strong></td>
                        <td width="10%"><strong>Ongoing/Completed</strong></td>
                        <td width="10%"><strong>Ongoing Since/ Year of Completion</strong></td>
                    </tr>
                    {phd.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item["Name"]}</td>
                            <td>{item["Title of Thesis"]}</td>
                            <td>{item["Role"]}</td>
                            <td>{item["Ongoing/Completed"]}</td>
                            <td>{item["Ongoing Since"]}</td>
                        </tr>
                    ))}
                </table>
                <br />
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="6"><strong className="tr_title">(B) M.Tech/M.E./Master's Thesis Supervision</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"><strong>S. No.</strong></td>
                        <td width="25%"><strong>Name of Student/Research Scholar</strong></td>
                        <td width="30%"><strong>Title of Thesis</strong></td>
                        <td width="10%"><strong>Role</strong></td>
                        <td width="10%"><strong>Ongoing/Completed</strong></td>
                        <td width="10%"><strong>Ongoing Since/ Year of Completion</strong></td>
                    </tr>
                    {pg.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item["Name"]}</td>
                            <td>{item["Title of Thesis"]}</td>
                            <td>{item["Role"]}</td>
                            <td>{item["Ongoing/Completed"]}</td>
                            <td>{item["Ongoing Since"]}</td>
                        </tr>
                    ))}
                </table>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="6"><strong className="tr_title">(C) B.Tech/B.E./Bachelor's Project Supervision</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"><strong>S. No.</strong></td>
                        <td width="25%"><strong>Name of Student</strong></td>
                        <td width="30%"><strong>Title of Project</strong></td>
                        <td width="10%"><strong>Role</strong></td>
                        <td width="10%"><strong>Ongoing/Completed</strong></td>
                        <td width="10%"><strong>Ongoing Since/ Year of Completion</strong></td>
                    </tr>
                    {ug.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item["Name"]}</td>
                            <td>{item["Title of Thesis"]}</td>
                            <td>{item["Role"]}</td>
                            <td>{item["Ongoing/Completed"]}</td>
                            <td>{item["Ongoing Since"]}</td>
                        </tr>
                    ))}
                </table>
                <br />
                <span className="label">13. Sponsored Projects/ Consultancy Details</span>
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="7"><strong className="tr_title">(A) Sponsored Projects</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"><strong>S. No.</strong></td>
                        <td width="20%"><strong>Sponsoring Agency</strong></td>
                        <td width="20%"><strong>Title of Project</strong></td>
                        <td width="10%"><strong>Sanctioned Amount</strong></td>
                        <td width="10%"><strong>Period</strong></td>
                        <td width="10%"><strong>Role</strong></td>
                        <td width="10%"><strong>Status</strong></td>
                    </tr>
                    {sp.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item["Sponsoring Agency"]}</td>
                            <td>{item["Title of Project"]}</td>
                            <td>{item["Sanctioned Amount"]}</td>
                            <td>{item["Period"]}</td>
                            <td>{item["Role"]}</td>
                            <td>{item["Status"]}</td>
                        </tr>
                    ))}
                </table>
                <br />
                <table className="tab">
                    <tr style={{ backgroundColor: "#f1f1f1;" }}>
                        <td colspan="7"><strong className="tr_title">(B) Consultancy Projects</strong></td>
                    </tr>
                    <tr>
                        <td width="5%"><strong>S. No.</strong></td>
                        <td width="20%"><strong>Organization</strong></td>
                        <td width="20%"><strong>Title of Project</strong></td>
                        <td width="15%"><strong>Amount of Grant</strong></td>
                        <td width="15%"><strong>Period</strong></td>
                        <td width="15%"><strong>Role</strong></td>
                        <td width="15%"><strong>Status</strong></td>
                    </tr>
                    {cp.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item["Organization"]}</td>
                            <td>{item["Title of Project"]}</td>
                            <td>{item["Amount of Grant"]}</td>
                            <td>{item["Period"]}</td>
                            <td>{item["Role"]}</td>
                            <td>{item["Status"]}</td>
                        </tr>
                    ))}
                </table>
                <span className="label">15. Significant teaching contribution and future plans</span>
                <table className="tab">
                    <tr>
                        <td style={{ textAlign: "justify" }}></td>
                    </tr>
                </table>
                <br />
                <span className="label">16. Any other relevant information</span>
                <table className="tab">
                    <tr>
                        <td>
                            
                        </td>
                    </tr>
                </table>
                <br />
                <span className="label">17. Professional Service as Reviewer/Editor etc.</span>
                <table className="tab">
                    <tr>
                        <td></td>
                    </tr>
                </table>
                <br />
                <span className="label">18. Detailed List of Journal Publications</span>
                <table className="tab">
                    <tr>
                        <td>
                            <hr />
                            <ol>
                                
                            </ol>
                        </td>
                    </tr>
                </table>
                <br />
                <span className="label">19. Detailed List of Conference Publications</span>
                <table className="tab">
                    <tr>
                        <td></td>
                    </tr>
                </table>
                <br />
                <span className="label">20. Reprints of 5 Best Research Papers-Attached</span>
                <br />
                <br />
                <span className="label">21. Check List of the documents attached with the online application</span>
                <br />
                <br />
                <ol>
                    <li>PHD Certificate</li>
                    <li>PG Certificate</li>
                    <li>UG Certificate</li>
                    <li>12th/HSC/Diploma</li>
                    <li>10th/SSC Certificate</li>
                    <li>10 Years Post phd Experience Certificate</li>
                    <li>Any other relevant documents (Experience Certificate, Award Certificate, etc.)</li>
                </ol>
                <br />
                <br />
                <br />
                <span className="label">23. Final Declaration</span>
                <table className="tab">
                    <td>
                        I hereby declare that I have carefully read and understood the instructions and particulars mentioned in the advertisment and this application form. I further declare that all the entries along with the attachments uploaded in this form are true to the best of my knowledge and belief
                    </td>
                </table>
                <br />
                
                Signature of Applicant
            </div>
            <button onClick={func} style={{background:"grey",padding:"5px"}} className='btn'>Download</button>
        </div>
    );
};

export default Final;
