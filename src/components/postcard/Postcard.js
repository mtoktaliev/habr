import React from "react";
import "./postcard.css";

class Postcard extends React.Component {
    render() {
        return (
            <div className="postcard-blocks">
                <div className="postcard">
                    <div className="postcard_authors">
                        <span className="create_name">Тестов Тест</span>
                        <span className="create_date">31.07.2021 19:59</span>
                    </div>
                    <div className="postcard_img">
                        <img className="postcard__img" src="https://picsum.photos/1200/200" alt=""/>
                    </div>
                    <div className="postcard_title">
                        <a href="#">NASA переходит в облака: MCP, DAPHNE и облачные инструменты для команды
                            Perseverance</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Postcard;