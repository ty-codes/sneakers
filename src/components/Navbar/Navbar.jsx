import { useState, useEffect } from 'react';
import cart_icon from '../../images/icon-cart.svg';
import delete_icon from '../../images/icon-delete.svg';
import avatar from '../../images/image-avatar.png';
import './Navbar.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '23%',
        width: '27%',
        height: '300px',
        left: '80%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const Navbar = ({ totalItems, setTotalItems, cart, itemList, setItemList, setCart }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        return;
    }, [totalItems])

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'hsl(220, 13%, 13%)';
    }

    function closeModal() {
        setIsOpen(false);
    }
    const calcTotal = (item) => {
        var total = item.noOfItems * item.price.slice(1, cart[0].price.length);
        return total.toFixed(2);
    };

    function updateQuantity(qty) {
        setTotalItems(qty)

    }
    function deleteFromCart(key, qty) {
        cart.splice(key, 1)
        setCart(cart)
        itemList.splice(key, 1)

        itemList = [...itemList]
        setItemList(itemList)
       
        let updated_qty = Number(totalItems) - Number(qty);
        updateQuantity(updated_qty);
    };

    return (
        <>
            <nav id="navbar">

                <ul className="nav-links">
                    <li>
                        <h1 className="sneakers">sneakers</h1>
                    </li>
                    <li><a className="nav-link" href="#">Collections</a></li>
                    <li><a className="nav-link" href="#">Men</a></li>
                    <li><a className="nav-link" href="#">Women</a></li>
                    <li><a className="nav-link" href="#">About</a></li>
                    <li><a className="nav-link" href="#">Contact</a></li>

                </ul>

                <ul className="right_nav">

                    <span className="cart_icon_wrap">
                        <img className="cart" onClick={openModal} src={cart_icon} alt="cart_icon" />
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2 id='cart_title' ref={(_subtitle) => (subtitle = _subtitle)}>Cart</h2>
                            <hr />
                            {/* <button onClick={closeModal}>close</button> */}
                            <div>
                                {
                                    (cart.length > 0)
                                        ? (
                                            <div className='cart_wrap'>
                                                {
                                                    cart.map((item, key) => (
                                                        <div key={key} id={`product_${key}`} className='wrapp'>


                                                            <div key={key} className='item_wrap'>
                                                                <img key={`${key}_image`} className='cart_icon' src={item.image} />
                                                                <div>
                                                                    <p key={`${key}_namme`} className='item_name' id='item_name'>{item.name}</p>
                                                                    <p key={`${key}_price`} className='item_price'>{item.noOfItems}X{item.price}
                                                                        <span key={`${key}_total`} className='total'>
                                                                            ${calcTotal(item)}
                                                                        </span>
                                                                        <img className='delete_icon' onClick={() => deleteFromCart(key, item.noOfItems)} src={delete_icon} alt='trash' />
                                                                    </p>

                                                                </div>

                                                            </div>
                                                            <button className='item_btn'>Checkout</button>

                                                        </div>


                                                    )

                                                    )
                                                }
                                            </div>
                                        )
                                        : (
                                            <div className='no_items'>
                                                <span>Your cart is empty</span>
                                            </div>
                                        )
                                }
                            </div>

                        </Modal>
                        <span id="badge" style={{display: !totalItems ? "none" : null}}>{totalItems}</span></span>
                    <span><img className="avatar" src={avatar} alt="avatar" /></span>
                </ul>

            </nav>
        </>
    )
}

export default Navbar;