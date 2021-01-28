import React, {Component} from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="col-md-12 notfound">
                    <h1 style={{color:"black",fontSize:"200px"}}>404</h1>
                    <h3 style={{color:"black",fontSize:"75px"}}>Sayfa Bulunamadı</h3>
                </div>
            </div>
        );
    }
}

export default NotFound;