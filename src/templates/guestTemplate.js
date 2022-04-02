import React from 'react'

import Header from '../components/Header.js'
import DurationChart from '../components/DurationChart.js'
import EpisodeList from '../components/EpisodeList.js'
import GuestStats from '../components/GuestStats.js'

import * as mainStyle from '../style/main.module.css'

const guestTemplate = (props) => {
  const { pageContext } = props
  const { guest } = pageContext

  return (
    <main className={mainStyle.container}>
      <title>{guest} | Guest of The Talk Show</title>
      <div className={mainStyle.container}>
        <Header isSingular={true} />
        <h1
          className={`${mainStyle.title} ${mainStyle.text_center} ${mainStyle.m_bot_lg} ${mainStyle.m_top_lg}`}
        >
          {guest}
        </h1>
        <div className={mainStyle.sixty_fourty}>
          <EpisodeList guest={guest} />
          <GuestStats guest={guest} />
        </div>
        <DurationChart guest={guest} />
      </div>
    </main>
  )
}

export default guestTemplate