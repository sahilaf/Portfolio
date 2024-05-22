import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter,FaFacebook } from 'react-icons/fa';

const socials =[
    {icon: <FaGithub/>, path:""},
    {icon: <FaLinkedin/>, path:""},
    {icon: <FaTwitter/>, path:""},
    {icon: <FaFacebook/>, path:""},
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