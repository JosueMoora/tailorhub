import React from 'react'
import './Banner.css'
export default function Banner ({ about }) {
  return (
    <div className="py-5">
      <div className="scrolling_text border-y py-5  font-light text-lg md:text-2xl lg:text-3xl border-white">
        <div className="text">
          <span>• {about || 'QUEENS'}</span>
          <span>• {about || 'MANHATTAN'}</span>
          <span>• {about || 'BROOKLYN'}</span>
          <span>• {about || 'HOUSTON'}</span>
          <span>• {about || 'NYC'}</span>
        </div>
        <div className="text">
          <span>• {about || 'QUEENS'}</span>
          <span>• {about || 'MANHATTAN'}</span>
          <span>• {about || 'BROOKLYN'}</span>
          <span>• {about || 'HOUSTON'}</span>
          <span>• {about || 'NYC'}</span>
        </div>
        <div className="text">
          <span>• {about || 'QUEENS'}</span>
          <span>• {about || 'MANHATTAN'}</span>
          <span>• {about || 'BROOKLYN'}</span>
          <span>• {about || 'HOUSTON'}</span>
          <span>• {about || 'NYC'}</span>
        </div>
      {about && (
        <div className="text">
          <span>• {about}</span>
          <span>• {about}</span>
          <span>• {about}</span>
          <span>• {about}</span>
          <span>• {about}</span>
        </div>
      )}
      </div>
    </div>
  )
}
