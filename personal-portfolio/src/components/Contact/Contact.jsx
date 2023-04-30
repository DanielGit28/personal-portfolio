import { useState } from "react"
import H2 from "../atoms/H2/H2"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [info, setInfo] = useState("")

    const sendEmail = () => {

    }
    return (
        <section id="contact-section" className="contact">
            <div className="contact__main">
            <H2 className="contact__title">Contact</H2>
            <form action="submit" className="contact__form">
                <div className="contact__cnt">
                    <label htmlFor="contact-name" className="contact__label">Name</label>
                    <input type="text" id="contact-name" className="contact__input" placeholder="Salim Z" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="contact__cnt">
                    <label htmlFor="contact-email" className="contact__label">Email address</label>
                    <input type="email" id="contact-email" className="contact__input" placeholder="salim@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="contact__cnt">
                    <label htmlFor="contact-subject" className="contact__label">Subject</label>
                    <input type="text" id="contact-subject" className="contact__input" placeholder="Proposal meeting" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                </div>
                <div className="contact__cnt">
                    <label htmlFor="contact-info" className="contact__label">How can I help ?</label>
                    <textarea id="contact-info" name="contact-info" className="contact__input" value={info} onChange={(e) => setInfo(e.target.value)}/>
                </div>
                <input type="submit" id="contact-submit" className="contact__submit" onClick={() => sendEmail()}/>
            </form>
            </div>
        </section>
    )
}
export default Contact