const homeContents = `
**Welcome! 欢迎!** 🥳

Here is my home page, where I write casual as well as technical stuff. 

As a *homo sapiens* who has lived on this planet for around 20 years, it's difficult not to have any *sentiments*.

*Email*: sh3l6or@icloud.com

*GitHub*: github.com/sh3l6orrr

*Twitter*: @sh3l6or
`


const HelloVueApp = {
  data() {
    return {
      contents: homeContents
    }
  }
}

Vue.createApp(HelloVueApp).mount('#home')