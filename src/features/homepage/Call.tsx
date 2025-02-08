/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function Call() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"point"});
		cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#ff0000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <Cal namespace="point"
	  calLink="pierre17/point"
	  style={{width:"100%",height:"100%",overflow:"scroll"}}
	  config={{"layout":"month_view"}}
    
	  
	/>;
  };
  