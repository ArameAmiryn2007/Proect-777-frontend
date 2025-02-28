import App from "./App";
import Login from "./Login";
import "./User.css";
import {useState} from "react"
function User(){
         const [arr, setArr] = useState(0); 
    return(
        <div className="boxs">
            <p onClick={()=>{
                setArr(1)
            }}>X</p>
             {arr?<App/>:console.log("error")}
           <div className="row-cont-nav">
            <div className="pol-bord1">
                <div className="img-pol">
                    <img src="https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/iphone_16_ultramarine_pdp_image_position_1__en-in-removebg-preview.png"></img>
                </div>
                <div className="iphone">
                    <div>
                    <p>iPhone 16 Plus 256GB (Ultramarine)</p>
                    <p>471,900դր.</p>
                    </div>
                </div>
                <div className="DEL">
                    <p className="del-2">DELET</p>
                    <p className="gnel">GNEL</p>
                </div>
            </div>

            <div className="pol-bord1">
                <div className="img-pol">
                    <img src="https://klass-electronics.com/media/catalog/product/cache/7c1e10ae0901b684f0e0ef85fd7ffe00/i/p/iphone_13_black_1.png"></img>
                </div>
                <div className="iphone">
                    <div>
                    <p>Apple iPhone 13 128GB (Midnight)</p>
                    <p>260,900դր.</p>
                    </div>
                </div>
                <div className="DEL">
                    <p className="del-2">DELET</p>
                     
                  
                    <p className="gnel">GNEL</p>
                </div>
            </div>

            <div className="pol-bord1">
                <div className="img-pol">
                    <img src="https://www.pngarts.com/files/8/Apple-iPhone-11-Download-PNG-Image.png"></img>
                </div>
                <div className="iphone">
                    <div>
                    <p>iPhone 11 128GB (Black)</p>
                    <p>215,900դր. </p>
                    </div>
                </div>
                <div className="DEL">
                    <p className="del-2" >DELET</p>
                    <p className="gnel">GNEL</p>
                </div>
            </div>

            <div className="pol-bord1">
                <div className="img-pol">
                    <img src="https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/i/p/iphone_16_ultramarine_pdp_image_position_1__en-in-removebg-preview.png"></img>
                </div>
                <div className="iphone">
                    <div>
                    <p>iPhone 16 Plus 256GB (Ultramarine)</p>
                    <p>471,900դր.</p>
                    </div>
                </div>
                <div className="DEL">
                    <p className="del-2">DELET</p>
                    <p className="gnel">GNEL</p>
                </div>
            </div>

            <div className="pol-bord1">
                <div className="img-pol">
                    <img src="https://www.pngarts.com/files/8/Apple-iPhone-11-Download-PNG-Image.png"></img>
                </div>
                <div className="iphone">
                    <div>
                    <p>iPhone 11 128GB (Black)</p>
                    <p>215,900դր.</p>
                    </div>
                </div>
                <div className="DEL">
                    <p className="del-2">DELET</p>
                    <p className="gnel">GNEL</p>
                </div>
            </div>
           </div> 
           
        </div>
    )
}
export default User