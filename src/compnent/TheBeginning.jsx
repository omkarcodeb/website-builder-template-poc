import { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import plugin from "grapesjs-preset-newsletter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Navbar from "./Navbar";

function WebBuilder() {
  useEffect(() => {
    grapesjs.init({
      container: "#gjs",
      height: "700px",
      canvas: {
        styles: [
          "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
        ],
      },
      width: "100%",
      fromElement: true,

      plugins: [plugin],
      // storageManager: {
      //   id: "gjs-",
      //   type: "local",
      //   autosave: true,
      //   storeComponents: true,
      //   storeStyles: true,
      //   storeHtml: true,
      //   storeCss: true,
      // },
      deviceManager: {
        devices: [
          {
            id: "desktop",
            name: "Desktop",
            width: "",
          },
          {
            id: "tablet",
            name: "Tablet",
            width: "768px",
            widthMedia: "992px",
          },
          {
            id: "mobilePortrait",
            name: "Mobile portrait",
            width: "320px",
            widthMedia: "575px",
          },
        ],
      },
      pluginsOpts: {
        [plugin]: {},
      },
      panels: {
        defaults: [
          // ...
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [{
                id: 'show-layers',
                active: true,
                label: 'Layers',
                command: 'show-layers',
                // Once activated disable the possibility to turn it off
                togglable: false,
              }, {
                id: 'show-style',
                active: true,
                label: 'Styles',
                command: 'show-styles',
                togglable: false,
            }],
          }
        ]
      },
      // The Selector Manager allows to assign classes and
      // different states (eg. :hover) on components.
      // Generally, it's used in conjunction with Style Manager
      // but it's not mandatory
      selectorManager: {
        appendTo: '.styles-container'
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [{
            name: 'Dimension',
            open: false,
            // Use built-in properties
            buildProps: ['width', 'min-height', 'padding', 'justify-content'],
            // Use `properties` to define/override single property
            properties: [
              {
                // Type of the input,
                // options: integer | radio | select | color | slider | file | composite | stack
                type: 'integer',
                name: 'The width', // Label for the property
                property: 'width', // CSS property (if buildProps contains it will be extended)
                units: ['px', '%'], // Units, available only for 'integer' types
                defaults: 'auto', // Default value
                min: 0, // Min value, available only for 'integer' types
              }, 
              {
                type: 'select',
                name: 'Justify content',
                property: 'justify-content'
                
              }
            ]
          },{
            name: 'Extra',
            open: false,
            buildProps: ['background-color', 'box-shadow', 'custom-prop'],
            properties: [
              {
                id: 'custom-prop',
                name: 'Custom Label',
                property: 'font-size',
                type: 'select',
                defaults: '32px',
                // List of options, available only for 'select' and 'radio'  types
                options: [
                  { value: '12px', name: 'Tiny' },
                  { value: '18px', name: 'Medium' },
                  { value: '32px', name: 'Big' },
                ],
             }
            ]
          }]
      },
    });
  }, []);

  return (
    <>
      <div id="gjs">
        <Navbar />
        <div className="mx-5 text-start">
          <h1>Connect with the world at MWC Barcelona</h1>
          <h5>
            Discover the future of connectivity with the global giants of the
            industry.
          </h5>
          <span className="">Fira Gran Via, Barcelona</span>
          <h5>27 February – 2 March, 2023</h5>
          <div className="d-flex">
          <button className="btn btn-danger">Register</button>
          </div>
        </div>
      </div>
      <div class="panel__right">
        <div class="layers-container"></div>
        <div class="styles-container"></div>
      </div>
    </>
    // <>

    // </>
  );
}
export default WebBuilder;
