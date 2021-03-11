import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            text: props.text,
            vote: props.vote,
            addCardEnabled: true,
            edit: true,
        }

        this.toggleOn = this.toggleOn.bind(this)
        this.edit = this.edit.bind(this)

        this.onTextUpdate = this.onTextUpdate.bind(this)
        this.onSaveTextChanges = this.onSaveTextChanges.bind(this)
        this.onClickDeleteCard = this.onClickDeleteCard.bind(this)
        this.onClickLike = this.onClickLike.bind(this)
        this.onClickDislike = this.onClickDislike.bind(this)
    }

    toggleOn() {
        this.setState(state => ({
            addCardEnabled: !state.addCardEnabled
        }))
    }

    edit() {
        this.setState(state => ({
            edit: !state.edit
        }))
    }

    onTextUpdate(event) {
        this.setState(() => ({
            text: event.target.value
        }))
    }

    onSaveTextChanges() {
        this.props.onUpdate(this.state)
        this.edit()
    }

    onClickDeleteCard() {
        this.props.onDelete(this.state)
    }

    onClickLike() {
        this.setState((state) => ({
            vote: state.vote + 1
        }))
        this.props.onUpdate({...this.state, vote: this.state.vote + 1})
    }

    onClickDislike() {
        this.setState((state) => ({
            vote: state.vote - 1
        }))
        this.props.onUpdate({...this.state, vote: this.state.vote - 1})
    }

    render() {
        const {onTextUpdate, onSaveTextChanges, onClickDeleteCard, onClickLike, onClickDislike} = this

        return (
            <div className='Card'>
                <div className='card_wrapper'>

                    {this.state.edit ?
                        <div className='options'>
                            <img src="/edit.png" alt="Edit icon" className='icon' onClick={ this.edit }/>
                            <img src="/delete.png" alt="Delete icon" className="icon" onClick={ onClickDeleteCard }/>
                        </div> :
                        <div className='edit'>
                            <textarea value={ this.state.text } onChange={ onTextUpdate }/>
                            <button onClick={ onSaveTextChanges } className='save'>save</button>
                        </div>
                    }
                    <p className='text'>{ this.state.text }</p>

                    <div className='rating_area'>
                        <div className='rating'>
                            <img src="/like.png" alt="Like icon" className='icon' onClick={ onClickLike }/>
                            <p>{ this.state.vote }</p>
                            <img src="/dislike.png" alt="Dislike icon" className='icon' onClick={ onClickDislike }/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card