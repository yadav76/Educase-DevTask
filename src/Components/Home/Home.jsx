import React from 'react'
import './styles.css'
import Btn from '../Btn/Btn'

const Home = () => {
    return (
        <div className="main">
            <div className='container'>

                <div className="right">
                    <div className="text">
                        <p className='heading'>Welcome to PopX</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>consectetur adipiscing elit.</p>
                    </div>

                    <Btn text={"Create Account"} flag={true} />
                    <Btn text={"Already Registered? Login"} flag={false} />

                </div>
            </div>
        </div>
    )
}

export default Home