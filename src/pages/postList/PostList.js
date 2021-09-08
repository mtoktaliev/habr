import React from "react";
import Header from "../../components/header/Header";
import Postcard from "../../components/postcard/Postcard";
import Footer from "../../components/footer/Footer";

class PostList extends React.Component{
    render() {
        return(
            <>
                <Header/>
                <Postcard
                    createName="Тестов Тест"
                    createDate="13.02.2021 15:45"
                    title="У вас нет заданий, которые нужно сдать на следующей неделе"
                />
                <Postcard
                    createName="Тестова Теста"
                    createDate="08.12.2021 10:05"
                    title="Frontend #2 Курс по frontend разработке"
                />
                <Footer/>
            </>
        )
    }
}

export default PostList;