
import React, {Commponent} from "react";
import {View, TouchableOpacity} from "react-native";
import Modal from "./Modal";
import PropTypes from "prop-types";
import styles from "./styles";

export default class ModalContact extends Modal {

    constructor(props) {
        super(props);
        this.renderPopup = this.renderPopup.bind(this);
    }


    renderBottom() {
        return null;
    }

    renderHeader(){
        return null;
    }

    renderContent(){
        return null;
    }

    renderPopup() {
        return (
            <View style={[styles.ModalContact,this.props.styleModalPopupCustom]}>
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderBottom()}
            </View>
        );
    }

    render() {
        return super.render(this.renderPopup, true);
    }
}

ModalContact.defaultProps = {
};

ModalContact.propTypes = {
    styleModalPopupCustom: PropTypes.oneOfType([PropTypes.number,PropTypes.object,PropTypes.array]),
};
