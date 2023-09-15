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
      minWidth={500}
      maxWidth={1000}
      minHeight={500}
      maxHeight={1000}
      drawShadow={false}
      flippingTime={1000}
      usePortrait={false}
      startZIndex={0}
      autoSize={false}
      maxShadowOpacity={0}
      showCover={false}
      mobileScrollSupport={true}
      clickEventForward={true}
      useMouseEvents={true}
      swipeDistance={0}
      showPageCorners={true}
      disableFlipByClick={false}
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
  );
}
