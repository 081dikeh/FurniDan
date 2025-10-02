import styles from './cssfolder/productinfo.module.css';
import infoImg1 from '../../assets/singleproduct-assets/descimg1.png'
import infoImg2 from '../../assets/singleproduct-assets/descimg2.png'

export default function ProductInfo() {
    return (
        <div className={styles.productInfoContainer}>
            <div className={styles.productInfohead}>
                <h3>Description</h3>
                <h3>Additional Information</h3>
                <h3>Reviews [5]</h3>
            </div>
            <div className={styles.productinfoText}>
                <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                    <br />
                    <br />
                    <br />
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.              
                </p>
            </div>

            <div className={styles.productinfoTextImg}>
                <div><img src={infoImg1} alt="infoimg1" /></div>
                <div><img src={infoImg2} alt="infoimg2" /></div>                              
            </div>
        </div>
    )
}