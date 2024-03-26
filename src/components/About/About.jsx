import React from 'react'
import style from './About.module.css'
import img1 from './../../img/Barakat.jpg'
import img2 from './../../img/Shireff.jpg'
import img3 from './../../img/Amr.jpg'
import img4 from './../../img/Yeiya.jpg'
export default function About() {
  return (
    <>
    <div className={`abotAria d-flex justify-content-center align-items-center ${style.abotAria}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 ">
            <h1 className={`d-flex justify-content-center mb-4 ${style.h1}`}>About</h1>
            <ul className={`d-flex justify-content-center ${style.ul}`}>

              <li className={style.li}>Home / </li>
              <li className={style.liblue}>About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div className="container">
      <div className="who my-5">
          <div className="row">
            <div className="col-xl-4">
              <img className={style.img} src={img1} alt="" />
            </div>
            <div className="col-xl-8">
              <h1 className={style.h1A}>Eng : Mohamed Barakat</h1>
              <h2>Front-End Team Leader</h2>
              <p className={style.p}>Mohamed Barakat is an accomplished Front-End Team Leader with a proven track record of leading and mentoring teams to deliver exceptional web applications. With extensive expertise in frontend technologies and a strong leadership acumen, Mohamed excels in driving projects from conception to successful execution while fostering a collaborative and innovative environment.</p>
            </div>
          </div>
          <div className="team mt-5">
            <h2 className={`d-flex justify-content-center my-3 ${style.h}`}>Amazing People</h2>
          <div className="row">
            <div className="col-xl-4">
              <img className={style.imgs} src={img2} alt="" />
              <div className='mt-2 text-center'>
                <h3>Shireff Nady</h3>
                <h6>Front-End Developer</h6>
              </div>
            </div>
            <div className="col-xl-4">
              <img className={style.imgs} src={img3} alt="" />
              <div className='mt-2 text-center'>
                <h3>Amr Saleh</h3>
                <h6>Front-End Developer</h6>
              </div>
            </div>
            <div className="col-xl-4">
              <img className={style.imgs} src={img4} alt="" />
              <div className='mt-2 text-center'>
                <h3>Yahya Farid</h3>
                <h6>Front-End Developer</h6>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
