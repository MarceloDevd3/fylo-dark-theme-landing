
import Nav from './navbar/Nav';
import HeaderSection from './Header-section/section';
import Services from './section-services/SectionServices';
import Minicards from './testCard/testCard'
import Form from './form/Form'

/*Imagens*/
import icon from './images/logo.svg';
import sectionImg from './images/illustration-intro.png';
import img0 from './images/icon-access-anywhere.svg';
import arrow from './images/icon-arrow.svg';
import img1 from './images/icon-security.svg';
import img2 from './images/icon-collaboration.svg';
import img3 from './images/icon-any-file.svg';
import location from './images/icon-location.svg';
import phone from './images/icon-phone.svg';
import email from './images/icon-email.svg';
import stayProduction from './images/illustration-stay-productive.png'
import backImg from './images/bg-quotes.png';
import profile0 from './images/profile-1.jpg';
import profile1 from './images/profile-2.jpg';
import profile2 from './images/profile-3.jpg';

function App() {
  return (
    <>
    <div className='bg-style0'>
    <Nav FyleIcon={icon} />
    <HeaderSection SectionImg={sectionImg} altImg={'illustration-intro'} />
    </div>
    <main className='d-flex section-flex direction-column  all-to-center-0'>
    <section className='z-show move-top-desk'  id='Features' >
      <div className='article-zone'>
       <Services ServiceCard={img0} classitem={'card-service  direction-column center  all-to-center-0 '}  altIMG={'access-anywhere-icon'}
        title={'Access your files, anywhere'}
        text={'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'}
        />
        <Services ServiceCard={img1} classitem={'card-service direction-column center  all-to-center-0 '} altIMG={'access-security-icon'}
        title={'Security you can trust'}
        text={'2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'}
        />
        <Services ServiceCard={img2} classitem={'card-service direction-column center  all-to-center-0 '} altIMG={'access-collaboration-icon'}
        title={'Real-time collaboration'}
        text={'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'}
        />
        <Services ServiceCard={img3} classitem={'card-service direction-column center  all-to-center-0 '} altIMG={'access-any-file-icon'}
        title={'Store any type of file'}
        text={" Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all  file types to be securely stored and shared."}
        />
       
      </div>
    </section>
    <article className='only-OneCard d-flex move-top-desk   direction-column center  all-to-center-0  '  id='Team' >
          <div className='block-img'>
            <img src={stayProduction} alt="bannerImg" /> 
          </div>
          <section className='article-information-section'>
             <h3 id="fix" className='information-title'>Stay productive, <br className="break-line"></br> wherever you are</h3>
             <p className='information-text'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.</p>
             <p className='information-text'>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.</p>
             <div className='dd'>
             <a id='info-btn' className='all-to-center-0 d-flex' href="#">See how Fylo works <div><img src={arrow} className='little-space' alt="">
             </img></div></a>
             <hr />
             </div>
             
          </section>
    </article>

    <section className='d-flex bottom'>
          <div className='subRow '>
            <div id='quote'>
            <img src={backImg} alt=''></img>
            </div>
            <Minicards 
            firstText={'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'} circleImg={profile0} altTitle={'Satish Patel'} name={'Satish Patel'} subtitle={'Founder & CEO, Huddle'} />
            <Minicards firstText={'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'} circleImg={profile1} altTitle={'Bruce McKenzie'} name={'Bruce McKenzie'} subtitle={'Founder & CEO, Huddle'} />
            <Minicards firstText={'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'} circleImg={profile2} altTitle={'Iva Boyd'} name={'Iva Boyd'} subtitle={'Founder & CEO, Huddle'} />
          </div>
    </section>
    <section className='formSection d-flex center all-to-center-0 ' >
    <Form  />
    </section>
    </main>
     <footer className='d-flex direction-column'>
         <section className='footer-row-item footer01'>
        <div>
        <img src={icon} id="footer-logo"/>
         <div className='test'><div><img src={location}/> </div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
  dolore magna aliqua</p> </div>
        </div>
        <div className='block-2'>
        <p><img src={phone} alt=''/> +1-543-123-4567</p>
        <p><img src={email} alt=''/>example@fylo.com</p>
        </div>
         </section>
         <section  className='footer-row-item footer02'>
            <nav className='navfooter0'>
             <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Press</a></li>
              <li><a href="">Blog</a></li>
             </ul>
            </nav>
            <nav className='navfooter1'>
             <ul>
             <li><a href="">Contact Us</a></li>
             <li><a href="">Terms</a></li>
             <li><a href=""> Privacy</a></li> 
             </ul>
            </nav>
         </section>
         <section className='footer-row-item row-icon d-flex all-to-center-0 top-0 '>
                <div className='icon-row'><i class="fa-brands fa-facebook-f"></i></div>
                <div className='icon-row'><i class="fa-brands fa-twitter"></i></div>
                <div className='icon-row'><i class="fa-brands fa-instagram"></i></div>
         </section>
     </footer>
    </>
  );
}

export default App;
