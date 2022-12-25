import './App.css';
import Board from './components/Boards.jsx';
import Particles from "react-tsparticles";

function App() {
  return (
    <>
      <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        particles: {
          number: {
            value: 100,
            limit: 300,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff",
            opacity:{
              animation:{
                count : 0,
                enable: true,
                speed: 1,
                decay:0,
                sync:false,
                startValue: "random",
                minimumValue:0.1
              }
            }
          },
          shape: {
            options:{
              character:{
                value:{
                0: 'X',
                1: 'O'
                },
                font: 'Verdana',
                weight: 400,
                fill:true
              },
              char:{
                value:{
                0: 'X',
                1: 'O'
                },
                font: 'Verdana',
                weight: 400,
                fill:true
              }
            },
            type: "char",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            // image: {
            //   src: "images/github.svg",
            //   width: 100,
            //   height: 100
            // }
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false
            }
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 10,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            onDiv:{
            type:"circle"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 100,
              duration: 2,
              opacity: 1,
              speed: 2
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        backgroundMask: {
          enable: true,
          cover: {
            color: {
              value: {
                r: 0,
                g: 0,
                b: 0
              }
            }
          }
        },
        retina_detect: true,
        fps_limit: 60,
        background: {
          image: "url('https://particles.js.org/images/background3.jpg')"
        }
      }}
    />
    <div className='absolute inset-x-0 w-3/4 md:w-2/5 mx-auto -mt-1 rounded-lg rounded-t-none'>
      <Board />
    </div>
    </>
  );
}

export default App;
