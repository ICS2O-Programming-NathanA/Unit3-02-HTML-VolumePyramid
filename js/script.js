// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area and perimeter of rectangle.
 */
function calcVolume () {
  // get user input
  let side_a = parseFloat(document.getElementById('side-a').value)
	let height = parseFloat(document.getElementById('height').value)


  // calculate the volume
  let volume = (1/3) * Math.pow(side_a,2) * height 

  // display the results
  document.getElementById('volume').innerHTML = "The volume is " + volume.toFixed(2) + "m<sup>3</sup>"
}