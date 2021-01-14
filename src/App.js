import React from "react";
import Map from "./components/Map";
import Profile from "./components/Profile";
import Output from "./components/Output";
import Header from "./components/Header/Header";
import "./App.css";
import {withAuth} from "./components/AuthContext";


const Pages = [
  { component: Map, title: "Карта" },
  { component: Profile, title: "Профиль" },
  { component: Output, title: "Войти" },
];

class App extends React.Component {
  state = { currentPage: Output };

  navigateTo = (page) => {
    if (this.props.isLoggedIn){
      this.setState({ currentPage: page });
    }else{
      this.setState({currentPage: Output});
    }
  };

  render() {
    const Page = typeof this.state.currentPage === 'function'
    ? this.state.currentPage
    : () => this.state.currentPage;

    return (
      <>
        <Header pages={Pages} onPressed={this.navigateTo} />
        <main>
          <section>
            <Page />
          </section>
        </main>
      </>
    );
  }
}

export default withAuth(App);
