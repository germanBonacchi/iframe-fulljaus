import type { FC } from 'react'
import React from 'react'
import { Layout } from 'vtex.styleguide'

const iframeWidth = '100%'

const headerHeigth = Math.round((window.outerHeight - window.innerHeight) / 3)
const iframeHeight = window.innerHeight - headerHeigth

const url = 'https://vtex.com/ar-es/'

const Iframe: FC = () => {
  return (
    <Layout fullWidth>
      <div>
        <iframe
          src={url}
          frameBorder="0"
          width={iframeWidth}
          height={iframeHeight}
        ></iframe>
      </div>
    </Layout>
  )
}

export default Iframe
