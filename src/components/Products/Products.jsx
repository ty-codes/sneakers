
import data from './data';
import { useState, useRef, useEffect} from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import cart_icon from '../../images/icon-cart2.svg';
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import './Products.css';

const Products = ({ products }) => {
    const ref = useRef(null)
    // console.log(corn)
    var number = 0;

    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState("true");
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [gallery, setGallery] = useState({})

    useEffect(() => {
      
    
      console.log(gallery)
    }, [gallery])
    
    const calcPromo = (old_price, new_price) => {
        if (new_price < old_price) {
            let promo = new_price / old_price * 100;
            return (
                <p className="promo">-{promo}%</p>
            );
        } else if (new_price > old_price) {
            // console.log(document.getElementsByClassName('old-price'));

            return (
                <p className="promo empty"></p>
            );
        }
        else {
            let promo = 0;
            return <p className="promo">0%</p>;
        }
    }

    const addToCart = (key) => {
        document.getElementById('badge').innerText = '';
    };
    
    const openBox = (key) => {
        setOpen(true);console.log(key)
            console.log(products[key])
        if(isOpen) 
            
           
                return (
                    <Lightbox
                        key={key}
                        mainSrc={products[key].thumbnails[photoIndex]}
                        nextSrc={products[key].thumbnails[(photoIndex + 1) % products[key].thumbnails.length]}
                        prevSrc={products[key].thumbnails[(photoIndex + products[key].thumbnails.length - 1) % products[key].thumbnails.length]}
                        onCloseRequest={() => setOpen(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + products[key].thumbnails.length - 1) % products[key].thumbnails.length)
        
                        }
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % products[key].thumbnails.length)
        
                        }
                    />
                )
            
        else {
            console.log('close')
        }
    }
    
    let setBox = () => {

    }

    // if(isOpen) {
    //     return (
    //         (
    //             <Lightbox
    //                 key={key}
    //                 mainSrc={product.thumbnails[photoIndex]}
    //                 nextSrc={product.thumbnails[(photoIndex + 1) % product.thumbnails.length]}
    //                 prevSrc={product.thumbnails[(photoIndex + product.thumbnails.length - 1) % product.thumbnails.length]}
    //                 onCloseRequest={() => setOpen(false)}
    //                 onMovePrevRequest={() => setPhotoIndex((photoIndex + product.thumbnails.length - 1) % product.thumbnails.length)
    
    //                 }
    //                 onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % product.thumbnails.length)
    
    //                 }
    //             />
    //         )
    //     )
    // };


    return (
        <div className='card_list'>
            {
                data.map((product, key) =>
                (
                    <div className="card" key={key}>
                        <div className="image_wrapper">
                            <span id="main_img"><img className="main_img" onClick={() => openBox(key)} src={product.main_image} /></span>
                            <div className="thumbnails row">
                                {
                                    (
                                        product.thumbnails.map((thumbnail, key) => (
                                            <>
                                                <img key={key} src={thumbnail} className={(key === 0) ? 'red thumbnail hover-shadow' : 'thumbnail hover-shadow'} alt="img4" />

                                            </>

                                        ))
                                    )
                                }

                            </div>



                        </div>

                        <div className="details">
                            <h2 className="company">{product.company}</h2>
                            <h1 className="name">{product.name}</h1>
                            <p className="desc">{product.description}</p>
                            <span className="promo_wrap">
                                <p className="price">${(product.price).toFixed(2)}</p>
                                <span>{calcPromo(product.old_price, product.price)}</span>
                            </span>

                            <s className="old-price">${(product.old_price).toFixed(2)}</s>
                            <div className="footer">
                                <div className="counter">
                                    <button id="minus" disable={disabled} onClick={() => (Number(document.getElementById(`num${key}`).innerText) > 0)
                                        ? document.getElementById(`num${key}`).innerText--
                                        : setDisabled("true")}><img src={minus} alt="minus" /></button>
                                    <span className="num" id={`num${key}`} >0</span>
                                    <button id="plus" onClick={() => document.getElementById(`num${key}`).innerText++}><img src={plus} alt="plus" /></button>
                                </div>
                                <div>
                                    <button className="cart_btn" onClick={addToCart}><span><img src={cart_icon} alt="cart-icon" />Add to cart</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </div>
    );
}

export default Products;
