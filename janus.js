// import {JanusPluginHandle, JanusSession} from 'minijanus'

const ws = new WebSocket('wss://webrtc.qualabs.dev/ws', 'janus-protocol');
const session = new JanusSession(ws.send.bind(ws));
const handle = new JanusPluginHandle(session);

session.on('event', e => signalingDataHandler(e));
session.on('trickle', ({candidate}) => {
    // Incoming ICE candidate from SFU, you will need to the peerConnection.
} )

ws.addEventListener('message', ev => session.receive(JSON.parse(ev.data)));
ws.addEventListener('open', _ => {
    session.create()
        .then(_ => handle.attach('janus.plugin.videoroom'))
        .then(_ => handle.sendMessage({
            request: 'join', 
            room: 1234, 
            ptype: 'publisher', 
            display: 'Name or nickname'}))
        .then(response => {
            console.log(response);
            // Start PeerConnection and negotiation.
        })
        .then(_ => { console.info('Connected to Janus'); })
        .catch(e => { console.error('Error connecting to Janus: ', e); });
});

const signalingDataHandler = (event) => {
    // Handle incomming events from Signaling Server
    if (event.jsep?.type === 'answer') {
        // SDP answer
    }

    if (event.jsep?.type === 'offer') {
        // SDP offer
    }
}
