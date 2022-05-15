import axios from 'axios';
import React from 'react'

class Retrieve extends React.Component{
	constructor(){
        super();
        this.state={
            studentsList:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:2005/retrieve")
            .then(res=>{
                return res.json()
            })
            .then((res)=>{
				console.log(res)
                this.setState({
					studentsList:res
				})
            })
    }
	handleDelete=(id)=>{
		axios.delete(`http://localhost:2005/delete/${id}`)
		.then(res=>{alert(res.data)})
		.catch(err=>{alert(err)})
		//window.location.reload(false);
	}
	render(){
		return(
			<React.Fragment>
				<h1>Students List</h1>
				{
					this.state.studentsList.map((std)=>(
						<div className='list' key={std.id}>
							<p>{std.name}</p>
							<p>{std.age}</p>
							<p>{std.gender}</p>
							<p>{std.address}</p>
							<p>{std.mobile_number}</p>
							<Delete onClick={this.handleDelete} id={std.id}/>
						</div>
					))
				}
			</React.Fragment>
		)
	}
}
function Delete(props){
	return(
		<button onClick={()=>{props.onClick(props.id)}}>Delete</button>
	)
}


export default Retrieve