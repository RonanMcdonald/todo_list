import React from 'react'
import LinkData from './data.json'
import Link from './Link'
import './Styles.scss'

export default function SideNavigation() {
  return (
    <div className="SideNavigation_Container">
      <div className="Logo_Wrapper">
        <img src="./images/other/Logo.svg" alt="logo" />
      </div>
      <div className="Navigation_Wrapper">
        <ul>
          {LinkData.map((elem) => (
            <Link linkName={elem.linkName} href={elem.href} iconLocation={elem.iconLocation} key={elem.linkName} />
          ))}
        </ul>
      </div>
    </div>
  )
}
