// import React from 'react'
// import Slider from 'react-slick';
// import '../css/date.css'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const DateDaySlider = ({  dateData, onDayClick }) => {

//     if (!dateData || !dateData.length) {
//         return null; // or render a loading message, or handle it as needed
//       }

//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 7,
//       slidesToScroll: 1,
//       centerMode: true,
//       focusOnSelect: true,
//       vertical: false,
//       autoplay: true,        
//       autoplaySpeed: 2000, 
//     };
  
//     return (
//       <div className="date-day-slider-container">
//         <Slider {...settings}>
//           {dateData.map((day, date, id ) => (
//             <div key={id} className="day-item" onClick={() => onDayClick(date)}>
//             <div className="day">{String(day)}</div>
//             <div className="date">{String(date)}</div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     );
//   };
  
//   export default DateDaySlider;
