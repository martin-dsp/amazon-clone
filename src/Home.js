import React from 'react'
import Product from "./Product"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />  
            <div className="home__row">
                <Product
                    id="Woojin Heo"
                    title="Woojin Heo"
                    price={12.24}
                    rating={4}
                    image="https://pbs.twimg.com/media/D95rNghUIAApLnZ?format=jpg&name=medium"
                />
                <Product
                    id="Seokbum Lee"
                    title="Seokbum Lee"
                    price={3.00}
                    rating={2}
                    image="https://pbs.twimg.com/profile_images/805311858139754496/d7IxZb5F_400x400.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="Suyong Hwang"
                    title="Suyong Hwang"
                    price={50.89}
                    rating={5}
                    image="data:image/jpeg;base64,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"
                />
                <Product
                    id="Sanghyeok Park"
                    title="Sanghyeok Park"
                    price={0.17}
                    rating={1}
                    image="//upload.wikimedia.org/wikipedia/commons/thumb/4/4f/%EB%86%8D%EC%8B%AC_%EC%A7%9C%ED%8C%8C%EA%B2%8C%ED%8B%B0_%EB%A7%A4%EC%BD%A4%ED%95%9C_%EC%82%AC%EC%B2%9C_6.jpg/220px-%EB%86%8D%EC%8B%AC_%EC%A7%9C%ED%8C%8C%EA%B2%8C%ED%8B%B0_%EB%A7%A4%EC%BD%A4%ED%95%9C_%EC%82%AC%EC%B2%9C_6.jpg"
                />
            </div>
        </div>
    )
}

export default Home
