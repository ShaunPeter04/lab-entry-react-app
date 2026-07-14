import axios from 'axios';
import React, { useState } from 'react'
import NavigationBar from './NavigationBar';

const AddEntry = () => {

    const [input, changeInput] = useState({

        "name": "",
        "department": "",
        "sem": "",
        "course": "",
        "systemNumber": "",
        "loginTime": "",
        "logoutTime": "",
        "date": "",

    })

    const [error, setError] = useState("");

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add-entry", input).then(

            (response) => {
                console.log(response.data)
                alert("Entry added successfully")
            }

        ).catch(
            (error) => (
                console.error("Error Adding Entry", error)
            )
        )

    }

    return (
        <div>
            <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input name="name" type="text" className="form-control" onChange={inputHandler} value={input.name} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Department</label>
                                <select name="department" id="" className="form-control" onChange={inputHandler} value={input.department}>
                                    <option value="">----Select option----</option>
                                    <option value="CSE">CSE</option>
                                    <option value="MCA">MCA</option>
                                    <option value="ECE">ECE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="MECH">MECH</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Semester</label>
                                <select name="sem" id="" className="form-control" onChange={inputHandler} value={input.sem}>
                                    <option value="">----Select option----</option>
                                    <option value="1st">1st</option>
                                    <option value="2nd">2nd</option>
                                    <option value="3rd">3rd</option>
                                    <option value="4th">4th</option>
                                    <option value="5th">5th</option>
                                    <option value="6th">6th</option>
                                    <option value="7th">7th</option>
                                    <option value="8th">8th</option>

                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Course</label>
                                <input name="course" type="text" className="form-control" onChange={inputHandler} value={input.course} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >System Number</label>
                                <input type="number" name='systemNumber' className="form-control" onChange={inputHandler} value={input.systemNumber} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Login Time</label>
                                <input name="loginTime" type="time" className="form-control" onChange={inputHandler} value={input.loginTime} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Logout Time</label>
                                <input name='logoutTime' type="time" className="form-control" onChange={inputHandler} value={input.logoutTime} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Date</label>
                                <input type="date" name="date" id="" min="2" max="10" required className="form-control" onChange={inputHandler} value={input.date} />

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddEntry