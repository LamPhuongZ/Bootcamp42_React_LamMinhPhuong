import React, { useState } from 'react'

// Import css module
import styles from "./Style/style.module.css";

function GlassesApp() {

    const [glassUrl, setGlassUrl] = useState("./glassesImage/v1.png");

    return (
        <div className={styles.background}>
            <div className={styles.content__title}>
                <h3>TRY GLASSES APP ONLINE</h3>
            </div>

            <div className={`container ${styles.content__glass}`}>
                <div className='row'>
                    <div className='position-relative text-center'>
                        <img style={{ width: '220px' }} src='./glassesImage/model.jpg' alt='model'></img>
                        <img className={styles.glassPosition} src={glassUrl} alt='glass' ></img>
                        <div className="container">
                            <div className={styles.background__content}>
                                <div className={`row d-flex align-content-center`}>
                                    <div className="col-sm" onClick={() => setGlassUrl("./glassesImage/v1.png")}>
                                        <img src="./glassesImage/g1.jpg" alt="" width="80px" />
                                    </div>
                                    <div className="col-sm" onClick={() => setGlassUrl("./glassesImage/v2.png")}>
                                        <img src="./glassesImage/g2.jpg" alt="" width="80px" />
                                    </div>
                                    <div className="col-sm mt-4" onClick={() => setGlassUrl("./glassesImage/v3.png")}>
                                        <img src="./glassesImage/g3.jpg" alt="" width="80px" />
                                    </div>
                                    <div className="col-sm mt-4" onClick={() => setGlassUrl("./glassesImage/v4.png")}>
                                        <img src="./glassesImage/g4.jpg" alt="" width="80px" />
                                    </div>
                                    <div className="col-sm mt-3" onClick={() => setGlassUrl("./glassesImage/v5.png")}>
                                        <img src="./glassesImage/g5.jpg" alt="" width="80px" />
                                    </div>
                                    <div className="col-sm mt-4" onClick={() => setGlassUrl("./glassesImage/v6.png")}>
                                        <img src="./glassesImage/g6.jpg" alt="" width="80px" />
                                    </div>
                                    <div className="col-sm mt-1" onClick={() => setGlassUrl("./glassesImage/v7.png")}>
                                        <img src="./glassesImage/g7.jpg" alt="" width="80px" />
                                    </div>
                                    <div className="col-sm mt-4" onClick={() => setGlassUrl("./glassesImage/v8.png")}>
                                        <img src="./glassesImage/g8.jpg" alt="" width="80px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlassesApp