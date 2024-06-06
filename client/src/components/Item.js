import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div class="pc">
            <div class="info-pc">
                <div class="pc-img"><img src={"./img/" + this.props.itemPcOpti.img}></img></div>
                <div class="pc-title">{this.props.itemPcOpti.title}</div>
                <div class="pc-sub-title">{this.props.itemPcOpti.desc}</div>
                <div class="split"></div>
                <div class="hw">
                        <div class="hw-item"><img src="img/video.png"></img>{this.props.itemPcOpti.videocard}</div>
                        <div class="hw-item"><img src="img/cpu.png"></img>{this.props.itemPcOpti.cpu}</div>
                        <div class="hw-item"><img src="img/mother.png"></img>{this.props.itemPcOpti.mb}</div>
                        <div class="hw-item"><img src="img/temp.png"></img>{this.props.itemPcOpti.temp}</div>
                        <div class="hw-item"><img src="img/rom.png"></img>{this.props.itemPcOpti.ram}</div>
                        <div class="hw-item"><img src="img/ssd.png"></img>{this.props.itemPcOpti.memory}</div>
                </div>
            </div>
            <div class="pc-btn">
                <a class="pc-button" href="#">ПОДРОБНЕЕ О МОДЕЛИ</a>
            </div>
        </div>

    )
  }
}

export default Item