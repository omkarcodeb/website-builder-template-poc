import React from "react";
import { useEffect } from "react";
import 'grapesjs/dist/css/grapes.min.css'
import grapesJS from 'grapesjs'
import grapesJSMJML from 'grapesjs-mjml'

const TheDesign = () => {
  useEffect(() => {
    grapesJS.init({
      fromElement: true,
      container: "#gjs",
      plugins: [grapesJSMJML],
      pluginsOpts: {
        [grapesJSMJML]: {
          /* ...options */
        },
      },
    });
  }, []);

  return (
    <div id="gjs">
      <mjml>
        <mj-body>
          <mj-section>
            <mj-column>
              <mj-text>My Company</mj-text>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    </div>
  );
};

export default TheDesign;
