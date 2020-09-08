import React from 'react'
import PropTypes from "prop-types"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RVslider = ({ children }) => {

    function RVnextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "red", width: '30px', height: '30px' }}
        onClick={onClick}
        />
    );
    }
      
      function RVprevArrow(props) {
        const { style, onClick } = props;
        return (
          <div
            className='rvPrevArrow'
            style={{ ...style, display: "block", background: "green", width: '30px', height: '30px' }}
            onClick={onClick}
          />
        );
      }
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <RVnextArrow />,
        prevArrow: <RVprevArrow />
      };
  
    return (
      <>
        <Slider {...settings}>
          {children}
        </Slider>
      </>
    )
  }
  
  RVslider.propTypes = { children: PropTypes.node.isRequired, }
  
  export default RVslider