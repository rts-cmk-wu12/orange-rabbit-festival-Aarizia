import { useRef, useState } from "react"
import '../style/components/_error-message.scss'

export default function PhoneInput( props ) {

        const [error, setError] = useState(false)
        const [errorLevel, setErrorLevel] = useState(-1)
        const inputElement = useRef(null)
        
        const style = [
            { border: '2px solid #000000' },
            { border: '2px solid #26a706' },
            { border: '2px solid #d80a0a' },
            { border: '2px solid #dedede' }
        ]
        
        function changeHandler() {
            
            const regEx = /^\d{8,15}$/
            const value = inputElement.current.value
    
            if (!value.match(regEx)) {
                setError('Phone number is not valid')
                setErrorLevel(2)
            } else {
                setError(false)
                setErrorLevel(1)
            }
        }

        function focusHandler() {

            if (errorLevel !== 1) {
                setErrorLevel(0)
            }
        }
    
        function blurHandler() {

            const value = inputElement.current.value
    
            if (error === false && value != '') {
                setErrorLevel(1)
            } else {
                setErrorLevel(3)
            }
        }
    
        return (
            <>
                <input style={style[errorLevel]} ref={inputElement} type= 'tel' onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} {...props} />
                {error && <p className="error-message">{error}</p>}
            </>
        )
}