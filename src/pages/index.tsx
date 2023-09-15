import HTMLFlipBook from "react-pageflip";

export default function MyBook(props: any) {
  return (
    <HTMLFlipBook
      width={500}
      height={1000}
      className={""}
      style={{}}
      startPage={0}
      size={"fixed"}
      minWidth={0}
      maxWidth={0}
      minHeight={0}
      maxHeight={0}
      drawShadow={false}
      flippingTime={0}
      usePortrait={false}
      startZIndex={0}
      autoSize={true}
      maxShadowOpacity={0}
      showCover={false}
      mobileScrollSupport={false}
      clickEventForward={false}
      useMouseEvents={false}
      swipeDistance={0}
      showPageCorners={false}
      disableFlipByClick={false}
    >
      <div className="demoPage">
        <video src="./1-1.mp4" autoPlay loop muted={true}></video>
      </div>
      <div className="demoPage">
        <video src="./1-2.mp4" autoPlay loop muted={false}></video>
      </div>
      <div className="demoPage">
        <video src="./2-1.mp4" autoPlay loop muted></video>
      </div>
      <div className="demoPage">
        <video src="./2-2.mp4" autoPlay loop muted></video>
      </div>
    </HTMLFlipBook>
  );
}
