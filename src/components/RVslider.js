import React from "react"
import PropTypes from "prop-types"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./RVslider.scss"
import "../fonts/font-awesome.css"

const RVslider = ({ children }) => {
  function RVnextArrow(props) {
    const { onClick } = props
    return (
      <button className="rv-arrow rv-arrow-next" onClick={onClick}>
        Next
      </button>
    )
  }

  function RVprevArrow(props) {
    const { onClick } = props
    return (
      <button className="rv-arrow rv-arrow-prev" onClick={onClick}>
        Previous
      </button>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RVnextArrow />,
    prevArrow: <RVprevArrow />,
  }

  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  )
}

RVslider.propTypes = { children: PropTypes.node.isRequired }

export default RVslider
