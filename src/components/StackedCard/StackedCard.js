import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import photos from "../../images/iandj.jpg";

class StackedCard extends React.Component{

    constructor(){
        super()
        this.state = {
            "currentPhoto": photos
        }
    }

    render() {
        return(
            <div className="md:max-w-lg lg:max-w-xl bg-white rounded-lg overflow-y-visible shadow-md shadow mx-auto pb-8 -mt-32">
                <div className="font-bold text-3xl px-6 py-4">{this.props.title}</div>    
                <img className="w-11/12 mx-auto" src={this.state.currentPhoto} alt="Ian and Jeanette" />
            </div>
        )
    }
}

export default StackedCard