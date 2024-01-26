import { CodepenCircleOutlined } from '@ant-design/icons';
import React from 'react'
import CardServices from './CardServices';
import BuyCryptoTabs from '../crypto/BuyCryptoTabs';
const data = [
    {id: 1, icon: <CodepenCircleOutlined/>, title: 'Sign Up', desc: '3+ Years Working'},
    {id: 2, icon: <CodepenCircleOutlined/>, title: 'Verify Account', desc: '180+ Completed'},
    {id: 3, icon: <CodepenCircleOutlined/>, title: 'Buy Crypto', desc: '70+ happy clients'}
];
const BuyCryptoSections = () => {
  return (
    <section id="crypto" data-aos="fade-in">
        <div className="container crypto__container">
            <div className="crypto__left">
                <div className="" style={{minHeight: '100%', minWidth: '100%'}}>
                    <BuyCryptoTabs/>
                </div>
            </div>
            <div className="crypto__right">
                <h2>Buy Crypto</h2>
                <div className="crypto__cards">
                    {
                        data.map(item => (
                            <CardServices key={item.id} className="crypto__card">
                                <span className='crypto__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </CardServices>
                        ))
                    }
                </div>
                <p>
                Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, I'm always motivated to do more!
                </p>
                <p>
                Hi, my name is Hajia Bintu from Accra, Ghana. I'm a full-stack web developer with a Bachelors degree in Computer Science. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! Check out my resume below!
                </p>
            </div>
        </div>
    </section>
  )
}

export default BuyCryptoSections
