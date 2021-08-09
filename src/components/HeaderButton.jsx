import React from "react"

class HeaderButton extends React.Component{
    constructor(props){
        super(props)
    }

    touched = () => {
        alert("Hi")
    }

    render(){
        const { specificClassName, description, imgUrl, action } = this.props

        return (
            <button className={`resetButton ${specificClassName}`}>
                <img src={ imgUrl } alt={ description } onClick={ this.touched } />
            </button>
        )
    }
}

export default HeaderButton