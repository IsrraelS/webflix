import './Movies.Rented.scss';
import React, { useEffect, useState } from 'react';
import SingleRent from '../SingleRent/SingleRent.js';
import { useSelector } from 'react-redux';
import ApiConsumer from '../../util/ApiConsumer';

const MoviesRented = () => {
    
    let [orders, setOrders] = useState([]);
    const user = useSelector(state=> state.user);
    useEffect(() => {
        const getUserOrders = async () => {
            let ordersArray = [];
            if (user.admin){
                ordersArray = await ApiConsumer.getAdminRent();
                setOrders(ordersArray);
                return;
            }
            ordersArray = await ApiConsumer.getUserRent(user);
            setOrders(ordersArray);
        }
        getUserOrders();
    }, []);
    
    return (
        <>
            <br/><br/><br/>
            {orders.map((order, index) => {
                return (
                    <>
                    {user.admin && 
                        <SingleRent
                        key = {index}
                        user = {order.user.name}
                        movie = {order.movie.title}
                        startDate = {order.rent_date}
                        endDate = {order.devolution_date}
                    />
                    }
                    {!user.admin && 
                        <SingleRent
                        key = {index}
                        user = ""
                        movie = {order.movie.title}
                        startDate = {order.rent_date}
                        endDate = {order.devolution_date}
                    />
                    }
                    
                    </>
                )
            })}            
        </>
    );
}

export default MoviesRented;