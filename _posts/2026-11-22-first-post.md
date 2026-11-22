---
title: "What do background vibrations look like - building a baseline"
# To add a post image, upload it to assets/img/ and remove the # from the next line:
image: /assets/img/Vibrations%20across%20paper%20strata.png
published: true
---

Today I did a first set of experiments to test a simple hypothesis - Can the phone distinguish ordinary activity from quiet background variation? I did nine experiments with the results showing that **yes, you can**.

I used [phyphox](https://phyphox.org/) to record my iPhone's accelerometer and it took ~100 readings per second. Across the nine experiments I did, you can see the background noise and then the large signals as I step nearby. 

<div class="pair">
  <img src="/assets/img/Screenshot 2026-11-22 at 16.45.29.png" alt="the first nine experiments">
  <img src="/assets/img/Screenshot 2026-11-22 at 16.41.32.png" alt="steps create stronger signals">
</div>

**Key findings:**
1. Stepping nearby (0.5 m) the iPhone produces a large signals against the background noise.
2. When going further away (1.5 m), footsteps weren't as noticeable.
3. What I need to do next is note exactly when I step so I can identify smaller signals.

**Further thoughts**
- I've seen people use WiFi to monitor an area, I wonder if that could monitor a sudden vibration.
- Another option I've seen is where people have used invisible lasers which could always point to the floor and then measure a shift. This might be better and might look nicer too. If you had something coming out of the plug and pushing a few lasers out across the floor. I'd have to look into how complex this is.
- With a bit of experimentation done, I'm going to look into how I could practically monitor. My assumption is that a simple plug-in device with an extension touching the carpet will be enough - but this obviously won't be possible or easy. Key questions are, how small are the accelerometers in iPhone devices? Could this be placed on the floor without looking unsightly? We'd probably need to have another plug in front of it so they don't loose a plug by filling it with this device.

**Method**
- Used [phyphox app](https://phyphox.org/) on an iPhone 17
- Placed the phone about 5 mm away from the skirting board on a carpeted floor
- The bedroom is quite small on the first floor. It's right next to a 40 mph road - the room frequently shakes when a large truck goes by.
