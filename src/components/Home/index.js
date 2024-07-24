import Header from '../index.css'

import './index.css'

const Home = () => (
  <>
   <Header />
   <div className="home-container">
     <div className="home-content">
       <h1 className="home-heading">Clothes That Get You Notices</h1>
       <img
         src="https://assets.ccbp.in/frotend/react-js/nxt-trendz-home-img.png"
         alt="clothes that get you noticed"
         className="home-mobile-img"
       />
       <p className="home-description">
        Fashion is part of the daily activities and it does not quite help that it changes all the time.
       </p>  
       <button type="button" className="shop-now-button">
         Shop Now
       </button>
     </div>
     <img
       src="https://assets.ccbp.in/frotend/react-js/nxt-trendz-home-img.png"
       alt="clothes that get you noticed"
       className="home-desktop-img"
     />  
   </div>  
  </>
)

export default Home
