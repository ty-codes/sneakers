import { useState, useRef, useEffect } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import cart_icon from '../../images/icon-cart2.svg';
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import './Products.css';

const Products = ({ products, cart, setCart, setItems, cartNames, setCartNames, itemList, setItemList }) => {
    const ref = useRef(null)
    var number = 0;

    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState("true");
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [gallery, setGallery] = useState(null)


    const calcPromo = (old_price, new_price) => {
        if (new_price < old_price) {
            let promo = ((old_price-new_price)/old_price) * 100;
            return (
                <p className="promo">-{promo.toFixed(0)}%</p>
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
    // add new product to cat
    const addToCart = (key) => {
        var noOfItems = document.getElementById(`num${key}`).innerText;
        var price = document.getElementById(`${key}_price`).innerText;
        var name = document.getElementById(`${key}_name`).innerText;
        var image = document.getElementById(`${key}_image`).attributes.src.value;

        if (noOfItems > 0) {
            
            // adds name of product to names in cart if name not in cartnames already
            if (cartNames.includes(name, 0) === false) {

                setCartNames(current => [...current, name])

                // adds product details to cart
                setCart(current => [...current, {
                    id: key,
                    noOfItems: noOfItems,
                    price: price,
                    name: name,
                    image: image
                }])
                setItems(noOfItems)
                addToList(noOfItems)

            } else if (cartNames.includes(name)) {
               var myNewObj = {
                id: key,
                    noOfItems: noOfItems,
                    price: price,
                    name: name,
                    image: image
               }
            //    removes the product object and replaces it with updated product details at its index
                cart.splice(key, 1, myNewObj)
                setCart(cart)

                // updates the product quantity list
                itemList.splice(key, 1, Number(noOfItems))
                // needs to creatae a new array using a non-mutative
                // appending spread method. This allows the useEffect
                // register the change.
               itemList = [...itemList]
               setItemList(itemList)
        }
}
    };


    // opens the lightbox using the key of the product
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
                                                        <img key={key} id={key} style={{border:  gallery.thumbnails[photoIndex]===thumbnail ? '3px solid hsl(26, 100%, 55%)' : null}} src={thumbnail} className={(key === 0) ? 'first_img thumbnail hover-shadow' : 'thumbnail hover-shadow'} alt={key + '_alt'} />
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

                        <div className='details_wrap'>

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
                        
                    </div>
                )
                )
            }
        </div>
    );
}

export default Products;
