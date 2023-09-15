
import { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import {PageFlip} from 'page-flip';

export default function MyBook({}) {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    setInterval(() => {
      if(ref.current) {
        console.log(ref.current.style.width);
      }
    }, 1000);

  }, []);

  return (
    <div className="" style={{overflow : "hidden", background : "black"}}>
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
                width={842/2.5}
                height={1190/2.5}
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
                  <video src="./1-1.mp4" autoPlay loop muted></video>
                </div>
                <div className="demoPage">
                  <video src="./1-2.mp4" autoPlay loop muted></video>
                </div>
                <div className="demoPage">
                  <video src="./2-1.mp4" autoPlay loop muted></video>
                </div>
                <div className="demoPage">
                  <video src="./2-2.mp4" autoPlay loop muted></video>
                </div>
              </HTMLFlipBook>
    </div>

  );
}