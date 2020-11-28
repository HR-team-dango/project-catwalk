import React from 'react';
import axios from 'axios';
import Stars from '../ratings-reviews/Stars.jsx';

class OutfitProd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    displayPrice() {
        if(this.state.item.results[0].sale_price === '0') {
            return (
                <p className='cardText RelatedNOutfit-outPrice'>${this.state.price}</p>
            )
        } else {
            return (
                <div>
                    <p className='cardText' style={{color: 'red'}}>${this.state.item.results[0].sale_price}<strike className='cardText' style={{color: 'black'}}>${this.state.price}</strike></p>
                </div>
            )
        }
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.focus !== this.props.focus) {
            this.getInfo()
        }
    }

    componentDidMount() {
        this.getInfo()
    }
    
    getInfo () {
        axios.get(`http://3.21.164.220/products/${this.props.focus}/styles`)
        .then((response) => {
            this.setState({
                item: response.data,
            })
            axios.get(`http://3.21.164.220/products/${response.data.product_id}`)
            .then((response) => {
                if (this.state.item.results[0].photos[0].thumbnail_url === null) {
                    this.state.item.results[0].photos[0].thumbnail_url = 'https://www.moorefieldrealestate.com/assets/images/image-not-available.jpg'
                }
                this.setState({
                    item: this.state.item,
                    name: response.data.name,
                    cat: response.data.category,
                    price: response.data.default_price,
                    focusFeatures: response.data.features
                })
            })
            .then(() => {
                axios.get(`http://3.21.164.220/reviews/meta?product_id=${response.data.product_id}`)
                .then((response) => {
                    this.setState({
                        item: this.state.item,
                        name: this.state.name,
                        cat: this.state.cat,
                        price: this.state.price,
                        focusFeatures: this.state.focusFeatures,
                        rate: Stars(response.data),
                        modal: false
                    })
                })
            })
        })
        .catch((err) => {
            console.log(`there was an error fetching styles for related prod:`, this.props.focus, err)
        })
    }

    render() {
        if (this.state.item === undefined) {
            return(
                <div>
                    <span>please wait for related product to load</span>
                </div>
            )
        } else {
            return (
                <div>
                <div className='card RelatedNOutfit-outfitCard' style={{width: '18rem'}}>
                    <img src={this.state.item.results[0].photos[0].thumbnail_url} className='relatedImg RelatedNOutfit-outfitImg'></img>
                    <div className='container'></div>
                        <h6 className='cardText RelatedNOutfit-outfitTxt'>{this.state.cat}</h6>
                        <h5 className='outfitName RelatedNOutfit-outName'><h4 className='starBut RelatedNOutfit-outfitRemove' onClick={() => {this.props.removeFromOutfit(this.props.focus)}}>X</h4><b className='RelatedNOutfit-outTitle'>{this.state.name}</b></h5>
                        {this.displayPrice()}
                        <p className='cardText RelatedNOutfit-outfitTxt'>{this.state.rate}</p>
                </div>
                </div>
            )
        }
    }
}




export default OutfitProd;