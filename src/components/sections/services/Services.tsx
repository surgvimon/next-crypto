import { CodepenCircleOutlined, DollarOutlined, SketchOutlined, SlackSquareOutlined } from '@ant-design/icons'
import React from 'react'
import CardServices from '../CardServices'

const data = [
    {
        id: 1, icon: <CodepenCircleOutlined />, title: 'UI/UX Design', desc: "My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your product."
    },
    {
        id: 2, icon: <SlackSquareOutlined />, title: 'Frontend Development', desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop."
    },
    {
        id: 3, icon: <SketchOutlined />, title: 'Backend Development', desc: "The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks."
    },
    {
        id: 4, icon: <DollarOutlined />, title: 'App Development', desc: 'Unlike other developers in the market, I will building an app that runs on both IOS and Android devices without any extra cost to you.'
    }
]
const Services = () => {
  return (

    <section id="services">
        <div className="container">
            <div className="container--narrow">
                <div className="align-center color-black">
                    <h2>My Services</h2>
                    <p>I give you the best in all the services below</p>
                </div>
                <div className="container services__container" data-aos="fade-up">
                    {
                    data.map(item => (
                        <CardServices key={item.id} className="service light">
                        <div className="service__icon">{item.icon}</div>
                        <div className="service__details">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                        </CardServices>
                    ))
                    }
                </div>
            </div>
      </div>
    </section>
  )
}

export default Services
