import React from 'react'
import LinkData from './data.json'
import Link from './Link'

export default function SideNavigation() {
  return (
    <div>
      {LinkData.map(elem => <Link linkName={elem.linkName} key={elem.linkName}/>)}
    </div>
  )
}
