import RegisterForm from '@/components/home/RegisterForm'
import React from 'react'
// import AboutImage from '../../user.png'

const MemberSections = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src="../../user.png" alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>BUY CRYPTO</h2>
                <p>
                Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, I'm always motivated to do more!
                </p>
                <RegisterForm/>
            </div>
        </div>
    </section>
  )
}

export default MemberSections
