import { useRef, useState } from "react"
import '../style/components/_error-message.scss'

export default function BirthdayInput( props ) {

        const [error, setError] = useState(false)
        const [errorLevel, setErrorLevel] = useState(-1)
        const inputElement = useRef(null)
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear()

        const style = [
            { border: '2px solid #000000' },
            { border: '2px solid #26a706' },
            { border: '2px solid #d80a0a' }
        ]
        
        function changeHandler() {
            
            const value = inputElement.current.value
            const regEx = /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/
            const matchRegEx = value.match(regEx)
            console.log(matchRegEx)

            if (!value.match(regEx)) {
                setError('Date is not valid')
                setErrorLevel(2)
            } else if (matchRegEx[3] >= currentYear) {
                setError('Date is not valid. Babies can come for free :)')
            } else {
                const [ result, day, month, year ] = matchRegEx
                const reversedDate = `${year}-${month}-${day}`

                if (isNaN(Date.parse(reversedDate))) {
                    setError('Date is noy valid')
                    setErrorLevel(2)
                } else {
                    setError(false)
                    setErrorLevel(1)
                }
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
                setErrorLevel(-1)
            }
        }
    
        return (
            <>
                <input style={style[errorLevel]} ref={inputElement} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} {...props} />
                {error && <p className="error-message">{error}</p>}
            </>
        )
}