import React, { useState } from 'react'

const Biodata = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [age, setAge] = useState("")
    const [fullName, setFullName] = useState("")
    const [getAge, setGetAge] = useState("")


    const Data = () => {
        setFullName(firstName + " " + lastName)
        setGetAge(age)
    }

    return (
        <div>
            <label>FirstName</label><br />
            <input type="text" onChange={(event) => setFirstName(event.target.value)} /><br />
            <label>LastName</label><br />
            <input type="text" onChange={(event) => setlastName(event.target.value)} /><br />
            <label>Age</label><br />
            <input type='number' onChange={(event) => setAge(event.target.value)} /><br />

            <input type="submit" onClick={Data} /><br />

            <h1>{props.title}</h1>
            <div>
                <h3>Fullname : {fullName}</h3>
                <h3>Age : {getAge}</h3>
            </div>
        </div>
    )
}

export default Biodata

