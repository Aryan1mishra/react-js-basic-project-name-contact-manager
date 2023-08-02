import React from 'react'

class AddContact extends React.Component {
  state ={
    name: "",
    phone: "",
  }

   add=(e)=>{
    e.preventDefault();
    if(this.state.name ==="" || this.state.phone ===""){
      alert("All the fields are mandatory")
      return ;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"" , phone: ""})
  };
 render(){ 
return (
    <div>
        <h2 className='font-bold text-xl mt-3 px-3'>Add Contact</h2>
        <form  className='flex' onSubmit={this.add}>
            <div>
                <label className='font-semibold p-2 m-2'>Name</label>
                <input className='border-solid border-2 border-black rounded-full px-2 mx-2' type="text" name='name' placeholder='   Entre the name' value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
            </div>

            <div>
                <label className='font-semibold p-2 m-2'>Phone Number</label>
                <input className='border-solid border-2 border-black rounded-full px-2 mx-2' type="tel" maxLength="10" pattern="[0-9]{10}" name='phone'  placeholder='   Entre phone number' value={this.state.phone} onChange={(e)=>this.setState({phone: e.target.value})}/>
            </div>
            <button className='m-2 px-4 bg-gray-900 rounded-full text-white'>Add</button>
        </form>
      
    </div>
  )
}
}

export default AddContact
