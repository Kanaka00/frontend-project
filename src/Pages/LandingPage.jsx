

import React from 'react'
import "./cssfiles/LandingPage.css"
import Homebanner from "../assets/Banners/HomepageBanner.jpg"
import {Totalpopular,shirt,pant} from "../FilesData/All_Data"
import Item from '../component/Item'


const LandingPage = () => {
  return (
    <div className='LandingPage'>
          <div className="homebanner">
          <img src={Homebanner} alt="" srcset="" />
          </div>
        <h2>Popular product</h2>
          <div className="container">
              {Totalpopular.map((item, i) =>(
        <Item 
        key={i}
        id= {item.id}
        img={item.imgsrc}
        title={item.name}
        old_price={item.old_price}
        new_price={item.new_price}
        description={item.description}/>
      ))}
    </div>

    <h2>Men product</h2>

    <div className="container">
          {shirt.map((item, i) =>(
 <Item 
 key={i}
 id= {item.id}
 img={item.imgsrc}
 title={item.name}
 old_price={item.old_price}
 new_price={item.new_price}
 description={item.description}/>
))}

    </div>

<div className="container">
      {pant.map((item, i) =>(
<Item 
key={i}
id= {item.id}
img={item.imgsrc}
title={item.name}
old_price={item.old_price}
new_price={item.new_price}
description={item.description}/>
))}

</div>



    </div>
  )
}

export default LandingPage