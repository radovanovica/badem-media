import Link from 'next/link'
import { motion } from 'framer-motion'

import FbIcon from '/src/assets/icons/social/icon _facebook_.svg'
import InstaIcon from '/src/assets/icons/social/icon _instagram_.svg'
import LinkedinIcon from '/src/assets/icons/social/linkedin.svg'
import PinterestIcon from '/src/assets/icons/social/icon _pinterest_.svg'
import TiktokIcon from '/src/assets/icons/social/icon _logo tiktok_.svg'
import YouTubeIcon from '/src/assets/icons/social/icon _youtube_.svg'

export const socialLinks = [
  { icon: <FbIcon />, href: 'https://www.facebook.com/bademmedia' },
  { icon: <InstaIcon />, href: 'https://www.instagram.com/bademmedia/' },
  {
    icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/company/bademmedia/'
  },
  { icon: <PinterestIcon />, href: 'https://www.pinterest.com/BademMedia/' },
  {
    icon: <TiktokIcon />,
    href: 'https://www.tiktok.com/@bademmedia?is_from_webapp=1&sender_device=pc'
  },
  { icon: <YouTubeIcon />, href: 'https://youtube.com/@BademMedia' }
]

const FooterSocial = () => {
  return (
    <div className="flex items-center justify-end mb-12 lg:mb-16 mx-auto lg:mx-0">
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-10 sm:gap-x-6 gap-y-10">
        {socialLinks.map(({ icon, href }, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 + index * 0.15 }}
            viewport={{ once: true }}
            key={index}
          >
            <Link
              href={href}
              className="block scale-100 hover:scale-[1.35] lg:scale-100 lg:hover:scale-110 duration-200"
            >
              {icon}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FooterSocial
