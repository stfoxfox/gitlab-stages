import React, { useState, useEffect } from "react";

const Loader = ({message, loading}) => {
    useState({
        message: '',
        loading: false
    });

    return (
        <div className="fade">
            <div className="loader-container">
                <div className="loader"></div>
                <div>{message}</div>
            </div>
        </div>
    );
}

export default Loader;