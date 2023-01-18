import { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator'
import { UserContext } from '../../ContextApi/Users'

export const UserValidator = (props) => {
    const Validator = useRef(
        new SimpleReactValidator(
            {
                messages: {
                    min: 'فیلد حراقل باید حاوی 5 کاراکتر باشد',
                    required: 'پرکردن این فیلد الزامی است'
                },
                element: (message) => <p className='text-danger'>{message}</p>
            }
        )
    )
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')

    if (Validator.current.allValid()) {
        console.log('success');
    } else {
        Validator.current.showMessages()
    }

    return (
        <UserContext.Provider value={{ name, password, passwordAgain,Validator, setName, setPassword, setPasswordAgain }}>
            {props.children}
        </UserContext.Provider>
    )
}
