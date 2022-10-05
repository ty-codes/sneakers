import { useState, useRef, useEffect } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import cart_icon from '../../images/icon-cart2.svg';
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import './Products.css';

const Products = ({ products, cart, setCart, setItems, itemList,setItemList }) => {
    const ref = useRef(null)
    var number = 0;

    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState("true");
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [gallery, setGallery] = useState(null)


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
    const addToList = (items) => {
        
        setItemList((current) => [...current, Number(items)])
        
    }
    const addToCart = (key) => {
        var noOfItems = document.getElementById(`num${key}`).innerText;
        var price = document.getElementById(`${key}_price`).innerText;
        var name = document.getElementById(`${key}_name`).innerText;
        var image = document.getElementById(`${key}_image`).attributes.src.value;

        if(noOfItems> 0) {
            
            setCart(current => [...current, {
                id: key,
                noOfItems: noOfItems,
                price: price,
                name: name,
                image: image
            }])
        setItems(noOfItems)
        addToList(noOfItems)
        }

        
    };



    const openBox = (key) => {
        // console.log(key)

        setGallery(products[key]);
    }






    return (
        <div className='card_list'>
            {
                products.map((product, key) =>
                (
                    <div className="card" key={key}>
                        <div className="image_wrapper">
                            <span id="main_img"><img className="main_img" id={`${key}_image`} onClick={() => { setOpen(true); openBox(key) }} src={product.main_image} /></span>
                            <div className="thumbnails row">
                                {
                                    (
                                        product.thumbnails.map((thumbnail, key) => (
                                            <>
                                                <img key={key} src={thumbnail} className={(key === 0) ? 'first_img thumbnail hover-shadow' : 'thumbnail hover-shadow'} alt="img4" />

                                            </>

                                        ))
                                    )
                                }

                            </div>



                        </div>
                        {gallery && (
                            <Lightbox
                                className="lb"
                                key={gallery.id}
                                mainSrc={gallery.thumbnails[photoIndex]}
                                nextSrc={gallery.thumbnails[(photoIndex + 1) % gallery.thumbnails.length]}
                                prevSrc={gallery.thumbnails[(photoIndex + gallery.thumbnails.length - 1) % gallery.thumbnails.length]}
                                onCloseRequest={() => setGallery(null)}
                                onMovePrevRequest={() => setPhotoIndex((photoIndex + gallery.thumbnails.length - 1) % gallery.thumbnails.length)

                                }
                                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % gallery.thumbnails.length)

                                }
                                imageCaption={
                                    <div className="thumbnails row">
                                        {
                                            (
                                                gallery.thumbnails.map((thumbnail, key) => (
                                                    <>
                                                        <img key={key} id={key} src={thumbnail} className={(key === 0) ? 'first_img thumbnail hover-shadow' : 'thumbnail hover-shadow'} alt={key + '_alt'} />
                                                    </>

                                                ))
                                            )
                                        }

                                    </div>
                                }
                                imageTitle={gallery.name}
                                enableZoom={false}
                                imagePadding={50}
                                wrapperClassName="lbox"
                            />
                        )}


                        <div className="details" >
                            <h2 className="company" id={`${key}_description`}>{product.company}</h2>
                            <h1 className="name" id={`${key}_name`}>{product.name}</h1>
                            <p className="desc">{product.description}</p>
                            <span className="promo_wrap">
                                <p className="price" id={`${key}_price`}>${(product.price).toFixed(2)}</p>
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
                                    <button className="cart_btn" onClick={() => addToCart(key)}><span><img src={cart_icon} alt="cart-icon" />Add to cart</span></button>
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
