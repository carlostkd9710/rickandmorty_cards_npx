import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class CardMostrar extends Component {
    render() {
        const {image, name, species} = this.props.cardd
        return(
            <dvi>
                <Card>
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {species}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </dvi>
        )
    }
}
