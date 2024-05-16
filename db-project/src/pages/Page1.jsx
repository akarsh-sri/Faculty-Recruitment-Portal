import { useState } from "react";
import Input from "../components/Input";
import TableInput from "../components/TableInput";
import classes from "./Page.module.css";
import { useEffect } from "react";
import PageHead from "./PageHead";
export default function Page1() {

    const [formData, setFormData] = useState({});

    function handleClick() {
        const email = sessionStorage.getItem('email');
        forgetPassword(email);
        window.alert(`Reset Link sent to ${email}`)
    }
    function logout() {
        sessionStorage.removeItem('uid');
        window.location.href = '/';
        window.alert("Logged Out successfully");
    }

    

    useEffect(() => {
        const uid = sessionStorage.getItem('uid');
        console.log(uid);
        if (!uid) {
            window.location.href = '/login'
        }
        fetchData();
        async function fetchData() {
            const response = await fetch(`http://localhost:3000/?uid=${uid}`);
            if (response.ok) {
                const data = await response.json();
                setFormData(data[0]);
                // console.log(data[0].DOB);
            }
        }
    }, []);

    async function sendPostReq(data) {
        const uid = sessionStorage.getItem('uid');
        data={ ...data, uid: uid };
        const res = await fetch(`http://localhost:3000`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        console.log(data);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const fd = new FormData(evt.target);
        const data = Object.fromEntries(fd.entries());
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
                <form onSubmit={handleSubmit}>
                    {/* {renderInputFields()} */}
                    <section>
                        <div className={classes.flex}>
                            <Input
                                name="Advertisement Number"
                                type="text"
                                identifier="AdvertisementNo"
                                value={formData?formData["Advertisement No."]:''}
                            />
                            <Input name="Application Number" type="text" identifier="AppNo" value={formData?formData["Application No."]:''} />
                            <Input
                                name="Department/School *"
                                type="select"
                                identifier="Department"
                                value={formData?formData["Department"]:''}
                            >
                                <option value="select">Select</option>
                                <option value="CSE">CSE</option>
                                <option value="EEE">EEE</option>
                            </Input>
                            <Input
                                name="Date of Application"
                                type="text"
                                identifier="date"
                                value={formData?formData["Date of Application"]:''}
                            />
                            <Input
                                name="Post Applied for"
                                type="select"
                                identifier="post"
                                value={formData?formData["Post"]:''}
                            >
                                <option value="Select">Select</option>
                                <option value="Professor">Professor</option>
                                <option value="Associate Professor">Associate Professor</option>
                                <option value="Assistant Professor Grade I">Associate Professor Grade I</option>
                                <option value="Associate Professor Grade II">Associate Professor Grade II</option>
                            </Input>
                        </div>
                    </section>
                    <section>
                        <h3>1. Personal Details</h3>
                        <div className={classes.flex}>
                            <Input name="First Name" identifier="fname" type="text" value={formData?formData["First Name"]:""} />
                            <Input name="Last Name" identifier="lname" type="text" value={formData?formData["Last Name"]:''} />
                            <Input name="Date of Birth DD/MM/YYYY" identifier="DOB" type="text" value={formData ?formData["DOB"]:''} />
                            <Input name="Marital Status" identifier="MaritalStatus" type="select" value={formData?formData["Marital Status"]:''}>
                                <option value="Select">Select</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                                <option value="Other">Other</option>
                            </Input>
                            <Input name="ID Proof" identifier="IDProof" type="select" value={formData?formData["ID Proof"]:''}>
                                <option value="SELECT">SELECT</option>
                                <option value="AADHAR">AADHAR</option>
                                <option value="PAN-CARD">PAN-CARD</option>
                                <option value="DRIVING-LICENSE">DRIVING-LICENSE</option>
                                <option value="VOTER-ID">VOTER-ID</option>
                                <option value="PASSPORT">PASSPORT</option>
                                <option value="RATION-CARD">RATION-CARD</option>
                                <option value="OTHER">OTHER</option>
                            </Input>
                            <Input name="Father's Name" identifier="Father" type="text" value={formData?formData["Father Name"]:''} />
                            <Input name="Middle Name" identifier="mname" type="text" />
                            <Input name="Nationality" identifier="Nationality" type="select" value={formData?formData["Nationality"]:''}>
                                <option value="Select">Select</option>
                                <option value="Indian">Indian</option>
                                <option value="OCI">OCI</option>
                            </Input>
                            <Input name="Gender" identifier="Gender" type="select" value={formData?formData["Gender"]:''}>
                                <option value="Select">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Input>
                            <Input name="Category" identifier="category" type="text" value={formData?formData["Category"]:''} />
                            <Input name="Update ID Proof" identifier="IDFile" type="file" value={formData?formData["ID Proof file"]:""} />
                            <Input name="Upload Photo" identifier="Photo" type="file" value={formData?formData["Image File"]:''}></Input>
                        </div>
                    </section>
                    <section>
                        <div className={classes.flex}>
                            <Input name="Correspondence Address" identifier="CA1" type="textarea" value={formData?formData["Correspondence Address"]:''} />
                            <Input name="Permanent Address" identifier="PA1" type="textarea" value={formData?formData["Permanent Address"]:''} />
                        </div>
                    </section>
                    <section>
                        <div className={classes.flex}>
                            <Input name="Mobile" identifier="Mobile" type="text" value={formData?formData["Mobile"]:''} />
                            <Input name="Alternate Mobile" identifier="AltMobile" type="text" value={formData?formData["AltMobile"]:''} />
                            <Input name="Landline Number" identifier="Landline" type="text" value={formData?formData["Landline"]:''} />
                            <Input name="Email" identifier="Email" type="text" value={formData?formData["Email"]:''} />
                            <Input name="Alternate Email" identifier="AltEmail" type="text" value={formData?formData["AltEmail"]:""} />
                        </div>
                    </section>
                    <button style={{ marginLeft: "1200px" }} onClick={() => window.location.href = '/page2'}>SAVE & NEXT</button>
                </form>
            </div>
        </div>
    );
}
