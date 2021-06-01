import { useEffect, useReducer, useState, useRef } from 'react';
import { validateAge, validateEmail, validateName, validateSelect } from '../../functions/validate';
import { FormData } from '../../interfaces-and-classes/FormData';

import DatePicker from '../../components/DatePicker/DatePicker';
import { Input, Select } from 'antd';
import "antd/dist/antd.css";
import './create-user.scss';

const { Option } = Select;
//creates a store for the form data
const formReducer = (state: any, event: any) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

const CreateUser = () => {
    const [formData, setFormData] = useReducer(formReducer, new FormData);
    const date = useRef([1]);
    const response = useRef({});
    const [isValid, setIsValid] = useState(false);

    //set up current date
    useEffect(() => {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth() + 1;
        let currentDay = currentDate.getDate();
        date.current = [currentYear, currentMonth, currentDay];
    }, [])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let validForm = validateForm();
        if (validForm) {
            setIsValid(true);
            response.current = formData;
            setFormData(new FormData)
        }
        else {
            setIsValid(false);
        }
    }

    function validateForm() {
        let validForm = false;
        if (!validateName(formData.name)) {
            alert('Your name must contain only latin letters');
        }
        else if (!validateEmail(formData.email)) {
            alert('Please,enter your email correctly');
        }
        else if (!validateSelect(formData.job)) {
            alert('Please,select at least one option');
        }
        else if (!validateAge(formData.date_of_birth, date.current)) {
            alert('You should be older than 18');
        }
        else {
            validForm = true;
        }
        return validForm;
    }

    const handleChange = (e: any) => {
        setFormData({
            name: e.target.name,
            value: e.target.value,
        });
    }

    const handleDateChange = (e: any) => {
        let newDate = e.format('YYYY-MM-DD');
        setFormData({
            name: 'date_of_birth',
            value: newDate
        })
    }

    const handleSelectChange = (e: any) => {
        setFormData({
            name: 'job',
            value: e,
        });
    }

    return (
        <form className='form user-box' onSubmit={(e) => handleSubmit(e)}>
            <h3>Create new user</h3>
            <label>
                Name:
    <Input type="text" name="name" onChange={(e) => handleChange(e)} />
            </label>
            <label>
                Email:
    <Input type="text" name="email" onChange={(e) => handleChange(e)} />
            </label>
            <label>
                Date of Birth:
                <DatePicker onChange={(e) => handleDateChange(e)} />
            </label>
            <label>
                Job:
                <Select defaultValue='Choose an option' onChange={(e) => handleSelectChange(e)} >
                    <Option value='Software Engineer'>Software Engineer</Option>
                    <Option value='Bus Driver'>Bus Driver</Option>
                    <Option value='Painter'>Painter</Option>
                </Select>
            </label>
            <div id='submit'>
                <Input type="submit" value="Submit" />
            </div>
            {isValid ? (<div>
                {JSON.stringify(response.current)}
            </div>) : (<></>)}
        </form>
    )
}

export default CreateUser;