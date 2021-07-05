import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <>
        <div className='footer p-4'>
            <h4>Copyright &copy; 2021 Sirjeet Tamrakar | All Rights Reserved.</h4>
            <div className='icon'>
            <a href="https://www.instagram.com/__srijeet__/" target='blank' className='a'><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/sirjeet.tamrakar" target='blank' className='a'><i className="fab fa-facebook"></i></a>
            <a href="https://www.snapchat.com/add/s_tamrakara" target='blank' className='a'><i className="fab fa-snapchat-ghost"></i></a>
            </div>
        </div>
        
        </>
    )
}

export default Footer
