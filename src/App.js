import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Login from './Login';
import Git from './Git';
function App() {
  const [n, setN] = useState(0); 
  
  return (
    <div className="App">
     
      <div className="bord">
        <div className="text">
          <p>ARIK</p>
          <p>SERVICES</p>
          <p>WORK</p>
          <p>ABOUT</p>
          <p>BLOG</p>
          <p>PAGES</p>
          <p onClick={()=>{
            setN(1)
          }}>USER</p>
          {n?<Login/>:console.log("")}
          <div className="LET">
            <p>LET`S TALK</p>
          </div>
        </div>
      </div>
      <div className="img">
        <div>
          <img src="image.png"></img>
        </div>
        <div className="text-2">
          <h1>Web Designer
            <br></br>& Developer</h1>

        </div>
        <div className="cont">
          <p>Premium web design, development, and SEO<br></br> services to help your business stand out.</p>
        </div>
      </div>
      <div className="images">
        <img src="Container.svg"></img>
      </div>

     <div className='bacgrund1'>
      <div className="content-row">
        <div className="content">
          <div className="web">
            <p className="TEXT-01">01</p>
            <h3 className="design">Web design</h3>
            <p className="vis">Visually stunning web designs that<br></br> captivate your audience by blending your<br></br> brand voice and customer needs.</p>
          </div>
          <div className="row">
            <div className="redius">
              <img src="png.svg"></img>
            </div>
            <div className="col">
              <p>About Webdesign</p>
            </div>

          </div>
        </div>

        <div className="content">
          <div className="web">
            <p className="TEXT-01">02</p>
            <h3 className="design">Development</h3>
            <p className="vis">Get custom web development solutions that<br></br> are tailored to your specifications, designed<br></br> to deliver a flawless user experience.</p>
          </div>
          <div className="row">
            <div className="redius">
              <img src="png.svg"></img>
            </div>
            <div className="col3">
              <p>About Webflow</p>
            </div>

          </div>
        </div>


        <div className="content">
          <div className="web">
            <p className="TEXT-01">03</p>
            <h3 className="design">Content & Seo</h3>
            <p className="vis">Proven SEO strategies that enhance your<br></br> online performance, bringing you to the<br></br> forefront of organic search results.</p>
          </div>
          <div className="row">
            <div className="redius">
              <img src="png.svg"></img>
            </div>
            <div className="col3">
              <p>About SEO</p>
            </div>

          </div>
        </div>
      </div>
      </div>

     <div className='bacgrund2'>     
      <div className="images-img">
        <div className="kontrol">
          <div className="sel">
            <h3>Selected Work</h3>
          </div>
          <div className="row">
            <div className="redius">
              <img src="png.svg"></img>
            </div>
            <div className="col3">
              <p>About SEO</p>
            </div>

          </div>
        </div>
        <div className="images-2">
          <img src="Grid.png"></img>
        </div>
      </div>
    </div>
   

   
      <div className="border-col">
        <div className="row-col">
          <div className="img-0">
            <img src="image.png"></img>
          </div>
          <div className='web-1'>
            <div>
              <h3>Web Designer
                & Developer</h3>
              <p>3147 Patterson Street, Houston, TX, 77002</p>
            </div>
          </div>
        </div>

        <div className="bac">
          <div className="inp-1">
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Last Name"></input>
          </div>
          <div className="inp-1">
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
          </div>
          <div className="but">
            <p>add User</p>
          </div>
        </div>
      </div>
     
    <div className='pol-col-2'>
      <div className="cont-pol">
        <div className="att-border">
          <div className="img-png">
            <img src="img.1.png"></img>
          </div>
          <div className="text-p">
            <div>
              <p>23rd Aug 2023</p>
              <h3 className="how">How to Build a Stunning Website<br></br> with Framer</h3>
              <p className="learn">Learn how to create an impressive website using<br></br> Framer with our step-by-step guide.</p>
              <p className="bor-p">WEbdesign</p>
            </div>
          </div>
        </div>

        <div className="att-border">
          <div className="img-png">
            <img src="img.2.png"></img>
          </div>
          <div className="text-p">
            <div>
              <p>23rd Aug 2023</p>
              <h3 className="how">10 website elements for maximum<br></br> user engagement</h3>
              <p className="learn">10 website elements to engage users, from intuitive<br></br> navigation to compelling visuals.</p>
              <p className="bor-p">WEbdesign</p>
            </div>
          </div>
        </div>

        <div className="att-border">
          <div className="img-png">
            <img src="img.3.png"></img>
          </div>
          <div className="text-p">
            <div>
              <p>23rd Aug 2023</p>
              <h3 className="how">The importance of content in driving<br></br> website traffic</h3>
              <p className="learn">Quality content is king. Learn how to create<br></br> valuable, SEO-optimized content.</p>
              <p className="bor-p">WEbdesign</p>
            </div>
          </div>
        </div>
      </div>


      <div className="cont-pol">
        <div className="att-border">
          <div className="img-png">
            <img src="img.4.png"></img>
          </div>
          <div className="text-p">
            <div>
              <p>23rd Aug 2023</p>
              <h3 className="how">10 common web development<br></br> mistakes to avoid</h3>
              <p className="learn">10 common web development mistakes and improve<br></br> your site's functionality and user experience.</p>
              <p className="bor-p">WEbdesign</p>
            </div>
          </div>
        </div>

        <div className="att-border">
          <div className="img-png">
            <img src="img.5.png"></img>
          </div>
          <div className="text-p">
            <div>
              <p>23rd Aug 2023</p>
              <h3 className="how">Why responsive web design is critical<br></br> for your business</h3>
              <p className="learn">Responsive web design ensures your site looks great<br></br> and performs well on all devices.</p>
              <p className="bor-p">WEbdesign</p>
            </div>
          </div>
        </div>

        <div className="att-border">
          <div className="img-png">
            <img src="img.6.png"></img>
          </div>
          <div className="text-p">
            <div>
              <p>23rd Aug 2023</p>
              <h3 className="how">The art of SEO writing: How to write<br></br> content that ranks on Google</h3>
              <p className="learn">Optimize your website with expert tips on writing<br></br> content that ranks high on Google.</p>
              <p className="bor-p">WEbdesign</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
        <div className='row-pol2'>
            <div className='ll'>
              <div className='ark'>
              <h2>Arik Andersson</h2>
              </div>
              <div className='img-png2'>
              <img  src="image.png"></img>
              </div>
              <div className='ark'>
              <h2>Arik Andersson</h2>
              </div>
            </div>
            <div className='that'>
              <div className='txt-h2'>
                <h1>A website that leaves<br></br> 
                a lasting impression!</h1>
              </div>
              <div className='txt-p'>
                <p>Hi, I'm Arik Andersson - a freelancer specializing in premium web<br></br> design, development, and SEO services. I'm passionate about<br></br> creating unique and effective solutions for my clients, and I<br></br> bring a personal touch to<br></br> every project. Let's work together to bring your vision to life!</p>
            </div>
        </div>
      </div>
    </div>
    <div className='bacv'>
        <div className='bacv-2'>
           <div>
            <p className='mind'>Project in mind?</p>
            <h1 className='your1'>Let’s make your</h1>
            <h1 className='busin'>Website shine</h1>
            <p className='desing-and'>Premium web design, webflow, and SEO services to</p>
            <p>help your business stand out.</p>
            <div className='help'>
            <p>GET IN TOUC</p>
            </div>
           
           </div>
        </div> 

        <div className='pol-col'>
           <div  className='wid'>
           <div className='arik'>
              <p>arik</p>
            </div> 
              <div className='text-r'>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Dribbble</p>
                <p>Behance</p>
              </div>
            </div> 

            <div  className='wid'>
           <div className='arik1'>
              <p>Pages</p>
            </div> 
              <div className='text-r1'>
                <p>Home</p>
                <p>Services</p>
                <p>About</p>
                <p>Contact</p>
                <div className='more'>
                  <p>More Templates</p>
                </div>
              </div>
            </div> 

            <div className='wid'>
           <div className='arik1'>
              <p>CMS</p>
            </div> 
              <div className='text-r1'>
                <p>Work</p>
                <p>Work Single</p>
                <p>Blog</p>
                <p>Blog Post</p>
              </div>
            </div> 

            <div  className='wid'>
           <div className='arik1'>
              <p>Utility Pages</p>
            </div> 
              <div className='text-r1'>
                <p>404 Error Page</p>
                <p>Password Protected</p>
                <p>Styleguide</p>
                <p>Licensing</p>
                <p>Changelog</p>
              </div>
            </div> 
        </div>

    </div>
  
   
   </div> 

  );
}

export default App;

