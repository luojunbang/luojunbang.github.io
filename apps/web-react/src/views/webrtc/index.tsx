import axios from 'axios'
import { log } from 'console'
import { useEffect, MouseEvent } from 'react'

export default function Page() {
  const pc = new RTCPeerConnection()
  const video = document.querySelector('#video')
  pc.ontrack = (event) => {
    console.log('ontrack', event)

    if (!video) return
    // @ts-ignore
    video.srcObject = event.streams[0]
  }
  const createOffer = (e: MouseEvent) => {
    pc.createOffer({
      offerToReceiveVideo: !0,
      offerToReceiveAudio: !0,
    })
      .then(async (offer) => {
        console.log(offer)
        await pc.setLocalDescription(offer)
        return offer
      })
      .then((offer) => {
        return axios.post('http://192.168.1.90:10800/rtc/stream_8', btoa(offer.sdp ?? ''), { headers: { 'content-type': 'text/plain;charset=UTF-8' } }).then((res) => {
          console.log(res)

          pc.setRemoteDescription(
            new RTCSessionDescription({
              type: 'answer',
              sdp: atob(res.data),
            }),
          )
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="h-screen">
      <div className="flex">
        <video id="video" className="w-[900px] h-[600px]" autoPlay></video>
        <button onClick={createOffer}>CALL</button>
      </div>
    </div>
  )
}
