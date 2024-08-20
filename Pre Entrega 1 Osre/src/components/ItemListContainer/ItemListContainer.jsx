import React from 'react';

const ItemListContainer = ({ greeting }) => {
    const estilosEnLinea = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        backgroundColor: 'd0d0d0',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        margin: '10px',
        maxWidth: '90%',
        width: '100%',
        textAlign: 'center',
        boxSizing: 'border-box',
    };

    const headStyle = {
        color: '#444',
        fontSize: '2vw',
        fontFamily: "Verdana, sans-serif",
        fontWeight: 'bold',
        textShadow: '8px 2px 8px rgba(0, 0, 0, 0.1)',
        margin: 0,
    };

    return (
        <div className="item-list-container" style={estilosEnLinea}>
            <h1 style={headStyle}>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;