import React from "react";
import './common.css';
import image_1 from '../image/buy_bitcoin.png';
import image_2 from '../image/sell_bitcoin.png';

function Section_3() {
    return(
        <div class="sec_three">
        <div class="row align_items_center justify_content_space_around">
            <div class="coin">
                <img src={image_1}  class="img_fluid bit_icon_img" alt="" />
                <p class="head_btc">Buy BTC</p>
            </div>
            <div class="coin">
                <img src={image_2} class="img_fluid bit_icon_img" alt=""/>
                <p class="head_btc">Sell BTC</p>
            </div>
        </div>
      </div>
    )
}

export default Section_3;