import React, { useState } from "react";

const Contact = () => {
    const [data , setData] = useState({
        fullname:"",
        email:"",
        mobile:"",
        msg:"",
    });
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My Name is ${data.fullname  } ,email add: ${data.email} ,mobile number is ${data.mobile} and my message is ${data.msg}`)
        
    };
    const InputEvent=(event) =>{
        const {name,value} =event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value
            }
        })
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number"
                                    name="mobile"
                                    value={data.mobile}
                                    onChange={InputEvent}
                                />
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg"
                                    value={data.msg}
                                    onChange={InputEvent} />
                            </div>
                            <div className="col-12 my-4">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;