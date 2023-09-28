import logo from '../src/assets/img/Bizpro.png'
import logo_1 from '../src/assets/img/Bizpro_1.png'
import Facebook from '../src/assets/img/Facebook.png'
import Instagram from '../src/assets/img/Instagram.png'
import Linkdin from '../src/assets/img/LinkedIn.png'
import Twiter from '../src/assets/img/Twitter.png'
import './App.css'

import Button from './component/button/Button'
function App() {


  return (
   <div className='bg-blue-50'>
 <header className='container ms-auto py-[50px]'>
  <nav className=' flex items-center justify-between bg-white py-[38px] px-[34px] rounded'>
    <div>
      <img src={logo} alt="Bizpro_logo" />
    </div>
    <div>
      <ul className='flex gap-x-[25px] text-base font-medium	 text-[#828297]	'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Reviews</a></li>
        <li><a href="#">Support</a></li>

      </ul>
    </div>
    <div className='flex gap-x-[25px] text-base font-medium'>
      <button>Sign In</button>
      <Button title={'Free trial'}></Button>
    </div>
  </nav>
 </header>
 <main className='container ms-auto'>b</main>
 <footer className='bg-[#060640] text-white '>
  <div className='container ms-auto '>
  <div className='grid grid-cols-12 gap-5  py-[85px]'>
<div className='col-start-1 col-span-5 items-center justify-center'>
  
  <img src={logo_1} alt="logo-bizpro" />
  <p className='text-[#9090A7] py-[25px]'>This is a big one and i consider it one of the<br></br> most important things for a business.</p>
  <ul className='flex gap-4'>
  <li><a href="#"><img src={Facebook} alt="facebook" /></a></li>
 <li><a href="#"><img src={Instagram} alt="instagram" /></a></li>
 <li><a href="#"><img src={Linkdin} alt="linkdin" /></a></li>
 <li><a href="#"><img src={Twiter} alt="twitter" /></a></li>
  </ul>

  
  </div>
<div className='col-start-6 col-span-2 items-center justify-center'>

<p className='text-white text-lg font-medium mb-6'>Quick Links</p>
<ul className='grid gap-4 text-[#9090A7]'>
  <li><a href="#"></a>Home</li>
  <li><a href="#"></a>About</li>
  <li><a href="#"></a>Appoinment</li>
  <li><a href="#"></a>Blog</li>
  <li><a href="#"></a>Contact</li>
</ul>

</div>
<div className='col-start-8 col-span-2'>
  
<p className='text-white text-lg font-medium mb-6'>Company</p>
<ul className='grid gap-5 text-[#9090A7]'>
  <li><a href="#"></a>About</li>
  <li><a href="#"></a>Contact</li>
  <li><a href="#"></a>Careets</li>
  <li><a href="#"></a>Prees</li>
</ul>
  
  </div>
<div className='col-start-10 col-span-3'>
<p className='text-white text-lg font-medium mb-6'>Information</p>
<ul className='grid gap-5 text-[#9090A7]'>
  <li><a href="#"></a>Pravacy Policy</li>
  <li><a href="#"></a>Terms & Condition</li>
  <li><a href="#"></a>FAQ</li>
  
</ul>
</div>
</div>
  


</div>
<div className='bg-[#000020] py-[35px]'>
  <ul className=' container ms-auto flex items-center justify-between text-white'>
    <li>Copyright © 2021 Bizpro</li>
    <li> All Rights Reserved</li>
  </ul>

</div>
 </footer>
   </div>
  )
}

export default App
