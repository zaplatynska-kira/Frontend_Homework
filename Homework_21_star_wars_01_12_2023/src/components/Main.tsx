import React from "react";
import { friends } from "../util";
import hero from '../Images/main.jpg';

const Main = () => {
  return (
    <main>
      <section className="left">
        <img src={hero} alt="hero" />
      </section>
      <section className="right">
        <h2>Dream Team</h2>
        <img src={friends[1]} alt="friend1" />
        <img src={friends[2]} alt="friend2" />
        <img src={friends[3]} alt="friend3" />
        <img src={friends[4]} alt="friend4" />
        <img src={friends[5]} alt="friend5" />
        <img src={friends[6]} alt="friend6" />
        <img className="bottomLeft" src={friends[7]} alt="friend7" />
        <img src={friends[8]} alt="friend8" />
        <img className="bottomRight" src={friends[9]} alt="friend9" />
      </section>
      <p className="farGalaxy">
        Давным-давно в далекой Галактике... Старая Республика пала. На ее руинах
        Орден ситов создал галактическую Империю, подчиняющую одну за другой
        планетные системы. Силы Альянса стремятся свергнуть Темного Императора и
        восстановить свободное правление в Галактике. Генерал Оби-Ван Кеноби
        возвращается после многолетнего уединения, чтобы снова сойтись в
        поединке с Повелителем Тьмы Дартом Вейдером. Вместе с ним на светлой
        стороне Силы – юный пилот Люк, сын Анакина Скайуокера, принцесса-сенатор
        Лейя Органа, легендарный коррелианский контрабандист Хан Соло и его друг
        вуки Чубакка.
      </p>
    </main>
  );
};

export default Main;

// rce
// import React, { Component } from 'react'

// export class Main extends Component {
//   render() {
//     return (
//       <div>Main</div>
//     )
//   }
// }

// export default Main
