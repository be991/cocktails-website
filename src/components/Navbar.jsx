import React from 'react'
import gsap from 'gsap';
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'

const Navbar = () => {

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      }
    })

    navTween.fromTo(
      'nav',
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      }
    );
  })


  return (
    <nav>
       <div>
          <a href="#home" className="flex items-center gap-2 text-white">
            <img src='/images/logo (4).png'/>
            <p>Velvet Pour</p>
          </a>

          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-white">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
       </div>
    </nav>
  )
}

export default Navbar
