import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Home.module.css';
import shirt from './shirt.jpg';
import pant from './pant.jpg';
import saree from './saree.jpg';
import Footer from '../../components/footer/Footer';

const Home = (props) => {
    return (
        <div className={classes.page}>
            <Navbar />
            <div className={classes.head}>
                <h1 className='text-white shadow'>Clothes brings Happiness</h1>
            </div>
            <div className='container d-flex flex-column my-3'>
                <div
                    className={`${classes.card} shadow`}
                    onClick={() => {
                        props.history.push('/products/pant');
                    }}>
                    <img src={pant} alt='pant' className='w-25' />
                    <div className='info'>
                        <h3 className='text-center'>Pants</h3>
                        <p className='text-center'>
                            There is some evidence, from figurative art, of
                            trousers being worn in the Upper Paleolithic, as
                            seen on the figurines found at the Siberian sites of
                            Mal'ta and Buret'. The oldest known trousers were
                            found at the Yanghai cemetery, extracted from
                            mummies in Turpan, Xinjiang, western China,
                            belonging to the people of the Tarim Basin; dated to
                            the period between the 13th and the 10th century BC
                            and made of wool, the trousers had straight legs and
                            wide crotches, and were likely made for horseback
                            riding.
                        </p>
                    </div>
                </div>
                <div
                    className={` ${classes.card} ${classes.shirt}  shadow`}
                    onClick={() => {
                        props.history.push('/products/shirt');
                    }}>
                    <img src={shirt} alt='shirt' className='w-25' />
                    <div className='info'>
                        <h3 className='text-center'>Shirt</h3>
                        <p className='text-center'>
                            The world's oldest preserved garment, discovered by
                            Flinders Petrie, is a "highly sophisticated" linen
                            shirt from a First Dynasty Egyptian tomb at Tarkan,
                            dated to c. 3000 BC: "the shoulders and sleeves have
                            been finely pleated to give form-fitting trimness
                            while allowing the wearer room to move. The small
                            fringe formed during weaving along one edge of the
                            cloth has been placed by the designer to decorate
                            the neck opening and side seam."
                        </p>
                    </div>
                </div>
                <div
                    className={`${classes.card} shadow`}
                    onClick={() => {
                        props.history.push('/products/saree');
                    }}>
                    <img src={saree} alt='saree' className='w-25' />
                    <div className='info'>
                        <h3 className='text-center'>Saree</h3>
                        <p className='text-center'>
                            History of Saree-like drapery is traced back to the
                            Sindh region of the Indus Valley Civilisation, which
                            flourished during 2800–1800 BCE around the
                            northwestern part of the Indian subcontinent. Cotton
                            was first cultivated and woven in Indian
                            subcontinent around 5th millennium BCE. Dyes used
                            during this period are still in use, particularly
                            indigo, lac, red madder and turmeric. Silk was woven
                            around 2450 BCE and 2000 BCE.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
