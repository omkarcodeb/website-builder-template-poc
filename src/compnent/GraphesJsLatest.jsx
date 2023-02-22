import React from "react";
import grapesjs from "grapesjs";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

const GraphesJsLatest = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: "#gjs",
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      canvas: {
        styles: [
          "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
        ],
      },
      // Size of the editor
      width: "auto",
      // Disable the storage manager for the moment
      storageManager: false,
      styleManager: {
        appendTo: ".styles-container",
        sectors: [
          {
            name: "Dimension",
            open: false,
            // Use built-in properties
            buildProps: ["width", "min-height", "padding", "justify-content"],
            // Use `properties` to define/override single property
            properties: [
              {
                // Type of the input,
                // options: integer | radio | select | color | slider | file | composite | stack
                type: "integer",
                name: "The width", // Label for the property
                property: "width", // CSS property (if buildProps contains it will be extended)
                units: ["px", "%"], // Units, available only for 'integer' types
                defaults: "auto", // Default value
                min: 0, // Min value, available only for 'integer' types
              },
              {
                type: "select",
                name: "Justify content",
                property: "justify-content",
              },
            ],
          },
          {
            name: "Extra",
            open: false,
            buildProps: ["background-color", "box-shadow", "custom-prop"],
            properties: [
              {
                id: "custom-prop",
                name: "Custom Label",
                property: "font-size",
                type: "select",
                defaults: "32px",
                // List of options, available only for 'select' and 'radio'  types
                options: [
                  { value: "12px", name: "Tiny" },
                  { value: "18px", name: "Medium" },
                  { value: "32px", name: "Big" },
                ],
              },
            ],
          },
        ],
      },
      // Avoid any default panel
      panels: { defaults: [] },
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
  );
};

export default GraphesJsLatest;
