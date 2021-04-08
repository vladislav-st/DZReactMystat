import React, { Fragment } from 'react';
import RewardsItem from '../../reward-item/reward-item'

const RewardList = ({ contacts }) => {

    var contactsTemplate;

    if (contacts !== null) {
        contactsTemplate = contacts.map(item => {
            return (
                <RewardsItem
                    image={item.image}
                    text={item.text}
                ></RewardsItem>
            );
        })
    }

    return(
        <Fragment>
            {contactsTemplate}
        </Fragment>
    )
}

export default RewardList;