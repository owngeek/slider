import React from"react"
class PrvBtnComponent extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.prvBtn} >prev</button>
            </div>
        )
    }
}
export default PrvBtnComponent