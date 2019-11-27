import React, { Component } from 'react'


export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state ={
            name : '',
            alamat: '',
            hobi: '',
            umur: null
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        let umur = this.state.umur
        if(!Number(umur)){
            alert('silakan isi umur anda dahulu !')
        }
    }
    
    onChangeHandler =(e) => {
        let nama = e.target.name
        let alamat = e.target.alamat
        let hobi = e.target.hobi
        let val = e.target.value

        this.setState({
            [nama] : val,
            [alamat]: val,
            [hobi]: ''
        })
    }

    render() {
        return (
            <div className="wrapperform">
                <form onSubmit= {this.onSubmitHandler}>
                    <h1>Halo{this.state.nama}</h1>
                    <input type="text" onChange={this.onChangeHandler} name="nama" className="text" />

                    <h1>Apa Hobimu{this.state.hobi}</h1>
                    <input type="text" onChange={this.onChangeHandler} name="hobi" className="text" />

                    <h1>Umur Kamu Berapa?{this.state.umur}</h1>
                    <input type="text" onChange={this.onChangeHandler} name="umur" className="text" />

                    <h1>Alamat tinggalmu{this.state.alamat}</h1>
                    <textarea onChange={this.onChangeHandler} name="alamat" className="textarea" />
                    <hr/>
                    <input type="submit" onClick={this.updateState} value="simpan data" className="button"/>
                </form>
                
            </div>
        )
    }
}
