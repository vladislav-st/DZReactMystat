import React, { Component, Fragment } from 'react';
import './reward-item.css';

class RewardsItem extends Component {

    state = {
        image: this.props.image,
        text: this.props.text
    }

    render() {
        const { image, text } = this.state;

        return (
                <Fragment>    
                    <div className="container">
                        <div class="row text-center">
                            <div class="col-xl-3 col-sm-6 mb-5 container">
                                <div class="bg-white rounded shadow-sm py-5 px-4"><img src={image} width="220" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                    <h5 class="mb-0">{text}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
        )
    }
}

export default RewardsItem;
