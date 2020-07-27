import React, { Component } from 'react';

class TodoItem extends Component {

    handleItemDelete = () => {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    };
    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleItemDelete}>
                {content}
            </div>
        );
    }
}

export default TodoItem;        