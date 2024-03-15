import React from 'react'
import './App.css'
import brex from './assets/Frame.jpg'
import huge from './assets/huge.png'
import door from './assets/door.jpg'
import air from './assets/air.jpg'
import bnb from './assets/bnb.jpg'
import deel from './assets/deel.jpg'
import scale from './assets/scale.jpg'
import what from './assets/what.jpg'
import phone from './assets/phone-one.png'
import cards from './assets/cards.png'
import woman from './assets/woman.png'
import empire from './assets/empire.png'
import empireTwo from './assets/empire-two.png'
import avenue from './assets/avenue.png'
import tech from './assets/tech.jpg'
import neww from './assets/new.jpg'
import zd from './assets/zd.jpg'
import forbes from './assets/forbes.jpg'
import table from './assets/table.png'


function App() {
  return (
    <div>
      <div className="starter">
      <nav className='navbar'>
        <ul className='list'>
          <li className='list-style'>
            <img src={brex} alt="" />
          </li>
          <li className='list-style'>
            <a className='link' href="#">Solutions</a>
          </li>
          <li className='list-style'>
            <a className='link' href="#">Products</a>
          </li>
          <li className='list-style'>
            <a className='link' href="#">Why Brex?</a>
          </li>
          <li className='list-style'>
            <a className='link' href="#">Empower</a>
          </li>
          <li className='list-style'>
            <a className='linkk' href="#">Resources</a>
          </li>
          <li className='list-style'>
            <a className='link' href="#">Open an account</a>
          </li>
          <li className='list-style'>
            <a className='link' href="#">Sign in</a>
          </li>
          <button type='button' className='btn'>Contact sales</button>
        </ul>
      </nav>
      </div>
      <div className="main-one">
        <div className="mini-box">
          <h1 className='title'>Corporate cards and <br /> spend management <br /> teams actually love.</h1>
          <button type='button' className='button'>Contact sales</button>
          <button type='button' className='button-two'>Open an account</button>
          <div className="polosa"></div>
          <h2 className='article'>Brex for enterprise</h2>
          <p className='text'>Easy-to-use corporate cards and spend management software in an <br /> integrated global solution.</p>
          <a className='link-two' href="#">Learn more</a>
          <div className="polosa"></div>
          <h2 className='article'>Brex for startups</h2>
          <p className='text'>Fast access to global cards, business account (send ACH and wires), <br /> spend management, and bill pay.</p>
          <a className='link-two' href="#">Learn more</a>
        </div>
        <div className="mini-box-two">
          <img className='photo' src={huge} alt="" />
        </div>
      </div>
      <div className="jpg-box">
        <img src={door} alt="" />
        <img src={air} alt="" />
        <img src={bnb} alt="" />
        <img src={scale} alt="" />
        <img src={deel} alt="" />
        <img src={what} alt="" />
      </div>
      <h1 className='mid'>Solutions that work for you.</h1>
      <p className='mid-two'>Brex meets you where you are — and takes you where you want to go.</p>
      <div className="parfume">
        <div className="lil-box-one">
          <h1 className='nachalo'>Brex for enterprise.</h1>
          <p className='opisanie'>Easy-to-use corporate cards and spend management software <br /> in an integrated global solution.</p>
          <button type='button' className='button-three'>Learn more</button>
          <img src={phone} alt="" className='img-one' />
        </div> 
        <div className="lil-box-two">
          <h1 className='start'>Brex for startups.</h1>
          <p className='mgm'>Fast access to global cards, business account (send ACH <br /> and wires), spend management, and bill pay.</p>
          <button type='button' className='knopka'>Learn more</button>
          <img src={cards} alt="" className='img-two' />
        </div>
      </div>
      <div className="midd-box">
      <h1 className='midd'>Flexible spend limits for any need.</h1>
      <p className='midd-two'>Enable spend for any purpose — from travel to stipends to procurements — at all levels of <br /> your company. All on one card. With controls built in. That's the magic of budgets.</p>
      <button type='button' className='see'>See how budgets work</button>
      </div>   
      <img src={woman} alt="" className='woman' />   
      <div className="giant">
        <img src={door} alt="" className='dash'/>
        <h1 className='doordash'>"DoorDash went from a 100-person startup to over 9,000 employees. <br /> We needed a solution that was innovative in the T&E space."</h1>
        <p className='mike'>— Mike Kim, VP of Finance, DoorDash</p>
      </div>
      <h1 className='how'>How our customers use Brex to <br /> power their companies.</h1>
      <div className="photo-box">
<div className="little-box">
<img src={empire} alt="" />
<h1 className='empire'>Empire enables spend and drives <br /> accountability in Orangetheory <br /> studios with Brex Empower.</h1>
<a href="#" className='read'>Read case study</a>
</div>
<div className="little-box">
<img src={empireTwo} alt="" />
<h1 className='empire'>Scale AI unblocks employee spend <br /> to ensure speed while boosting <br /> control and accountability.</h1>
<a href="#" className='read'>Read case study</a>
</div>
<div className="little-box">
<img src={avenue} alt="" />
<h1 className='empire'>Avenue One drives automation and <br /> accuracy, saving 15 hours a month <br /> with Brex Empower and NetSuite.</h1>
<a href="#" className='read'>Read case study</a>
</div>

      </div>
      <div className="x-box">
        <div className="mini-four-box">
          <img src={tech} alt="" />
        </div>
        <div className="mini-four-box">
          <img src={neww} alt="" />
        </div>
        <div className="mini-four-box">
          <img src={zd} alt="" />
        </div>
        <div className="mini-four-box">
          <img src={forbes} alt="" />
        </div>
      </div>
      <div className="last-box">
        <div className="minik-one">
          <h1 className='can'>See what Brex can do <br /> for you.</h1>
          <p className="gett">Get in touch to learn how our spend solution <br /> can increase financial efficiency and speed for
          <br /> your company.</p>
          <button type='button' className='last-btn'>Contact sales</button>
          <button type='button' className='last-btn-two'>Open an account</button>
        </div>
        <div className="minik-two">
          <img src={table} alt="" />
        </div>
      </div>
      <div className="end">
          <nav className='navv'>
            <ul className='ull'>
              <li className='lii'>
              <img src={brex} alt="" className='logo' />
              </li>
            </ul>
            <ul className='ull'>
              <li className='lii'>
                <a href="#" className='a-main'>Product</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Overview</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Business account</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Credit card</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Rewards</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Financial modeling</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Expense tracking</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Spend management</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Bill pay</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Integrations</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Brex API</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Pro access</a>
              </li>
              <li className='lii'>
                <a href="#" className='a-other'>Security</a>
              </li>
            </ul>
            <ul className='ull'>
              <li className='lii'>
              <a href="#" className='a-main'>Company</a>
              </li>
              <li className='lii'>
              <a href="#" className='a-other'>About Brex</a>
              </li>
              <li className='lii'>
              <a href="#" className='a-other'>Careers</a>
              </li>
              <li className='lii'>
              <a href="#" className='a-other'>Contact</a>
              </li>
              <li className='lii'>
              <a href="#" className='a-other'>Press</a>
              </li>
              <li className='lii'>
              <a href="#" className='a-other'>Blog</a>
              </li>
            </ul>
            <ul className='ull'>
              <li className='lii'>
              <a href="#" className='a-main'>Resources</a>
              </li>
              <li className='lii'>
              <a href="#" className='a-other'>Help</a>
              </li>
              <li className='lii'>
              <a href="#" className='a-other'>Status</a>
              </li>
              <li className='lii'>
              <a href="#" className='a-other'>Privacy</a>
              </li>
              <li className='lii'>
              <a href="#" className='a-other'>Legal agreement</a>
              </li>
              <li className='lii'>
              <a href="#" className='a-other'>Cookie preferences</a>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default App

