import NavBar from '../NavBar/NavBar.js';
import './StudentManagement.css';
import { useState } from 'react';

function StudentManager() {

    const [studentNum,setStudentNum] = useState([0,1,2]);

    function changeStudentCount(e) {
        console.log(e.currentTarget.value)
        setStudentNum((prevNum) => [
            prevNum,
            e.currentTarget.value
        ]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    return (
        <div className='studentManager'>
            <NavBar />
                <form className='studentDetails' onSubmit={handleSubmit}>
                <input onChange={(e) => {changeStudentCount(e.currentTarget.value)}}
                 className='studentCount' type='number' value={studentNum}  placeholder='Number of students..' />
                <button type='submit'>Set Number of Students</button>
                </form>
                <div className='students'>
                    {studentNum.map((studentNum, index) => {
                        return <div className='student' type='text' key={index}>{studentNum}</div>
                    })}
                </div>
        </div>
    )
}

export default StudentManager;