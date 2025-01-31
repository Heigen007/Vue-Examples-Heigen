<template>
    <div class="home">
        <div class = "title">WebRtc/Firebase Video Chat Example</div>
        <div class="MainBox">
            <h2>1. Start your Webcam</h2>
            <div class="videos">
            <span>
                <h3>Local Stream</h3>
                <video id="webcamVideo" autoplay playsinline></video>
            </span>
            <span>
                <h3>Remote Stream</h3>
                <video id="remoteVideo" autoplay playsinline></video>
            </span>


            </div>

            <button id="webcamButton">Start webcam</button>
            <h2>2. Create a new Call</h2>
            <button id="callButton" disabled>Create Call (offer)</button>

            <h2>3. Join a Call</h2>
            <p>Answer the call from a different browser window or device</p>
            
            <input id="callInput" />
            <button id="answerButton" disabled>Answer</button>

            <h2>4. Hangup</h2>

            <button id="hangupButton" disabled>Hangup</button>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/firestore';
export default {
    name: 'Home',
    mounted(){
        const firebaseConfig = {
            apiKey: "AIzaSyBGT8F7-5o_CVzKRn8iMlyxvqUgc18e8gE",
            authDomain: "webrtc-ex-db1b2.firebaseapp.com",
            projectId: "webrtc-ex-db1b2",
            storageBucket: "webrtc-ex-db1b2.appspot.com",
            messagingSenderId: "548839782401",
            appId: "1:548839782401:web:7f952cb63951321f16a800",
            measurementId: "G-YT8W6LB077"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        const firestore = firebase.firestore();

        const servers = {
            iceServers: [
                {
                urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
                },
            ],
            iceCandidatePoolSize: 10,
        };

        // Global State
        const pc = new RTCPeerConnection(servers);
        let localStream = null;
        let remoteStream = null;

        // HTML elements
        const webcamButton = document.getElementById('webcamButton');
        const webcamVideo = document.getElementById('webcamVideo');
        const callButton = document.getElementById('callButton');
        const callInput = document.getElementById('callInput');
        const answerButton = document.getElementById('answerButton');
        const remoteVideo = document.getElementById('remoteVideo');
        const hangupButton = document.getElementById('hangupButton');

        // 1. Setup media sources

        webcamButton.onclick = async () => {
            localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            remoteStream = new MediaStream();

            // Push tracks from local stream to peer connection
            localStream.getTracks().forEach((track) => {
                pc.addTrack(track, localStream);
            });

            // Pull tracks from remote stream, add to video stream
            pc.ontrack = (event) => {
                event.streams[0].getTracks().forEach((track) => {
                remoteStream.addTrack(track);
                });
            };

            webcamVideo.srcObject = localStream;
            remoteVideo.srcObject = remoteStream;

            callButton.disabled = false;
            answerButton.disabled = false;
            webcamButton.disabled = true;
        };

        // 2. Create an offer
        callButton.onclick = async () => {
            // Reference Firestore collections for signaling
            const callDoc = firestore.collection('calls').doc();
            const offerCandidates = callDoc.collection('offerCandidates');
            const answerCandidates = callDoc.collection('answerCandidates');

            callInput.value = callDoc.id;

            // Get candidates for caller, save to db
            pc.onicecandidate = (event) => {
                event.candidate && offerCandidates.add(event.candidate.toJSON());
            };

            // Create offer
            const offerDescription = await pc.createOffer();
            await pc.setLocalDescription(offerDescription);

            const offer = {
                sdp: offerDescription.sdp,
                type: offerDescription.type,
            };

            await callDoc.set({ offer });

            // Listen for remote answer
            callDoc.onSnapshot((snapshot) => {
                const data = snapshot.data();
                if (!pc.currentRemoteDescription && data?.answer) {
                const answerDescription = new RTCSessionDescription(data.answer);
                pc.setRemoteDescription(answerDescription);
                }
            });

            // When answered, add candidate to peer connection
            answerCandidates.onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const candidate = new RTCIceCandidate(change.doc.data());
                    pc.addIceCandidate(candidate);
                }
                });
            });

            hangupButton.disabled = false;
        };

        // 3. Answer the call with the unique ID
        answerButton.onclick = async () => {
            const callId = callInput.value;
            const callDoc = firestore.collection('calls').doc(callId);
            const answerCandidates = callDoc.collection('answerCandidates');
            const offerCandidates = callDoc.collection('offerCandidates');

            pc.onicecandidate = (event) => {
                event.candidate && answerCandidates.add(event.candidate.toJSON());
            };

            const callData = (await callDoc.get()).data();

            const offerDescription = callData.offer;
            await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

            const answerDescription = await pc.createAnswer();
            await pc.setLocalDescription(answerDescription);

            const answer = {
                type: answerDescription.type,
                sdp: answerDescription.sdp,
            };

            await callDoc.update({ answer });

            offerCandidates.onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                console.log(change);
                if (change.type === 'added') {
                    let data = change.doc.data();
                    pc.addIceCandidate(new RTCIceCandidate(data));
                }
                });
            });
        };

        hangupButton.onclick = () => {
            location.reload()
        }

    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.MainBox {
  font-family: 'Syne Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #36e083;
  margin: 80px 10px 0 10px;
}

video {
  width: 40vw;
  height: 30vw;
  margin: 2rem;
  background: #2c3e50;
}

.videos {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
