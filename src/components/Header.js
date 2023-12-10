import React from "react";
import './common.css';

function Header() {

    function toggleClass() {
        var element = document.getElementById("dropdown_id");
        element.classList.toggle("dropdown_cont_active");
        var element2 = document.getElementById("click_icon");
        element2.classList.toggle("overlay");
        
      }

    return(
        <div class="container header_section">
        <div class="row align_items_center justify_content_space_around">
            <div class="col_md_1">
                <i class="fa-solid fa-chevron-left float_right"></i>
            </div>
            <div class="col_md_10">
                <h2 class="heading">Bitcoin Wallet</h2>
            </div>
            <div class="col_md_1">
                <i id="click_icon" onClick={toggleClass} class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>

        <div id="dropdown_id" class="dropdown_cont">
            <div class="row align_items_center justify_content_space_around">
            <div class="col_md_10">
                <p class="sub_menu">Edit</p>
            </div>
            <div class="col_md_1">
            <i class="fa-solid fa-pen-to-square"></i>
            </div>
            </div>
            <div class="row align_items_center justify_content_space_around">
            <div class="col_md_10">
                <p class="sub_menu">Courier Info</p>
            </div>
            <div class="col_md_1">
            <i class="fa-solid fa-circle-info"></i>
            </div>
            </div>
            <div class="row align_items_center justify_content_space_around">
            <div class="col_md_10">
                <p class="sub_menu">Share</p>
            </div>
            <div class="col_md_1">
            <i class="fa-solid fa-share"></i>
            </div>
            </div>
            <div class="row align_items_center justify_content_space_around">
            <div class="col_md_10">
                <p class="sub_menu">Remove</p>
            </div>
            <div class="col_md_1">
            <i class="fa-solid fa-delete-left"></i>
            </div>
            </div>
        </div>

    </div>
    )
}

export default Header;