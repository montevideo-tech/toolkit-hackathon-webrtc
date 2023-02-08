<img src="https://montevideotech.dev/wp-content/uploads/2022/11/sticker-summer-camp-03-1536x336.png" width="200px">

# Toolkit - WebRTC Hackathon
The challenge is to build your own video call app to send your camera to our WebRTC stage, the objective is that all participants could join the stage, so if you could stream your camera quickly, please help other participants to tackle down the challenge.

## What am I going to learn?
With the challenge you will learn the WebRTC basis to establish a connection and send your media to a peer, some topics like:
- Get your **camera and microphone** feed from the browser.
- Connect with a **signaling server** to negotiate the WebRTC connection.
- Understand how the **ICE candidate** are negotiated and agreed.
- WebRTC topologies.
- And many other topic (by your own 😉)

## Where do I start?
Here are some starting points for your journey, feel free to dig deeper as much as you want!
- [Introduction to main concepts of WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
- [WebRTC Protocols](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC connectivity](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Connectivity)
- [Signaling and Video calling](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC Architectures](https://medium.com/securemeeting/webrtc-architecture-basics-p2p-sfu-mcu-and-hybrid-approaches-6e7d77a46a66) (we are using SFU)
- [WebRTC Glossary](https://webrtcglossary.com/)

## Our Infraestructure
The core of the WebRTC backend is a [Janus Server](https://janus.conf.meetecho.com/) using the [VideoRoom plugin](https://janus.conf.meetecho.com/docs/videoroom.html). It is in charge of the signaling server and the SFU server.

You can refer to the [VideoRoom plugin](https://janus.conf.meetecho.com/docs/videoroom.html) publisher documentation for SDP negotiation, we recommend using the [minijanus.js](https://github.com/mozilla/minijanus.js/) for connecting with the signaling. There is an example of using it in [janus.js](janus.js).

- **Stage page:** [https://stage.montevideotech.dev](https://stage.montevideotech.dev)
- **Signaling server:** `wss://webrtc.qualabs.dev/ws` with protocol `janus-protocol`
- **Room ID:** 1234
