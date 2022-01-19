import React, { Component } from 'react'
import { Container } from "react-bootstrap"
import CardMostrar from './CardMostrar';

export default class Api extends Component {

    constructor(){
        super();
        this.state={
            tarjetas:[]
        }
    }

    async componentDidMount(){
        const url = 'https://rickandmortyapi.com/api/character/ ';
        const resp = await fetch(url);
        const data = await resp.json();
        const {results} = data;
        this.setState({tarjetas:results})
        console.log(results);
    }

    render() {
        return (
            <Container>
                <h1>Tarjetas de Rick & Morty</h1>
                <hr/>
                <div style={{display:'flex',flexDirection:"row",flexWrap:"wrap"}}>
                    {
                        this.state.tarjetas.map((item,index)=>(
                            <CardMostrar key={index} cardd={item}/>
                        ))
                    }
                </div>
            </Container>
        )
    }
}
