import React,{useEffect, useState} from 'react'
import "../Main/Main.css"
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from "react-icons/hi"
import img from "../../assets/img(1).jpeg"
import img2 from "../../assets/img(2).jpeg"
import img3 from "../../assets/img(3).jpeg"
import img4 from "../../assets/img(4).jpeg"
import img5 from "../../assets/img(5).jpeg"
import img6 from "../../assets/img(6).jpeg"
import img7 from "../../assets/img(7).jpeg"
import img8 from "../../assets/img(8).jpeg"
import img9 from "../../assets/img(9).jpeg"
import Aos from "aos"
import "aos/dist/aos.css"


const Main = ({PriceValue,filteration}) => {

  useEffect(()=>
  {
    Aos.init({duration :2000})  
  },[])
  const Data=[
    {
      id:1,
      imgSrc:img,
      destTitle:'Bora Bora',
      location:'New Zealand',
      grade: 'CULTURAL RELAX',
      fees:'700',
      description:`The epitome of romance ,Bora Bora is one of the best travel destination in thw world  this place is known for its luxurious stays and 
        adventurous activities`
    }
    ,
    {
      id:2 ,
      imgSrc:img2,
      destTitle:"Machu Picchu",
      location:'Peru',
      grade:'CULTURAL RELAX',
      fees:"600",
      description: `Huayana picchu is amountain in peru ,rising over Machu picchu 
      the so-called lost city of incas. this place is popular among tourists as the sunrise from the sun gate is simply spectactular `
    },
    {
      id:3 ,
      imgSrc:img3,
      destTitle:"Great Barrier Reef",
      location:'Australia',
      grade:'CULTURAL RELAX',
      fees:"700",
      description: `One of the most remarkable Australian natural gifts in the Great
       Barrier reef, the hallmark of this place is 'lavish and 'beauty' Always 
       interesting to be in this place .`
    },
    {
      id:4 ,
      imgSrc:img4,
      destTitle:"Cappadocia",
      location:'Turkey',
      grade:'CULTURAL RELAX',
      fees:"800",
      description: `According to the world tourism ranking,45 million people 
      visit Turkey each year ,and from that about 2 million come to visit 
      Cappadocia,this place is known for its luxurious stays  and adveturous 
      activities` 
    },
    {
      id:5 ,
      imgSrc:img5,
      destTitle:"Guanajuato",
      location:'Maxico',
      grade:'CULTURAL RELAX',
      fees:"1100",
      description: `A city is central mexico, guanajuato is known for its history of
      silver mining and colonial architecture.the houses in the city are very
      attractively painted with the most bright color available0 always welcome`
    },
    {
      id:6  ,
      imgSrc:img6,
      destTitle:"Cinque Teree",
      location:'Italy',
      grade:'CULTURAL RELAX',
      fees:"900",
      description: `The vibrant hues of the houses are its benchmark and explain the 
      beauty of this place.also,if you are a foodie and love seafood ,you will be 
      exhilarated with the choice your are about to get here. happy exploring great 
      food!`
    },
    {
      id:7  ,
      imgSrc:img7,
      destTitle:"Angkor Wat",
      location:'Camodia',
      grade:'CULTURAL RELAX',
      fees:"1000",
      description: `Angkot wat represents the enitre range of khmer art from the 9th
      to the 15th century.this temple is considered the heart and soul of cambodia.
      this place is known for its stays and adventurous activiites`
    },
    {
      id:8  ,
      imgSrc:img8,
      destTitle:"Taj Mahal",
      location:'India',
      grade:'CULTURAL RELAX',
      fees:"1500",
      description: `An immense mausoleum of white marble ,built-in agra by mughal
      emperor shah jahan in memory of his wife mumtaz,the monument is 
      breathtakingly beatiful =. this place is known for its luxurious stays and
      adventurous activities`
    },
    {
      id:9,
      imgSrc:img9,
      destTitle:"Bali Island",
      location:'Indonesia',
      grade:'CULTURAL RELAX',
      fees:"500",
      description: `Bali is an indonesian isaland and one of the best holiday 
      destinations in the indonesian archipelago. bali is known for its volcanic
      mountains, history, art &culture,food,temples and beautiful sand beaches`
    }
  ]
  const [TravelsInfo,setTravelInfo]=useState(Data);
  useEffect(()=>
  {

    filteration(filter);
  },[])

  const filter=()=>
  {
    console.log(PriceValue.current);
    if(PriceValue.current==0)
    {
      setTravelInfo(Data);
    }else
    {
      const filterdTravels=TravelsInfo.filter((el)=>el.fees===PriceValue.current);
      setTravelInfo(filterdTravels);
    }

    
  }
   

  const displayedData=TravelsInfo.map(({id,imgSrc,destTitle,location,grade,fees,description})=>
  {
    
    return (
      <div key={id} data-aos="fade-up"  className='col-lg-4 mb-3'>
      <div  className="cardWrapper">
          <div className="imgWrapper"><img src={imgSrc} alt={destTitle}/></div>
          <div className="cardInfo">
            <h4 className="cardTitle">{destTitle}</h4>
            <span>
              <HiOutlineLocationMarker className="icon mapLocation"/>
              <span className="cardLocation">{location}</span>
             </span>
             <div className='fees'>
              <div className='grade'>
              <span>{grade}<small>+1</small></span>
              </div>
              <div className='price'><h5>${fees}</h5></div>
             </div>
             <div className='desc'><p>{description}</p></div>
              <button className='standardBtn detailsBtn'>
                Details <HiOutlineClipboardCheck className='icon'/>
              </button>
          </div>
      </div>
        

        </div>
     
    )
  })
  return (
      <section className="main" id="main">
        <div className="container">
          <div onClick={filter} data-aos="fade-right" className="mainTitle "><h3>Most visited destinations </h3></div>
          <div className="row">{displayedData}</div>
        </div>
      </section>
  )
}

export default Main
