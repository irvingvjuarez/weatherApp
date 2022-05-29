import React from "react"
import { RANDOM_CITIES } from "../globals"

const ErrorView = () => {
  return(
    <section className="error-view">
      <h2 className="error-view__title">There has been an error.</h2>
      <span className="error-view__message">See the weather in some other cities</span>

      <article className="error-view__wrapper">
        {RANDOM_CITIES.map(city => (
          <div className="error-view__item" key={city}>
            {city}
          </div>
        ))}
      </article>
    </section>
  )
}

export { ErrorView }
