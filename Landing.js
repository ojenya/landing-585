import React, { Fragment } from "react";
import Breadcrumbs from "../Breadcrumbs";
import { routes } from "../../constants/routes";

import { observer, inject } from "mobx-react";
import './Landing.css'
class Landing extends React.Component {


  async componentDidMount() {
    this.props.BreadcrumbsStore.setTitle("");

    this.props.BreadcrumbsStore.setItems([
      {
        title: 'Лэндинг',
        link: routes.landing,
      },
    ]);
  }

  render() {


    return (

        //Сюда вставь текст
    );
  }
}

export default inject("BreadcrumbsStore")(observer(Landing));
