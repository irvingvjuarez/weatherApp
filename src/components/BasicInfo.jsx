import React from "react"
import "./styles/BasicInfo.css"

class BasicInfo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className="basic-info">
                <article className="basic-info__sky-data">
                    <div>
                        <span className="sky-data__logo"></span> 
                        <h3 className="sku-data__title">Cloudly</h3>
                    </div>

                    <div className="basic-info__local-time">
                        <h3>Local time: </h3>
                        <span className="local-time__date">05/08/2021</span>
                        <span className="local-time__time">10:59 am</span>
                        <img src="https://www.countryflags.io/mx/shiny/64.png" alt="country flag" />
                    </div>
                </article>
            </section>
        )
    }
}

export default BasicInfo