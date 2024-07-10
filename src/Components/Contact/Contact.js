import './Contact.css'
import React from 'react';
import Footer from '../Footer/Footer';
function Contact() {
  return (
    <>
    
      <center><h2 style={{ alignContent:'center' }}>Let's intertwine our paths!!</h2>
      <div className="Supply"></div></center>
      <div className="AlphaTechnologiesContact">
        <div className="AlphaTechnologiesleft">
          {/* <h3>Alpha Technologies</h3> */}
          <div className="AlphaTechnologiesbusinessHours">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <span>
              Plot No 24B, VOC Street, Tirisulam, Chennai-600 043<br />
            </span>
            <span className="AlphaTechnologies"> Location</span>
          </div>

          <div className="AlphaTechnologiesbusinessHours">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            <span>
              8056253730<br />
            </span>
            <span className="AlphaTechnologies"> Phone</span>
          </div>

          <div className="AlphaTechnologiesbusinessHours">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <span>
              alphatechnologies2014@gmail.com <br />
            </span>
            <span className="AlphaTechnologies">Email </span>
          </div>

          <div className="AlphaTechnologiesbusinessHours">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week-fill" viewBox="0 0 16 16">
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
            </svg>
            <span>
              Monday-Saturday <br />
            </span>
            <span className="AlphaTechnologies">9:30 AM - 8:00 PM </span>
          </div>
        </div>


       
      </div>
      <div className="right">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0748548588726!2d80.16833312526246!3d12.967061850137473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x89e03f8ea9852cc4!2sX58H%2BRJ%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1714543476161!5m2!1sen!2sus"
            width="500"
            height="400"
            style={{ border: "0" }}
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST">
        <div className='left'>
          <center>
            {/* Fill the form to contact us<br/> */}
            <input type='hidden' name="access_key" value="38a92ca0-0f3b-499b-aa60-79ec02d77923" />
          <input name='name' className="MedicalSupply" placeholder='Name' />
          <br/>
          
          <input name='email' className="MedicalSupply" placeholder='Email' />
          <br/>
       
          <textarea name='message' rows="7" cols="50" className="MedicalSupply" placeholder="What's your question?" />
          <br/><br/>
          <button className="MedicalEquipments">Submit</button>
          </center>
         
        </div>
        </form>
        <Footer/>
    </>
  );
}

export default Contact;
