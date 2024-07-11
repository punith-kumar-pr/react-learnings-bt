import React from 'react'
import { ShareSocial } from 'react-share-social'

function RRSUsage() {
  return (
    <>
      <div>
        React share social lib
      </div>
      <ShareSocial
        url="filter.com"
        socialTypes={['facebook', 'twitter', 'linkedin']}
      />
    </>
  )
}

export default RRSUsage
