import React from "react"

class HeaderButton extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { specificClassName, description, imgUrl, action } = this.props

        return (
            <button className={`resetButton ${specificClassName}`}>
                <img src={ imgUrl } alt={ description } onClick={ action } />
            </button>
        )
    }
}

export default HeaderButton