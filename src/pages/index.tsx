import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

type playtimeType = {
  [key: number]: number
}
const PLAYTIME : playtimeType = {
  1 : 23 * 1000 * 3,
  2 : 23 * 1000 * 3,
  3 : 23 * 1000 * 3,
  4 : 23 * 1000 * 3,
  5 : 23 * 1000 * 3,
  6 : 23 * 1000 * 3,
  7 : 23 * 1000 * 3,
}

export default function MyBook({}) {

  const lastTimeOfAudioPlayed = useRef<number>(new Date().getTime());

  const ref = useRef<HTMLDivElement>(null);
  const flipBookRef = useRef(null);
  const reservedTimerId = useRef<NodeJS.Timeout | null>(null);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);
  const currentPageRef = useRef<number | null>(null);

  const [isAllReady, setIsAllReady] = useState(false);

  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);
  const videoRef5 = useRef<HTMLVideoElement>(null);
  const videoRef6 = useRef<HTMLVideoElement>(null);
  const videoRef7 = useRef<HTMLVideoElement>(null);
  const videoRef8 = useRef<HTMLVideoElement>(null);
  const videoRef9 = useRef<HTMLVideoElement>(null);
  const videoRef10 = useRef<HTMLVideoElement>(null);
  const videoRef11 = useRef<HTMLVideoElement>(null);
  const videoRef12 = useRef<HTMLVideoElement>(null);
  const videoRef13 = useRef<HTMLVideoElement>(null);
  const videoRef14 = useRef<HTMLVideoElement>(null);

  const [video1Ready, setVideo1Ready] = useState(false);
  const [video2Ready, setVideo2Ready] = useState(false);
  const [video3Ready, setVideo3Ready] = useState(false);
  const [video4Ready, setVideo4Ready] = useState(false);
  const [video5Ready, setVideo5Ready] = useState(false);
  const [video6Ready, setVideo6Ready] = useState(false);
  const [video7Ready, setVideo7Ready] = useState(false);
  const [video8Ready, setVideo8Ready] = useState(false);
  const [video9Ready, setVideo9Ready] = useState(false);
  const [video10Ready, setVideo10Ready] = useState(false);
  const [video11Ready, setVideo11Ready] = useState(false);
  const [video12Ready, setVideo12Ready] = useState(false);
  const [video13Ready, setVideo13Ready] = useState(false);
  const [video14Ready, setVideo14Ready] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isFullscreen && document.fullscreenElement && window) {
        if (window.outerWidth > window.outerHeight) {
          setWidth(window.outerWidth);
          setHeight(window.outerHeight);
        } else {
          setWidth(window.outerHeight);
          setHeight(window.outerWidth);
        }
      }
    }, 500);
  }, [isFullscreen]);

  useEffect(() => {
    if (currentPage === 1) {
      // videoRef1.current?.play();
      // videoRef2.current?.play();

      if(!(video1Ready && video2Ready))  {
        alert("비디오가 준비상태가 아님")
      }

      console.log("videoRef1.current!.readyState", videoRef1.current!.readyState);
      console.log("videoRef2.current!.readyState", videoRef2.current!.readyState);      

      
      videoRef3.current!.currentTime = 0;
      videoRef4.current!.currentTime = 0;
      videoRef3.current?.pause();
      videoRef4.current?.pause();

      Promise.all([videoRef1.current!.play(), videoRef2.current!.play()])
      .then(() => {
        // 두 비디오가 준비되면 requestAnimationFrame을 사용하여 동기화
        requestAnimationFrame(() => {
          console.log('1페이지 동영상 재생 시도');
          // videoRef1.current!.
          console.log("videoRef1.current!.currentTime", videoRef1.current!.currentTime)
          console.log("videoRef2.current!.currentTime", videoRef2.current!.currentTime)
          videoRef1.current!.currentTime = 0;
          videoRef2.current!.currentTime = 0;
        });
      })
      .catch((error) => {
        console.error("Error playing videos:", error);
      });
    } else if (currentPage === 2) {

      videoRef3.current?.play();
      videoRef4.current?.play();

      videoRef1.current!.currentTime = 0;
      videoRef2.current!.currentTime = 0;
      videoRef1.current?.pause();
      videoRef2.current?.pause();

      videoRef5.current!.currentTime = 0;
      videoRef6.current!.currentTime = 0;
      videoRef5.current?.pause();
      videoRef6.current?.pause();

    } else if (currentPage === 3) {

      videoRef5.current?.play();
      videoRef6.current?.play();

      videoRef3.current!.currentTime = 0;
      videoRef4.current!.currentTime = 0;
      videoRef3.current?.pause();
      videoRef4.current?.pause();

      videoRef7.current!.currentTime = 0;
      videoRef8.current!.currentTime = 0;
      videoRef7.current?.pause();
      videoRef8.current?.pause();

    } else if (currentPage === 4) {

      videoRef7.current?.play();
      videoRef8.current?.play();

      videoRef5.current!.currentTime = 0;
      videoRef6.current!.currentTime = 0;
      videoRef5.current?.pause();
      videoRef6.current?.pause();

      videoRef9.current!.currentTime = 0;
      videoRef10.current!.currentTime = 0;
      videoRef9.current?.pause();
      videoRef10.current?.pause();

    } else if (currentPage === 5) {

      // videoRef9.current?.play();
      // videoRef10.current?.play();

      videoRef7.current!.currentTime = 0;
      videoRef8.current!.currentTime = 0;
      videoRef7.current?.pause();
      videoRef8.current?.pause();

      videoRef11.current!.currentTime = 0;
      videoRef12.current!.currentTime = 0;
      videoRef11.current?.pause();
      videoRef12.current?.pause();

      Promise.all([videoRef9.current!.play(), videoRef10.current!.play()])
      .then(() => {
        // 두 비디오가 준비되면 requestAnimationFrame을 사용하여 동기화
        requestAnimationFrame(() => {
          videoRef9.current!.currentTime = 0;
          videoRef10.current!.currentTime = 0;
        });
      })
      .catch((error) => {
        console.error("Error playing videos:", error);
      });

    } else if (currentPage === 6) {

      // videoRef11.current?.play();
      // videoRef12.current?.play();

      videoRef9.current!.currentTime = 0;
      videoRef10.current!.currentTime = 0;
      videoRef9.current?.pause();
      videoRef10.current?.pause();

      if(video11Ready && video12Ready) {

        Promise.all([videoRef11.current!.play(), videoRef12.current!.play()])
        .then(() => {
          // 두 비디오가 준비되면 requestAnimationFrame을 사용하여 동기화

          requestAnimationFrame(() => {
            console.log('6페이지 동영상 재생 시도');
            
            console.log('videoRef11.current!.currentTime', videoRef11.current!.currentTime);
            console.log('videoRef12.current!.currentTime', videoRef12.current!.currentTime);
            
            videoRef11.current!.currentTime = 0;
            videoRef12.current!.currentTime = 0;
          });
        })
        .catch((error) => {
          console.error("Error playing videos:", error);
        });
      } else {
        alert("비디오 로딩중입니다")
      }

      // videoRef13.current!.currentTime = 0;
      // videoRef14.current!.currentTime = 0;
      // videoRef13.current?.pause();
      // videoRef14.current?.pause();

    } 
    // else if (currentPage === 7) {

    //   videoRef13.current?.play();
    //   videoRef14.current?.play();

    //   videoRef11.current!.currentTime = 0;
    //   videoRef12.current!.currentTime = 0;
    //   videoRef11.current?.pause();
    //   videoRef12.current?.pause();
    // }
  }, [currentPage]);

  useEffect(() => {

    
    if (
      video1Ready && video2Ready && video3Ready && video4Ready &&
      video5Ready && video6Ready && video7Ready && video8Ready &&
      video9Ready && video10Ready && video11Ready && video12Ready 
      // && video13Ready && video14Ready
      ) {
      setIsAllReady(true);
      setcurrentPage(1);
      currentPageRef.current = 1;
    }
  }, [
    video1Ready,
    video2Ready,
    video3Ready,
    video4Ready,
    video5Ready,
    video6Ready,
    video7Ready,
    video8Ready,
    video9Ready,
    video10Ready,
    video11Ready,
    video12Ready,
    // video13Ready,
    // video14Ready,
  ]);

  const doFullscreen = () => {
    ref.current?.requestFullscreen();
    setIsFullscreen(true);
  };

  const goToMainpageAfterSomeTime = (pageThatIsPassed : number) => {
    const pageTimeThreshold = PLAYTIME[pageThatIsPassed]
    const timerId = setTimeout(() => {
        console.log('setTimeout 콜됨');

        if(currentPageRef.current === pageThatIsPassed) {
            setcurrentPage(1);
            currentPageRef.current = 1;
            (flipBookRef.current as any).pageFlip().turnToPage(0);
        }
    }, pageTimeThreshold)
    reservedTimerId.current = timerId;
  }

  return (
    <>

      {!isFullscreen && (
        <div className="flex justify-center p-8 m-4" onClick={doFullscreen}>
          <button className="">
            <h1 className="text-2xl font-extrabold bg-slate-200 ">
              {`FULL SCREEN`}
            </h1>
          </button>
        </div>
      )}
      <div className="" ref={ref}>
        {isFullscreen && (
          <div
            className="flex justify-center"
            style={{ overflow: "hidden", background: "black" }}
          >
            {width && height && (
              <HTMLFlipBook
                ref={flipBookRef}
                onFlip={(e) => {
                  const modifiedPageNumber = e.data / 2 + 1;
                  if (e.data === 0) {
                    setcurrentPage(1);
                    currentPageRef.current = 1;
                    if(reservedTimerId.current) {
                      clearTimeout(reservedTimerId.current);
                      // reservedTimerId.current = null;
                    }
                    goToMainpageAfterSomeTime(1);
                  } else {
                    setcurrentPage(modifiedPageNumber);
                    currentPageRef.current = modifiedPageNumber;
                    if(reservedTimerId.current) {
                      clearTimeout(reservedTimerId.current);
                      // reservedTimerId.current = null;
                    }                    
                    goToMainpageAfterSomeTime(modifiedPageNumber);
                  }
                }}
                onChangeState={(e) => {
                  // console.log("changeState", e);
                  // if (ref.current) {
                  //   console.log(ref.current);
                  // }
                  const currentTime = new Date().getTime()
                  
                  if (audioRef.current && currentTime > lastTimeOfAudioPlayed.current + 1000) {
                    audioRef.current.play();
                    lastTimeOfAudioPlayed.current = new Date().getTime();
                  }
                }}
                // onUpdate={(e) => console.log("update", e)}
                // onChangeOrientation={(e) => console.log("changeOrientation", e)}
                // onInit={(e) => console.log("init", e)}
                // renderOnlyPageLengthChanged={false}
                width={height * 0.7075630252100841}
                height={height}
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
                <div >
                  <video
                    preload="auto"

                    src="./1-1.mp4"
                    // src="https://raw.githubusercontent.com/coleea/next-for-flip2/main/public/1-1.mp4"
                    loop
                    autoPlay={video1Ready && video2Ready}
                    muted={!(currentPage === 1)}
                    ref={videoRef1}
                    onCanPlayThrough={() => setVideo1Ready(true)}
                  ></video>
                </div>
                <div >
                  <video
                    preload="auto"

                    src="./1-2.mp4"
                    // src="https://raw.githubusercontent.com/coleea/next-for-flip2/main/public/1-2.mp4"

                    loop
                    autoPlay={video1Ready && video2Ready}
                    muted
                    ref={videoRef2}
                    onCanPlayThrough={() => setVideo2Ready(true)}
                  ></video>
                </div>
                <div>
                  <video
                    preload="auto"

                    src="./2-1.mp4"
                    loop
                    autoPlay={false}
                    muted={!(currentPage === 2)}
                    ref={videoRef3}
                    onCanPlayThrough={() => setVideo3Ready(true)}
                  ></video>
                </div>
                <div >
                  <video
                    preload="auto"

                    src="./2-2.mp4"
                    // src="https://raw.githubusercontent.com/coleea/next-for-flip2/main/public/2-2.mp4"
                    loop
                    autoPlay={false}
                    muted
                    ref={videoRef4}
                    onCanPlayThrough={() => setVideo4Ready(true)}
                  ></video>                  
                </div>
                {/* 3 page */}
                <div>
                  <video
                    preload="auto"

                    src="./3-1.mp4"
                    // src="https://raw.githubusercontent.com/coleea/next-for-flip2/main/public/3-1.mp4"
                    loop
                    autoPlay={false}
                    muted={!(currentPage === 3)}
                    ref={videoRef5}
                    onCanPlayThrough={() => setVideo5Ready(true)}
                  ></video>
                </div>
                <div >
                  <video
                    preload="auto"

                    src="./3-2.mp4"
                    // src="https://raw.githubusercontent.com/coleea/next-for-flip2/main/public/3-2.mp4"

                    loop
                    autoPlay={false}
                    muted
                    ref={videoRef6}
                    onCanPlayThrough={() => setVideo6Ready(true)}
                  ></video>                  
                </div>
                {/* 4 page */}
                <div>
                  <video
                    preload="auto"

                    src="./4-1.mp4"
                    // src="https://raw.githubusercontent.com/coleea/next-for-flip2/main/public/4-1.mp4"

                    loop
                    autoPlay={false}
                    muted={!(currentPage === 4)}
                    ref={videoRef7}
                    onCanPlayThrough={() => setVideo7Ready(true)}
                  ></video>
                </div>
                <div >
                  <video
                    preload="auto"
                    src="./4-2.mp4"
                    // src="https://raw.githubusercontent.com/coleea/next-for-flip2/main/public/4-2.mp4"
                    loop
                    autoPlay={false}
                    muted
                    ref={videoRef8}
                    onCanPlayThrough={() => setVideo8Ready(true)}
                  ></video>                  
                </div>
                {/* 5 page */}
                <div>
                  <video
                    preload="auto"

                    src="./5-1.mp4"
                    // src="https://raw.githubusercontent.com/coleea/next-for-flip2/main/public/5-1.mp4"
                    loop
                    autoPlay={false}
                    muted={!(currentPage === 5)}
                    ref={videoRef9}
                    onCanPlayThrough={() => setVideo9Ready(true)}
                  ></video>
                </div>
                <div >
                  <video
                    preload="auto"

                    src="./5-2.mp4"
                    // src="https://raw.githubusercontent.com/coleea/next-for-flip2/main/public/5-2.mp4"
                    loop
                    autoPlay={false}
                    muted
                    ref={videoRef10}
                    onCanPlayThrough={() => setVideo10Ready(true)}
                  ></video>                  
                </div>
                {/* 6 page */}
                <div>
                  <video
                    preload="auto"

                    src="./6-1.mp4"
                    // src="https://raw.githubusercontent.com/coleea/next-for-flip2/main/public/6-1.mp4"
                    loop
                    autoPlay={false}
                    muted={!(currentPage === 6)}
                    ref={videoRef11}
                    onCanPlayThrough={() => setVideo11Ready(true)}
                  ></video>
                </div>
                <div >
                  <video
                    preload="auto"

                    src="./6-2.mp4"
                    // src="https://raw.githubusercontent.com/coleea/next-for-flip2/main/public/6-2.mp4"
                    loop
                    autoPlay={false}
                    muted
                    ref={videoRef12}
                    onCanPlayThrough={() => setVideo12Ready(true)}
                  ></video>                  
                </div>
                {/* 7 page */}
                {/* <div>
                  <video
                    src="./7-1.mp4"
                    loop
                    autoPlay={false}
                    muted={!(currentPage === 7)}
                    ref={videoRef13}
                    onCanPlayThrough={() => setVideo13Ready(true)}
                  ></video>
                </div>
                <div >
                  <video
                    src="./7-2.mp4"
                    loop
                    autoPlay={false}
                    muted
                    ref={videoRef14}
                    onCanPlayThrough={() => setVideo14Ready(true)}
                  ></video>                  
                </div>                                                                                 */}
              </HTMLFlipBook>
            )}
          </div>
        )}
        <audio controls ref={audioRef} className="hidden">
          <source src="flip.wav" type="audio/wav"></source>
          브라우저가 오디오 태그를 지원하지 않습니다.
        </audio>
      </div>
        <div className="hidden">
          <video onClick={e => e.currentTarget.play()} preload={"auto"} src="./1-1.mp4"></video>
          <video preload={"auto"} autoPlay muted src="./1-2.mp4"></video>
          <video preload={"auto"} autoPlay muted src="./2-1.mp4"></video>
          <video preload={"auto"} autoPlay muted src="./2-2.mp4"></video>
          <video preload={"auto"} autoPlay muted src="./3-1.mp4"></video>
          <video preload={"auto"} autoPlay muted src="./3-2.mp4"></video>
          <video preload={"auto"} autoPlay muted src="./4-1.mp4"></video>
          <video preload={"auto"} autoPlay muted src="./4-2.mp4"></video>
          <video preload={"auto"} autoPlay muted src="./5-1.mp4"></video>
          <video preload={"auto"} autoPlay muted src="./5-2.mp4"></video>
          <video preload={"auto"} autoPlay muted src="./6-1.mp4"></video>          
          <video preload={"auto"} autoPlay muted src="./6-2.mp4"></video>          
        </div>
      </>
  );
}