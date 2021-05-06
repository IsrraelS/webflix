import './Movies.Rented.scss';
import React, { useEffect, useState } from 'react';
import SingleRent from '../SingleRent/SingleRent.js';
import { useDispatch, useSelector } from 'react-redux';
import ApiConsumer from '../../util/ApiConsumer';
import './Movies.Rented.scss'
import { movieAction } from '../../store/actions/movieActions';
import { useHistory } from 'react-router';

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
    const dispatch = useDispatch();    
    const history = useHistory();
    const detalles = (movie) => {
        dispatch(movieAction(movie));
        history.push('/movieDetail');
    }
    
    return (
        <div className="cntRents">
            <br/><br/><br/>
            {orders.map((order, index) => {
                return (
                    <div className="boxRents">
                        {user.admin && 
                            <SingleRent
                            key = {index}
                            user = {order.user.name}
                            ruta = {order.movie.ruta}
                            title = {order.movie.title}
                            movie = {order.movie}
                            funcion={detalles} 
                            startDate = {order.rent_date}
                            endDate = {order.devolution_date}
                        />
                        }
                        {!user.admin && 
                            <SingleRent
                            key = {index}
                            user = ""
                            ruta = {order.movie.poster_path}
                            title = {order.movie.title}
                            movie = {order.movie}
                            funcion={detalles} 
                            startDate = {order.rent_date}
                            endDate = {order.devolution_date}
                        />
                        }
                    
                    </div>
                )
            })}            
        </div>
    );
}

export default MoviesRented;