import React, { useState } from 'react';

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        message: ''
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3d2f66f0-ef75-438a-a216-ae56a2304605");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            setTimeout(() => {
                setResult('');
                setFormData({
                    fname: '',
                    lname: '',
                    email: '',
                    message: ''
                });
            }, 3000);
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    
    return(
        <section id="contact">
            <h2>Contact</h2>
            <div id="contact-container">
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="fname">First name:</label>
                        <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" cols="50" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <input type="submit" value="Submit" />
                    <span>{result}</span>
                </form> 
            </div>
        </section>
    )
}

export default Contact