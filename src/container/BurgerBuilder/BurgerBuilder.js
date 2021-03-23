import React, { Component } from 'react';
import { connect } from 'react-redux';

import './BurgerBuilder.css';
import Aux from '../../HOC/Auxiliary';
import Burger from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import OrderSummary from '../../component/OrderSummary/OrderSummary';
import Modal from '../../component/UI/Modal/Modal'
import axios from 'axios'
import Spinner from '../../component/UI/Spinner/Spinner'
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'
import * as actionTypes from '../../store/actions';


// const ingridients_price = {
//     salad: 0.5,
//     bacon: 0.4,
//     cheese: 0.7,
//     meat: 1.3,
// }

class BurgerBuilder extends Component {
    state = {
        orderable: false,
        purchasing: false,
        loading: false,
        error: false
    }
    // componentDidMount() {
    //     axios.get('https://react-my-burger-c888e-default-rtdb.firebaseio.com/ingridients.json')
    //         .then(response => {
    //             this.setState({ ingridients: response.data });
    //         })
    //         .catch(error => {
    //             this.setState({ error: true });
    //         });
    // }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }


    updateOrderableState(ingridients) {
        const sum = Object.keys(ingridients).map(igkey => {
            return ingridients[igkey];
        }).reduce((sum, el) => { return sum + el }, 0)

        return sum > 0;

    }


    // addIngridientHandler = (type) => {
    //     const oldCount = this.state.ingridients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngridients = {
    //         ...this.state.ingridients
    //     }
    //     updatedIngridients[type] = updatedCount;
    //     const priceAdded = ingridients_price[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAdded;
    //     this.setState({
    //         ingridients: updatedIngridients,
    //         totalPrice: newPrice
    //     })
    //     this.updateOrderableState(updatedIngridients);
    // }
    // removeIngridientHandler = (type) => {
    //     const oldCount = this.state.ingridients[type];
    //     const updatedCount = oldCount - 1;
    //     const updatedIngridients = {
    //         ...this.state.ingridients
    //     }
    //     updatedIngridients[type] = updatedCount;
    //     updatedIngridients[type] = updatedCount;
    //     const priceAdded = ingridients_price[type];
    //     const oldPrice = this.state.totalPrice;
    //     let newPrice = oldPrice - priceAdded;
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     else {
    //         this.setState({
    //             ingridients: updatedIngridients,
    //             totalPrice: newPrice
    //         })
    //     }
    //     this.updateOrderableState(updatedIngridients);

    // }

    continueOrderHandler = () => {
        // alert('You continue!');
        // this.setState({ loading: true });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Max Schwarzmüller',
        //         address: {
        //             street: 'Teststreet 1',
        //             zipCode: '41351',
        //             country: 'Germany'
        //         },
        //         email: 'test@test.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post('/orders', order)
        //     .then(response => {
        //         this.setState({ loading: false, purchasing: false });
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false, purchasing: false });
        //     });


        // const queryParams = [];
        // for (let i in this.state.ingridients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingridients[i]));
        // }
        // queryParams.push('price=' + this.state.totalPrice)
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // });
        this.props.history.push('/checkout');

    }
    cancelOrderHandler = () => {
        this.setState({
            purchasing: false
        })
    }


    render() {
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
        let orderSummary = null;

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingridients={this.props.ings} />
                    <BuildControls ingridientAdded={this.props.onIngredientAdded}
                        ingridientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        orderable={this.updateOrderableState(this.props.ings)}
                        order={this.purchaseHandler}
                        price={this.props.price}
                    />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingridients={this.props.ings}
                totalPrice={this.props.price}
                continueOrder={this.continueOrderHandler}
                cancelOrder={this.cancelOrderHandler} />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} orderCancel={this.cancelOrderHandler}>
                    {orderSummary}
                </ Modal>
                {burger}
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
        onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));