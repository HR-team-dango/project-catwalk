import React from 'react';
import DefaultImage from './DefaultImage.jsx';
import ProductInfo from './productInfo.jsx';
import Style from './style.jsx';
import Selections from './selections.jsx';
import Description from './description.jsx';
import Review from './Default-Review.jsx';
import Features from './Default-features.jsx';
import axios from 'axios';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainSliderIndex: 0,
      subSliderIndex: 0,
      activeIndex: 0,
      activeStyleIndex: 0,
      currentProduct: {
        id: 1,
        name: 'Camo Onesie',
        slogan: 'Blend in to your crowd',
        description:
          'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        category: 'Jackets',
        default_price: '140',
        features: [
          {
            feature: 'Buttons',
            value: 'Brass',
          },
        ],
      },
      currentProductStyles: [
        {
          style_id: 118,
          name: 'Indigo',
          original_price: '809',
          sale_price: '0',
          'default?': 1,
          photos: [
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url:
                'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            },
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url:
                'https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
            },
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              url:
                'https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
            },
          ],
          skus: {
            723: {
              quantity: 49,
              size: 'XS',
            },
            724: {
              quantity: 1,
              size: 'S',
            },
            725: {
              quantity: 31,
              size: 'M',
            },
            726: {
              quantity: 26,
              size: 'L',
            },
            727: {
              quantity: 29,
              size: 'XL',
            },
            728: {
              quantity: 38,
              size: 'XXL',
            },
          },
        },
      ],
      currentStyle: {
        style_id: 1,
        name: 'Forest Green & Black',
        original_price: '140',
        sale_price: '0',
        'default?': 1,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          },
        ],
        skus: {
          1: {
            quantity: 8,
            size: 'XS',
          },
          2: {
            quantity: 16,
            size: 'S',
          },
          3: {
            quantity: 17,
            size: 'M',
          },
          4: {
            quantity: 10,
            size: 'L',
          },
          5: {
            quantity: 15,
            size: 'XL',
          },
          6: {
            quantity: 4,
            size: 'XL',
          },
        },
      },
      currentImageSet: [
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      currentImage: '',
    };
    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.setMainIndex = this.setMainIndex.bind(this);
    this.setSubIndex = this.setSubIndex.bind(this);
    this.nextMain = this.nextMain.bind(this);
    this.prevMain = this.prevMain.bind(this);
    this.nextSub = this.nextSub.bind(this);
    this.prevSub = this.prevSub.bind(this);
    this.handleStyleActiveChange = this.handleStyleActiveChange.bind(this);
  }
  setMainIndex(num) {
    this.setState({ mainSliderIndex: num });
    this.setState({ activeIndex: num });
  }
  setSubIndex(num) {
    this.setState({ subSliderIndex: num });
  }
  fetchProduct() {
    return axios
      .get(`http://3.21.164.220/products/${this.props.current}`)
      .then((product) => {
        this.getCurrentProdcut(product.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchStyle() {
    return axios
      .get(`http://3.21.164.220/products/${this.props.current}/styles`)
      .then((styles) => {
        this.getCurrentStyle(styles.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCurrentProdcut(product) {
    this.setState({ currentProduct: product });
  }

  getCurrentStyle(styles) {
    this.setState({ currentProductStyles: styles });
    this.setState({ currentStyle: styles[0] });
    this.setState({ currentImageSet: styles[0].photos });
    this.setState({ currentImage: styles[0].photos[0].url });
  }

  handleStyleChange(style) {
    this.setState({ currentStyle: style });
    this.setState({ currentImageSet: style.photos });
    this.setState({ currentImage: style.photos[0].url });
  }

  componentWillMount() {
    this.fetchProduct();
    this.fetchStyle();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.current !== this.props.current) {
      this.fetchProduct();
      this.fetchStyle();
      this.setMainIndex(0);
      this.setSubIndex(0);
    }
  }

  nextMain() {
    this.setState({ mainSliderIndex: this.state.mainSliderIndex + 1 });
    this.setState({ activeIndex: this.state.activeIndex + 1 });
  }

  prevMain() {
    this.setState({ mainSliderIndex: this.state.mainSliderIndex - 1 });
    this.setState({ activeIndex: this.state.activeIndex - 1 });
  }

  nextSub() {
    this.setState({ subSliderIndex: this.state.subSliderIndex + 1 });
  }

  prevSub() {
    this.setState({ subSliderIndex: this.state.subSliderIndex - 1 });
  }
  handleStyleActiveChange(num) {
    this.setState({ activeStyleIndex: num });
  }
  render() {
    return (
      <div className="default-container">
        <DefaultImage
          currentImageSet={this.state.currentImageSet}
          currentImage={this.state.currentImage}
          mainSliderIndex={this.state.mainSliderIndex}
          subSliderIndex={this.state.subSliderIndex}
          setMainIndex={this.setMainIndex}
          setSubIndex={this.setSubIndex}
          prevMain={this.prevMain}
          nextMain={this.nextMain}
          prevSub={this.prevSub}
          nextSub={this.nextSub}
          activeIndex={this.state.activeIndex}
        />

        <ProductInfo
          currentProduct={this.state.currentProduct}
          currentProductStyles={this.state.currentProductStyles}
          currentStyle={this.state.currentStyle}
          productId={this.props.current}
          handleStyleChange={this.handleStyleChange}
          mainSliderIndex={this.state.mainSliderIndex}
          subSliderIndex={this.state.subSliderIndex}
          setMainIndex={this.setMainIndex}
          setSubIndex={this.setSubIndex}
          activeStyleIndex={this.state.activeStyleIndex}
          handleStyleActiveChange={this.handleStyleActiveChange}
        />

        <Description
          currentProduct={this.state.currentProduct}
          currentProductStyles={this.state.currentProductStyles}
        />

        <Features currentProduct={this.state.currentProduct} />
      </div>
    );
  }
}

export default Detail;
