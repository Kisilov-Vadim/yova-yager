import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import './WorksCard.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Warp from 'warpjs';

const WorksCard = ({image, backgroundPici, title, location, area}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); 

  let animIdPici, svgPici, warpPici, animatePici, timeoutPici; 
  let offsetPici = 0
  let animSpeed = 0; 

  useEffect(() => {
    window.addEventListener('resize', resize);
    
    if (backgroundPici && screenWidth > 800) {
      svgPici = document.getElementById('backgroundPici');
      warpPici = new Warp(svgPici)
      warpPici.interpolate(10)
      warpPici.transform(([ x, y ]) => [ x, y, y ])
      animatePici = () => {
        timeoutPici = setTimeout(() => {
          warpPici.transform(([ x, y, oy ]) => [ x , oy + animSpeed * 8 * Math.sin(oy / 32 + offsetPici), oy ])
          animIdPici = requestAnimationFrame(animatePici)
          offsetPici -= 0.3;
        }, 1000 / 60);
      }
    }

    return () => {
      window.removeEventListener('resize', resize); 
      clearTimeout(timeoutPici)
      cancelAnimationFrame(animIdPici); 
      animIdPici = null;
    }
  })

  const resize = () => {
    setScreenWidth(window.innerWidth);
  }

  const startAnimate = () => {
    if (!animIdPici && backgroundPici) {
      animSpeed = 0.2; 
      animatePici();

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null
        animSpeed = 0.3
        animatePici()
      }, 100)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null
        animSpeed = 0.4
        animatePici()
      }, 200)
  
      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null
        animSpeed = 0.5
        animatePici()
      }, 300)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null
        animSpeed = 0.6
        animatePici()
      }, 400)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null
        animSpeed = 0.7
        animatePici()
      }, 500)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null
        animSpeed = 0.8
        animatePici()
      }, 600)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null
        animSpeed = 0.9
        animatePici()
      }, 700)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null
        animSpeed = 1
        animatePici()
      }, 800)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null
        animSpeed = 1.1
        animatePici()
      }, 900)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null
        animSpeed = 1.2
        animatePici()
      }, 1000)
    } else {
      return
    }
  }

  const stopAnimate = () => {
    setTimeout(() => {
      clearTimeout(timeoutPici)
      cancelAnimationFrame(animIdPici); 
      animIdPici = null;
      animSpeed = 1.1; 
      animatePici();

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null;
        animSpeed = 1
        animatePici()
      }, 100)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null;
        animSpeed = 0.9
        animatePici()
      }, 200)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null;
        animSpeed = 0.8
        animatePici()
      }, 300)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null;
        animSpeed = 0.7
        animatePici()
      }, 400)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null;
        animSpeed = 0.6
        animatePici()
      }, 500)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null;
        animSpeed = 0.5
        animatePici()
      }, 600)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null;
        animSpeed = 0.4
        animatePici()
      }, 700)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null;
        animSpeed = 0.3
        animatePici()
      }, 800)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null;
        animSpeed = 0.2
        animatePici()
      }, 900)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null;
        animSpeed = 0.1
        animatePici()
      }, 1000)

      setTimeout(() => {
        clearTimeout(timeoutPici)
        cancelAnimationFrame(animIdPici); 
        animIdPici = null;
        animSpeed = 0
      }, 1100) 
    }, 1000)
  }

  if (screenWidth > 800) {

    return ( 
      <Fade bottom duration={1700} delay={100}>
        <div className="card" onMouseOver={backgroundPici ? startAnimate : null} onMouseLeave={backgroundPici ? stopAnimate : null}>
          <img src={image} alt={title}/>
          <Link to={`/${area}/${title}`} exact className="card__info" 
            onClick={() => window.scrollTo(0, 0)}>
            <div>
              <span>{title}</span>
              <p>{location}</p>
            </div>
          </Link>
         {
           backgroundPici === true ? 
           <div className="card__pici">
           <svg xmlns="http://www.w3.org/2000/svg" id="backgroundPici" width="1500" height="1033" viewBox="200 0 800 900">
            <g opacity="0.483212">
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="30" y="-20" width="1015" height="1033">
              <clipPath fillRule="evenodd" clipRule="evenodd" d="M0 0.549805H1015V1032.6H0V0.549805Z" fill="white" />
            </mask>
              <g mask="url(#mask0)">
                <clipPath  fillRule="evenodd" clipRule="evenodd" d="M281.624 118.983C269.267 129.684 256.5 140.76 243.924 151.011C219.626 170.818 191.159 188.832 163.626 206.239C102.393 245.021 39.0513 285.105 21.0853 346.161C7.61588 391.936 -3.88157 470.14 4.27241 552.339C10.5158 615.269 30.6995 703.022 91.4756 763.744C148.751 820.956 198.412 831.984 261.276 845.929C318.579 858.654 383.511 873.076 473.334 925.524C593.194 995.542 704.225 1031.05 803.356 1031.05C843.689 1031.05 883.087 1025.19 920.418 1013.64C1013.44 984.848 1012.77 834.233 1012.25 713.205C1012.13 686.664 1012.02 661.596 1012.88 639.288C1017.72 513.236 990.808 437.302 964.77 363.848C943.897 304.966 891.555 265.428 830.963 219.632C812.902 206.001 794.233 191.892 775.646 176.652C752.187 157.452 731.478 134.394 711.451 112.113C661.149 56.1214 613.651 3.23766 524.223 2.10624C523.07 2.09942 521.91 2.09942 520.764 2.09942C416.495 2.09942 347.94 61.5195 281.624 118.983ZM472.431 926.899C382.918 874.626 318.178 860.239 261.049 847.556C197.932 833.551 148.079 822.469 90.4513 764.91C29.319 703.85 9.01884 615.693 2.76582 552.515C-4.17592 482.511 2.13165 405.225 19.636 345.746C37.7882 284.052 101.382 243.809 162.876 204.894C190.343 187.49 218.737 169.514 242.924 149.801C255.485 139.563 268.229 128.514 280.558 117.813C347.084 60.1657 415.874 0.549805 520.771 0.549805C521.93 0.549805 523.089 0.549805 524.248 0.57024C614.43 1.70779 664.392 57.332 712.712 111.124C732.691 133.35 753.339 156.347 776.667 175.447C795.215 190.637 813.865 204.73 831.887 218.34C892.685 264.292 945.192 303.97 966.242 363.34C992.318 436.907 1019.27 512.959 1014.43 639.289C1013.57 661.542 1013.67 686.575 1013.79 713.093C1014.33 834.648 1014.98 985.949 920.725 1015.12C883.234 1026.72 843.677 1032.6 803.179 1032.6C703.779 1032.6 592.507 997.039 472.431 926.899Z" fill="#B2B2B2"/>
              </g>
                <path fillRule="evenodd" clipRule="evenodd" d="M327.433 158.88C316.279 168.542 304.744 178.545 293.372 187.805C271.42 205.718 245.693 221.994 220.82 237.759C165.49 272.774 108.256 309.002 92.0445 364.152C79.8673 405.501 69.4784 476.163 76.8366 550.454C82.4679 607.308 100.72 686.59 155.641 741.454C207.38 793.14 252.239 803.109 309.03 815.71C360.824 827.213 419.513 840.251 500.699 887.668C609.004 950.946 709.316 983.008 798.878 983.008C835.314 983.008 870.917 977.717 904.65 967.284C988.635 941.264 988.034 805.168 987.563 695.802C987.461 671.834 987.352 649.176 988.144 629.026C992.512 515.078 968.192 446.488 944.67 380.142C925.804 326.935 878.514 291.212 823.758 249.829C807.451 237.507 790.584 224.763 773.786 210.996C752.592 193.642 733.889 172.811 715.78 152.655C670.341 102.073 627.406 54.2872 546.616 53.2576C545.579 53.2508 544.548 53.2371 543.51 53.2371C449.328 53.2371 387.356 106.942 327.433 158.88ZM499.8 889.016C418.925 841.787 360.423 828.792 308.816 817.324C251.773 804.656 206.694 794.646 154.61 742.592C99.348 687.404 80.9931 607.719 75.3318 550.589C69.0566 487.333 74.7589 417.467 90.6037 363.716C107.008 307.922 164.487 271.548 220.07 236.359C244.871 220.652 270.544 204.407 292.392 186.588C303.728 177.341 315.248 167.358 326.387 157.703C386.519 105.588 448.705 51.6875 543.521 51.6875C544.558 51.6875 545.595 51.6875 546.652 51.7079C628.202 52.7369 673.363 103.032 717.05 151.659C735.092 171.747 753.747 192.51 774.809 209.777C791.568 223.487 808.416 236.23 824.697 248.522C879.639 290.048 927.092 325.918 946.135 379.607C969.701 446.066 994.065 514.787 989.693 629.02C988.916 649.115 989.011 671.745 989.12 695.677C989.591 805.576 990.191 942.351 904.944 968.756C871.052 979.236 835.297 984.558 798.703 984.558C708.879 984.558 608.306 952.408 499.8 889.016Z" fill="#B2B2B2"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M360.79 199.955C350.674 208.722 340.224 217.77 329.931 226.156C310.048 242.383 286.751 257.123 264.22 271.386C214.153 303.089 162.373 335.85 147.704 385.75C136.687 423.181 127.282 487.119 133.937 554.344C139.029 605.792 155.54 677.544 205.238 727.193C252.056 773.957 292.656 782.956 344.06 794.377C390.946 804.794 444.098 816.589 517.598 859.529C615.636 916.786 706.439 945.817 787.508 945.817C820.483 945.817 852.701 941.037 883.239 931.581C959.21 908.072 958.664 784.906 958.234 685.951C958.138 664.236 958.049 643.721 958.746 625.489C962.718 522.389 940.698 460.27 919.402 400.225C902.338 352.11 859.547 319.766 810.006 282.336C795.235 271.175 779.959 259.618 764.738 247.141C745.537 231.433 728.588 212.554 712.2 194.316C671.082 148.547 632.223 105.328 559.139 104.394C558.204 104.381 557.269 104.374 556.327 104.374C471.101 104.374 415.014 152.965 360.79 199.955ZM516.696 860.889C443.507 818.124 390.555 806.358 343.836 795.996C292.186 784.516 251.373 775.468 204.211 728.35C154.163 678.363 137.556 606.214 132.427 554.503C126.753 497.227 131.916 433.989 146.252 385.317C161.113 334.799 213.145 301.851 263.472 269.987C285.931 255.789 309.168 241.073 328.947 224.933C339.211 216.58 349.646 207.526 359.734 198.785C414.18 151.605 470.481 102.824 556.335 102.824C557.283 102.824 558.224 102.824 559.172 102.831C633.023 103.764 673.917 149.295 713.468 193.328C729.802 211.491 746.689 230.288 765.766 245.91C780.934 258.351 796.191 269.878 810.937 281.031C860.684 318.611 903.645 351.075 920.873 399.699C942.207 459.871 964.277 522.108 960.294 625.474C959.592 643.671 959.687 664.138 959.776 685.83C960.226 785.327 960.765 909.159 883.545 933.066C852.847 942.563 820.478 947.366 787.332 947.366C705.993 947.366 614.949 918.275 516.696 860.889Z" fill="#B2B2B2"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M396.88 239.815C387.988 247.544 378.782 255.546 369.726 262.961C352.214 277.266 331.711 290.275 311.875 302.848C267.809 330.803 222.23 359.727 209.318 403.714C199.628 436.731 191.342 493.133 197.209 552.448C201.7 597.827 216.227 661.112 259.952 704.901C301.164 746.138 336.889 754.092 382.134 764.154C423.414 773.33 470.212 783.74 534.932 821.648C621.224 872.163 701.16 897.779 772.516 897.779C801.53 897.779 829.863 893.549 856.737 885.227C923.555 864.495 923.071 755.866 922.69 668.595C922.601 649.419 922.533 631.321 923.146 615.222C926.635 524.336 908.121 471.952 888.524 416.484C873.506 374.046 835.825 345.511 792.188 312.473C779.187 302.629 765.756 292.465 752.374 281.475C735.475 267.613 720.552 250.955 706.12 234.862C669.931 194.471 635.745 156.337 571.448 155.525C570.617 155.512 569.779 155.512 568.947 155.512C493.966 155.512 444.605 198.373 396.88 239.815ZM534.027 823.009C469.616 785.283 423.014 774.909 381.893 765.775C336.408 755.64 300.475 747.645 258.932 706.067C214.843 661.913 200.212 598.252 195.692 552.605C190.694 502.051 195.242 446.234 207.864 403.294C220.963 358.663 266.789 329.592 311.116 301.476C330.887 288.921 351.325 275.964 368.74 261.739C377.761 254.35 386.952 246.383 395.823 238.667C444.31 196.564 494.336 153.003 571.485 153.978C636.537 154.789 672.565 194.99 707.395 233.855C721.767 249.906 736.623 266.469 753.405 280.258C766.755 291.191 780.167 301.36 793.13 311.175C836.96 344.356 874.82 373.017 890.009 415.965C908.793 469.109 928.209 524.053 924.71 615.21C924.091 631.262 924.172 649.338 924.254 668.477C924.635 756.281 925.119 865.569 857.051 886.698C830.03 895.068 801.531 899.328 772.352 899.328C700.723 899.328 620.544 873.646 534.027 823.009Z" fill="#B2B2B2"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M426.519 292.554C367.415 340.646 305.01 396.588 290.251 446.663C274.297 500.697 270.012 579.813 340.213 649.818C375.307 684.794 404.559 691.866 441.613 700.847C475.286 708.996 513.454 718.222 567.755 749.886C603.669 770.832 632.216 791.055 657.409 808.874C701.105 839.795 732.673 862.138 767.706 862.138C776.602 862.138 785.437 860.741 794.716 857.872C864.302 836.381 876.068 737.233 878.87 664.529C882.764 563.548 878.015 495.811 864.391 457.429C853.608 427.046 820.742 406.938 785.942 385.652C767.507 374.368 748.45 362.716 731.58 348.925C714.73 335.154 702.506 317.745 690.678 300.922C668.062 268.726 646.682 238.323 596.378 237.682C594.294 237.655 592.23 237.641 590.194 237.641C520.041 237.641 475.689 252.523 426.519 292.554ZM656.256 810.129C631.124 792.342 602.634 772.166 566.827 751.302C512.822 719.812 474.844 710.616 441.324 702.495C404.028 693.476 374.576 686.335 339.157 651.027C268.389 580.458 272.696 500.706 288.771 446.242C303.664 395.727 366.248 339.609 425.515 291.367C476.435 249.905 522.132 235.188 596.395 236.134C647.588 236.781 669.211 267.549 692.098 300.107C703.838 316.819 715.967 334.082 732.601 347.689C749.358 361.385 768.347 372.998 786.701 384.236C821.758 405.679 854.862 425.923 865.858 456.902C879.55 495.471 884.315 563.379 880.424 664.491C879.202 696.205 876.056 742.95 862.93 782.213C849.04 823.77 826.201 849.719 795.056 859.337C785.595 862.264 776.599 863.687 767.514 863.687C731.925 863.687 700.186 841.224 656.256 810.129Z" fill="#B2B2B2"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M476.171 346.054C429.583 383.997 380.379 428.135 368.751 467.656C356.189 510.285 352.824 572.69 408.111 627.887C435.748 655.472 458.8 661.055 487.997 668.135C514.565 674.576 544.681 681.866 587.543 706.887C615.875 723.441 638.402 739.396 658.28 753.46C692.715 777.876 717.593 795.504 745.175 795.504C752.172 795.504 759.12 794.416 766.423 792.138C821.199 775.196 830.457 696.999 832.657 639.626C835.729 559.925 831.996 506.456 821.267 476.164C812.779 452.238 786.873 436.378 759.461 419.6C744.91 410.677 729.875 401.482 716.558 390.587C703.247 379.678 693.594 365.927 684.255 352.645C666.434 327.243 649.588 303.263 610.023 302.753C608.374 302.739 606.767 302.725 605.166 302.725C549.879 302.725 514.932 314.477 476.171 346.054ZM657.135 754.741C637.317 740.708 614.852 724.778 586.625 708.299C544.07 683.444 514.122 676.19 487.698 669.798C458.267 662.665 435.02 657.027 407.051 629.102C351.196 573.327 354.591 510.303 367.272 467.23C379.028 427.275 428.414 382.959 475.173 344.858C515.374 312.083 551.5 300.481 610.035 301.208C650.515 301.71 667.592 326.056 685.675 351.8C694.92 364.985 704.5 378.611 717.589 389.33C730.788 400.145 745.755 409.301 760.232 418.166C787.895 435.107 814.026 451.111 822.735 475.64C833.531 506.112 837.287 559.741 834.205 639.597C833.246 664.662 830.783 701.561 820.428 732.59C809.434 765.46 791.392 786.002 766.77 793.616C759.287 795.926 752.157 797.054 744.993 797.054C716.848 797.054 691.805 779.297 657.135 754.741Z" fill="#B2B2B2"/>
              </g>
            </svg>
          </div>
          : null
         }
        </div>
      </Fade>
    );
  } else {

    return (
      <div className="card">
        <img src={image} alt='1'/>
        <Link to={`/${area}/${title}`} exact className="card__info" onClick={() => window.scrollTo(0, 0)}>
          <div>
              <span>{title}</span>
              <p>{location}</p>
          </div>
        </Link>
      </div>
    )
  }

  
}

WorksCard.protoTypes = {
  title: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  backgroundPici: PropTypes.bool, 
  area: PropTypes.string.isRequired
}

WorksCard.defaultProps = {
  backgroundPici: false, 
}

export default WorksCard;