import { css } from "@emotion/core"
import lineSvg from "../../static/assets/line.svg"

const styles = css`
  .e404.layout-wrapper .layout-inner {
    background: #fff;
  }
  .e404 .data-section {
    color: #000;
  }
  .aboutme.layout-wrapper .layout-inner {
    background: #161616;
    background: url(${lineSvg}) center center fixed,
      linear-gradient(45deg, #1b1b1b, #0e0f11);
    background-size: cover;
  }
  .aboutme .data-section {
    color: #000;
  }
  .aboutme .hamburgercolr::before,
  .aboutme .hamburgercolr::after,
  .e404 .hamburgercolr::before,
  .e404 .hamburgercolr::after {
    background-color: #fff;
  }
  .home.layout-wrapper .layout-inner {
    background: #0e0f11;
    background: #0e0f11 url(${lineSvg}) center center fixed;
    background-size: contain;
  }
  .home.layout-wrapper h1,
  .home.layout-wrapper h2 {
    color: #fff;
  }
  .skill.layout-wrapper .layout-inner {
    color: #fff;
    background: #0e0f11;
    background: url(${lineSvg}) center center fixed,
      linear-gradient(45deg, #1b1b1b, #0e0f11);
    background-size: cover;
  }
  .experience.layout-wrapper .layout-inner {
    background: #161616;
    background: url(${lineSvg}) center center fixed,
      linear-gradient(45deg, #1b1b1b, #0e0f11);
    background-size: cover;
  }
  .home .hamburgercolr::before,
  .home .hamburgercolr::after,
  .skill .hamburgercolr::before,
  .skill .hamburgercolr::after,
  .experience .hamburgercolr::before,
  .experience .hamburgercolr::after {
    background-color: #fff;
  }
  .home .btn-contact-color,
  .experience .btn-contact-color {
    color: #fff;
  }
  .aboutme .btn-contact-color,
  .e404 .btn-contact-color {
    color: #000;
  }
`

export default styles
