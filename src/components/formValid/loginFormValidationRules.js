import React from 'react';

export default function validate(values) {
    let errors = {};
    console.log(values);

    if (!values.fullName) {
        errors.fullName = 'name is required';
    } else if (/[0-9]/.test(values.fullName)) {
        errors.fullName = 'invalid name';
    }

    if (!values.dob) {
        errors.dob = 'Date of Birth is required';
    } else if (/(199\d|200\d|2003)$/.test(values.dob)) {
        errors.dob = 'invalid date of birth';
    }

    if (!values.mobile) {
        errors.mobile = 'mobile is required';
    } else if (!/[0-9]/.test(values.mobile)) {
        errors.mobile = 'Invalid Mobile Number';
    } else if (values.mobile.length < 10) {
        errors.mobile = 'mobile number must be above 10 numbers and below 12 numbers';
    }

    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.city) {
        errors.city = 'city is required';
    } else if (/[0-9]/.test(values.city)) {
        errors.city = 'invalid city name';
    }

    if (!values.tenth_mark) {
        errors.tenth_mark = 'tenth_mark is required';
    }

    if (!values.tenth_year) {
        errors.tenth_year = 'year is required';
    }
    if (!values.institution_tenth) {
        errors.institution_tenth = 'institution_tenth is required';
    }
    if (!values.twelth_mark) {
        errors.twelth_mark = 'twelth_mark is required';
    }

    if (!values.second_year) {
        errors.second_year = 'year is Required';
    }

    if (!values.institution_twelth) {
        errors.institution_twelth = 'institution_tenth is required';
    }

    if (!values.total_experience) {
        errors.total_experience = 'total_experience is required';
    }
    if (!values.country) {
        errors.country = 'country is required';
    }
    if (!values.qualifications) {
        errors.qualifications = 'qualification is required';
    }

    if (!values.presentEmployerFrom) {
        errors.presentEmployerFrom = 'from date is required';
    }

    if (!values.presentEmployerDesignation) {
        errors.presentEmployerDesignation = 'designation is required';
    }

    if (!values.presentCompanyName) {
        errors.presentCompanyName = 'companyName is required';
    }

    return errors;
}