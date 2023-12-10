import React from "react";
import './common.css';
import Image from "../image/bitcoin_icon.png";

function Section_1() {

    function toggleButtons() {
        var buttonContainer = document.getElementById('buttonContainer');
    
        // Toggle the 'show' class to show/hide buttons
        buttonContainer.classList.toggle('show');
        
        // Toggle the 'hidden' class on each button
        var buttons = buttonContainer.querySelectorAll('button');
        buttons.forEach(function(button) {
          button.classList.toggle('hidden');
        });
      }

    return(
        <div class="container section_one">
        <div class="row align_items_center justify_content_space_between">
            <div class="col_md_2">
                <img src={Image} class="img_fluid bit_icon_img" alt="" />
            </div>
            <div class="col_md_8">
                <p class="heading_two">Bitcoin</p>
            </div>
            <div class="col_md_2">
                <p class="heading_third">BTC</p>
            </div>
        </div>
        <div class="row align_items_center">
            <h1 class="bit_price">3.529020 BTC</h1>
        </div>
        <div class="row align_items_center justify_content_space_between">
            <div class="col_md_6">
                <p class="bit_sell_price">$19.153 USD</p>
            </div>
            <div class="col_md_4">
                <p class="bit_perc">-2.32%</p>
            </div>
        </div>
        <i id="icon" onClick={toggleButtons} class="fa-solid fa-chevron-down"></i>
        <div class="button-container" id="buttonContainer">
            <a href="#" id="button1" class="buy_btn hidden">Buy</a>
            <a href="#" id="button2" class="sell_btn hidden">Sell</a>
          </div> 
    </div>
    )
}

export default Section_1;
