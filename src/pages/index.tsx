import HTMLFlipBook from "react-pageflip";

export default function MyBook(props : any) {
  return (
    <HTMLFlipBook width={500} height={1000}>
      <div className="demoPage">
        <video src="./1-1.mp4" autoPlay loop={true}></video>
      </div>
      <div className="demoPage">
        <video src="./1-2.mp4" autoPlay loop={true} muted={true}></video>
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
