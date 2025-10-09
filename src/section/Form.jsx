import {Element} from "react-scroll";

const FormSection = () => {
    return (<Element name="contact" className="contact">
        <h2 className="section-title">Mari Berkolaborasi</h2>
        <p>Punya proyek menarik? Mari diskusikan bagaimana saya bisa membantu mewujudkan visi kreatif Anda.</p>

        <form className="contact-form">
            <div className="form-group">
                <input type="text" placeholder="Nama Anda" required/>
                <input type="email" placeholder="Email Anda" required/>
            </div>
            <input type="text" placeholder="Subject" required/>
            <textarea placeholder="Ceritakan tentang proyek Anda..." required></textarea>
            <button type="submit" className="cta-button">Kirim Pesan</button>
        </form>
    </Element>)
}

export default FormSection;