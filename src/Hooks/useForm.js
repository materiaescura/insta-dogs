import React from 'react'
import Validator from '../Utils/Forms/Validator'
import types from '../Utils/Forms/ValidatorTypes'

const useForm = (type) => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    const validator = new Validator(types, type)

    const onChange = ({target}) => {
        if(error) validator.validate(setError, target.value)
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
        validate:() => validator.validate(setError,value),
        onBlur: () => validator.validate(setError,value),
        error
    }
}

export default useForm