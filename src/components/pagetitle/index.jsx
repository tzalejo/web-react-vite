import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';

PageTitle.propTypes = {
    title: PropTypes.string,
};

function PageTitle(props) {
    const { title, section } = props;

    return (
        <section className="page-title">
            <div className="container text-center">
                <h3 className="heading">{title}</h3>
                <p className="desc">{section}</p>
            </div>
        </section>
    );
}

export default PageTitle;
