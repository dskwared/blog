import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import D2Logo from '../../public/images/d2-logo.png'
import Image from 'next/image'

const socialMedia = {
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/dskwared/',
      icon: (props) => <FaGithub />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/doug-defrank/',
      icon: (props) => <FaLinkedinIn />,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/dougdefrank/',
      icon: (props) => <FaInstagram />,
    },
    {
      name: 'Threads',
      href: 'https://www.threads.net/@dougdefrank',
      icon: (props) => <FaThreads />,
    },
    {
      name: 'X (formerly Twitter)',
      href: 'https://twitter.com/dougdefrank',
      icon: (props) => <FaXTwitter />,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/dougdefrank',
      icon: (props) => <FaYoutube />,
    },
  ],
}

const footerData = {
  message: 'I hope you find this content helpful!',

  followMessage: 'Follow me on social media:',
  callToActionURL: 'https://linktr.ee/dougdefrank',
  callToActionMessage: `Doug's Linktree`,
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="text-center text-base text-gray-400">
          {footerData.followMessage}
        </p>
        <div className="mt-2 flex justify-center space-x-6">
          {socialMedia.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={'_blank'}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center  text-base text-gray-600">
          {footerData.message} <br />
          <a
            href={footerData.callToActionURL}
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
          >
            {footerData.callToActionMessage} <br />
            <Image src={D2Logo} height={60} width={60} alt={` Doug's Logo`} />
          </a>
        </p>
      </div>
    </footer>
  )
}
