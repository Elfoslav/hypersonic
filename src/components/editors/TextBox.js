import React from 'react';
import Router from 'react-router';
import Input from 'react-bootstrap/lib/Input';

const TextBox = React.createClass({

    propTypes: {
        onChange: React.PropTypes.func.isRequired,
        name: React.PropTypes.string.isRequired
    },

    /**
     * Returns the style due to the valid state
     */
    _getValidStyle() {
        if(this.props.invalid) {
            if(this.props.invalid.value === undefined || this.props.invalid.value === null) {
                throw new Error('invalid prop should have a value property');
            }
            var invalid = this.props.invalid.value;
            if(invalid) {
                return 'error';
            }
        }
        return 'success';
    },

    /**
     * Returns the style due to the visible state
     */
    _getVisibleStyle() {
        var invisible = this.props.invisible;
        if(invisible) {
            return 'hide';
        }
        return '';
    },

    /**
     * Returns the input type for the given property type
     */
    _getInputType(type) {
        return 'text';
    },

    handleChange(event){
        console.log(event.target.value);
        let newValue = event.target.value;
        this.props.onChange({name: this.props.name, value: newValue});
    },

    render() {
        let value = this.props.rawValue ? this.props.rawValue : this.props.value;
        if(value === undefined || value === null) {
            // the value can never be null or undefined, because the Input will act as 'uncontrolled' if so, meaning that
            // it will allow whatever the user inputs
            value = '';
        }

        // metadata
        let props = {
            value: value,
            ref: 'input',
            type: this._getInputType(this.props.type),
            placeholder: this.props.placeholder,
            label: this.props.displayName,
            help: this.props.help,
            readOnly: this.props.readOnly,
            addonBefore: this.props.addonBefore,
            addonAfter: this.props.addonAfter,
            hasFeedback: this.props.hasFeedback,
            groupClassName: `group-class ${this._getVisibleStyle()}`,
            labelClassName: 'label-class',
            onChange:this.handleChange
        };

        if(props.hasFeedback) {
            props.bsStyle = this._getValidStyle()
        }

        return (
            <Input {...props } />
        );
    }
});

export default TextBox;