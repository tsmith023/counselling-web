import React from 'react'
import PropTypes from 'prop-types'


const Section = ({ paras }) => {
  return (
    <section className="font-lato p-2">
      {paras.map((para, idx) => <div key={idx} className="leading-8 py-4 text-lg sm:py-1.5">{para}</div>)}
    </section>
  )
}

export default Section