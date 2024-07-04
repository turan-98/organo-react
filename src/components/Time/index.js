import './Time.css';
import React from 'react';
import PropTypes from 'prop-types';

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    return(

        <section className='time' style={css}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
        </section>
    )

}
Time.propTypes ={
    nome: PropTypes.func.isRequired,
    corPrimaria: PropTypes.func.isRequired,
    corSecundaria: PropTypes.func.isRequired
}
export default Time;