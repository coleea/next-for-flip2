
import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import {PageFlip} from 'page-flip';

export default function MyBook({}) {

  const ref = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);

  const [video1Ready, setVideo1Ready] = useState(false);
  const [video2Ready, setVideo2Ready] = useState(false);
  const [video3Ready, setVideo3Ready] = useState(false);
  const [video4Ready, setVideo4Ready] = useState(false);

  useEffect(() => {
    if(isFullscreen && window) {
      setWidth(window.outerWidth)
      setHeight(window.outerHeight)
      const widthRatio = window.innerWidth / 842
      // 1190
    }
    if(ref.current) {
      // ref.current.requestFullscreen()
      // Failed to execute 'requestFullscreen' on 'Element': API can only be initiated by a user gesture.
    }
  }, [isFullscreen]);

  useEffect(() => {
    if(video1Ready && video2Ready) {
      videoRef1.current?.play()
      videoRef2.current?.play()
    }
  }, [video1Ready, video2Ready]);
 
  useEffect(() => {
    if(video3Ready && video4Ready) {
      videoRef3.current?.play()
      videoRef4.current?.play()
    }
  }, [video3Ready, video4Ready]);

  const doFullscreen = () => {
    ref.current?.requestFullscreen()
    setIsFullscreen(true)
  }

  return (
    <>
            {!isFullscreen && <div className="flex justify-center p-8 m-4" onClick={doFullscreen}>
              <button className="">
                <h1 className="text-2xl font-extrabold bg-slate-200 ">
                  FULL SCREEN
                </h1>
              </button>
            </div>}
        {isFullscreen &&
        
          <div ref={ref} className="flex justify-center" style={{overflow : "hidden", background : "black"}}>      
              {width && height&& (
                <HTMLFlipBook
                    onFlip={(e) => console.log("flip", e)}
                    onUpdate={(e) => console.log("update", e)}
                    onChangeState={(e) => {
                      console.log("changeState", e)
                      if(ref.current) {
                        console.log(ref.current);
                      }          
                    }}
                    onChangeOrientation={(e) => console.log("changeOrientation", e)}
                    onInit={(e) => console.log("init", e)}
                    // renderOnlyPageLengthChanged={false}
                    width={height * 0.7075630252100841}
                    height={height}
                    // width={842/1.5}
                    // height={1190/1.5}
                    className={""}
                    style={{}}
                    startPage={0}
                    size={"fixed"}
                    minWidth={0}
                    minHeight={0}
                    maxWidth={0}
                    maxHeight={0}
                    drawShadow={false}
                    flippingTime={1000}
                    usePortrait={false}
                    startZIndex={0}
                    autoSize={false}
                    maxShadowOpacity={0}
                    mobileScrollSupport={false}
                    clickEventForward={true} // Set the forward event of clicking on child elements (buttons, links)
                    useMouseEvents={true} // Using mouse and touch events to page flipping
                    swipeDistance={0}
                    showPageCorners={true} // if this value is true, fold the corners of the book when the mouse pointer is over them.
                    disableFlipByClick={true} // if this value is true, flipping by clicking on the whole book will be locked. Only on corners
                    showCover={false}
                  >
                    <div className="demoPage">
                      <video src="./1-1.mp4" loop autoPlay={video1Ready && video2Ready} muted ref={videoRef1}
                      onCanPlayThrough={() => setVideo1Ready(true)}
                      ></video>
                    </div>
                    <div className="demoPage">
                      <video src="./1-2.mp4"  loop autoPlay={video1Ready && video2Ready} muted ref={videoRef2}
                      onCanPlayThrough={() => setVideo2Ready(true)}
                      ></video>
                    </div>
                    <div className="demoPage">
                      <video src="./2-1.mp4"  loop autoPlay={video3Ready && video4Ready} muted ref={videoRef3}
                      onCanPlayThrough={() => setVideo3Ready(true)}
                      
                      ></video>
                    </div>
                    <div className="demoPage">
                      <video src="./2-2.mp4"  loop autoPlay={video3Ready && video4Ready} muted ref={videoRef4}
                      onCanPlayThrough={() => setVideo4Ready(true)}
                      
                      ></video>
                    </div>
                </HTMLFlipBook>
              )}
          </div>
        }
    </>
  );
}