import { useState } from 'react';
import cart_icon from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';
import './Navbar.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '23%',
        width: '23.5%',
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

const Navbar = ({ noOfItems, cart, itemList, setItemList }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    console.log(cart.length)
    console.log(typeof(cart.length))

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
                                {(cart.length >= 0) 
                                ? (
                                    <div className='cart_wrap'>
                                        {
                                            cart.map((item) => (
                                                <div className='wrapp'>
                                                    <div className='item_wrap'>
                                                        <img className='cart_icon' src={item.image} />
                                                        <div>
                                                            <p className='item_name'>{item.name}</p>
                                                            <p className='item_price'>{item.noOfItems}*{item.price}</p>
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
                                        Your cart is empty
                                    </div>
                                )
                                }
                            </div>

                        </Modal>
                        <span id="badge">{noOfItems}</span></span>
                    <span><img className="avatar" src={avatar} alt="avatar" /></span>
                </ul>

            </nav>
        </>
    )
}

export default Navbar;