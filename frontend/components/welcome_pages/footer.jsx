import React from 'react'

export default function Footer() {
  return (
    <div>
      <nav>
        <ul className = "footer-list">
            <li className = 'nav-li'>
              <a href="https://www.linkedin.com/in/cal-brown-sfca/" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className='nav-li'>
              <a href='https://github.com/cBrownSF' target='_blank'>
                <i className="fab fa-github" ></i>
              </a>
            </li>
            <a href= "https://github.com/cBrownSF/Hip-Lampin" target= '_blank'>
            <li className='nav-li' style={{ fontSize: "1.25rem" }}>Repository</li>
            </a>
            <a href="https://cbrownsf.github.io/portfolio/" target='_blank'>
            <li className='nav-li' style={{ fontSize: "1.25rem" }}>My Portfolio</li>
            </a>
        </ul>
      </nav>

    </div>
  )
}
