import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter,FaFacebook } from 'react-icons/fa';

const socials =[
    {icon: <FaGithub/>, path:"https://github.com/sahilaf"},
    {icon: <FaLinkedin/>, path:"https://www.linkedin.com/in/sahil-al-farib-b45b75270/"},
    {icon: <FaTwitter/>, path:"https://x.com/SFarib44572"},
    {icon: <FaFacebook/>, path:"https://www.facebook.com/sahil.alfarib"},
];
const Socials = ({containerStyles,iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconStyles} >
            {item.icon}
        </Link>
    })}
  </div>
}

export default Socials