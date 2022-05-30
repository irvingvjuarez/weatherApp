import React from "react"
import { RANDOM_CITIES } from "../globals"

// css
import "./styles/ErrorView.css";

const ErrorView = () => {
  return(
    <section className="error-view">
      <h2 className="error-view__title">There has been an error.</h2>
      <span className="error-view__message">See the weather in some other cities</span>

      <article className="error-view__wrapper">
        {RANDOM_CITIES.map(city => (
          <div className="error-view__item" key={city.id}>
            <img src={city.image} alt={city.name} title={city.name} />
            <span className="error-view__item--text">
              {city.name}
            </span>
          </div>
        ))}
      </article>
    </section>
  )
}

export { ErrorView }
