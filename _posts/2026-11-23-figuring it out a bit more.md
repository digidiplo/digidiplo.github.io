---
title: "L"
image: /assets/img/Vibrations%20across%20paper%20strata.png
published: false
---

I know this is the wrong way round to look at it, but I've started to buy some components to make the MVP. What I'm realising is that measuring vibrations may not be the best way to tackle this problem. 

It seems that Raspberry Pi already have a component that can detect falls, called a [Seeed MR60FDA2 sensor](https://thepihut.com/products/mmwave-human-fall-detection-sensor-mr60fda2-60ghz). From what I understand, this uses radar that can detect rapid changes in movement within a 3x3x3 m space. Note: a typical room is 5x4, so already this solution wouldn't be fit for the requirement.

!["Seeed MR60FDA2 sensor"](/assets/image/23440819.jpeg)

It contains
- a radar module that runs Seeed's fall detection software - the big challenge here is that this software [isn't open source](https://wiki.seeedstudio.com/getting_started_with_mr60fda2_mmwave_kit/). 
- a ESP32C6 computer that reads the results and sends them over WiFi
- light sensor
- LED which can change colour

**Further thoughts**
- I'm not going to abandon the vibration idea - I think there's something there, and means it can be discreet too, since it will be connected to the floor and not creating another ugly device on the ceiling. Maybe the vibrations will be better at picking up falls in a larger space (bigger than 3x3x3)? 
- I do wonder if both approaches would work - doing some multi-sensor fusion that looks at the radar and the vibrations to double-check if a fall has occurred before raising an alarm to the care provider or family member.
- I think I'll need to test both approaches before I try to start building my own capability. Maybe this tool is good enough for an MVP, we just need to harness it. 
