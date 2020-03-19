import React from"react"


class GalleryComponent extends React.Component{
    render(){
        return(
            <div>
                <img className="img_glry" src={this.props.myn.image}/>
                

                </div>
        )
    }
}
export default GalleryComponent