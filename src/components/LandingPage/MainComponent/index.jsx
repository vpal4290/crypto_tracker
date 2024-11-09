import React from 'react'
import './styles.css'
import Button from '../../Common/Button';
import Gradient from "../../../assets/gradient.png"
import Iphone from "../../../assets/iphone.png"
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { RWebShare } from 'react-web-share';
import Footer from '../../Common/Footer';

function MainComponent() {
    return (
        <div className='flex-info'>
            <div className="left-component">
                <motion.h1 className="track-crypto-heading"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >Track Crypto</motion.h1>
                <motion.h1 className="real-time-heading"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >Real Time.</motion.h1>
                <motion.p className="info-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    Track crypto through a public api in real time. Visit the dashboard to do so!
                </motion.p>

                <motion.div className="btn-flex"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.25 }}
                >
                    <Link to="/dashboard"><Button text={"Dashboard"} /></Link>
                    <RWebShare
                        data={{
                            text: "Crypto Dashboard made using React JS.",
                            url: "https://crpto-tracker-project.netlify.app",
                            title: "CryptoDashboard.",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        <Button text="Share App" outlined={true} />
                    </RWebShare>
                </motion.div>
            </div>
            <div className="right-component">
                <motion.img src={Iphone} className='iphone' alt="Iphone Image"
                    initial={{ y: -12 }}
                    animate={{ y: 10 }}
                    transition={{
                        repeat: Infinity,
                        type: "smooth",
                        repeatType: "mirror",
                        duration: 2
                    }}
                />
                <img src={Gradient} className='gradient' alt="Gradient Image" />
            </div>
        </div>
    )
}

export default MainComponent;