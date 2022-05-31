import React from "react"
import Loader from "../../components/Loader"

// css
import "./HomeSkeleton.css"

const HomeSkeleton = () => {
  return(
    <section className="homeSkeleton">
      <article className="homeSkeleton__data">
        <div className="homeSkeleton__data--hero">
          <span className="skeleton"></span>
          <span className="skeleton"></span>
          <span className="skeleton"></span>
        </div>

        <div className="homeSkeleton__data--section">
          <span className="skeleton header"></span>
          <div className="skeleton container">
            <span className="skeleton"></span>
            <span className="skeleton"></span>
            <span className="skeleton"></span>
            <span className="skeleton"></span>
          </div>
        </div>

        <div className="homeSkeleton__data--section">
          <span className="skeleton header"></span>
          <div className="homeSkeleton__data--wrapper">
            <div>
              <span className="skeleton bullet"></span>
              <span className="skeleton"></span>
            </div>
            <div>
              <span className="skeleton bullet"></span>
              <span className="skeleton"></span>
            </div>
            <div>
              <span className="skeleton bullet"></span>
              <span className="skeleton"></span>
            </div>
          </div>
        </div>

      </article>

      <article className="homeSkeleton__map">
        <Loader />
        <span className="homeSkeleton__map--message">Loading map...</span>
      </article>
    </section>
  )
}

export { HomeSkeleton }
