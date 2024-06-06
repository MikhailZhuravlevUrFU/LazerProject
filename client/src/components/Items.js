import React, { Component } from 'react'
import Item from "./Item";

export class Items extends Component {
  render() {
    const { itemsPcOpti } = this.props

    if (!itemsPcOpti || !Array.isArray(itemsPcOpti)) {
        return <div>No items available</div>;
      }

    return (
        <main>
            <div class="block-optimize">
                <span class="bo-title">Оптимальные игровые компьютеры<br></br></span>
                <span class="bo-sub-title">Современные игровые компьютеры с процессорами Intel Core и 
                    видеокартами NVIDIA GeForce RTX предлагают идеальное <br></br> сочетание 
                    производительности и стоимости. Максимум эффективности без лишнего.
                </span>

                <div class="bo-btn">
                    <a class = "bo-button" href="#">Перейти</a>
                </div>
            </div>

            {this.props.itemsPcOpti
                .filter(el => el.tags.includes("optimaze")).slice(0, 6)
                .map(el => (
                <Item key={el.id} itemPcOpti={el} />
            ))}

            <div class="block-powerful">
                <span class="bp-title">Мощные игровые компьютеры<br></br></span>
                <span class="bp-sub-title">Мощные игровые компьютеры для максимальных настроек графики 
                    в играх, на базе процессоров Intel Core и видеокарт <br></br> NVIDIA GeForce RTX. 
                    Отлично подходят для киберспортивных игроков и геймеров, ценящих плавность 
                    игрового процесса с <br></br> высоким FPS на максимальных графических настройках. 
                    Выбор чемпионов.
                </span>

                <div class="bo-btn">
                    <a class = "bo-button" href="#">Перейти</a>
                </div>
            </div>

            {this.props.itemsPcOpti
                .filter(el => el.tags.includes("power")).slice(0, 6)
                .map(el => (
                <Item key={el.id} itemPcOpti={el} />
            ))}

        </main>
    )
  }
}

export default Items