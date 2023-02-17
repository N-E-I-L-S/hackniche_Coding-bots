import './Pension.css'
import Arrow from '../components/pension-arrow.png'
import Arrow1 from '../components/pension-arrow-invert.png'

export default function Pension() {
    return (
        <>
            <div className="pension-page">
                <h3>Pension</h3>
                <h5>To claim Indian Army pension, the following steps need to be taken:</h5>
                    <div className="pension-block">
                        Obtain the required documents: The first step is to gather all the necessary documents, including the discharge certificate, pension payment order, and documents related to family members such as the marriage certificate, birth certificates of children.
                    </div>
                    <div className="pension-arrow">
                        <img src={Arrow} alt="" />
                    </div>
                    <div className="pension-block">
                        Fill out the pension claim form: The next step is to obtain and fill out the pension claim form from the nearest Record Office or Pension Disbursing Agency (PDA) of the Indian Army. You can also download the form from the Indian Army's official website.
                    </div>
                    <div className="pension-arrow1">
                        <img src={Arrow1} alt="" />
                    </div>
                    <div className="pension-block">
                        Submit the form and documents: After filling out the form, you need to submit it along with all the necessary documents to the Record Office or PDA. You can submit the form and documents either in person or through registered post.
                    </div>
                    <div className="pension-arrow">
                        <img src={Arrow} alt="" />
                    </div>
                    <div className="pension-block">
                        Wait for the verification process: After submitting the form and documents, the Record Office or PDA will verify the documents and process your claim. This process can take several weeks to several months depending on the completeness of your documents and the efficiency of the Record Office or PDA.
                    </div>
                    <div className="pension-arrow1">
                        <img src={Arrow1} alt="" />
                    </div>
                    <div className="pension-block">
                        Receive your pension: Once the verification process is complete, you will start receiving your pension. The amount of pension will depend on various factors such as the rank and length of service of the retiree, and the number of family members entitled to receive pension.
                    </div>
                </div>
                <div className="pension-links">
                    <h4>Specially Aggregated Links</h4>
                    <div className="td">
                    <a href="https://desw.gov.in/en/pensions">Government Website for Pension</a> 
                    <a href="https://desw.gov.in/en/benefits-widows-battle-casualties">Benefits to Widow</a>
                    <a href="https://www.mod.gov.in/dod/sites/default/files/Part-II_H.pdf">All Files Regarding Pension</a>
                     </div>
            </div>
        </>
    )
}
