import React from 'react'
import CardsColumn from "./Components/CardsColumn/CardsColumn";

class Retrospective extends React.Component {

    render() {
        const good = {
            backgroundColor: 'lightgreen'
        }
        const bad = {
            backgroundColor: 'tomato'
        }

        const action = {
            backgroundColor: 'lightblue'
        }
        return <div className='Retrospective'>
            <div className='wrapper'>
                <div className='columns'>
                    <CardsColumn title={'Good things'} colorCard={ good }/>
                    <CardsColumn title={'Bad things'} colorCard={ bad }/>
                    <CardsColumn title={'Actions items'} colorCard={ action }/>
                </div>
            </div>
        </div>
    }
}

export default Retrospective