import React from 'react'
import './Product';
import Product from './Product';

const GroupProduct = () => {
  const caffe =[
    {   
        id:1,
        imgSrc: "https://images.pexels.com/photos/7282735/pexels-photo-7282735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name :"Black Suface",
        price :"$2",
        details: "Uploaded on March 27th, 2021"
    },
    {
        id:2,
        imgSrc: "https://images.pexels.com/photos/16488176/pexels-photo-16488176/free-photo-of-coffee-beans-falling-into-starbucks-mug.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name :"Coffee Beans",
        price :"$5",
        details: "Uploaded on April 22nd, 2023"
    },
    {
        id:3,
        imgSrc: "https://images.pexels.com/photos/11606637/pexels-photo-11606637.jpeg?cs=srgb&dl=pexels-olga-volkovitskaia-131638009-11606637.jpg&fm=jpg&_gl=1*19kf6t3*_ga*MTg2NDY4MjU1My4xNzE0NjY1MjUz*_ga_8JE65Q40S6*MTcxNDkyNDYxMC4yLjEuMTcxNDkyNzI1My4wLjAuMA..",
        name :"Hot Latte",
        price :"$4",
        details: "Uploaded on April 22nd, 2024"
    }
  ]
  return (
    <div>
        {
            //?1
            // caffe.map((n)=>{
            //     const {imgSrc,name,price,details}=n;
            //     return <Product imgSrc={imgSrc} name={name} price={price} details={n.details} />
            // })
            //?2
            // caffe.map(({imgSrc,name,price,details,id})=>{
            //     return <Product 
            //     key={id}
            //     imgSrc={imgSrc} 
            //     name={name} 
            //     price={price} 
            //     details={details} />
            // })
            //?3
            //    caffe.map((n)=>{
            //      return (
            //         <>
            //             <Product product={n} key={n.id} />
            //         </>
            //      )
            //    })
            //?4 Use Spreat operator
            caffe.map((pro)=>{
                     return (
                        <>
                            <Product {...pro} key={pro.id} />
                        </>
                     )
                   })
        }
    </div>
  )
}

export default GroupProduct