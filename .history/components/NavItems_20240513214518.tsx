import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Users } from 'lucide-react'
import React from 'react'

type N

const navItems = [
    {
        src: "/home",
        icon: <Home />,
        text: "Home",
    },
    {
        src: "/networks",
        icon: <Users />,
        text: "My Network",
    },
    {
        src: "/job",
        icon: <BriefcaseBusiness />,
        text: "Jobs",
    },
    {
        src: "/message",
        icon: <MessageCircleMore />,
        text: "Messaging",
    },
    {
        src: "/notification",
        icon: <Bell />,
        text: "Notification",
    },
]

const NavItems = () => {
  return (
    <div>
        {navItems[0].icon}
      
    </div>
  )
}

export default NavItems
