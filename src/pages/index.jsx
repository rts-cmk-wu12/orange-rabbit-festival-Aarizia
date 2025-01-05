import { useEffect, useRef, useState } from 'react'
import BirthdayInput from '../components/BirthdayInput'
import EmailInput from '../components/EmailInput'
import NameInput from '../components/NameInput'
import PhoneInput from '../components/PhoneInput'
import '../style/pages/_index.scss'

export default function Index() {

    const [data, setData] = useState({})
    const formElement = useRef(null)

    
    function submitHandler(event) {
        event.preventDefault()
        
        const data = new FormData(formElement.current)
        const dataObject = Object.fromEntries(data.entries())
        console.log(data)
        
        setData(dataObject)
        
    }
    useEffect(() => {

        const dataAsString = JSON.stringify(data)
        localStorage.setItem('data', dataAsString)

    }, [data])

    return (
        <div className="index">
            <div className='index__container'>
                <img className='index__image' src="../../src/assets/images/background-with-logo.png" alt="Festival image with logo text" />
                <div className='index-text-container'>
                    <section className='index-heading-container'>
                        <p className='index-heading-container__text uppercase'>Signup for the event</p>
                        <h1 className='index-heading-container__heading'>Orange Rabbit Festival 2023</h1>
                        <div className='index-time-and-place'>
                            <div className='index-time-and-place__widget'>
                                <img className='index-time-and-place__icon' src="../../src/assets/icons/date-icon.png" alt="date icon" />
                                <p className='index-time-and-place__text'>24 June 2023 - 1 July 2023</p>
                            </div>
                            <div className='index-time-and-place__widget'>
                                <img className='index-time-and-place__icon' src="../../src/assets/icons/map-icon.png" alt="map icon" />
                                <p className='index-time-and-place__text'>Bunny Avenue 22, 2300, Rabbitkilde</p>
                            </div>
                        </div>
                    </section>
                    <form className='index-form' ref={formElement} onSubmit={submitHandler}>
                        <div className='index-form__form-group'>
                            <label className='index-form__label' htmlFor='name'>Your name</label>
                            <NameInput className='index-form__input' name='name' placeholder='Full name' />
                        </div>
                        <div className='index-form__form-group'>
                            <label className='index-form__label' htmlFor='email'>Email address</label>
                            <EmailInput className='index-form__input' name='email' placeholder='Email' />
                        </div>
                        <div className='index-form__form-group'>
                            <label className='index-form__label' htmlFor='phone'>Phone number</label>
                            <PhoneInput className='index-form__input' name='phone' placeholder='Phone' />
                        </div>
                        <div className='index-form__form-group'>
                        <label className='index-form__label' htmlFor='birthday'>Your birthdate</label>
                            <BirthdayInput className='index-form__input' name='birtday' placeholder='dd-mm-yyyy' />
                        </div>
                        <button className='index-form__button' type='submit'>
                            Add participant
                            <img className='index-form__icon' src="../../src/assets/icons/plus-icon.png" alt="plus icon" />    
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}