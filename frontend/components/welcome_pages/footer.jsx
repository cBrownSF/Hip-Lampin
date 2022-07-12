import React from 'react'

export default function Footer() {
  return (
    <div>
      <nav>
        <ul>
            <li><a href="https://www.linkedin.com/in/cal-brown-sfca/" target="_blank">
              <p>Linkedin</p>
              {/* <img class="linkedin" src="./assets/Linkedin-logo-on-transparent-Background-PNG-.png" width="60" height="60" alt="LinkedIn Logo" /> */}
            </a></li>
            <li><a href='https://github.com/cBrownSF' target='_blank'>
                {/* <FontAwesomeIcon icon="fab fa-github" /> */}
            <i className="fab fa-github" style={{ fontSize: '20' }}></i>
              {/* <img class="github" src="./assets/github-icon-white-github-icon-black-background-symbol-logo-trademark-steering-wheel-transparent-png-842663.png" width="60" height="60" alt="github Logo" /> */}
          </a></li>
          <li><a href= "https://github.com/cBrownSF/Hip-Lampin">Repository</a></li>
          <li><a href = "https://cbrownsf.github.io/portfolio/">Portfolio</a></li>
        </ul>
      </nav>

    </div>
  )
}
